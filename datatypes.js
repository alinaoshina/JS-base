let myArray = Array.from(new Array(10),(val,index)=>index+1);;
let arrayString = myArray.join('/');

let myArrayBack = arrayString.split('/');
myArrayBack = myArrayBack.map(Number);
console.log(myArrayBack);

mySum = myArrayBack[2]+myArrayBack[7];
console.log(mySum);

let totalSum = 0;
for (i=0; i<myArrayBack.length; i++) {
    totalSum += myArrayBack[i];
}
console.log(totalSum);

let square = function(num) {
    return num*num;
}
console.log(myArrayBack.map(square));
