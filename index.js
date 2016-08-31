// // arrays
// // var students = [];

// // students[0] = 'Vasyl';
// // students[1] = 'Petro';
// // students[2] = 'Oleg'
// // students[3] = 'sergij'
// // students.push('Taras');

// // console.log("Number of elements: " + students.length);

// // for(var j = 0; j < 5; j++ ) {
// //     students.push (prompt("Enter a name: "));
// // }

// // for (var i = 0; i< students.length; i++) {
// //     console.log(students[i]);
// // }
// // Dictionary or HashTable
// var students = {};

// students['AX554'] = 'vasyl';
// students['AB321'] = 'petro';
// students['Lk111'] = 'lilia';

// var otherStudents = {
//     'AX553': 'Vasyl',
//     'AB321': 'petro',
//     'Lk111': 'lilia'
// }

// for (var key in otherStudents) {
//     console.log(key +': ' + otherStudents[key]);
// }

// // Object
// var kuzya = {
//     name: 'Kuzya',
//     color: 'white'
// }

// function Cat(name, color) {
//     this.name = name;
//     this.color = color;
//     this.run = function() {
//     console.log(this.name + ' has run!');
//     }
//     return this;
// }

// var pushok = new Cat('Pushok', 'grey');
// var pushok = new Cat('Murchuk', 'black');
// pushok.run();
// murchuk.run();

google.addEventListener('click', joke);

function joke(e) {
    alert('It\s a joke');
    e.preventdefault();
}