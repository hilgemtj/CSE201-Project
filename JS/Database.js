/***
	Database class
	
***/

// For loading JSON data syncronously
function loadJSON(callback) {

	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', '../Data/appData.json', false); // Replace 'my_data' with the path to your file
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
			//console.log(`${db.app_id}`);
			database[`${db.app_id}`] = new App(`${db.app_id}`, `${db.url}`,
				`${db.icon}`, `${db.title}`,
				`${db.developer}`, `${db.developer_id}`,
				`${db.description}`, `${db.price}`,
				`${db.free}`, `${db.store}`);
		});
		return database;
	}

}

// Helper function **Actually does something idk why though**
function db(something) {
	return something;
}