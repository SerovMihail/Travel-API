// default list with error
// var b = new Bus("Madrig", "Moskow");
// var t1 = new Train("Moskow", "London", "B45");
// var p1 = new Plane("London", "Spb", "B45", "45", "Automaticly");
// var p2 = new Plane("Spb", "null", "B45", "45", "Not automaticly");
// var t2 = new Train("Petrozavodsk", "New-York", "B30");

// default list of cards
// var b = new Bus("Madrig", "Moskow");
// var t1 = new Train("Moskow", "London", "B45");
// var p1 = new Plane("London", "Spb", "B45", "45", "Automaticly");
// var p2 = new Plane("Spb", "Petrozavodsk", "B45", "45", "Not automaticly");
// var t2 = new Train("Petrozavodsk", "New-York", "B30");


function Travel_API() {
    var self = this;   
}


Travel_API.prototype = {

	cardsFrom: [],
	cardsTo: [],
	sortCards: [],		

	addToSort: function(type, data) {
		var self = this;

		switch (type) {
			case Bus: {			
				var b = new Bus(data.from, data.to);
				self.cardsFrom.push(b);
				break;
			}
			case Train:{
				var t = new Train(data.from, data.to, data.trainNumber, data.seat);
				self.cardsFrom.push(t);
				break;
			}
			
			case Plane:	{
				var p = new Plane(data.from, data.to, data.planeNumber, data.seat, data.gate, data.baggageTransfer);
				self.cardsFrom.push(p);
				break;
			}	
			
			default:
				console.warn('Ошибка. Такого средста передвижения не существует. Обратитесь по почте feedback@yandex.ru мы обязательно добавим поддержку данного транспорта');
				console.log('Поддерживаемые средства передвижения: ');
				supportedVehicles.forEach((x, i) => console.log(i + 1 +  "). " + x.name));
				break;
				
		}

		self.cardsTo = self.cardsFrom; 
	},

	clearTravelList: function() {
		var self = this;

		self.cardsFrom =  [];
		self.cardsTo = [];
		self.sortCards =  [];
	},

	appendTextOnHTML: function(list, obj) {
		var li = document.createElement("li");

		switch (obj.type) {
			case "bus": {			
				li.appendChild(document.
					createTextNode("Take bus from " + obj.from + " to " + obj.to + ". " + obj.seat + "."));
				break;
			}
			case "train":{
				li.appendChild(document.
					createTextNode("Take train " + obj.trainNumber 
						+ " from " + obj.from + " to " +  obj.to + ". Seat " + obj.seat  + "."));
				break;
			}
			
			case "plane":	{
				li.appendChild(document.
					createTextNode("From  " + obj.from + " take flight " + obj.planeNumber 
						+ " to " +  obj.to + ". Gate "
						 + obj.gate + ". Seat " + obj.seat 
						 + ".Baggage will be " + obj.baggageTransfer + " transferred."));
				break;
			}	
			
			default:
				console.warn('Ошибка. Такого средста передвижения не существует. Обратитесь по почте feedback@yandex.ru мы обязательно добавим поддержку данного транспорта');
				console.log('Поддерживаемые средства передвижения: ');
				supportedVehicles.forEach((x, i) => console.log(i + 1 +  "). " + x.name));
				break;
				
		}

		li.className = 'list-group-item';
		list.appendChild(li);
	},

	searchTravelList: function() {
		var self = this;

		var list = document.getElementById("travelList");

		if(self.sortCards.length == 0) {
			var li = document.createElement("li");	
			li.appendChild(document.createTextNode("Не удалось построить маршрут"));
			li.className = 'list-group-item';
			list.appendChild(li);
		} else {

			

			self.sortCards.forEach(x => {	

				self.appendTextOnHTML(list, x);				

			});
			
			
		}
	},



	sortList: function() {
		var self = this;

		if(!self.cardsFrom) {
			console.log("Нечего сортировать. Добавьте пункты путешествия");
			return;
		}

			

		var count = self.cardsFrom.length;

		self.sortCards.push(self.cardsFrom[0]); // Случайный элемент

		var searchNext = true;
		var searchPrev = true;

		var matching = false;

		// debugger;

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
			// if(!matching && i==self.cardsFrom.length -1) {
			// 	searchNext = false;
			// 	searchPrev = true;
			// 	break;	

			// } 

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

			

			// if(!matching && i==self.cardsFrom.length -1) {
			// 	searchNext = false;
			// 	searchPrev = false;
			// 	console.log('Ряд не построен', self.sortCards);
			// 	break;	

			// } 

			if(!matching && self.sortCards.length < count) {
				console.log('Ряд не построен, ошибка в маршруте. Исправьте карточки маршрута и запустите сортировку снова');
				searchNext = false;
				searchPrev = false;
				self.sortCards = [];
				self.searchTravelList();
				break;
			}

			if(self.sortCards.length == count) {
				console.log('Ряд построен', self.sortCards);
				searchNext = false;
				searchPrev = false;
				break;

			}
			
		}				
	},	
}






