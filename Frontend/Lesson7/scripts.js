//Lesson2

// const score = 7.9;
// if(score >= 8){
//     console.log('Học sinh giỏi');
// }

// let age = 18;
// //condition ? value_true : value_false
// let massage = age >= 18 ? 'Adult' : 'Minor';
// console.log(massage);

// //prompt nhập được 2 value, value thứ 2 sẽ là default và có thể chỉnh sửa được nhé
// const number = prompt('Mời bạn nhập 1 số bất kì',10);
// console.log(number);

//bài 1: in ra các số từ 1 đến 500 (500 quá nhiều nên để thành 10 nhé)
// console.log('Bài 1');
// for(let i = 0; i <= 10; i++){
//     console.log(i);
// }

// //bài 2: in ra các số chia hết cho 2 && 3 từ 1 đến 300
// console.log('Bài 2');
// for(let i = 1; i < 300; i++){
//     if(i % 2 === 0 && i % 3 === 0){
//         console.log(i);
//     }
// }

// //bài 3: tính tổng các số chắn từ [-30; 50]
// console.log('Bài 3');
// let sum = 0;
// for(let i = -30; i <= 50; i++){
//     if(i % 2 === 0){
//         sum += i;
//     }
// }
// console.log('Tổng các số chẵn từ [-30;50] là: '+sum);

// //bài 4: nhập vào số n, tính giai thừa cửa số đấy
// console.log('Bài 4');
// const n = prompt('Nhập n: ',0);
// let result = 1;
// for(let i = 1; i <= n; i++){

//     result *= i;

// }
// console.log('Giai thừa của n là: ' +result);

//bài 5: Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x.
console.log('Bài 5')

let a, b, x;

do{

    a = prompt('Nhập a: ');
    b = prompt('Nhập b: ');
    x = prompt('Nhập x: ');

    // if(a  % x === 0){
    //     console.log();
    // }

}while(a >= b);

for(let i = a; i <= b; i++){
    if(i % x === 0){
        console.log(i);
        break;
    }
}

//bài 8: Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không.
console.log('Bài 8')
const nt = prompt("Nhập n: ");
    if(nt >= 2){
        let count = 0;
        for(let i = 1; i <= nt; i++){
            //duyệt từ 1 đến chính nó thì mỗi lần n chia hết cho một số nào đấy thì count sẽ tăng 1 đơn vị
            if(nt % i == 0){
                count++;
            }
        }
    
        if(count==2){
            console.log('Đây là số nguyên tố');
        }
        else
            console.log('Đây không phải số nguyên tố');
    }
    else
        console.log('Đây không phải là số nguyên tố');



// function isPrime(nt){
//     if(nt < 2){
//         return false;
//     }

//     for(let i = 2; i < Math.sqrt(nt); i++){
//         if(nt % 2 == 0){
//             return false;
//         }
//         return true;
//     }

// for(let i = 1; i <= 100; i++){
//     if(isPrime(i)){
//         console.log(i);
//     }
// }

// }