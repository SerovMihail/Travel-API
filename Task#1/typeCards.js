/**
 * Абстрактный класс Transport
 *
 * @constructor
 * @this  {Transport}
 * @param {string, string}
 */
function Transport(from, to) {
	//this.id = id;
	this.type = "transport";
	this.from = from;
	this.to = to;	
}

/**
 * Создает экземпляр Bus.
 *
 * @constructor
 * @this  {Bus}
 * @param {string, string} 
 */
function Bus(from, to) {
	Transport.apply(this, [from, to]);
	this.type = "bus";
	this.seat = "No seat assignment";	
}

Bus.prototype = Object.create(Transport.prototype);
Bus.prototype.constructor = Bus;

/**
 * Создает экземпляр Plane.
 *
 * @constructor
 * @this  {Plane}
 * @param {string, string, string/number, string/number, string}  
 */
function Plane(from, to, planeNumber, seat, gate, baggageTransfer) {
	Transport.apply(this,  [from, to]);	
	this.type = "plane";
	this.planeNumber = planeNumber;
	this.seat = seat;
	this.gate = gate;
	this.baggageTransfer = baggageTransfer;	
}

Plane.prototype = Object.create(Transport.prototype);
Plane.prototype.constructor = Plane;

/**
 * Создает экземпляр Train.
 *
 * @constructor
 * @this  {Train}
 * @param {string, string, string/number, string/number} 
 */
function Train(from, to, trainNumber, seat) {
	Transport.apply(this,  [from, to]);
	this.type = "train";
	this.trainNumber = trainNumber;	
	this.seat = seat;		
}

Train.prototype = Object.create(Transport.prototype);
Train.prototype.constructor = Train;

// Все поддерживаемые типы средств передвижения
var supportedVehicles = [Bus, Plane, Train];