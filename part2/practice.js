function dummy () {
  return 1;
}
/**
 * Reverse an array
 * 
 * @example
 * 
 * reverse([1,2,3]) returns [3,2,1]
 * 
 * @param {array} array
 * @returns {array}
 */
function reverse (array) {
  return array.reverse();
}

/**
 * Reverse a string
 * 
 * @example
 * 
 * stringReverse('hello') returns 'olleh'
 * 
 * @param {string} text
 * @returns {string}
 * 
 */
function stringReverse (text) {
  return text.split('').reverse().join('');
}


/**
 * return a fixed length fibonacci list
 * 
 * @example
 * 
 * fibonacci(5) returns [1,1,2,3,5]
 * 
 * @param {number} length
 * @returns {array}
 */
function fibonacci (length) {
  let x = 1, y = 1, returnArray = [1];
  
  while(y < length) {
    returnArray.push(y);
    y += x;
    x = y - x;
  }

  return returnArray;
}

/**
 * return the biggest number in the array
 * 
 * @example
 * 
 * biggest([1,3,5,7,9]) returns 9
 * 
 * @param {array} array
 * @returns {number}
 */
function biggest (array) {

  // use spread operator to expand for the Math.max args
  return Math.max(...array);
}

/**
 * Creates an array of numbers progressing from 
 * start up to, but not including, end
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * range(0,4) returns [0,1,2,3]
 * 
 * @param {number} start 
 * @param {number} end 
 * @returns {array}
 */
function range (start, end) {
  // im not to sure if this is like a trick question and i'm supposed to handle like start > end
  if(start > end) return [];

  let returnArray = [];

  for(i = start; i < end; i++) {
    returnArray.push(i);
  }

  return returnArray;
}

/**
 * Recursively flattens array.
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * flatten([1,[2,[3,4],[5,[6]]]]) returns [1,2,3,4,5,6]
 * 
 * @param {array} array
 * @returns {array}
 */
function flatten (array) {
  // begin by reducing the array, e.g. reducing the array of items to a single item
  return array.reduce((accumulator, item) => {

    // concat the accumulator with item
    return accumulator.concat(

      // however if the item is an array, recurse flatten on the item, 
      // so it will return a flattened array of its children ( and if its children have array it will also do so )
      // else just concat the child array ( item )
      Array.isArray(item) ? flatten(item) : item
    );
  }, []);
}

module.exports = {
  dummy,
  fibonacci,
  reverse,
  flatten,
  biggest,
  flatten,
  stringReverse,
  range
};
