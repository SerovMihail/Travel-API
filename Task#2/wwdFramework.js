workWithDom = function () {
	console.log('init framework');
}

workWithDom.prototype = {	

	elm: null,

	// old method
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
	findByX: function(path) {
		var self = this;

		self.elm = document.evaluate('/html/body/' + path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

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

				return self;
			}	
		}	

		if (self.elm instanceof NodeList) {
			if(self.elm.length == 1) {		
				

				addClassForList(0);	

				return self;	

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

				return self;
			}	


		}	

		if (self.elm instanceof NodeList) {
			if(self.elm.length == 1) {		
				
				deleteClassForList(0);	
				return self;	

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
	getCSS(type) {
		var self = this;

		getStyle = function () {
			var top;
		    var elementStyles = window.getComputedStyle(self.elm),
		    style = elementStyles.getPropertyValue(type);

		    if(!style) {
		    	console.warn('Error of type style');
		    }
		    
		}

		getStyleList = function (j) {
			var elementStyles = window.getComputedStyle(self.elm[j]);
		    style = elementStyles.getPropertyValue(type);

		     if(!style) {
		    	console.warn('Error of type style');
		    }
		    
		}

		if (!self.elm) {
			console.warn('Find element for change');	
		}

		if(self.elm.length == undefined) { 

			getStyle();

			return self;
		}

		// Чтобы не переопределять стандартные методы класса
		if (self.elm instanceof HTMLCollection) { 
			for(var i = 0; i < self.elm.length; i++ ) {
				
				getStyleList(i);

			}	


		}	

		if (self.elm instanceof NodeList) {
			if(self.elm.length == 1) {		
				
				getStyleList(0);

			} else {
				self.elm.forEach((x, i) => {
					if(!x.className) {
						return self;
					} else {
						getStyleList(i);
					}
				});	
			}
		}
		
		
	},
	setCSS(type, value) {
		var self = this;

		setStyle = function () {
			self.elm.style[type] = value;
		}

		setStyleForList = function (j) {
			self.elm[j].style[type] = value;
		}
		

		if (!self.elm) {
			console.warn('Find element for change');	
		}

		if(self.elm.length == undefined) { 

			setStyle();

			return self;
		}

		// Чтобы не переопределять стандартные методы класса
		if (self.elm instanceof HTMLCollection) { 
			for(var i = 0; i < self.elm.length; i++ ) {
				
				setStyleForList(i);

			}	


		}	

		if (self.elm instanceof NodeList) {
			if(self.elm.length == 1) {		
				
				setStyleForList(0);

			} else {
				self.elm.forEach((x, i) => {
					if(!x.className) {
						return self;
					} else {
						setStyleForList(i);
					}
				});	
			}
		}
	}


}

