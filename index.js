'use strict';

// YOU KNOW WHAT TO DO //

/**
 *identity: Function takes in any value as an argument and returns that value unchanged.
 * @param {any value} value: Function takes in any value as an input.
 * @return {any value} value: Function returns the input value unchanged.
 */

 function identity(value){
    return value;
};
module.exports.identity = identity;

/**
 * typeOf: Function takes in any value as an argument and returns the type of value as a string
 * @param {any value} value: Function takes in any value as an input.
 * @return {string} value: Function returns the type of input value as a string
 */
function typeOf(value) {
        //determine if input value is a string
    if (typeof value === 'string'){
        return 'string'
    //else determine if value is a number
    }else if (typeof value === 'number'){
        return 'number'
    //else determine if value is undefined
    }else if (typeof value === 'undefined'){
        return 'undefined'
    //else determine if value is boolean
    }else if (typeof value === 'boolean'){
        return 'boolean'
    //else determine if value is a function
    }else if (typeof value === 'function'){
        return 'function'
    //else determine if value is an array
    }else if (Array.isArray(value) === true){
        return 'array'
    //else determine if value is null
    }else if (value === null){
        return 'null'
    //else determine if value is a date
    }else if (value instanceof Date === true){
        return 'date'
    //else it must be an object
    }else {
        return 'object'
    };
}

module.exports.typeOf = typeOf;


/**
 * first: Function takes in an array and a number and returns an array with the same number of elements as the input number, 
 * @param{array} collection: function takes in an input array
 * @param{number}: function takes in a number
 * @return{array}: function returns an array with the first elements from the input arrray equal to the input number 
 * 
 */

function first(array, number){
    if(number === undefined || (typeof number !== "number")){
      return array[0];
    }else if(!Array.isArray(array) || number <= 0){
      return [];
    }else{
      return [].slice.call(array, 0, number) ;
    }
  };

module.exports.first = first;

/**
 * last: Function takes in an array and a number and returns an array with the same number of elements as the input number, starting at the end of the input array.
 * @param {array} collection: function takes in an input array
 * @param {number}: function takes in a number
 * @returns{array}: function returns an array with the last elements from the input array equal to the input number 
 */

function last(array, number){
    if(number === undefined || (typeof number !== "number")){
      return array[array.length - 1];
    }else if(!Array.isArray(array) || number <= 0){
      return [];
    }else{
      return array.slice(-number) ;
    }
  };

module.exports.last = last;

/*
*indexOf: Function searches through array and returns the index of an input value;
*
*@param{Array} collection: Function takes in an input array.
*@param {simple data type}: Function takes in a number, string, or boolean as an input.
*@return{number}: Function returns the index of where the input value appears in the array.  If the input value doesn't appear n the array, function returns -1.
*/

indexOf = function(array, value){
    //iterate through the input array using a for loop
      for (var i = 0; i < array.length; i++){
        //determine if the current array value is equal to the input value
       if(array[i] === value){//array[2] === "c"// "c" === "c"
         return i;
       }
      }
      return -1;
    }
    
    module.exports.indexOf = indexOf;

/**
 * contains: Function iterates through an array and returns a boolean value 
 * @param {array} collection: Function takes in an input array
 * @param {any value}: Function takes in a number, string, or boolean as an input
 * @return{boolean}: Function returns true if the array contains the value and false otherwise
 */

function contains(array, value){
    for(var i = 0; i < array.length; i++){
      if(array[i] === value){
        return true;
      
      }
    }
  return false;
  }

module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
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
 * unique: Function searches through an input array and returns an array with duplicate elements removed
 * @param {array}: The input array the function iterates over
 * @return{array}: The function returns an array with the duplicate elements removed from the input array
 */

 function unique(array){
    return[...new Set(array)]; 
  }

  module.exports.unique = unique;

  /**
   * filter: 
   * @param{array}
   * @param{function}
   * @return{}
   * 
   * 
  */
function filter(array, func){
    var results = [];
    for(var i = 0; i < array.length; i++){
      if(func(array[i], i, array) === true){
        results.push(array[i]);
      }   
    }  
    return results;
  }

  module.exports.filer = filter;


