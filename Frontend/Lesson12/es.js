// function logger(callback){
//     console.log('Đây là hàm logger');
//     callback();
// }
// let count = 0;
// function test(){
//     console.log('Hello!');
//     count++;
// }

// logger(test);
//setTimeout(callback, miliseconds);
//sau 1000 miliseconds thì hàm test sẽ được gọi
//setTimeout(test, 1000);

// setTimeout(() => {
//     console.log('Goodbye!');
// },10000);

//setInterval(callback, miliseconds);
//setInterval là chu kì: sau mỗi 2s thì hàm test sẽ được gọi lặp đi lặp lại (infinity)

// const timer = setInterval(test, 2000);

// clearInterval(timer);

// function testAbc(callback){
//     console.log('Đây là hàm testAbc');
//     callback('Huyền');

// }

// function testCallback(name){
//     console.log('Đây là hàm testCallback');
//     console.log('Đây là giá trị parameter', name);
// }
// //C1
// testAbc(testCallback);

//C2
// testAbc(function(name){
//     console.log('Đây là hàm testCallback');
//     console.log('Đây là giá trị parameter', name);
// });


// const calSum = (a, b) => {
//     return a + b;
// }

// const result = calSum(5, 10);
// console.log(result);

// const sum = (x, y) => x + y ;
// console.log(sum(4, 6));

//function bình thường có tính chất hoisting còn arrow function thì k có tính chất đó

//C1
// const functionObject = (name, age) => {
//     return { name, age };
// };

//C2
// const functionObject = (name, age) => ({name, age});

// console.log(functionObject('Huyền', 20));

// import { add as sum } from './math.js';
// import name from './math.js';

// console.log(sum(10, 2));
// console.log(name);

// const students = {
//     name: 'Huyền',
//     age: 20
// }

// console.log(Object.keys(students));
// console.log(Object.values(students));
// console.log(Object.entries(students));


// const student1 = {
//     name: 'Trần Thị B',
//     age: 18
// }

// const student2 = {...student1, gender: 'male'};

// student2.name = 'Nguyễn Văn A';
// console.log(student1.name);
// console.log(student2);

//giá trị falsy: undefined, NaN, 0, " "
// let value = 0;

// let number = value || 1;

// console.log(number);

// //?? nếu giá trị trước đó là null hoặc undefined thì nó sẽ lấy giá trị bên phải

// let num = value ?? 1;
// console.log(num);

//Bài1
// function calSum( ...numbers){
//     let sum = 0;
//     for(let num of numbers){
//         sum += num;
//     }
//     return sum;
// }

// const sum1 =  calSum(1, 2, 3, 4);
// console.log(sum1);

// const sum2 =  calSum(1, 2, 3, 4, 5);
// console.log(sum2);

// const sum3 =  calSum(1, 2, 3, 4, 5, 6);
// console.log(sum3);

// const sum4 =  calSum(1, 2, 3, 4, 5, 6, 7);
// console.log(sum4);

// const sum5 = calSum(2, -3, 5, 7, -10);
// console.log(sum5);

//Bài 2: Cho mảng ban đầu là arr = [1,54,6,7] 
//hãy tạo ra một mảng newArr có newArr[i] = arr[i] + 5.


// const arr = [1, 54 ,6 , 7];
// //C1
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] + 5);
// }

// console.log(newArr);

// //C2
// const sumArr = arr.map(num => (num + 5));
// console.log(sumArr);

//Bài 3: Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1, 6, 8, 9, 0].
// Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên.

const arr1 = [1, 2, 4, 5, 6];
const arr2 = [1, 6, 8, 9, 0];
const newArr1 = [];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if(arr1[i] === arr2[j]){
            newArr1.push(arr1[i]);
        }
    }
}
console.log(newArr1);



const array = arr1.filter((value, index, arr1) => {
        console.log(value);
        console.log(index);
        // console.log(arr1);


        return arr2.includes(value);

    });   













