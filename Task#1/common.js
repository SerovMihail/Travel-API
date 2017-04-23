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
var t1 = new Train(2, "Moskow", "London", "B45");
var p1 = new Plane(3, "London", "Spb", "B45", "45", "Automaticly");
var p2 = new Plane(4, "Spb", "Petrozavodsk", "B45", "45", "Not automaticly");
var t2 = new Train(2, "Petrozavodsk", "New-York", "B30");

var cardsFrom = [];
cardsFrom.push(t2, t1, p2, b, p1);

cardsTo = cardsFrom;

function sortCardsByTime() {
    var self = this;   
}


sortCardsByTime.prototype = {

	sortCards: [],	

	init: function(cardsFrom, cardsTo) {
		var self = this;

		self.cardsFrom = cardsFrom;
		self.cardsTo = cardsTo;		

		console.log('Init');
	},

	search: function() {
		var self = this;	

		var count = self.cardsFrom.length;

		self.sortCards.push(self.cardsFrom[0]); // Случайный элемент

		var searchNext = true;
		var searchPrev = true;

		var matching = false;

		debugger;

		while (searchNext) {

			matching = false;
			
			var to = self.sortCards[self.sortCards.length - 1];

			for(var i = 0; i < self.cardsFrom.length; i++) {
				if (self.cardsFrom[i].from === to.to) {
					self.sortCards.push(self.cardsFrom[i]);
					matching = true;
					break;
				}
			}

			// Вариант, когда нет совпадения и мы уже на последнем вакантном варианте
			// Переходим к просмотру в обратном порядке
			if(!matching && i==self.cardsFrom.length -1) {
				searchNext = false;
				searchPrev = true;
				break;	

			} 

			// А нужен ли он?
			if(!matching && self.sortCards.length < count) {
				searchNext = false;
				searchPrev = true;
				break;
			}

			// ряд построен, больше ничего не ищем
			if(self.sortCards.length == count) {
				console.log('Ряд построен', self.sortCards);
				searchNext = false;
				searchPrev = false;
				return self.sortCards;
				

			}
			
		}

		

		while (searchPrev) {
			matching = false;

			var from = self.sortCards[0];

			for(var i = 0; i < self.cardsTo.length; i++) {
				if (from.from === self.cardsTo[i].to) {
					self.sortCards.unshift(self.cardsTo[i]);
					matching = true;
					break;
				}
			}

			if(!matching && i==self.cardsTo.length -1) {
				searchPrev = false;
				break;
				

			} 

			if(self.sortCards.length == count) {
				console.log('Ряд построен', self.sortCards);
				searchNext = false;
				searchPrev = false;
				break;

			}

			
		}

		
			
		console.log("Результаты поиска и сортировки", self.sortCards);
	},

	
}


var sortCards = new sortCardsByTime();
sortCards.init(cardsFrom, cardsTo);
var resultt = sortCards.search();

console.log(self.sortCards);

