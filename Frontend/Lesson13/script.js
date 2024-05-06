// const PI = 3.14;
// const name = "T3H";
// const course = "Javascript";
// const student = {
//     name: "Trần Thị B",
//     age: 18,
//     address:{
//         city: "Hồ Tùng Mậu",
//         country: "Việt Nam"
//     }

// }
// //lưu thông tin, chỉ hỗ trợ lưu trữ kiểu dữ liệu nguyên thủy
// //cách 1
// // localStorage.setItem("PI", PI);
// // localStorage.setItem("name", name);
// // localStorage.setItem("course", course);

// //JSON chỉ là một định dạng dữ liệu
// // convert sang định dạng JSON 
// localStorage.setItem("student", JSON.stringify(student));

// const getPI = localStorage.getItem("PI");
// console.log(getPI);

// //convert JSON về định dạng tham chiếu
// let student1 = JSON.parse(localStorage.student);

// console.log(student1);

// const number = 20;
// localStorage.setItem("number", number);


//Web storage là 1 API trong HTML5 được sử dụng để temporary save data on the server web
//save data is maximun length 5 MB
// const PI = 3.14;
// const name = 'Đào Khánh Huyền';
// const course = "Javascript";
// const course2 = 'Spring Boot';
// const student = {
//     name: "Augustine Goat",
//     age: 20,
//     address:{
//         city: "Hà Nội",
//         country: "Việt Nam"
//     }
// }
//lưu trữ vào storage
//C1
// localStorage.setItem('PI', PI);
// localStorage.setItem('name', name);

//C2
// localStorage.course = course;
// localStorage.course2 = course2;

//những dữ liệu kiểu tham chiếu thì không thể lưu trữ được kiểu này
//localStorage.student = student;

//convert sang định dạng JSON  JSON.stringify(value)
//convert từ định dạng JSON về kiểu dữ liệu ban đầu JSON.parse(value)
//localStorage.setItem('student', JSON.stringify(student));

//lấy dự liệu ra
// console.log(localStorage.getItem('PI'));

// //console.log(localStorage.getItem('student'));

// const student = localStorage.student;
// //định dạng JSON
// console.log(student);
// console.log(student.name); // undefined
// //mình phải convert ngược lại thì mới lấy được
// console.log(JSON.parse(student).name);

//xóa item chỉ định
// localStorage.removeItem('PI');
//xóa toàn bộ item trong localStorage

// localStorage.clear();

// const number = 20;
// localStorage.setItem('nunber', number);

//Session Storage khi đóng cửa sổ trình duyệt thì nó sẽ mất

// sessionStorage.setItem('nunber', 10);


//Cookie
// document.cookie = 'username=T3H';
// document.cookie = 'password=123456';

//return về toàn bộ cookie ở dạng chuỗi
// let valueCookie = document.cookie.split(' ');
// for(let v of valueCookie){
//     console.log(v.trim().split('='));
// }

//console.log(document.cookie); //password=123456; username=T3H
//console.log(document.cookie.split(';')); //['password=123456', 'username=T3H']

// const values = document.cookie; 
// for(let v of values){
//     console.log(v.trim().split('='));
// }

// function getValueCookie(name){
//     let resultValue;
//     //password=123456; username=T3H => ['password=123456', 'username=T3H']
//     let valueCookie = document.cookie.split(';');
//     for(let v of valueCookie){
//         //destructuring
//         // v.trim().split('='); => password=123456 -> [password, 123456]
//     //const[nameCookie, valueCookie] = [password, 123456]
//     const[nameCookie, valueCookie] = v.trim().split('='); 
//     if(nameCookie==name){
//         resultValue = valueCookie;
//     }
// }
//     return resultValue;
// }
 

// console.log(getValueCookie('password'));
// console.log(getValueCookie('username'));


//Window, Location & history
location.href;