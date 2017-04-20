function Transport(id, from, to) {
	this.id = id;
	this.from = from;
	this.to = to;	
}

function Bus(id, from, to) {
	Transport.apply(this, [id, from, to]);
	this.seat = "No seat assignment";
}

Bus.prototype = Object.create(Transport.prototype);
Bus.prototype.constructor = Bus;

function Plane(id, from, to, seat, gate, baggageTransfer) {
	Transport.apply(this,  [id, from, to]);	
	this.seat = seat;
	this.gate = gate;
	this.baggageTransfer = baggageTransfer;
}

Plane.prototype = Object.create(Transport.prototype);
Plane.prototype.constructor = Plane;

function Train(id, from, to, seat) {
	Transport.apply(this,  [id, from, to]);	
	this.seat = seat;	
}

Train.prototype = Object.create(Transport.prototype);
Train.prototype.constructor = Train;


var b = new Bus(1, "Madrig", "Moskow");
var t = new Train(2, "Moskow", "London", "B45");
var p1 = new Plane(3, "London", "Spb", "B45", "45", "Automaticly");
var p2 = new Plane(4, "Spb", "Petrozavodsk", "B45", "45", "Not automaticly");

var cardsFrom = [];
cardsFrom.push(t, b, p1, p2);

cardsTo = cardsFrom;

//console.log(cardsFrom, cardsTo);



// sortCards.unshift("xyu");
// sortCards.unshift("pida");
function sortCardsByTime() {
    var self = this;
   
}


sortCardsByTime.prototype = {

	sortCards: [],

	goNext: true,
	goPrev: false,
	matchingFound: false,
	necessaryCount: 0,

	init: function(cardsFrom, cardsTo) {
		var self = this;

		self.cardsFrom = cardsFrom;
		self.cardsTo = cardsTo;

		// var sortCards = [];

		// var goNext = true;
		// var goPrev = false;
		// var matchingFound;
		// var necessaryCount = cardsFrom.length;	

		console.log('Init');
	},

	search: function() {
		var self = this;	

		self.cardsFrom.forEach(function(o, oIndex, oArr) {

			self.matchingFound = false;

			self.cardsTo.forEach(function(i, iIndex, iArr) {

				result = self.searchingForward(o, i, oIndex, iIndex);
			});	

			if (!self.matchingFound && self.goNext == true) {
				self.goNext = false;
				self.goPrev = true;
				return;
			}

			if(!self.matchingFound && self.goNext == false && self.necessaryCount !== self.sortCards.length + 1) {
				console.log('Ошибка последовательности');
			}
		});

			
		console.log("Результаты поиска и сортировки", self.sortCards);
	},

	searchingForward: function(o, i, oIndex, iIndex) {
		var self = this;

		if (o.from === i.to) {

			if(self.sortCards.length == 0 && self.goNext== true) {

				self.sortCards.push(i, o);

				delete self.cardsFrom[oIndex];
				delete self.cardsTo[iIndex];

				self.matchingFound = true;

				return;
			}

			if(self.sortCards.length !== 0 && self.goNext == true) {

				self.sortCards.push(o);

				delete self.cardsFrom[oIndex];
				delete self.cardsTo[iIndex];

				self.matchingFound = true;

				return;
			}

			if(self.sortCards.length == 0 && self.goPrev == true) {

				self.sortCards.push(i, o);

				delete self.cardsFrom[oIndex];
				delete self.cardsTo[iIndex];

				self.matchingFound = true;

				return;
			}

			if(self.sortCards.length !== 0 && self.goPrev == true) {

				self.sortCards.push(i);

				delete self.cardsFrom[oIndex];
				delete self.cardsTo[iIndex];

				self.matchingFound = true;

				return;
			}

			return null;

		} 	
	}
	
}


var sortCards = new sortCardsByTime();
sortCards.init(cardsFrom, cardsTo);
sortCards.search();

console.log(self.sortCards);

