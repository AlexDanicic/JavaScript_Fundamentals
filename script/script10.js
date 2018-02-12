// Object Literals

var batwing = {
  status: "Ready",
  rescueBatman : function() {
    console.log("Locating his transponder ... inititating launch ...");
  }
}

if (batwing.status === "Ready") {
  batwing.rescueBatman();
}

var utilities = {
  printAllMembers: function(targetObject) {
    for (i in targetObject) {
      document.write("<br />" + targetObject[i]);
    }
  }
}
/*
//utilities.printAllMembers(batwing);

var i_am_empty = { };

utilities.printAllMembers(i_am_empty);
*/

var planet = {
  id: 34,
  name: "Krypton",
  faction: {
    factionId: 2,
    Name: "Superman",
    notification: function() {
      document.write("Tell me ... everything!");
    }
  },
  cities: [
    { locationId: 15, name: "Argo City"},
    { locationId: 16, name: "Kryptonopolis"},
    { locationId: 17, name: "Kandor"}
  ]
};

//planet.faction.notification();

//document.write(planet.cities[1].name);
/*
document.write("<br />" + planet.name);
planet.name = "Vathlo Island";
document.write("<br />" + planet.name);
*/

/*
var z = planet;
document.write(z.name);
*/

/*
if (typeof planet.defense === "undefined") {
  planet.defense = "General Zod";
}
document.write(planet.defense);
*/

/*
for (member in planet) {
  document.write("<br />" + member + " == >" + planet[member]); 
}
*/

function car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var myCar = new car ("BMW", "320", 2013);
var myOtherCar = new car("Peugeot", "308 vti S", 2009);

console.log(myCar.make);
console.log(myOtherCar.make);