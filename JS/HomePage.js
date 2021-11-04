// Loading DB
loadJSON(db);
init();
var apps = new Database();
// modified apps list after searching, filtering, etc.
var appsList = [];

// Displays initial list of apps
for (const item in apps.database) {
	$("#listView").append(
  		'<div id="listItem" class="row">' +
			'<div class="col-md-2">' +
				'<img id="img1" src="' + apps.database[item].icon + '" alt="App" width="75" height="75">' +
			'</div>' +
  			'<div class="col-md-10">' +
				'<a id="link" href="./app.html?app_id=' + apps.database[item].app_id + '" target="_blank">' + 
					apps.database[item].title + '</a>' +
			'</div>' +
		'</div>'
  	);
}

var updateList = function(event)
{
	// empties currently displayed list
	$("#listView").empty();
	appsList = [];

	// sets search term to lowercase
	const term = searchForm.value.toLowerCase();

	// filters apps by search term and appends them to the list
	for (const item in apps.database) {
		if (('' + apps.database[item].title).toLowerCase().includes(term))
		{
			appsList.push(apps.database[item]);
		}
	}

	// toggles the inGoogle filter
	if (event.type == 'click')
	{
		if (inGoogle.className == "btn btn-warning")
		{
			inGoogle.className = "btn btn-dark";
		}
		else
		{
			inGoogle.className = "btn btn-warning";
		}	
	}

	// filters by inGoogle
	if (inGoogle.className == "btn btn-warning")
	{
		var tempList = [];
		for (const item in appsList) {
			if (('' + appsList[item].store).toLowerCase().includes("google"))
			{
				tempList.push(appsList[item]);
			}
		}
		appsList = tempList;
	}

	// displays the updated list of apps
	for (const item in appsList) {
		$("#listView").append(
			'<div id="listItem" class="row">' +
			  '<div class="col-md-2">' +
				  '<img id="img1" src="' + appsList[item].icon + '" alt="App" width="75" height="75">' +
			  '</div>' +
				'<div class="col-md-10">' +
				  '<a id="link" href="./app.html?app_id=' + appsList[item].app_id + '" target="_blank">' + 
					appsList[item].title + '</a>' +
			  '</div>' +
		  '</div>'
		);
	}
}

// Dynamically filters the apps list by search results
const searchForm = document.getElementById("searchForm");
searchForm.addEventListener('input', updateList, false);

// prevents search box from refreshing page
searchForm.addEventListener('keypress', function(event) {
	if (event.key == "Enter") {
		event.preventDefault();
	}
}, false);

// Dynamically filters the apps list by inGoogle
const inGoogle = document.getElementById("fltr inGoogle");
inGoogle.addEventListener('click', updateList, false);