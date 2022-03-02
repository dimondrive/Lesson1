// task 1 
const titleCity = 'Grodno';
const titleCountry = 'Belarus';
let countPeople = 100_000_000;
let cityFootbalStadion=true;
console.log(`Название города: ${titleCity}, В какой стране находится этот город: ${titleCountry}, Численность населения: ${countPeople}, Есть ли футбольный стадион: ${cityFootbalStadion}`);

//task2

let heightRectangle = 480;
let widthRectangle = 70;
let resultSquareRectangle = heightRectangle * widthRectangle ;
console.log( `Нахождение площади прямоугольника : ${resultSquareRectangle}`);

//task3
let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;

let distanceOfFirst = speedOfFirst * time;
let distanceOfSecond = speedOfSecond * time;

let amountDistance = distanceOfFirst + distanceOfSecond;

console.log(amountDistance);


//task4 

const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20) {
    console.log(`${randomNumber} меньше 20`);
}else if(randomNumber > 50){
    console.log(`${randomNumber} больше 50`)
}
else
    console.log(`randomNumber больше 20, и меньше 50`)

//task5

switch(true){
    case randomNumber < 20 : 
        console.log(`${randomNumber} меньше 20`);
        break;
    case randomNumber > 50 :
        console.log(`${randomNumber} больше 50`);
        break;
        default :
         console.log(`randomNumber больше 20, и меньше 50`);
}