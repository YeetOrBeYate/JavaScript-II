// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


/*
  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, (item) => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"

*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb();
}

getLength(items, () =>{
  console.log('array length:', items.length);
});





function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr);
}

const lasty = (array) =>{console.log("last item in array:", array[array.length-1]);}

last(items, lasty);



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  sum = x+ y;
  cb(sum);
}

const addition = (sum) =>{console.log("this is the sum: " , sum);}

sumNums(8,6,addition);

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  yeet = x * y;
  cb(yeet);
}

const multi = (result) =>{console.log(`this is the product: ${result}`);}

multiplyNums(7,2, multi);

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  let found = false;
  list.forEach((l)=>{
    if(l == item){
      found = true;
    }
  });

  cb(found);

}

const lagrange = (pal) =>{console.log("contains function:", pal);}

contains("Pencil", items, lagrange);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
