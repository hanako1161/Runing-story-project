// 함수 선언문 방법
/* function gugudan(){
    for(let i=1; i<=9; i++){
        console.log(`3 * ${i} = ${3 * i}`);
    }
}

// 함수 표현식 방법
const gugudan = function gugudan2(){
    for(let i=1; i<=9; i++){
        console.log(`4 * ${i} = ${4 * i}`);
    }
};

const gugudan3 = function(){
    for(let i=1; i<=9; i++){
        console.log(`5 * ${i} = ${5 * i}`);
    }
}; */

//gugudan();
//gugudan2();
//gugudan3();

//화살표 함수 방식으로 정의
/* const gugudan6 = () => {
    for(let i=1; i<=9; i++){
        console.log(`6 * ${i} = ${6 * i}`);
    }
};

gugudan6(); */

/* function gugudan7(dan){
    for(let i=1; i<=9; i++){
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
} */

//gugudan7(3);
//gugudan7(5);
//gugudan7(8);

/* function sum(p1,p2){
    console.log(p1+p2);
    console.log("=============");
}

sum(10, 20);
sum(10);
sum(); */

/* function multi() {
    console.log("----multi-----");
}
multi(30,40); */

/* function sum(p1=1, p2=2){
    console.log(p1);
    console.log(p2);
    console.log(p1+p2);
    console.log("=============");
}

sum(10, 20);
sum(10);
sum(); */

/* function sum(num1, num2){
    let result = num1 + num2;
    console.log ("inner: " + result);
}

sum(10, 20); */

/*function sum(num1, num2){
    return num1 + num2;
}

const result = sum(10, 20);
console.log("sum:" + result);

function sumNumber(num1, num2){
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return;
    }
    return num1 + num2;
}
let result2 = sumNumber("a", "b");
console.log("out:" + result2);
console.log("out:" + sumNumber(100, 200)) */

/* function getArrayMaxNumber(arr){
    let result = 0;

    for(let i=0; i<arr.length; i++){
        if(result < arr[i]){
            result = arr[i];
        }
    }
    return result;
}
const max = getArrayMaxNumber([10, 50, 30]);
console.log(max); */

/* let a = 10;
function sum(){
    let a = 0;
    console.log(`함수 내부: ${a}`);
    a = 11;
}
sum();
console.log(`함수 외부: ${a}`); */

/*let a = 10;
let c = 100;

function sum(){
    let a = 0;
    let b = 0;
    console.log(`함수 내부: ${a}`); // 0
    a = 11;
    console.log(`함수 내부: ${a}`); // 11
    console.log(`함수 내부: ${b}`); // 0
    console.log(`함수 내부: ${c}`); // 100
    c = 1004;
}
//sum();
console.log(`함수 외부: ${a}`); // 10
console.log(`함수 외부: ${c}`); // 1004 */

/*let a = 10;
const c = 20;
var d = 100;
console.log(`1코드 블록 내부 a: ${a}`); // 10
console.log(`2코드 블록 내부 c: ${c}`); // 20
console.log(`3코드 블록 내부 b: ${d}`); // 100
{
    let b = 20;
    var e = 200;
    console.log(`4코드 블록 내부 a: ${a}`); // 10
    console.log(`5코드 블록 내부 a: ${b}`); // 20
    console.log(`6코드 블록 내부 b: ${c}`); // 20
    console.log(`7코드 블록 내부 b: ${d}`); // 100
    console.log(`8코드 블록 외부 b: ${e}`); // 200
}
console.log(`9코드 블록 외부 a: ${a}`); // 10
// console.log(`10코드 블록 외부 b: ${b}`); // undefined
console.log(`11코드 블록 외부 b: ${c}`); // 20
console.log(`12코드 블록 외부 b: ${d}`); // 100
console.log(`13코드 블록 외부 b: ${e}`); // undefined */

/* let a = 10;
const b = 20;
console.log(`1함수 외부 a: ${a}`);
console.log(`2함수 외부 b: ${b}`);
function sum(){
    let a = 50;
    const b = 70;
    console.log(`3함수 내부 a: ${a}`);
    console.log(`4함수 내부 b: ${b}`);
}
sum();
console.log(`5함수 외부 a: ${a}`);
console.log(`6함수 외부 b: ${b}`);
{
    let a = 50;
    const b = 60;
    console.log(`7블록 내부 a: ${a}`);
    console.log(`8블록 내부 b: ${b}`);
}
console.log(`9함수 외부 a: ${a}`);
console.log(`10함수 외부 b: ${b}`);

console.log(num);
var num = 10;

printHello(); */
/* function printHello(){
    console.log("Hello");
} */

/* var text = "1outside";
let ltext = "2outside"
console.log(`1전역변수 text: ${text}`);
console.log(`2전역변수 ltext: ${ltext}`);
function printScope(){
    console.log(text);
    var text = "inside";
};
printScope(); */


/* const person = {
    name: "Hong Gildong",
    age: 20
};
console.log(person["name"]);
console.log(person["age"]); */

/* const person = {
    name:{
        firstName:"Gildong",
        lastName:"Hong"
    },
    likes:["apple", "samsung"],
    printHello:function(){
        return "hello";
    }
};
console.log(person["name"]);
console.log(person["likes"]);
console.log(person["printHello"]);

console.log(person["name"]["firstName"]);
console.log(person["name"]["lastName"]);
console.log(person["likes"][0]);
console.log(person["likes"][1]);
console.log(person["printHello"]());

console.log(person.name);
console.log(person.likes);
console.log(person.likes[0]);
console.log(person.likes[1]);
console.log(person.printHello); */

/*function getCircleArea(radius){
    return radius * radius * 3.14;
}
const area = getCircleArea(10);
console.log(`원의 넓이 :  ${area}`); */
function getOrderDesc(arr){
    let result = 0;
    for(let i=0; i<arr.length; i++){
        const currentNumber = arr[i];
        if(result < currentNumber){
            result = currentNumber
        }
    }
    return result;
}
const result = getOrderDesc([10, 20, 100, 30, 40]);
console.log(result);

function getBMI(height, weight){
    const h = height / 100;
    const bmi = weight / (h * h);
    if(bmi > 25) return "비만";
    else if(bmi > 24 && bmi <= 25) return "과체중";
    else if(bmi > 18.5 && bmi <= 23) return "정상";
    else return "저체중";
}
const bmi = getBMI(170, 70);
console.log("bmi : " + bmi);