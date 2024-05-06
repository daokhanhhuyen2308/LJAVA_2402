//DOM & Events
//document.getElementById nó sẽ trả về Element đầu tiên mà nó tìm thấy trong trang web đấy
//document.getElementByClassName => trả về 1 HTML Collection
//document.getElementByTagName => trả về 1 HTML Collection

//selector theo id
// const findElementByID = document.getElementById('heading');
// console.log(findElementByID);

// //selector theo class
// const findElementByClassName = document.getElementsByClassName('heading');
// console.log(findElementByClassName);

// //selector theo tag name
// const findElementByTagName = document.getElementsByTagName('h1');
// console.log(findElementByTagName);

//tìm thẻ h1 có class là heading
//document.querySelector trả về kết quả phù hợp với điều kiện đầu tiên mà nó tìm thấy
//document.querySelectorAll trả về tất cả kết quả phù hợp với điều kiện mà nó tìm thấy
//viết theo kiểu css kiểu như là từ ngoài vào trong : h1#heading.heading
// const result = document.querySelector('h1');
// console.log(result);
// const result1 = document.querySelectorAll('h1');
// console.log(result1);

//thay đổi nội dung html của thẻ đó như đang từ thẻ h1 sẽ chuyển thành thẻ a
// document.getElementById('heading').innerHTML = '<a href="htttps://google.com">Content changed by JavaScript</a>';
//thay đổi nội dung bên trong của thẻ đó
// document.getElementById('heading').innerText = 'Nội dung đã được thay đổi bởi JavaScript';


//

// document.getElementById('tagA').href = "http://google.com";
// document.getElementById('tagA').setAttribute('data-id', 200);
// document.getElementById('tagA').target = '_blank';

//thay đổi css
// document.getElementById('heading').style.color = 'green';
// document.getElementById('heading').style.fontSize = '50px';

// //xóa attribute
// document.getElementById('tagA').removeAttribute('data-id');

//thêm 1 thẻ h2 vào trong thẻ body với id là sub-title
//step 1: create tag h2
// let tagH2 = document.createElement('h2');
// //step 2: gán nội dung
// tagH2.innerText = 'Hello World';
// //step 3: tạo attribute id
// tagH2.id = 'sub-title';

// //appendChild là thêm mới 1 thẻ
// document.body.appendChild(tagH2);
// //xóa phần tử có id là heading
// document.getElementById('heading').remove();

//Bài tập trên lớp
// const tagsLi = document.querySelectorAll('li.favorite-list__item');

// for(let tagLi of tagsLi) {

//     tagLi.innerHTML = 'I love this thing';
//     tagLi.style.color ='red';
    
// }

// const newText = 'A new text will add to the list';

// let newLi = document.createElement('li');

// newLi.innerText = newText;

// document.querySelector('ul#favorite-list').appendChild(newLi);

//các thao với thẻ div

// document.getElementById('tagDiv').classList.add('hidden');
// document.getElementById('tagDiv').classList.remove('container');
// document.getElementById('tagDiv').classList.toggle('hidden');

//Event




















//document.querySelector('select');
//document.querySelector('h1#heading.heading');

//document.querySelectorAll('select'); trả về các element mà nó tìm được (dạng mảng)

//thay đổi attributes
//document.getElementById('id_element').setAttribute('set_name', new value');
//lấy giá trị attribute
//document.getElementById('id_element').getAttribute('name_attribute');

//thay đổi style
//document.getElementById('id_element').style.property
//document.getElementById('heading').style.color = 'white';
//document.getElementById('heading').style.width = 32 + 'px';

//thay dổi class_element
//document.getElementById('id_element').classList.add('new_class');
//document.getElementById('id_element').classList.remove('name_class');
//document.getElementById('id_element').classList.toggle('name_class'); nếu chưa có class thì nó sẽ thêm, có rồi thì xóa

//event
//document.getElementById('id_element').onclick = function()
//document.getElementById('id_element').addEventListener('click',function()) add cùng lúc nhiều event 


