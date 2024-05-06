// const listStudents = [
//     {
//         id: 1,
//         name: 'Spongebob',
//         gender: 'male',
//         mathScore: 9,
//         englishScore: 9,
//         literatureScore: 9,
//     },
//     {
//         id: 2,
//         name: 'Squarepants',
//         gender: 'male',
//         mathScore: 10,
//         englishScore: 9,
//         literatureScore: 8,
//     },

//     {
//         id: 3,
//         name: 'Larry Cheeks',
//         gender: 'male',
//         mathScore: 9,
//         englishScore: 10,
//         literatureScore: 8,
//     },

// ];

//  localStorage.setItem('listStudents', JSON.stringify(listStudents));

let listStudents = JSON.parse(localStorage.getItem('listStudents'));


// read function
const $table = document.getElementById('table');
const renderStudent = () => {
    let rowStudents = '';
    for (let student of listStudents) {

        rowStudents +=
            `<tr>
                <th scope="row">${student.id}</th>
                <td>${student.name}</td>
                <td>${student.gender}</td>
                <td>${student.mathScore}</td>
                <td>${student.englishScore}</td>
                <td>${student.literatureScore}</td>
                <td><button type="button" class="btn btn-success" id="upadate" onclick="updateStudent(${student.id})">Update</button>
                    <button type="button" class="btn btn-danger" id="delete" onclick="deleteStudent(${student.id})">Delete</button>
                </td>
            </tr>
            `;



        }
        $table.innerHTML = rowStudents;
}

renderStudent();


const $id = document.getElementById('id');
const $name = document.getElementById('name');
const $gender = document.getElementById('gender');
const $mathScore = document.getElementById('math');
const $englishScore = document.getElementById('english');
const $literatureScore = document.getElementById('literature');
const $createStudent = document.getElementById('create');


const clearInput = () => {
    $id.value = '';
    $name.value = '';
    $gender.value = '';
    $mathScore.value = '';
    $englishScore.value = '';
    $literatureScore.value = '';
};


$createStudent.addEventListener('click', () => {

    const student = {
        id: $id.value,
        name: $name.value,
        gender: $gender.value,
        mathScore: $mathScore.value,
        englishScore: $englishScore.value,
        literatureScore: $literatureScore.value,
    }

    listStudents.push(student);
    localStorage.setItem('listStudents', JSON.stringify(listStudents));

    renderStudent();

    clearInput();
});

//search function for students
const $searchButton = document.getElementById('searchButton');
const $searchInput = document.getElementById('searchInput');

$searchButton.addEventListener('click', () => {

    let rowStudents = '';

    for (let student of listStudents) {
        if (student.id === $searchInput.value || student.name.toLowerCase().includes($searchInput.value)) {

            rowStudents +=

                `<tr>
                <th scope="row">${student.id}</th>
                <td>${student.name}</td>
                <td>${student.gender}</td>
                <td>${student.mathScore}</td>
                <td>${student.englishScore}</td>
                <td>${student.literatureScore}</td>
                <td><button type="button" class="btn btn-success" id="update" >Update</button>
                    <button type="button" class="btn btn-danger" id="delete" >Delete</button>
                </td>
            </tr>`;



        }

    }
    if (rowStudents === '') {
        const span = document.createElement('span');
        span.textContent = 'Không tìm thấy kết quả tìm kiếm';
        span.style.color = 'red';
        $table.innerHTML = '';
        $table.appendChild(span);

    }
    else {
        $table.innerHTML = rowStudents;
    }

});

function deleteStudent(id) {

}

//B1 gán sự kiện onclick cho button update 
//B2 lấy được thông tin student 
function updateStudent(id) {
    let index = -1;
    let length = listStudents.length;

    for (let i = 0; i < length; i++) {
        if (listStudents[i].id === id){
            index = i;
            break;
        }
    }
    
    const {id, name, gender, mathScore, englishScore, literatureScore} = listStudents[index];

    //B3 hiện thị thông tin học sinh ra các ô input tương ứng
    $id.value = id;
    $name.value = name;
    $gender.value = gender;
    $mathScore.value = mathScore;
    $englishScore.value = englishScore;
    $literatureScore.value = literatureScore;
    


}

renderStudent();


