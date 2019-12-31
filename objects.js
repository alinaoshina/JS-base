let Car = {manufacturer: 'Mercedes', engineVolume: 3500, TypeOfFuel: 'gas', AutomaticGear: true};
let Car2 = {manufacturer: 'Volvo', engineVolume: 3500, TypeOfFuel: 'hybrid', AutomaticGear: true};

let carKeys = Object.keys(Car);

let carComparison = {};
for (let i=0; i<carKeys.length;i++) {
    carComparison[carKeys[i]] = Car2[carKeys[i]] === Car[carKeys[i]]
}

console.log(carComparison);

Car.color = "red";
console.log(Car);

delete Car.color;

jointCars = {};
for (const property in Car) {
jointCars[property] = {Car : Car[property], Car2 : Car2[property]};
  }
console.log(jointCars);
