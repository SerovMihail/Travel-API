workWithDom = function () {
	console.log('init framework');
}

workWithDom.prototype = {	

	elm: null,

	findBy: function (type, elem) {
		var self = this;

		switch(type) {
			case 'id':  {
				self.elm = document.getElementById(elem);					
				break;
			}
			case 'name': {
				self.elm = document.getElementsByName(elem);			
				break;
			}
			case 'tag': {
				self.elm = document.getElementsByTagName(elem);				
				break;
			}
			case 'class': {
				self.elm = document.getElementsByClassName(elem);				
				break;
			}
			case 'elem': {
				self.elm = document.querySelector(elem);
				break;
			}
			case 'allElem': { 
				self.elm = 	document.querySelectorAll(elem);				
				break;
			}
			default:
				console.warn('Error type (first argument)');
		}

		return self;
	},
	addClass: function(newClass) {
		var self = this;

		addClass = function() {

			if (!self.elm.className)	{
				self.elm.className = newClass;		
			} else {
				self.elm.className += " " + newClass;	
			}
		}

		addClassForList = function(i) { // необязательный аргумент

			if (!self.elm[i].className)	{
				self.elm[i].className = newClass;		
			} else {
				self.elm[i].className += " " + newClass;	
			}
		}

		if (!self.elm) {
			console.warn('Find element for change');	
		}

		if(self.elm.length == undefined) { 
			
			addClass();

			return self;
		}

		// Чтобы не переопределять стандартные методы класса
		if (self.elm instanceof HTMLCollection) { 
			for(var i = 0; i < self.elm.length; i++ ) {
				
				addClassForList(i); // 
			}	
		}	

		if (self.elm instanceof NodeList) {
			if(self.elm.length == 1) {		
				

				addClassForList(0);		

			} else {
				self.elm.forEach(x => {
					if(!x.className) {
						x.className = newClass;
					} else {
						x.className += " " + newClass;	
					}
				});	
			}
		}			

		return self;
	},
	removeClass: function (removeClass) { 
		var self = this;

		deleteClass = function () {
			var classes = self.elm.className.split(' ');

			for (var i = 0; i < classes.length; i++) {
				if (classes[i] == removeClass) {
				    classes.splice(i, 1); 
				    i--; 
				}
			}
			self.elm.className = classes.join(' ');	
		}

		deleteClassForList = function (j) {
			var classes = self.elm[j].className.split(' ');

			for (var i = 0; i < classes.length; i++) {
				if (classes[i] == removeClass) {
				    classes.splice(i, 1); 
				    i--; 
				}
			}

			if (classes.length > 1) {
				self.elm[j].className = classes.join(' ');	
			} else {
				if(!classes) {
					self.elm[j].className = classes[0];	
				} else {
					self.elm[j].className = "";
				}
			}

			
		}

		if (!self.elm) {
			console.warn('Find element for change');	
		}

		if(self.elm.length == undefined) { 

			deleteClass();

			return self;
		}

		// Чтобы не переопределять стандартные методы класса
		if (self.elm instanceof HTMLCollection) { 
			for(var i = 0; i < self.elm.length; i++ ) {
				
				deleteClassForList(i); // 


			}	


		}	

		if (self.elm instanceof NodeList) {
			if(self.elm.length == 1) {		
				
				deleteClassForList(0);		

			} else {
				self.elm.forEach((x, i) => {
					if(!x.className) {
						return self;
					} else {
						deleteClassForList(i); 
					}
				});	
			}
		}	

		return self;		
	},
	getCSS() {
		var self = this;

		
		var top;

	    var style = window.getComputedStyle(self.elm),
	    top = style.getPropertyValue('background-color');
	    console.log(top);
	}


}

var wwd = new workWithDom();

// result = wwd.findBy("id", "div").addClass('class_name'); // +
// result = wwd.findBy("name", "div").addClass('class_name'); // +
// result = wwd.findBy("class", "div").addClass('class_name'); // +
// result = wwd.findBy("elem", "div").addClass('class_name'); // +
// result = wwd.findBy("allElem", "div").addClass('class_name'); // +

// result = wwd.findBy("id", "div").removeClass('class_name'); // +
// result = wwd.findBy("name", "div").removeClass('class_name'); // +
//result = wwd.findBy("class", "div").removeClass('class_name'); // +
//result = wwd.findBy("elem", "div").removeClass('class_name'); // +
//result = wwd.findBy("allElem", "div").removeClass('class_name'); // +

result = wwd.findBy("id", "red-block").getCSS(); // +


console.log(result);