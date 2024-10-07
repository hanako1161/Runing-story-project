// const person = {
//     name:"Jeon Jihun"
// };
// person.name = "Jung June";
// console.log(person.name);

// const person = {};
// console.log(person);
// person.name = {
//     firstName : "Jihun",
//     lastName : "Jeon"
// }
// person.age = 22;
// person.familyCount = 4;
// person.family = ["father", "mother", "brother"]
// person.printHello = function(){
//     return "Hello";
// }
// console.log(person);
// delete person.name;
// console.log("-------delete--------");
// console.log(person);
// delete person.age;
// delete person.familyCount;
// delete person.family;
// delete person.printHello;
// console.log("-------delete--------");
// console.log(person);

// 기본 자료형 데이터 관리 : 깊은 복사
// let num = 10;
// let copyNum = num;
// console.log(`1num:${num}`);
// console.log(`2copyNum:${copyNum}`);
// num = 20;
// console.log(`3num:${num}`);
// console.log(`4copyNum:${copyNum}`);

// 참조 자료형 데이터 관리: 얕은 복사
// const person = {
//     name:"Jeon Jihun"
// };
// person.name = "전지훈";
// console.log(person);

// const copyPerson = person;
// person.name = "Hong";
// console.log(`1copyNum:${person.name}`);
// console.log(`2copyPerson.name:${copyPerson.name}`);

// const pw = "124";
// if(pw.length < 4){
//     console.log("비밀번호는 최소 4자리 이상 입력해 주세요:" + pw.length);
// }
// let email = "test@naver.com ";
// if(email.includes("@") !== false){
//     console.log("올바른 이메일 형식입니다." + email.includes("@"));
// }
// email = "test2!naver.com";
// if(email.includes("@") === false){
//     console.log("올바른 이메일 형식이 아닙니다." + email.includes("@"));
// }
// email = "test3!naver.com";
// if(email.indexOf("@") < 0){
//     console.log("올바른 이메일 형식이 아닙니다." + email.indexOf("@"));
// }
// email = "test4@naver.com";
// if(email.indexOf("@") > -1){
//     console.log("올바른 이메일 형식입니다." + email.indexOf("@"));
// }
// const arr = [10, 20, 30];
// for(let i=0; i<arr.length; i++){
//     console.log("arr["+i+"]:" + arr[i]);
// }

// const arr1 = [10, 20, 30, 40];
// arr1.push(50);
// console.log(`1arr1:${arr1}`);
// arr.pop();
// console.log(`2arr1:${arr1}`);
// arr1.unshift(0);
// console.log(`3arr1:${arr1}`);
// arr1.shift();
// console.log(`4arr1:${arr1}`);

// const arr2 = [10, 20, 30, 40];

// arr2.forEach(function(v){
//     console.log(v);
// });

// arr2.forEach(function(currentValue, index, array){
//     console.log(`현재 index:${index} 이며 현재 값은 ${currentValue}`);
//     console.log(`전체 배열:${array}`);
// });
// console.log(`5arr2:${arr2}`);

// const date1 = new Date(2022, 11, 25);
// const date2 = new Date(2022, 11, 25, 18, 30, 50);

// const date3 = new Date("2024-12-25");
// const date4 = new Date("2024/12/25/18:30:50");

// console.log(`date1:${date1}`);
// console.log(`date2:${date2}`);
// console.log(`date3:${date3}`);
// console.log(`date4:${date4}`);

// const curDate = new Date();
// console.log(`curDate:${curDate}`);

// const date = new Date(2024, 11, 25, 11, 41, 50);
// const dateFormat = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}
// ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// console.log(dateFormat);

// const curDate = new Date();
// console.log(`curDate:${curDate}`);
// const dateFormat1 = `${curDate.getFullYear()}-${curDate.getMonth()-1}-${curDate.getDate}
// ${curDate.getHours()}:${curDate.getMinutes()}:${curDate.getSeconds()}`;
// console.log(dateFormat1);

// const curDate = new Date();
// console.log(`curDate:${curDate}`);
// console.log(`curDate.getTime():${curDate.getTime()}`);

// const date1 = new Date('2022-12-23');
// const date2 = new Date('2022-12-25');
// console.log(`date1.getTime():${date1.getTime()}`);
// console.log(`date2.getTime():${date2.getTime()}`);
// const dateDiff = date2.getTime() - date1.getTime();
// console.log(`dateDiff:${dateDiff}`);
// const interval = dateDiff / (24 * 60 * 60 * 1000);
// console.log(`두 날짜의 차이는 ${interval}일 입니다.`);

// const floatNum = 10.52;
// console.log(`Math.floor(floatNum):${Math.floor(floatNum)}`);
// console.log(`Math.ceil(10.52):${Math.ceil(floatNum)}`);
// console.log(`Math.round(10.52):${Math.round(floatNum)}`);

// const random = Math.random();
// console.log(`Math.random():${random}`);

// function getMinMaxRandom(min, max){
//     console.log(`min:${min}`);
//     console.log(`max:${max}`);
//     let random = Math.random();
//     console.log(`Math.random():${random}`);
//     random = Math.floor(Math.random() * (max - min)) + 1 + min; 
//     return random;
// }
// const maxRandom = getMinMaxRandom(10, 20);
// console.log(`10이상 20이하 사이:${maxRandom}`);

// console.log();
// console.log(`1이상 45이하 사이:${getMinMaxRandom(1, 45)}`);
// console.log(`1이상 45이하 사이:${getMinMaxRandom(1, 45)}`);
// console.log(`1이상 45이하 사이:${getMinMaxRandom(1, 45)}`);
// console.log(`1이상 45이하 사이:${getMinMaxRandom(1, 45)}`);
// console.log(`1이상 45이하 사이:${getMinMaxRandom(1, 45)}`);
// console.log(`1이상 45이하 사이:${getMinMaxRandom(1, 45)}`);