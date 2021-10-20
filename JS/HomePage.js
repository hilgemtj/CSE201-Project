// Loading DB
loadJSON(db);
init();
var apps = new Database();


// Making list
for (const item in apps.database) {
	console.log(apps.database[item].title);
	$("#listView").append(
  		'<div id="listItem" class="row">' +
			'<div class="col-md-2">' +
				'<img id="img1" src="' + apps.database[item].icon + '" alt="App" width="75" height="75">' +
			'</div>' +
  			'<div class="col-md-10">' +
				'<a id="link" href="./app.html?app_id=' + apps.database[item].app_id + '" target="_blank">' + apps.database[item].title + '</a>' +
			'</div>' +
		'</div>'
  	);
}

