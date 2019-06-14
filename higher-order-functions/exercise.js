// Challenge 1
function addTwo(num) {
    return num + 2
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
   return word.concat("s")
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function multiplyByTwo(n) {
    return n*2;
}
function map(array,callback) {
   var newArray = [];
   for(let i = 0; i < array.length; i++) {
       newArray.push(callback(array[i]));
   } 	
   return newArray;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
       callback(array[i])
    }
}

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function multiplyByTwo(n) {
    return n*2;
}
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
       callback(array[i])
    }
}
function mapWith(array,callback) {
    var newArray = [];	
    forEach(array, (num)=> {
        newArray.push(callback(num))
    })
    return newArray;
 };

//Extension 2
function reduce(array, callback, initialValue) {
    var accumelator = initialValue;
    for(let i = 0; i < array.length; i++) {
      accumelator += callback(accumelator,array[i]);
    } return accumelator
}

//Extension 3
function intersection(...arrays) {
	let result = [];
	arrays.reduce((acc, cv) => {
		acc.forEach(element => {
			if (cv.includes(element) && !result.includes(element)) {
				result.push(element);}
		});
		return result;
	});
	return result;
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]
 
//Extension 4
function union(...arrays) {
	let result = [];
	arrays.reduce((acc, cv) => {
		cv.forEach(item => {
			if (!acc.includes(item)) {
				result.push(item);
			}
		});
		return result;
	}, []);
	return result;
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
	let obj = {};
	array1.reduce((accumulator, currentValue) => {
		let output = callback(currentValue);
		let index = array1.indexOf(currentValue);
		if (output == array2[index]) {
			accumulator[currentValue] = array2[index];
		}
		obj = accumulator;
		return accumulator;
	}, {});
	return obj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
	let result = {};
	arrVals.reduce((accumulator, currentValue) => {
		accumulator[currentValue] = arrCallbacks.map(item => item(currentValue));
		result = accumulator;
		return accumulator;
	}, {});
	return result;
}


// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
