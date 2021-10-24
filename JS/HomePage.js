// Loading DB
loadJSON(db);
init();
var apps = new Database();


// Making list
for (const item in apps.database) {
	//console.log(apps.database[item].title);
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

// Making list dynamically filtered by search results
const nameForm = document.querySelector('.d-flex')
nameForm.addEventListener('input', event => {
	// empties currently displayed list
	$("#listView").empty();

	// prevents search box from refreshing page
	event.preventDefault()
	// sets search term to lowercase
	const term = event.target.value.toLowerCase()

	// filters apps by search term and appends them to the list
	for (const item in apps.database) {
		if ((''+apps.database[item].title).toLowerCase().includes(term))
		{
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
	}
})

