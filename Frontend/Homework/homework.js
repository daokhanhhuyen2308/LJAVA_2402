//CHỮA BÀI

// 4. Cho bộ dữ liệu về users như sau: data.js
//import { users } from "./data";
// -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// const n = Number(prompt('Nhập n: '));
// let foundUser = null;
// for(let user of users) {
//     if(user.id === n){
//         foundUser = user;
//     }
// }
// if(foundUser==null){
//     console.log('Không tìm thấy user có id: ',n);
// }
// else{
//     console.log('user: ',foundUser);
// }

//function

// function findUser(id){
//     let foundUser = null;
//     for(let user of users) {
//         if(user.id === id){
//             return user;
//         }
//     }
//     return false;
// }

// const user = findUser(n);
// if(!user){
//     console.log('Không tìm thấy user có id: ',n);
// }

// else{
//     console.log('user: ',user);
// }

// -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.

// const keywordInput = String(prompt('Nhập keyword: '));
// function getEmailByKeyword(keyword){
//     const result = [];
//     for(let user of users){
//        if((user.first_name + user.last_name).toLowerCase().includes(keyword.toLowerCase())){
//             result.push(user.email);
//         }
//     }
    
//    return result;
// }

// const emailByKeyword = getEmailByKeyword(keywordInput);
// if(emailByKeyword === 0){
//  console.log('Không tìm thấy user nào có email là: ', keywordInput);
// }
// else{
//     for(let email of emailByKeyword){

//             console.log('Email: ' ,email);
        
//     }
// }

// -Đếm số lượng user có age > 50.
//Cách 1
// let count = 0;
// for(let user of users){
//     if(user.age > 50){  
//         count++;
//     }

// }
// console.log('Count: ' , count);

//Cách 2
// const userAgeMoreThan50 = users.map(user => user.age > 50);
// console.log('Users age more than 50: '+userAgeMoreThan50);

// -Đếm số lượng user đã kết hôn và chưa kết hôn.
// const userGetMarried = users.filter(user => user.is_married === true);
// const userUnmarried = users.filter(user => user.is_married === false);

// console.log('Get married: ',userGetMarried);
// console.log('Unmarried: ', userUnmarried);


// let count = 0;
// for(let user of users) {    
//     if(user.is_married===true) {
//         count++;
//     }

// }
// console.log('Is_married: ',count);
// console.log('Unmarried: ' ,(users.length - count) );

// -Đếm số lượng user theo từng ngành nghề tương ứng.
//     Output:
//     {
//         "Dentist": 5,
//         "Developer": 13,
//         "Doctor": 6,
//         "Farmer": 8,
//         "Project Manager": 5,
//         "Teacher": 9,
//         "Worker" : 4
//     }


