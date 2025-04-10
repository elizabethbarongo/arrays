function stringReturn(str){
    return str.map(text=>
text.length
    )
}

console.log(stringReturn (["magnet", "Father", "mahanamim","school"]))


function EvenNum(arr){
return arr.filter(num =>{
    if(num%2===0){
        console.log(num);
    }
})


}

EvenNum([6,5,4,3,8,9,11,17])

// function getHighScores (students){
// return students
// students.filter (student => students.score >75)
// students.map(student => student.name);
// }

// let students=[
// {name: "Manu", score:77}, {name:"Collins", score:60},

// ];

// const highScores = getHighScores(students);
// console.log(highScores)


function getHighScorers(students) {
    return students
      .filter(student => student.score > 75)
      .map(student => student.name);
  }


const students = [
  { name: "Mercy", score: 35 },
  { name: "Jyson", score: 76},
  { name: "Marlie", score: 90 },
  { name: "Joy", score: 75},
  { name: "Paule", score: 77},
  { name: "Isa", score: 75},


];

const highScorers = getHighScorers(students);
console.log(highScorers); 




const numbers = [1,5,7,9,10,12,14,6,7,3,];
const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers); 


