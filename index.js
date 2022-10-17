// //string methods
// let names ="Esther";
// let otherValues = names.toUpperCase();    //.toUpperCase
// console.log(otherValues);

// let lagos = "Apapa";
// let east = lagos.toLowerCase();      
// console.log(east);

// let result = " i love beans and bread with a chill malt";
// console.log(result.trim());       //trim;to remove space at the end

// //split
// let question = "do you have a pen and book";
// console.log(question.split(" "));

// let jaji = "he is a tall boy";
// let boy = (jaji.split("t"));
// console.log(boy);

// let jajis = "he is a. very.handsome.boy.";
// let bigBoy = jajis.split(".", 3);
// console.log(bigBoy);

// let text = " mr prince has a blue house and a blue car";
// let results = text.replace("prince", "king");
// console.log(results);


// let mstr = "This is my test string to practice the javascript string function concepts.This is gonna be fun."
// console.log(mstr.length);



// let middleString = mstr.indexOf("T", 2);
// console.log(middleString);
// let endOfStrings = mstr.indexOf("n", )+1;
// console.log(endOfStrings);
// let newStrings = mstr.slice("middleString, endOfStrings");
// console.log(newStrings.length);
// //find the subtring with length 12 from the startof the from the string 
// let love= mstr.substring(0, 12);
// console.log(love.length);
// //find the substring wuth the length 12 from the end of the string mstr
// //let theString= mstr.indexOfsecondFullStop(".");
// //console.log("thestring,length");
// //let  theString1= mstr.indexOf();
// //let boy = mstr.indexO
// //let substring = mstr.indexOf(start, lastIndexOfFullStop -12);
// //console.log("substring.length");

// let theArray = ["name", 2, 3];
// console.log(Array.isArray(theArray));    //method of array:isArray
// //the reverse method
// console.log(theArray.reverse());

// let boss ="colin"
// console.log(boss.split(""));
// let him=boss.split("");
// console.log(Array.isArray(him));
// console.log(him.reverse())
// console.log(him.reverse());
// console.log(him.toString().replaceAll(",", ""));

// //the push
// let pushArray = theArray.push(4,"goal", [1,2,3])
// console.log(pushArray);
// console.log(theArray);
// console.log(theArray.indexOf("name"));
// //the reverse :unshift
// theArray.unshift("ronaldo", 7);
// console.log(theArray);
// //arithemetic operators(+,-,/,%)(%=module,the remainder)
// console.log(9 **3+(2-5));
// let number = [1, "two", 3, 5, 7, 8, 9,];
// //console.log(number.splice(3));
// //console.log(number);
// //the fill method
// //console.log(number.fill(girl ="esther", 2));
// //concat array
// //let somename = ["jaji", "esther", "isaac"]
// //console.log(somename.concat);
// let rand = Math.random() * 10
// console.log(rand);
// console.log(Math.floor(rand));
// console.log(9**2+3-5);
// console.log(7%4);
// //tenary operators

// false ? console.log("yes") : console.log("no");
// //javascript functions
// let x = 5;
// console.log(x * x);   //x is a parameter that will hold the argument
// function square(x){
//     return x * 2
// }

// console.log(square(7))  // 7 is a argument
// function r(x, y){
//     return x * y
// }
// console.log(r(7, 8))
// function ran(){
//     return Math.floor(Math.random() *50)

// }
// console.log(ran(50))
// const power = (base, exponent) =>{
//    return base ** exponent;
// }
// console.log(power(10,2))
// function sayMyName(x){
//     return x 
// }
// console.log(sayMyName("esther"))
// // function numb(){
// //     return Math.round(Math.round() *3.89)
// // }
// // console.log(numb(3.89))
// //class work
// let we = 

// function we(x){
//     return [x.toUpperCase()]
// }
// console.log(we("bola, esther,nike"))
// //write a function that
// function two(){
//     console.log("good morning") 
// }
// two();
// let greetings = function(k){
//     console.log(k)
// }
// greetings("good morning")
// //1.write a function that takes two numbers as an two
// // numbers as an argument (a and b),sum a and b , return the result
// function add(a,b){
//     console.log(a+b)   //declaration function
// }
// add(2,3)

// //2.write a function that takes a string  as an argument ,extract the last three letters 
// //from the string, return the result
// let our = (p) =>{
//     console.log(p.slice(p.length-3,p.length))  //arrow function
// }
// our("extra")
// let rabbit = function(r){
//     console.log(r.slice(r.length-3,r.length))  //function expression
// }
// rabbit("biggest")
// function extract(w){
//     console.log(w.slice(w.length-3,w.length))  //function declaration
// }
// //3. write  a function that takes an array and a value as an argument ,return the nth term 
// //of "a" myfunction([1,2,3,4,6]4)=6

// let numbers=(g,o)=>{
//     console.log(g[o]);
// }
// numbers([1, 2, 3, 4, 6],3)// arrow function
// let assure= function(j,u){
//     console.log(j[u])
// }
// assure([1, 2, 3, 4, 6],3)  // expression function
// //4.write a function that takes a number as an argument if the number is even return "true" else "false"
// //else statement
// let test=(s,y)=>{
//     if ( s===y){ console.log("true");}
//     else{console.log("false")}
// }
// test(3,5)
// //4.write a function that takes an array and a value as an argument ,if the number is even return "true"
// //else "false"

// extract("friend")
// let read = function(h){
//     h % 2 === 0 ? console.log("true"): console.log("false");  //expression function
// }
// read(15);
// let calm = (e) =>{
//     e % 2 === 0 ? console.log("true"): console.log("false") // arrow function
// }
// calm(15)
// function blue(j){
//     j % 2 ===0 ? console.log("true") : console.log("false") // declaration function
// }
// blue(15)
// //5.write a function that takes two values two values , say a and b, as arguments,
// //retun true if the two values are equal and of the same type.

// function sip(y,d){
//     y === d ? console.log("true") : console.log("false");  
// }
//  sip(9,9);                                                   //declaration function
// let lol=function(a,k){
//     a === k ? console.log("true") : console.log("false");
// }
// lol(9,9)                                                       // expression function
// let moji=(q,i)=>{
//     q === i ? console.log("true") : console.log("false");
// }
// moji(9,9);                                                      // arrow expression
// //6.write a function that takes takes a string (A) AS AN argument .Extract the first half as a, result
// function half(a){
//     console.log (a.slice(0,a.length/2))
// }
// //half("proprietress");
// let something = function(b){
//     let result= b*b
//     return result
// }
// something(3)
//  let answer= something(3)
//  console.log(answer);

//  let dip = (base)=>{
//      let result= base ** 2
//      return result 
//  }
//  console.log(dip(2))
//  // conditional function(){}
//  let logIn = "esther123"
//  let wrong = "esther"
//  if(logIn===wrong){
//     console.log("enter")
// }else{
//     console.log("pls input correct password")
// }
// let together = "userName" && "password" 
// let onlyName = "wrongInput"
// if (together===onlyName){console.log("logIn")
// }else{
//     (console.log("wrongInput"))}

// let input="vuoke"  
// let passWord = "vuoke234"
// let wronginput="esther"
// let wrongpassword="vuoke123"
// if(input===wronginput && passWord===wrongpassword) {console.log("valid")}else{console.log("invalid")}
// //loop
// //let num=0
// //do{
//   //  console.log(num)
//   //  num= num + 2
// //}
// //while(num <= 10)
// let newNum=1

// do{
//     if(newNum % 2 === 0){   //if the remainder isnt 0 do not console.log newNum
//     console.log(newNum)
//    }
//    newNum++
//    }   while(newNum <= 20)
    let newN =1
   let counter =0

   while(counter < 10){
      newN= newN * 2
      counter++
      console.log("nuwN",newN)
      console.log("counter", counter)
   }
//for loop
let twoCounter=0

for(let nub=1;twoCounter<= 10;nub*=2){
         console.log("number",nub)
         console.log("twoCounter",twoCounter)
         twoCounter++
}





 























 