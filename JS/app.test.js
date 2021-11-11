function App(app_id, url, icon, title, developer,
              developer_id, description, price, free, store) {
	"use strict";
	this.app_id = app_id;
    this.url = url;
    this.icon = icon;
    this.title = title;
    this.developer = developer;
    this.developer_id = developer_id;
    this.description = description;
    this.price = price;
    this.free = free;
    this.store = store;
	
	this.asString = this.title + " by " + this.developer;
}


var myApp = new App("myAppID", "www.website.com", "image", "APP!!!", "APPPPPPP",
              "APPPPPP123", "Hello world", "10000", false, "The store");

test('checks app constructor', () => {
	expect(new App("myAppID", "www.website.com", "image", "APP!!!", "APPPPPPP",
              "APPPPPP123", "Hello world", "10000", false, "The store")).toStrictEqual(myApp);
});

test('checks app url', () => {
	expect(myApp.url).toStrictEqual("www.website.com");
});

test('checks app image', () => {
	expect(myApp.icon).toStrictEqual("image");
});

test('checks app title', () => {
	expect(myApp.title).toStrictEqual("APP!!!");
});

test('checks app developer', () => {
	expect(myApp.developer).toStrictEqual("APPPPPPP");
});

test('checks app developer id', () => {
	expect(myApp.developer_id).toStrictEqual("APPPPPP123");
});

test('checks app description', () => {
	expect(myApp.description).toStrictEqual("Hello world");
});

test('checks app price', () => {
	expect(myApp.price).toStrictEqual("10000");
});

test('checks if app is free', () => {
	expect(myApp.free).toBe(false);
});

test('checks app store', () => {
	expect(myApp.store).toStrictEqual("The store");
});

test('checks asString', () => {
	expect(myApp.asString).toStrictEqual("APP!!! by APPPPPPP");
});