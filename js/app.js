var initialCats = [
		{
			name: "tabby",
			clickCount: 0,
			imgSrc: "./img/cat1.jpg",
			nicknames: ["tabs", "T-bone", "Tabby Hoffman", "Sir Tabs Alot",  "Claw foot tab"]
		},
		{
			name: "feelinus",
			clickCount: 0,
			imgSrc: "./img/cat2.jpg",
			nicknames: ["feeling it"]
		},
		{
			name: "hairball",
			clickCount: 0,
			imgSrc: "./img/cat3.jpg",
			nicknames: ["fuzzy bucket"]
		},
		{
			name: "hari",
			clickCount: 0,
			imgSrc: "./img/cat4.jpg",
			nicknames: ["son"]
		},
		{
			name: "whiskers",
			clickCount: 0,
			imgSrc: "./img/cat5.jpg",
			nicknames: ["doc"]
		},
		{
			name: "tiger",
			clickCount: 0,
			imgSrc: "./img/cat6.jpg",
			nicknames: ["vic", "cub"]
		}
];

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observableArray(data.nicknames);

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

}

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable( this.catList()[0] );

	this.incrementCounter = function() {
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
}

ko.applyBindings(new ViewModel());