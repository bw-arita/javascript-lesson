//基礎編
//Q1 
let nickname = "ごっしー";
let age = 28;
console.log("私のニックネームは" + nickname + "です。年齢は" + age + "歳です。");

//Q2 
let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];
console.log("私の好きな言語は" + languages[0] + "です。次は" + languages[3] + "を勉強してみたいです。")

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

//Q5
console.log(
  (playerList[0].age + playerList[1].age + playerList[2].age)/playerList.length
);

//Q6 
function sayHello(){
  console.log("Hello");
}
sayHello ();
let sayWorld = function () {
  console.log("World");
};

//Q7
sayWorld();
user.birthday = '2000-09-27';
user.sayHello = function() {
  console.log("Hello!");
};
user.sayHello();

//Q8
let calc = {};
function add(x,y){
 console.log(x + y); 
};
function subtract(x,y){
 console.log(x - y); 
};
function multiply(x,y){
 console.log(x * y); 
};
function divide(x,y){
 console.log(x / y); 
};
calc.add = add;
calc.subtract = subtract;
calc.multiply = multiply;
calc.divide = divide;
calc.add(3, 4);
calc.subtract(20, 10);
calc.multiply(7, 7);
calc.divide(100, 20);

//Q9
function remainder(x , y){
return x % y;
};
let result = remainder(5 ,3);
console.log("5 を 3 で割った余りは" + result + "です。");

//Q10
"変数であるXはスコープ内である関数fooの中でのみ使えるが、関数の外からxを参照しようとしているため、エラーが出力される。"

//応用編
//Q1
let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

//Q2 - 1 
setTimeout(() => {
  console.log("Hello World!");
}, 3000);

//Q2 - 2
function printName(firstName, formatter) {
  console.log(formatter(firstName));
}
const addIntro = (name) => '私の名前は' + name + 'です。';
printName("有田", addIntro)

//Q3
let num = 14
if(num > 0){
console.log("num is greater than 0");  
}else if (num < 0){
console.log("num is less than 0")
}else{
console.log("num is 0")
};

//Q4
let numbers = [];
for (let i = 0; i < 100; i++) {
  numbers.push(i);
}
console.log(numbers);

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) {
let value = mixed[i];
if (typeof value === "number") {
if (value % 2 === 0) {
console.log("even");
} else {
console.log("odd");
}
} else {
    console.log("not number");
  }
}