//                               array = collectaion of multiple item in single variable name 
//   javascript k array are resizeable 
// acess value in array like :- [0]
//SHALLOW COPY :- A shallow copy of an array is a new array that contains references to the same objects as the original array.// jo mne change kiya vo original array ko bhi change karega
// DEEP COPY :- A deep copy of an array is a new array that contains copies of the objects in the original array. // jo mne change kiya vo original array ko change nahi karega
// methods of array :-


// 1. create an array
const myarr = [0,1,2,3,4,5]
const myheroes = ['batman', 'superman', 'spiderman', 'ironman'];

const myarr2 = new Array(1, 2, 3, 4, 5); // another way to create an array
// console.log(myarr[4]);

// array methods

// myarr.push(6); // add element at the end of the array
// myarr.push(7); 
// myarr.pop(); // remove the last element of the array
// console.log(myarr); // [0, 1, 2, 3, 4, 5, 6]

//  myarr.unshift(6); // add element at the beginning of the array
//  myarr.shift(); // remove the first element of the array    
// //  console.log(myarr); // [6, 0, 1, 2, 3, 4, 5]

// console.log(myarr.includes(3)); // check if the array includes the element 3
// console.log(myarr.indexOf(3));  // get the index of the element 3

const newarr = myarr.join() //
// console.log(myarr);
// console.log(newarr); // 0,1,2,3,4,5

//                                           slice , splice

// slice is used to create a new array from a portion of the original array //-----------------------|
console.log("A",myarr);                                                     //                       |
const myn1 = myarr.slice(1, 3); // slice the array from index 1 to index 4 (not inclusive)         //| 
                                                                                                   //|
console.log(myn1); // [1, 2]                                                                      // |
 console.log("B",myarr);                                                                           //|----->|//       A [ 0, 1, 2, 3, 4, 5 ]
 //                                                                                                    |       //          [ 1, 2 ]
   //                                                                                                  |       //        B [ 0, 1, 2, 3, 4, 5 ]
     //                                                                                                |       //        c  [ 0, 4, 5 ]
       //                                                                                              |       //            [ 1, 2, 3 ]
                                                                                            //       |
// splice is used to add or remove elements from the array                                     //    |  
const myn2 = myarr.splice(1, 3);// remove 3 elements from index 1                            //      |
console.log("c",myarr); // [0, 4, 5]                                                       //        |
console.log(myn2); // [1, 2]  //-----------------------------------------------------------------------|
