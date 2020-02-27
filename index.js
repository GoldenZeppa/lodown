'use strict';

// YOU KNOW WHAT TO DO //



/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 *       action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * 
 * @param {Function} action: The Function to be applied to each value in the 
 *                           collection.
 * 
 * Usage:
 *      let array = ["a","b","c"];
 *      each(array, function(e,i,a){ console.log(e) });     // -> "a" 
 *                                                          // -> "b" 
 *                                                          // -> "c"
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/**
 * identity: Takes a value, and returns it unchanged.
 *
 * @param {Any Datatype} value: Can be any data type / value.
 * 
 * @return {Any Datatype}: Will be the same value as the input value.
 * 
 * Usage:
 *      console.log(identity(5));           // -) 5
 *      console.log(identity({a: "b"}));    // -> {a: "b"}
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;



/**
 * tyepOf: Takes a value, and returns a string indicating the data type of the 
 *         value.  
 * 
 * @param {Any Datatype} value: Can be any data type / value.
 * 
 * @return {String}: Will be the data type of the input value as a string.  
 *                   Data type will be one of:
 *                      - "string"
 *                      - "array"
 *                      - "object"
 *                      - "undefined"
 *                      - "number"
 *                      - "boolean"
 *                      - "null"
 *                      - "function"
 * 
 * Usage:
 *      console.log(typeOf(134));               // -> "number"
 *      console.log(typeOf("javascript"));      // -> "string"
 *      console.log(typeOf([1,2,3]));           // -> "array"
 */
function typeOf(value) {
    if (value === null) {
        return 'null';
    } else if (Array.isArray(value)) {
        return 'array';
    } else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;



/**
 * first: Takes an array and a number, and returns the number of elements 
 *        specified by the number from the beginning of the array.
 *
 * @param {Array} array: Can be an array containing any data types / values.
 * 
 * @param {Number} number: Can be any whole number.
 * 
 * @return {Array or Array Element}:  Will be a subarray from the beginning of 
 *                                    the array.  If the array argument is not  
 *                                    an array or the number is negative, will 
 *                                    return an empty array literal.  If the 
 *                                    number is not provided or is not a number, 
 *                                    will return first element of the array.
 * 
 * Usage:
 *      let arr = ["a", "b", "c"];
 *      console.log(first("ponies", 1));        // -> []
 *      console.log(first(arr, "ponies"));      // -> "a"
 *      console.log(first(arr, 1));             // -> "a"
 *      console.log(first(arr, 2));             // -> ["a", "b"]
 */
function first(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    }
    
    if (typeof number !== 'number') {
        return array[0];
    }

    return array.slice(0, number);
}
module.exports.first = first;



/**
 * last: Takes an array and a number, and returns the number of elements 
 *       specified by the number from the end of the array.
 *
 * @param {Array} array: Can be an array containing any data types / values.
 * 
 * @param {Number} number: Can be any whole number.
 * 
 * @return {Array or Array Element}: Will be a subarray from the end of the 
 *                                   array.  If the array argument is not an 
 *                                   array or the number is negative, will 
 *                                   return an empty array literal.  If the 
 *                                   number is not provided or is not a number, 
 *                                   will return the last element of the array.  
 *                                   If number is greater than the length of
 *                                   the array, will return the entire array.
 * 
 * Usage:
 *      let arr = ["a", "b", "c"];
 *      console.log(last("ponies", 2));     // -> []
 *      console.log(last(arr, "ponies"));   // -> "c"
 *      console.log(last(arr, 1));          // -> "c"
 *      console.log(last(arr, 2));          // -> ["b", "c"]
 */
function last(array, number) {
    if (!Array.isArray(array) || number < 0) {
        return [];
    }

    if (typeof number !== 'number') {
        return array[array.length - 1];
    }
    
    if (number > array.length) {
        return array;
    } else {
        return array.slice(array.length - number , array.length);
    }
}
module.exports.last = last;



/**
 * indexOf: Takes an array and a value, and returns the index of the array 
 *          that is the first occurrence of the value.
 *
 * @param {Array} array: Can be an array containing any data types / values.
 * 
 * @param {Any Datatype} value: Can be any data type / value.
 * 
 * @return {Number}: Will be the index of the first occurence of the input  
 *                   value in the array.  If the input array argument is not
 *                   an array or the input value is not found in the array, 
 *                   will return -1.
 * 
 * Usage:
 *      let arr = ["a","b","c"];
 *      console.log(indexOf(arr, "c"));   // -> 2
 *      console.log(indexOf(arr, "d"));   // -> -1
 */
function indexOf(array, value) {
    if (!Array.isArray(array)) {
        return -1;
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;



/**
 * contains: Takes an array and a value, and returns a boolean determining if 
 *           the array includes the value.
 *
 * @param {Array} array: Can be an array containing any data types / values.
 * 
 * @param {Any Datatype} value: Can be any data type / value.
 * 
 * @return {Boolean}: Will be true if the array contains the input value; 
 *                    otherwise, will be false.  If no value is provided, will
 *                    return false.
 * 
 * Usage:
 *      console.log(contains([1,"two", 3.14], "two"));  // -> true
 */
function contains(array, value) {
    if (value === undefined || value === null) {
        return false;
    }
    return (array.includes(value) ? true : false);
}
module.exports.contains = contains;



/**
 * unique: Takes an array, and returns an array of all elements from the 
 *         array with duplicates removed.
 *
 * @param {Array} array: Can be an array containing any data types / values.
 * 
 * @return {Array}:  Will be an array with duplicates removed.
 * 
 * Usage:
 *      let arr = [1,2,2,4,5,6,5,2];
 *      console.log(unique(arr));     // -> [1,2,4,5,6]
 */
function unique(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}
module.exports.unique = unique;



/**
 * filter: Takes an array and a function, and returns an array of elements for 
 *         which calling the function returned true.
 * 
 * @param {Array} array: Can be an array containing any data types / values.
 * 
 * @param {Function} test: The Function to be applied to each value in the 
 *                         array.
 * 
 * @return {Array}: Will be an array containing the elements which calling test
 *                  function returned true.
 * 
 * Usage:
 *      let arr = [1,2,3,4,5];
 *      console.log(filter(arr, function(x){return x%2 === 0}));    // -> [2,4]
 */
function filter(array, test) {
    let filtered = [];
    each(array, (element, index, collection) => {
        if (test(element, index, collection)) {
            filtered.push(element);
        };
    });
    return filtered;
}
module.exports.filter = filter;



/**
 * reject: Takes an array and a function, and returns an array of elements for 
 *         which calling the function returned false.
 * 
 * @param {Array} array: Can be an array containing any data types / values.
 * 
 * @param {Function} test: The Function to be applied to each value in the 
 *                         array.
 * 
 * @return {Array}: Will be an array containing the elements which calling test
 *                  function returned false.
 * 
 * Usage:
 *      let arr = [1,2,3,4,5];
 *      console.log(reject(arr, function(e){return e%2 === 0}));    // -> [1,3,5]
 */
function reject(array, test) {
    return array.filter((element, index, collection) => !test(element, index, collection));
}
module.exports.reject = reject;



/**
 * partition: Takes an array and a function, and returns an array that consists
 *            of two arrays:  one containing array elements that evaluated to 
 *            true when calling the function and one containing array elements
 *            that evaluated to false when calling the function.
 * 
 * @param {Array} array: Can be an array containing any data types / values.
 * 
 * @param {Function} test: The Function to be applied to each value in the 
 *                         array.
 * 
 * @return {Array}: Will be an array made of of 2 sub arrays:  
 *                      - At position 0:  An array that contains the array 
 *                                        values for which calling the test 
 *                                        function returned true.
 *                      - At position 1:  An array that contains the array 
 *                                        values for which calling the test 
 *                                        function returned false.
 * 
 * Usage:
 *      let arr = [1,2,3,4,5];
 *      console.log(partition(arr, function(element,index,arr){return element % 2 === 0}));   // -> [[2,4],[1,3,5]]
 */
function partition(array, test) {
    let truthy = [];
    let falsy = [];
    for (let i = 0; i < array.length; i++) {
        if (test(array[i], i, array)) {
            truthy.push(array[i]);
        } else {
            falsy.push(array[i]);
        }
    }
    return [truthy, falsy];
}
module.exports.partition = partition;



/**
 * map: Takes a collection and a function, and returns an array of values 
 *      resulting from calling the function.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * 
 * @param {Function} test: The Function to be applied to each value in the 
 *                         collection.
 * 
 * @return {Array}: An array with the resulting values from calling the test 
 *                  function.
 * 
 * Usage:
 *      let arr = [1,2,3,4];
 *      console.log(map(arr, function(e){return e * 2}));     // -> [2,4,6,8])
 */
function map(collection, test) {
    let result = [];
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(test(collection[i], i, collection));
        }
    } else if (typeof collection === 'object') {
        for (let key in collection) {
            result.push(test(collection[key], key, collection));
        }
    }
    return result;
}
module.exports.map = map;



/**
 * pluck: Takes an array of objects and a property, and returns an array
 *        containing the value of the property for every object in the array.
 * 
 * @param {Array} array: An array of objects.
 * 
 * @param {String} property: A string representing an object property.
 * 
 * @return {Array}: An array containing the corresponding property value.
 * 
 * Usage:
 *      let arr = [{a: "one"}, {a: "two"}];
 *      console.log(pluck(arr, "a"));      // -> ["one", "two"]
 */
function pluck(array, property) {
    return map(array, (element, index, list) => element[property]);
}
module.exports.pluck = pluck;



/**
 * every: Takes a collection and a function, and returns true if all elements of
 *        collection return true when calling the function.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * 
 * @param {Function} test: The Function to be applied to each value in the 
 *                         collection
 * 
 * @return {Boolean}: Will be true if all elements of collection have a value
 *                    of true when calling the function.  Will be false if just
 *                    one element results in false when calling the function.
 *                    If the function is not provided, return true if every 
 *                    element in the collection has a true value; otherwise,
 *                    return false.
 * 
 * Usage:
 *      let arr = [2,4,6];
 *      console.log(every(arr, function(e){return e % 2 === 0}));   // -> true
 *      arr = [1,2,3];
 *      console.log(every(arr, function(e){return e % 2 === 0}));   // -> false
 */
function every(collection, test) {
    if (typeof test != 'function') {
        for (let element of collection) {
            if (!element) {
                return false;
            }
        }
        return true;
    }
    let array = map(collection, (element, position, collectiton) => test(element, position, collection));
    for (let element of array) {
        if (!element) {
            return false
        }
    }
    return true;
}
module.exports.every = every;



/**
 * some: Takes a collection and a function, and returns true if at least one
 *       element of the collection returns true when calling the function.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * 
 * @param {Function} test: The Function to be applied to each value in the 
 *                         collection.
 * 
 * @return {Boolean}: Will be true if at least one element of collection has a
 *                    value of true when calling the function.  Will be false
 *                    if all elements result in false when calling the function.
 *                    If the function is not provided, return true if one 
 *                    element in the collection has a true value; otherwise,
 *                    return false.
 * 
 * Usage:
 *      let arr = [1,3,5];
 *      console.log(some(arr, function(e){return e % 2 === 0}));    // -> false
 *      arr = [1,2,3];
 *      console.log(some(arr, function(e){return e % 2 === 0}));    // -> true
 */
function some(collection, test) {
    if (typeof test != 'function') {
        for (let element of collection) {
            if (element) {
                return true;
            }
        }
        return false;
    }
    let array = map(collection, (element, position, collectiton) => test(element, position, collection));
    for (let element of array) {
        if (element) {
            return true;
        }
    }
    return false;
}
module.exports.some = some;



/**
 * reduce: Takes an array, a function, and a seed.  It returns resulting value
 *         from calling the function for each element in the array.
 * 
 * @param {Array} array: An array of numbers.
 * 
 * @param {Function} test: The Function to be applied to each value in the 
 *                         array.
 * 
 * @param {Any Datatype} seed: The value to be used in the first iteration of 
 *                             the array.  If no seed is provided, the first 
 *                             element of the array will be used as the seed 
 *                             for the next iteration.
 * 
 * @return {Any Datatype}: The resulting value from calling the input function.
 * 
 * Usage:
 *      let arr = [1,2,3];
 *      console.log(reduce(arr, function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0));    // -> 6
 */
function reduce(array, test, seed) {
    let previous;
    let start;
    if (seed === undefined && array.length - 1 > 0) {
        previous = array[0];
        start = 1;
    } else {
        previous = seed;
        start = 0;
    }
    for (let i = start; i < array.length; i++) {
        previous = test(previous, array[i], i);
    }
    return previous;
}
module.exports.reduce = reduce;



/**
 * extend: Takes at least two objects, and returns only the first object
 *         updated with all subsequent object properties and values.
 * 
 * @param {Object1, Object2 [, Object3, . . ., ObjectN ]}: Can be at least two
 *                                                         objects, but there  
 *                                                         may be more objects.
 * 
 * @return {Object}: Will be the first Object updated with properties and values 
 *                   from second object at the very minimum.  If more objects  
 *                   are passed in, their properties and values will also be 
 *                   used to update the first object with subsequent object 
 *                   properties and values in the order that they are passed in.
 * 
 * Usage:
 *      var data = {a:"one"};
 *      console.log(extend(data, {b:"two"}));   // -> {a:"one",b:"two"}
 *      console.log(extend(data, {a:"two"}));   // -> {a:"two"}
 */
function extend() {
    let args = arguments;
    for (let i = 1; i < args.length; i++) {
        for (let key in args[i]) {
            args[0][key] = args[i][key]
        }
    }
    return args[0];
}
module.exports.extend = extend;

