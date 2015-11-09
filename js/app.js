var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.level = ko.computed(function() {
		var level;
		var clicks = this.clickCount();
		if (clicks < 10) {
			level = "newborn";
		} else if (clicks < 50) {
			level = "infant";
		} else if (clicks < 100) {
			level = "child";
		} else if (clicks < 200) {
			level = "teen";
		} else {
			level = "adult";
		}
		return level;
	}, this);
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.nicknames = ko.observableArray(["tabs",
																			 "T-bone",
																			 "Tabby Hoffman",
																			 "Sir Tabs Alot",
																			 "Claw foot tab"]);

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());