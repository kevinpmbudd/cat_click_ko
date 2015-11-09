var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.level = ko.computed(function() {
		if (this.clickCount() < 10)
			return "newborn";
		else
			return "infant";
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