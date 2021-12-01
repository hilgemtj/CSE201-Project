/***
	Database class
	
***/

// For loading JSON data syncronously
function loadJSON(callback) {

	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', '../Data/userData.json', false); // Replace 'my_data' with the path to your file
	xobj.onreadystatechange = function() {
		if (xobj.readyState == 4 && xobj.status == "200") {
			// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
}
var actual_JSON = {};

// Helper function for loading JSON
function init() {
	loadJSON(function(response) {
		// Parse JSON string into object
		actual_JSON = JSON.parse(response);
	});
}

// Makes the database object
function Database() {
	"use strict";

	this.database = populate();


	function populate() {
		var database = {};
		var raw = actual_JSON;
		raw.forEach(db => {
			var line = db;
			
			database[`${db.username}`] = new User(`${db.username}`, `${db.email}`,
				`${db.password}`);
		});
		return database;
	}

}

// Helper function **Actually does something idk why though**
function db(something) {
	return something;
}

// handles inputting user into database

$(document).ready( function() {

	$("#createButton").click( function() {
		console.log("clicked");
		var username = $("#username").val();
		var email = $("#email").val();
		var password = $("#password").val();
		$("#card").hide();

		var userData = {
			username: username,
			email: email,
			password: password
		}

		$.ajax({
			type: 'POST',
			url: 'http://127.0.0.1:2999',
			data: JSON.stringify(userData),
			success: function (data) {
				console.log('success');
			},
			error: function (xhr, status, error) {
				console.log('Error: ' + error.message);
			}
		});
	});
});

const user = {
	username: username,
	email: email,
	password: password
};

const jsonString = JSON.stringify(user);
fs.writeFile('./userData.json', jsonString, err => {
	if (err) {
		console.log('Error writing file', err);
	} else {
		console.log('Successfully wrote file');
	}
});

loadJSON(db);
init();
var users = new Database();