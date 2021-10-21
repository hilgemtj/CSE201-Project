/***
	App class
	
***/

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