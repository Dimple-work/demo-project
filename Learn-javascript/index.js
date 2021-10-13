
// var $myname='dimple';
// console.log($myname);
// Naming Practice
// var _myName = "dimple";
//  var 1myName = "malviya"; //not valid
// var _1my__Name = "dimpi";
// var $myName = "dimple malviya";
// var myNaem% = "dimple malviya";
// console.log( $myName);
// console.log(10+20+"30");
// console.log(10-"5");bug
//console.log('hello' - 'bye');bug
// var myName='dimple';
// var myNumber=6587495323;
// console.log(isNaN(myNumber));
// if(isNaN(myNumber)){
//     myNumber=654823563;
//     console.log(myNumber);
// }
// else{
//     console.log(myName);
// }
//nan practice
//variables,data-types
// console.log(NaN===NaN);
// console.log(Number.NaN===NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(NaN));
//expressions and  operators
//combination of operators and operand is expression
// var x=5, y=5;
// console.log("check equality" + (x==y));
// var num=5;
// console.log(num);
// var number=--num -5;
// console.log(number);
// var demo=["hello", "hiii"];
// console.log(demo[0]);
// var a=20, b=30, c=20;
// console.log(!(a>b || a>c));
// var Name='dimple';
// console.log(Name +" demo");
// console.log(Name +" demo12");
// console.log(4**4); exponentiation(first operand treated as power of second operand)
//  var a=10, b=20; //swaping variable using third variable
//  var c=b;
//  b=a;
//  a=c;
//  console.log(a, b)
//without hird variable
// var a=10, b=20;
// a=a+b ; //30
// b=a-b ;  //10
// a=a-b;
// console.log("value of a " + a);
// console.log("value of b " + b);
// var num1="5", num2=5;
// console.log(num1===num2);
//diffrence between == and ===
// var year=1900;
// if(year%4==0){
//     if(year%100==0){
//         console.log('its leap year');
//     }
//     else{
//         console.log('this year is not leap year');
//     }
// }
// else {
// console.log('its not leap year');
// }
//falsy values in javascript 0, "", undefined, NaN,null
// if(null){
// console.log('this is false')
// }
// else{
//     console.log('this is not')
// }
//ternary operator is the only one that takes three operands
// variablename=(condition)? value1:value2;
// var age=10;
// console.log((age>18)? 'eligible':'not eligible');
// var num1=20;
// console.log(num1);
// var num2=30;

// let num2=30;
// let sum=myfunc();
// function myfunc(){
//     let num2=40;
//     console.log(num2);
// }
// console.log(num2);
// let a=2;
// let an=2;
// console.log(a,an);

//var, let and const
 //declare variable using var can acces before declaration but while using let and const cant access
 //use const  unless you know that the value will change. we can use this to declare array,object,function
//const must initialise with value
 myName='dimple';
var myName;
console.log(myName);
myname2='dimple';
let myname2;
console.log(myname2);

//function practice
//block of code that is designed to perform task
//before we use it we have to define the function
//follows by function keywod then name then ()then {}
//used for code resuabiliy define once and use multiple times with diffrent arguments
function myfunction(){
    var a=30,b=40;
    var sum=a+b;
    console.log(sum);
}
//will not give any result because we did not call that 
function myfunction(){
    var a=30,b=40;
    var sum=a+b;
    console.log(sum);
}
myfunction(); //result 70

//second define variable outside of the function
var a=30,b=40;
var c=myfunction();
console.log(c);
function myfunction(){
return a*b;
}

//passing  arguments in function
myfunction(40,5);
function myfunction(a,b){
    var c=a/b;
    console.log(c);
}

//check whether number is divisible by 10 or not
var num=100;
var evennum=checkdivisible();
function checkdivisible(){
if(num%10==0){
console.log('Given number is divisible by 10');
return true;
}
else{
    console.log('Given number is not  divisible by 10');
}
}

//same function with diffrent arguments
add(20, 30);
add(100, 200);
add(25.5, 30.2);
function add(a,b){
    var sum=a+b;
    console.log(sum);
}



//objects
//created using curly brackets
// values are written in name : value pair
var details={
    firstname:"Dimple",
    lastname:"Malviya",
    profession:"web-designer"
}
console.log(details);
//changing  property value
details.firstname="dimpi";
console.log(details);
//add property
details.age="25";
console.log(details);
//delete property of object
delete details.age;
console.log(details);

//object methods.. objects can have methods
//methods are actions that are performed on objects
//methods are stored in properties of object


let s1 = Symbol();
console.log(Symbol() == Symbol());
let s2 = Symbol('event.save');
console.log(s2.toString());
let a='fbbfgcb';
a=+a;
console.log(a);
let num=true, num2=20;
numtotal=num++ +num2;
console.log(numtotal);
console.log(!num);
console.log(num=num<<num2);
var age=25;
var allow= age>30? 'noteligible':((age>18)?'eligible':'noteligible');
console.log(allow);
var b=30;
switch(true){
	case (b<10):	
	console.log('false');
	break;
	case (b==30):
	console.log('true');
	break;
	default:
	console.log('b is 30');
}
var num3=2;
// while(num3<=20){
// 	console.log(num3);
// 	num3=num3+2;
// }
do{
	console.log(num3);
	num3=num3+2;
}
while(num3<=20)
	let j=1;
	for (;j<20; j++) {
    console.log(j);
}
let str="  hello ";
// str=`hiii ${str}`;

console.log(str);
console.log(str.trimLeft());
console.log(str.length);
console.log(str[2]);
let s = '  welcome  ';
console.log(s[0]);
console.log(s);
console.log(s.trim());
let counter;
for (let i=0; i<s.length; i++) {
// counter=s[i];
// console.log(counter);
// console.log(counter);
}
// console.log('The number of s found in the string is ' + counter);
// console.log(s.toLowerCase());
let str1 = '1234'.padStart(5,'3');
console.log(str1); 
let strnew=['hello','hii','sjhf'];
let strnew1=['bye','go','bye'];
let result=''.concat(1,2,3,6,4,6,5,6,8);
console.log(result);
//split string into words
var strbrk='hello welcome to the team';
// var strbrk1=strbrk.split(' ');
var substr='e';
console.log(strbrk.lastIndexOf(substr));
// var userenter=prompt('Enter Something');
// var convertnum=parseInt(userenter);
// var check= typeof(userenter);
// console.log(check);
// if(typeof(userenter)=='number'){
// 	alert('Given input is number');
// }
// else if(typeof(userenter)=='string'){
// 	alert('Given input is string');
// }
// else{
// 	alert('Invalid input');
// }
// console.log(userenter.length);
// console.log(userenter);
// if(!userenter.length) {
// 	var userenter1 = prompt('Please enter valid input');
// 	debugger
// 	if(userenter != NaN) {	
// 		alert('Given input is string');
// 	}
// } else if(isNaN(userenter)){
// 	console.log(isNaN(userenter));
// 	alert('Given input is string');
// } else{
//  	alert('Invalid input');
// }

let testarray=[2,5,465,653,548]
console.log(testarray.length=6);
console.log(testarray);
test(6,5);
function test(a,b){
	var total=a*b;
	console.log(total);
}
function add(a, b) {
    return a + b;
}

let sum = add;

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result1 = average(10, 20, sum);
//anonymous function 
console.log(result1);
let show=function(){
	console.log('hello welcome');
}
show();
let showo = () =>console.log('hello welcomeerere');
//exeute function immediately after declaration
(function(){
	console.log('anonymous function');
})();
let person=[
{name:'dimple', age:25},
{name:'dimpi', age:20},
{name:'dim', age:28}
];
let checkage=[];
checkage=person.filter(function(e){
	return e.age>20;	
});
console.log(checkage);

let newarray= [1, 2, 30, 9, 20, 4, 5, 6, 10, 18, 27];
let resultarray=[];
for(var i=0;i<newarray.length;i++){
	
	if(newarray[i]%3==0){
		 resultarray.push(newarray[i]);
	}
}
