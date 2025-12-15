//비구조 할당(구조분해)
//배열이나 객체의 속성을 해체하여 개별 변수에 할당하는 문법

cosnt = student = {
    name : "오영진",
    age : 24,
    address : "부산"
}

const {name : studentName, age : studentAge} = student

console.log(studentName)
console.log(studentAge)


const {name, age, address} = student
console.log(name, age, address)

function printInfo(studentObj){
    console.log(studentObj.name)
    console.log(studentObj.age)
    console.log(studentObj.address)
}

printInfo (student)

function printInfo({name, age, address}) {
    console.log(name)
    console.log(age)
    console.log(address)
}
printInfo(student)

const s1 = {
    name : "오영진",
    age : 24
}

const s2 = {
    name : "오영진2",
    age : 25,
}

//서로 다른 객체지만 충돌이 속성명이 같아 충돌이 일어날 수 있다
const {name : n1, age : a1} = s1;
const {name : n2 , age : a2} = s2;

const numbers = [1,2,3,4,5]
const [num1, num2, num3] = numbers

console.log(num1)
console.log(num2)
console.log(num3)