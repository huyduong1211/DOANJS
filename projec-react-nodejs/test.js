//-----------------------------------------------------------------
//1. Write a function `sum` that computes the sum of the numbers in an array.

// sum([1, 3, 6]);
function sum(arrnum){
    const arr = arrnum;
    var total = 0;
    for (let index = 0; index < arr.length; index++) {
        if(!isNaN(arr[index])){
            total+=arr[index];
        }
        continue;
    }
    return total
    
}
sum([1,3,6]);
//----------------------------------------. Write a function `max` that accepts an array of numbers and returns the
//   *largest* number in the array.


// max([1, 5, 10, 15]);
function max(arrnum){
    const arr=arrnum;
    return Math.max.apply(null,arr);
}
max([1,5,10,15]);
//--------------------------------------------------------------
// 3. Try the following at a console:

//   ```js
//   "the quick brown fox jumped over the lazy dog".split(" ");
//   "Hello, world!".split("")
//   "1,2,3,4,5,6".split(",")
//   ```

//   What is returned by `split` (You can read more about it
//   [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)),
//   and how does it work?

//   Use `split` to write a function `longestWord` that takes a string as an
//   argument and returns the longest word.
   
// longestWord('This is my string')
function longestWord(word){
    var count = 0;
    var longeststring ="";
    var tempstringarr = word.split(" ");
    for (let i = 0; i < tempstringarr.length; i++) {
        var tempcharacterarr =  tempstringarr[i].split("");
            if(tempcharacterarr.length>count){
                count=tempcharacterarr.length;
                longeststring = tempstringarr[i];
            } 
    }
    return longeststring;
}
longestWord("this is my longest word");

//--------------------------------------------------------------
// 4. Write a function `remove` that accepts an *array* and an *element*, and
//   returns an array with all ocurrences of *element* removed.

//   ```js
//   function remove(array, element) {
//     // your code here
//   }
//   remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]
//   ```   
      function remove (array,element){
         var arr = array;
        for (let index = 0; index < arr.length; index++) {
           if(arr[index]==element){
               arr.splice(index,1)
               index --;
           }  
        }
       return arr;
      }
    remove([1,2,3,3,4,5],3);
// remove([1, 2, 3, 3, 4, 5], 3);
   
//--------------------------------------------------------------

// 5. Write a function `evens` that accepts an array as an argument, and returns
//   an array consisting of all of the *even* numbers in that array.
    function evens(array){
        var arr = array;
        var evensarr = [];
        for (let index = 0; index < arr.length; index++) {
            if(!isNaN(arr[index])&&arr[index]%2==0){
                evensarr.push(arr[index]);
            }
            
        }
return evensarr;
    }
  evens([1, 2, 3, 4, 5, 6, 7, 8]);
// evens([1, 2, 3, 4, 5, 6, 7, 8]);

//--------------------------------------------------------------
   
// 6. Write a function `evenLengthWords` that takes an array of *strings* as an
//   argument, and returns an array of just the words that have an even length.
      
// evenLengthWords(['keep', 'don\'t']);
   
//--------------------------------------------------------------
//ADVANCED
//--------------------------------------------------------------

// 1. Read about the `join` method on
//   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
//   and use it to implement a function that accepts a string as an argument and
//   returns that string *reversed*.
   
// join("sdrawkcab backwards");
  
// join("hello people");


//--------------------------------------------------------------

// 2. Write a function `keep` that "keeps" certain elements in an array. The
//   function will need to take *two* arguments, an array, and something else --
//   the second argument will be what is used to determine which elements to keep.

// You should be able to use this function to write `evens`, `evenLengthWords`,
//   a hypothetical `odds` function, or `oddLengthWords` *without changing the
//   `keep` function*.

// keep(['one', 'two', 'four'], evenLengthWords);