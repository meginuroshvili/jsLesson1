// types of variable
// 1. number
// 2. string
// 3. boolean 

// primitiuli cvladebi
var testNumber = 100;
var testString = 'hundred';
var testBoolean = true;
var testBoolean1 = false;

// araprimitiuli cvladebi (array & object)
// array example 
var testArray = [2, 200, 300, 50, 'hundred', 'seven', 'audi', 'bmw', testNumber];

// object example 
var testObject = {name: 'Ben', surname: 'White', Age : 28, height: 192};

// amovigot index-it masivis wevri 
console.log(testArray[0])

// amovigot key-t obieqtis wevri
console.log(testObject['Age'])

// gavigot ra tipis cvladia 
console.log(typeof testArray)
console.log(typeof testBoolean)

// ar cvlis cvladis mnishvnelobas
console.log(testNumber + 20) 
// cvlis cvladis mnishvnelobas
testNumber = testNumber + 20
// igivea
testNumber += 20 

// shortcuts
// +=; -+; /+; 

testNumber ++; 
// gaizrdeba 1-t
testNumber --;
// shemcirdeba 1-t