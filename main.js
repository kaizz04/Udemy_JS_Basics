let num  = 2+2;
//console.log(num);

//console.log(num+3);

let userName="kaveesh";

let radius = 5;
const pi = 3.14;
let area ;

area = pi * radius * radius
//console.log(area); 

let firstName= "kaveesh";
let lastName = "manuja";

//console.log(firstName+" "+lastName);

let user  = "test\nUser";
//console.log(user);

let number =  5;
//console.log(typeof (5/"kaizz")); // type is number and output is Nan(not a number)

let num1 = Number("123");
let age = String(30);

// console.log(num1, typeof num1);
// console.log(age, typeof age);

let x;
// console.log(x, typeof x);
x=8;
// console.log(x, typeof x);
x=x + "";
// console.log(x, typeof x);
x = x - 2;
// console.log(x, typeof x);
x = !x;
// console.log(x, typeof x);
x= Boolean(10);
// console.log(x, typeof x);
x= Boolean("Kaizz");
// console.log(x, typeof x);

let y = parseInt("123 Kaizz");
// console.log(y,typeof y);

let pNum=4;
let xNum = pNum++; //Post Increment
//console.log(pNum,xNum);

let yNum = ++pNum; //Pre Increment
//console.log(pNum,yNum);

let num2=4 ** 4; //4*4*4*4
//console.log(num2);

let data1 = 5<6;
//console.log(data1);

let data2="Pen";
let data3="Pencil";

let max1= data2 < data3;
//console.log(max1);

let x1=7, x2=5, x3=10;
let x4 = x1>x3 && x2<x3;
//console.log(x4);

// if(x1 > x3)
//     console.log("x1 is greater");
// else {
//     console.log("x3 is greater");
//     console.log("Hello");
// }  
// console.log("Bye...");


// if(x1>x2 && x1>x3){
//     console.log("x1 is greatest");

// }else if(x2>x1 && x2>x3){
//     console.log("x2 is greatest");

// }else{
//     console.log("x3 is greatest");
// }

let x5 = 8;
let res1;

res1 = x5 % 2==0 ? "Even" : "Odd";
//console.log(res1);

let day="holiday";

switch(day){
    case 'Monday':
       // console.log("7 a.m");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
      //  console.log("4 a.m");
        break;
    case "Friday":
       // console.log("9 a.m");
        break;
    case "Saturday":
    case "Sunday":
        //console.log("8 a.m");
        break;
    
        default:
          //  console.log("watch netflix");

}

let x6=9;
let x7=5;
let res2=x6+x7;
//console.log(`The addition of ${x6} and ${x7} is ${res2}`);

let i1=1;
while(i1 <= 5){
    //console.log("Hi "+ i1);
    i1++;

}

do
{
   // console.log ("This is do while "+i1 );

}while(i1<=1)

for(let i2=0; i2<=50; i2++){
    if(i2%3===0){
       // console.log(i2);

    }

}

let i3=123456;
while(i3>0){
   // console.log(i3%10);
    i3=parseInt(i3/10);

}

let input1 = "work exp";
let input2 = "name";

// let alien = {
//     name:'kaveesh',
//     age:23,
//     'work exp':2,
//     laptop:{
//         brand:'Asus',
//         ram:8,
//         cpu:'i7'
//     }
// }
// console.log(alien.name);
// console.log(alien['age']);
// console.log(alien[input1]);
// console.log(alien[input2]);

// console.log(alien.laptop);
// console.log(alien.laptop.brand);
// console.log(alien.laptop.cpu.length);
// delete alien.laptop;
// console.log(alien);

// for(let key in alien){
    //console.log(key,alien[key]);
// }
// for(let key2 in alien.laptop){
   // console.log(key2,alien.laptop[key2]);
// }

function greet(user){
    return `Greeting.. ${user}`;
}

let user1= "kaizz";
let str =greet(user1);
//console.log(str);

let add = function(a1,a2){
    return a1+a2;

}
let sum = add;
let res3 = sum(2,3);
// console.log(res3);


let add2 = (a3,a4)=>{
    //console.log("Hello Arrow Fun")
    if(a3 | a4 > !0){
     
        a3 = Math.abs(a3);
        a4 = Math.abs(a4);
    }
    return a3+a4
}
//console.log(add2(20,-10));

let add3 = (a5,a6)=> a5+a6;
//console.log(add3(12,12));

let laptop = {
    brand:'Hp',
    cpu:'i9',
    ram:8,

    process: function(){
       // console.log(`This is ${this.brand} laptop`);
    }
}
//laptop.process();

let computer = {
    brand:'Asus',
    cpu:'i5',
    ram:6,
    compare: function(lap){
        if(this.cpu > lap.cpu){
            console.log(this);

        }else{
            console.log(lap)

        }
    }
}
//computer.compare(laptop);


function Alien(name, tech){
    this.name=name;
    this.tech=tech;
    this.work=function fix(){
        console.log("Fix bugs...");
    }
}

let alien1 = new Alien('kaveesh','JS');
let alien2 = new Alien('manuja','Java');
// console.log(alien1);
// alien1.work();

let array1 = [1,3,6];
array1.push(7);
// console.log(array1);

let dataArray = [23, 'kaveesh', {tech:'JS'}, 
    function(){ console.log("This inner array function");}];

// console.log(dataArray);
// dataArray[3]();

let array2 = [2,4,8,1,9,2,6];
// console.log(array2);
// console.log(array2.pop());
// console.log(array2);
// console.log(array2.shift());
// console.log(array2);
// console.log(array2.unshift(1));
// console.log(array2);
// console.log(array2.splice(2,2,11,12));
// console.log(array2);

let array3 = [];

array3[0]=8;
array3[99]=10;

for(let n of array3){
    console.log(n);

}
console.log("break");

for (let key1 in array3){
    console.log(key1);
    console.log(array3[key1]);

}

























