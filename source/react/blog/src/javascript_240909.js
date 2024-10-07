let string1 = "Hello, World!";
let string2 = 'Hello, World!';
console.log(string1);
console.log(string2);
let string3 = 'Hello, "World';
let string4 = "Hello, 'World";
console.log(string3);
console.log(string4);
let string5 = "Hell\"o, \'World!";
console.log(string5);



let string6 = '문자열' + " 연결 연산자";
console.log(string6);

let string7 = '문자열은 큰따옴표(")나' + "작은 따옴표(')로 감싸면 됩니다.";
console.log(string7);

let string8 = "이스케이프 문자를 이용해서\n줄 바꿈하고 싶어요";
console.log(string8);

let string9 = `문자열은 큰따옴표(")나 작은따옴표(')로 감싸면 됩니다.`;
console.log(string9);

let string10 = `문자열은 큰따옴표(")나
작은따옴표(')로 감싸면 됩니다.`;
console.log(string10);

let dan = 3;
let gugu = 8;
let string11 = `${dan} 곱하기 ${gugu}은 ${dan * gugu}입니다.`;
console.log(string11);

let num1 = 10;
let num2 = 0.1;
console.log(num1);
console.log(num2);

let sum = 0.1 + 0.2;
console.log(sum);

let sum1 = (0.1*10 + 0.2*10)/10;
console.log(sum1);

let boolean1 = true;
let boolean2 = false;
console.log(boolean1);
console.log(boolean2);

let boolean3 = 10 < 20;
let boolean4 = 10 > 20;
console.log(boolean3);
console.log(boolean4);

let empty;
console.log(empty);

let empty2 = null;
console.log(empty2);

let array = ['abc', 10, true, undefined, null, [], {}, function(){}];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);


let studentScore = [80, 70, 90, 60];
console.log(studentScore[1]);

let studentScore2 = {
korean:80,
english:70,
math:90,
science:60
};
console.log(studentScore2.korean);
console.log(studentScore2['english']);
console.log(studentScore2.math);
console.log(studentScore2.science);

let sum2 = 10 + 20;
let sub = 20 - 10;
let multi = 10 * 20;
let div = 10 / 2;
let remain = 10 % 3;
let expon = 2 ** 3;
console.log("sum : " + sum2);
console.log("sub : " + sub);
console.log("multi : " + multi);
console.log("div : " + div);
console.log("remain : " + remain);
console.log("expon : " + expon);

let increment = 10;
console.log("increment : " + increment);
console.log("increment++ : " + increment++);
increment++;
console.log("increment : " + increment);
let decrement = 10;
console.log("decrement : " + decrement);
console.log("decrement-- : "+ decrement--);
decrement--;
console.log("decrement : " + decrement);

let num = 10;
console.log("num : " + num);
let subNum = ++num;
console.log("subNum: " + subNum);
console.log("num : " + num);

let num3 = -10;
num3 = -num3;
console.log("num : " + num3);
num3 = -num3;
console.log("num : " + num3);

let x = 10;
console.log("x : " + x);
x += 5;
console.log("x : " + x);
let y = 10;
console.log("y : " + y);
y -= 5;
console.log("y : " + y);
let z = 10;
console.log("z : " + z);
z *= 5;
console.log("z : " + z);
let u = 10;
console.log("u : " + u);
u /= 5;
console.log("u : " + u);
let v = 10;
console.log("v : " + v);
v %= 3;
console.log("v : " + v);
let t = 10;
console.log("t : " + t);
t **= 2;
console.log("t : " + t);





console.log(10 != '10');
console.log(10 !== '10');
console.log(10 < 10);
console.log(10 > 10);
console.log(10 >= 10);

console.log(true && true);
console.log(true && false && true);
console.log("" && "cat");
console.log(undefined && "cat");
console.log(0 && "cat");
console.log(null && "cat");
console.log(1 && "cat");
console.log("cat" && "dog");
console.log("cat" && "dog" && "bird");
console.log("cat" && 1);
console.log(false || true || false);
console.log(false || false);
console.log("" || "cat");
console.log("dog" || "cat");
console.log(!false);
console.log(!(10 < 20));
console.log(!(10 < 20 && 20 < 10));

let score = 90;
let grade = score >= 90 ? 'A+' : 'B';
console.log("grade : " + grade);

let num4 = 10;
let strNum = "10";
console.log(num4+strNum);
if(num4 == strNum) {
    console.log(`equals`);
}
console.log(typeof(num4));
console.log(typeof(String(num)));
if(String(num4) == strNum){
    console.log(`equals`);
}

let num5 = 0;
if(num5 > 0){
    console.log("양수");
}else if(num < 0){
    console.log("음수");
}else{
    console.log("0");
}

let food = "melon";
switch(food){
    case "melon":
        console.log("fruit");
        break;
    case "apple":
        console.log("fruit");
        break;
    case "banana":
        console.log("fruit");
        break;
    case "carrot":
        console.log("vegetable");
        break;
    default:
        console.log("It's not fruits and vegetables.");
        break;
}

let num6 = 1;
while(num6 <= 9){
    console.log("num : " + num6);
    num6++;
}

let num7 = 1;
do{
    console.log("num : " + num7);
    num7++;
} while(num7 <= 9);

let num8 = 1;
for(i=1; i<=9; i++){
    console.log("num : " + num8);
    num8++;
}

for(let i=0; i<2; i++){
    console.log(`i: ${i}`);
    for(let k=0; k<2; k++){
        console.log(`     k: ${k}`);
    }
}

let arr = ["banana", " apple", "orange"];
for(let i=0; i<arr.length; i++){
    console.log(`배열 arr ${i}번째 값은  : ${arr[i]}`);
}

let obj = {name : "철수", age : "20"};
for(let key in obj){
    console.log(key + ": " + obj[key]);
}
for(let arrIndex in arr) {
    console.log(`배열 arr ${arrIndex}번째 값은 ${arr[arrIndex]}`);
}

for(let i=0; i<10; i++){
    console.log(i);
    if(i === 5) break;
}

let obj1 = {name:"전지훈", age:"22", address:"천안"};
for(let key in obj1){
    if(key === "address") break;
    console.log(key + ": " + obj1[key]);
}

for(let i=1; i<=4; i++){
    if(i % 2 === 1) continue;
    console.log(i);
}

let sum3 = 0;
for(let i=0; i<=100; i++){
    sum3+=i;
}
console.log(sum3);

let count = 0;
for(let i=1; i<=999; i++){
    if(i % 2 === 1) continue;
    count++;
}
console.log("짝수의 개수는 " + count + "개입니다.");
