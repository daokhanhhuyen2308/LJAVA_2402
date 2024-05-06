// function logger(a = 10, b = 20, c = 30){
//     console.log(a, b, c);
// }
// logger(1,2,3);


// const course1 = 'HTML';
// const course2 = 'CSS';
// const course3 = 'JavaScript';

// const result = 'Các khóa học trong front-end: ' + course1 + ' ' + course2 + ' ' + course3;
// console.log(result);

// const result = `Các khóa học trong front-end:
// + ${course1}
// + ${course2}
// + ${course3}`;
// console.log(result);

// const a = 5, b = 10;

// const result = `Giá trị của ${a} + ${b} là: ${a + b} `;
// console.log(result);

// const fruits = ['apple', 'orange', 'avocado'];

//ES5
// const firstFruits = fruits[0];

// const secondFruits = fruits[1];

// const last = fruits[2];

//ES6
// //nếu mà last lấy được giá trị trong mảng thì sẽ ưu tiên giá trị trong mảng hơn
// let [firstFruits, , last = 'undefined'] = fruits;

// console.log(firstFruits, last);

// const array1 = [3, 5];
// const [a, b] =  array1;
// const array2 = [b, a];
// console.log(array1, array2);

//destructuring in object

// const obj = {
//     d: 31,
//     m: 3,
//     y: 2024
// };
// //create day variable and value of day variable is key d;
// const {d: day, m, y, time_zone = '+7'} = obj;
// console.log(day);
// console.log(m);
// console.log(y);
// console.log(time_zone);


// const name = 'Augustine';
// const age = 20;
// const person = {
//     name,
//     age,
//     greeting: function(){
//     console.log('Hello world!');
//     console.log(`Hello my name is ${person.name} and I'm ${person.age} years old`);
//     }
// }
// person.greeting();





