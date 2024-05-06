//Object (key-value)
/*const/var/let <tên biến> = { 
<key-1>: <value-1>, 
<key-2>: <value-2>,
 … 
      }
*/
// const traningCenter = {
//     name: 'T3H',
//     address: 'Hồ Tùng Mậu',
//     courses: ['HTML', 'CSS', 'JavaScript'],
//     'một': 1,
//     1: 'một',
//     $: 'dollar',
//     variable: 'biến'

// }

// console.log(traningCenter);
//cách 1
//console.log(traningCenter.name);

//các thao tác trên Object : get (lấy), set, delete
//<tên object>[‘key’]
//cách 2
// console.log('traningCenter:  ',traningCenter['1']);
// console.log('traningCenter:  ',traningCenter['$']);
// console.log('traningCenter:  ',traningCenter['một']);

//const variable = 'name';
//cách 1 thì cần phải là tên key tường minh
//truy xuất đến key có tên là variable
//console.log('traningCenter: ', traningCenter.variable); // -> biến
//mong muốn của mình là truy xuất đến tên key đang là giá trị của biến variable
//console.log('traningCenter: ', traningCenter[variable]); // -> T3H

//set: nếu mà chưa tồn tại key-value thì nó sẽ lại tạo mới, còn nếu đã tồn tại thì sẽ được hiểu là update
// const obj1 = {
//     name: 'Andrew',
//     address: 'New York',
//     courses: ['HTML', 'CSS', 'JavaScript'],
// }
// obj1.age = 20; //tạo mới
// console.log(obj1);

// obj1.name = 'Johnson'; //update
// console.log(obj1);

// delete obj1.address; //xóa
// console.log(obj1);

//duyệt Object qua từng cặp key-value for(let key in tên Object)
// for(let key in obj1){
//     console.log(key +": " + obj1[key]);
// }
/*
Object.keys(<tên object>): trả về toàn bộ key trong object dưới dạng array.
Object.values(<tên object>): trả về toàn bộ value trong object dưới dạng array.
<tên object>.hasOwnProperty(key): kiểm tra xem một key có tồn tại trong object hay không ( trả về true hoặc false)
*/
// console.log(Object.keys(obj1));

// console.log(Object.values(obj1));

// obj1.hasOwnProperty('name');
// console.log(obj1.hasOwnProperty('name'));


// const arr1 = [1, 2, 3];
// //gán địa chỉ ô nhớ, lúc này arr1 và arr2 đang quản lý chung 1 địa chỉ ô nhớ
// const arr2 = arr1;
// arr1[0] = 'một';
// console.log(arr1);
// console.log(arr2);

// const obj1 = {
//     name: 'Hehe',
//     address: 'Hà Nội'
// }

// const obj2 = {
//     name: 'Hehe',
//     address: 'Hà Nội'
// };
// //-> false do so sánh kiểu dữ liệu tham chiếu thì nó so sánh địa chỉ ô nhớ
// console.log(obj1 === obj2); 
// console.log(obj1);
// console.log(obj2);

//Function
// function sum(a, b){
//     return a + b;
// }

// console.log(sum(5,4));

//kiểm tra xem trong các số sau số nào là số nguyên tố
//2
// {
//     let count = 0;
//     for(let i = 1; i <= 2; i++){
//         if(2 % i === 0){
//             count++;
//         }
//     }
//     if(count===2){
//         console.log('Đây là số nguyên tố');
//     }

// }

function checkSoNguyenTo(number){
    let count = 0;
    for(let i = 1; i <= number; i++){
        if(number % i === 0){
            count += 1;
        }
    }
    if(count === 2){
        console.log(number + ' là số nguyên tố');
    }
    else console.log(number + ' không là số nguyên tố');
}


checkSoNguyenTo(10);

// 1. Khai báo 1 function nhận đầu vào là chuỗi name, thực hiện in ra màn hình “Hello world, ” + name.

// function sayHello(name){
//     console.log('Hello Wolrd, '+name);
// }

// sayHello('Huyền');
// 2. Khai báo 1 function nhận đầu vào là 2 số a, b. Đầu ra là kết quả của phép tính (a + b)^2 .