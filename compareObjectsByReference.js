// Objects like arrays, dates, and plain objects are compared by their reference.
// Basically checks to see if the objects given refer to the same location in memory. 

var object1 = {
	name: 'cristina',
	lastname: 'Rojas'
}

var object2 = {
	name: 'cristina',
	lastname: 'Rojas'
}

var callObject1 = object1;

// Output: FALSE - distinct instances
console.log(object1 === object2);

// Output: TRUE -  refer to the same instance.
console.log(callObject1 === object1);