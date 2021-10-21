var store = require('app-store-scraper');

const fs = require('fs');


//var apps = store.list({
//  collection: store.collection.TOP_FREE_IPHONE,
//  num: 50
//});

//console.log(typeof(apps));


// convert JSON object to string
//const data = JSON.stringify(store.list({
//  collection: store.collection.TOP_FREE_IPHONE,
//  num: 50
//}));
//console.log(typeof(data)+"qwerty"+apps+data);
const data = ((async () => {
    values = await store.list({
      collection: store.collection.TOP_FREE_IPHONE,
      num: 50
    });
    console.log("Data: " + values);
    fs.writeFile('appleApps.json', JSON.stringify(values), (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
    return values;
    //console.log(value);
})()).catch(console.error);


console.log("Data: " + data);

// write JSON string to a file
fs.writeFile('appleApps.json', JSON.stringify(data), (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});
