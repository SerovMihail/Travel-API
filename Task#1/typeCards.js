function Transport(from, to) {
	//this.id = id;
	this.type = "transport";
	this.from = from;
	this.to = to;	
}

function Bus(from, to) {
	Transport.apply(this, [from, to]);
	this.type = "bus";
	this.seat = "No seat assignment";	
}

Bus.prototype = Object.create(Transport.prototype);
Bus.prototype.constructor = Bus;

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

function Train(from, to, trainNumber, seat) {
	Transport.apply(this,  [from, to]);
	this.type = "train";
	this.trainNumber = trainNumber;	
	this.seat = seat;		
}

Train.prototype = Object.create(Transport.prototype);
Train.prototype.constructor = Train;

var supportedVehicles = [Bus, Plane, Train];