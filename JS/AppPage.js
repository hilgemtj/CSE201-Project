// Loading DB
loadJSON(db);
init();
var apps = new Database();

// Formatter for price
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

// Gets app_id from url
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('app_id');

// Getting app object matching app_id
var thisApp = apps.database[id];
console.log(thisApp);


// Setting data
document.title = "AppHub - " + thisApp.title;
$("#img1").attr("src", thisApp.icon);
$("#titleHead").text(thisApp.title);

if(thisApp.price == 0) {
	$("#priceHead").text("Free");
} else {
	$("#priceHead").text(formatter.format(thisApp.price));
}

$("#devHead").text(thisApp.developer);
$("#descriptionPar").text(thisApp.description);
$("#storePar").text(thisApp.store);