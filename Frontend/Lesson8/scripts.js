// const listNumber1 = [];
// console.log(listNumber1);
// const listNumber2 = [1, 2, 3, 4, 5];
// console.log(listNumber2[2]);

// console.log(listNumber2.length);

// //dùng new Array() theo kiểu đối tượng
// const listNumber3 = new Array(1, '3', null);
// console.log(listNumber3);
//các phần tử trong mảng của JS thì khác kiểu dữ liệu cũng được như kiểu dữ liệu Number, String 

// const fruits = ['Apple', 'Banana', 'Orange'];

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// for(let element of fruits){
//     console.log('element: ', element);
// }

//const listNumber = [1, 2, 3, 4, 5];

// listNumber.push(10);

// console.log(listNumber);

// listNumber.push(8, 6, 'string');
// console.log(listNumber);

// //thêm 1 giá trị vào đầu mảng
// listNumber.unshift(null);
// console.log(listNumber);

// //xóa 1 giá trị vào cuối mảng
// listNumber.pop(null);
// console.log(listNumber);

// listNumber.shift();
// console.log(listNumber);

//splice(index-1, index-2)
// xóa 2 và 3 ra khỏi mảng
// listNumber.splice(1,2);
// console.log(listNumber);

// listNumber.splice(2,0,10);
// console.log(listNumber);

// const listNumber2 = 1;
// console.log(listNumber.includes(listNumber2));


// Cho mảng sau: numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];
// Tìm phần tử nhỏ nhất / lớn nhất trong mảng.
// Tính tổng các phần tử trong mảng.
// Tính trung bình cộng các phần tử trong mảng.
// Tìm phần tử đầu tiên chia hết cho 3 trong mảng.
// Tìm các phần tử là số nguyên tố trong mảng.
//const numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];
// numbers.sort();
// console.log(numbers);
// console.log('Phần tử nhỏ nhất của mảng: '+numbers[0]);
// console.log('Phần tử lớn nhất trong mảng: ' +numbers[numbers.length-1]);

// let tbc = 0, sum = 0;

// for(let i = 0; i <= numbers.length; i++){
//     sum += i;
// }
// console.log('Tổng các phần tử trong mảng: '+sum);
// for(let i = 0; i <= numbers.length; i++){
//     tbc = sum / numbers.length;

// }
// console.log('Trung bình cộng: '+tbc);
// for(let i = 0; i <= numbers.length; i++){
//     if(i % 3 === 0){
//         console.log('Số đầu tiên chia hết cho 3: '+i);
//         break;
//     }
// } 
// - 7; 3


const numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33];

// const maxNumber = Number(Math.max(numbers));
// console.log(maxNumber);

let min = numbers[0];
let max = numbers[0];
//tìm min, max trong mảng
for(let number of numbers){
    if(number < min){
        min = number;
    }
    if(number > max){
        max = number;
    }
}
console.log('Min: ' +min);
console.log('Max: ' +max);

let count = 0, sum = 0;
let avg = 0;
//tính tổng các phần tử trong mảng
for(let number of numbers){
    sum += number;
}
console.log('Sum: '+sum);
for(let number of numbers){
    count++;
}
//tính trung bình cộng của mảng
avg = sum / count;
console.log('Avarage: '+avg);

// for(let i = 1; i < numbers.length; i++){
//     if(numbers[i] % 3 === 0){
//         console.log('Phần tử đầu tiên chia hết cho 3: ' +numbers[i]);
//         break;
//     }
// }
//hiển thị phần tử đầu tiên trong mảng chia hết cho 3
for(let number of numbers){
    if(number % 3 === 0){
        console.log('Phần tử đầu tiên chia hết cho 3: '+number);
        break;
    }
}


//tìm các phần tử là số nguyên tố trong mảng
const numbers1 = [10, 4, -7, 9, 100, 3, -21, 0, 33];
let arrayNT = [];
for(let number of numbers1){
    let count = 0;
    for(let i = 1; i <= number; i++){
        if(number % i === 0){
            count++;
        }
    }

    if(count === 2){
        arrayNT.push(number);
        //console.log(number + ' là số nguyên tố');
    }

}
console.log('Phần tử nguyên tố trong mảng là: [' +arrayNT+ ']');

/*
let numbers = [10, 4, -7, 9, 100, 3, -21, 0, 33, 5, 2, 11];
let n = [];
for (let index = 0; index < numbers.length; index++) {
  let uoc = 0;
  if (numbers[index] >= 2) {
    for (let i = 1; i <= numbers[index]; i++) {
      if (numbers[index] % i == 0) {
        uoc++;
      }
    }
    // if (uoc == 2) {
    //     n.push(numbers[index]);
    //   //console.log(numbers[index] + " la so nguyen to");
    // }
  }
}
console.log(n);
 */

//
const n = prompt('Nhập n: ');

