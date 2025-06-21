// const name ="BHAVYAM" ------------------|
// const fullname = " JAIN"                |-------> ye wala old method hai ab ye use nhu
// console.log(name + fullname + 20); -----|

console.log(`hello my name is ${name} my cast  is ${fullname}`);// this modern way to writen to STRING // this is called  { string interpolation}

const gameName = new String ('bhavyam-jain') // 2 method for declaring the string

// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName[2]);
// console.log(gameName[3]);
// console.log(gameName[4]);
// console.log(gameName[5]);
// console.log(gameName[6]);
// console.log(gameName[7]);
// console.log(gameName[8]);

// console.log(gameName.__proto__);//is se object milta hai 

// console.log(gameName.length);
// console.log(gameName.toupperCase());

// console.log(gameName.charAt(4));// is se apne (chater)  chek ker skte hai ke konse (postion) per hai  // 4 per y aata hai 
// console.log(gameName.indexOf('y'));//ye charter kes postion per aata hai apne pass // like 4 per aata hai 

//  const newstring = gameName.substring(0,4) // ye jhatak no dale gya wha tak ka bta dega ke us k andar kya lekha hua hai 
//  console.log(newstring);
 
// const anotherstring = gameName.slice(-10,5) // is mai rangevalue deske hai or is me nagative value  be deskta hai 
//  console.log(anotherstring); //                                                         |_> agar negative value degya to ulta start kerta hai 


// const newstringOne = "   bhavyam    "
// console.log(newstringOne); // is me staring or endaing spacre remove nhi hota 
// console.log(newstringOne.trim()); // {trim} ye kam kerta hai starting or ending space remove ker deta hai  

const url = "https://hitesh.com/hitesh%20choudhary" // is me ye replace kerdeta hai jse is[ me % ko _ ]is me change kerdeya 
console.log(url.replace('%20','_'));
console.log(url.includes ('bhavyam')) // is se pta lag jata hai ke ye 'keyword' uske ander hai kya nhi [true/ false me aajta hai answer]

console.log(gameName.split('-')); // is se bhavyamjain ke [ 'bhavyam', 'jain' ] asa ho jya gya