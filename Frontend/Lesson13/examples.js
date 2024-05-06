import { users } from "../Homework/data";

//
let n = Number(prompt("Nhập vào 1 số n: "));


function findUser(id){
    let userFind = null;
    for(let user of users){
        if(user.id === id){
            userFind = user;
            
        }
    }
    if(userFind === null){
        console.log("Không tìm thấy user có id: ",id);
    }
    else{
        console.log("user: ",userFind);
    }
}

findUser(n);

let keywordInput = String(prompt('Nhập vào keyword: '));

function getEmails(keyword){
    const result = [];
    
    for(let user of users){
        const fullName = user.fullName + ' ' + user.last_name;
        if(fullName.toLowerCase().includes(keyword.toLowerCase())){
            result.push(user.email);
        }
    }
    return result; 
}
const listEmails = getEmails(keywordInput);
if(listEmails.length===0){
    console.log('Không tìm thấy user nào có email chua keyword');
}
else{
    for(let email of listEmails){
         console.log('Email: ',email);
    }
}

//đếm só lương user có age > 50
const ageMoreThan50yearsold = users.filter(user => user.age > 50).length;
console.log('Age: ',ageMoreThan50yearsold);

const personGetMarried = users.filter(user => user.is_married === true).length;

const personNotMarried = users.filter(user => user.is_married === false).length;

console.log('Đã kết hôn: ',personGetMarried);
console.log('Chưa kết hôn: ',personNotMarried);


//khắc phụ cho các hàm filter ở trên 
if(Array.isArray(users) && users.length > 0){
    let ageMoreThan50yearsold = 0;
    let personGetMarried = 0;
    let personNotMarried = 0;

    for(let user of users){
        if(user.age > 50){
            ageMoreThan50yearsold++;
        }
        //sự khác nhau khi viết 'boolean' và boolean
        /*So sánh với 'boolean', JS sẽ thực hiện so sánh kiểu dữ liệu chính xác,
        còn so sánh với boolean, JS sẽ tự động chuyển đổi kiểu dữ liệu của biến user.is_married
        sang boolean trước khi so sánh.*/
        if(typeof user.is_married === 'boolean'){
            
        if(user.is_married === true){
            personGetMarried++;
        }
        else{

            personNotMarried++;
        }
        }
    }
}


console.log('Age: ',ageMoreThan50yearsold);
console.log('Đã kết hôn: ',personGetMarried);
console.log('Chưa kết hôn: ',personNotMarried);

//Đếm số lượng user theo từng ngành nghê tương ứng

const result5 = {};
for(let user of users){
    if(result5.hasOwnProperty(user.jobId)){

        result5[user.job] = result5[user.job] + 1;
    }

    else{
        result5[user.job] = 1;
    }
}