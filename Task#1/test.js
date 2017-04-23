// Unsort tavel without errors
// Just change "from" or "to" on smth for test.

var Travel = new Travel_API();
Travel.addToSort(Bus, {from: "Mexico", to: "Novgorod"});
Travel.addToSort(Train, {from: "Moskow", to: "London", trainNumber: 20, seat: "B45"});
Travel.addToSort(Bus, {from: "Madrig", to: "Moskow"});
Travel.addToSort(Plane, {from: "Novgorod", to: "Petrozavodsk", planeNumber: 1, gate: 5, seat: "5", baggageTransfer: "not automaticly"});
Travel.addToSort(Train, {from: "Spb", to: "Mexico", trainNumber: 2, seat: "B25"});
Travel.addToSort(Plane, {from: "London", to: "Spb", planeNumber: 34, gate: 3, seat: "45", baggageTransfer: "Automaticly"});

var resultt = Travel.sortList();