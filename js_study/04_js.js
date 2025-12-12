//배열 
const arr1 = [] //빈 배열
const arr2 = new Array()

//push
//배열의 끝에 요소를 추가
arr1.push(10)
arr1.push(20)
arr1.push(30)
console.log(arr1)

arr2.push(10)
arr2.push(20)
arr2.push(30)
console.log(arr2)

console.log(arr1 == arr2)

//배열 형식의 문자열(stringify)
const json1 = JSON.stringify(arr1)
const json2 = JSON.stringify(arr2)
console.log(json1)
console.log(json1 === json2)

//배열 형식을 되돌리기(parse)
const arr3 = JSON.parse(json1)
console.log(arr3)

const names = ["집가고싶어", "집보내줘", "집언제가"]
names.push("집")

//요소 제거(배열의 요소중에 마지막 요소를 제거) 이후 제거된 요소를 반환
//pop

console.log(names.pop())

//요소 수정, 삽입, 제거 => splice(삽입될 인덱스, 제거할 갯수, 추가할 요소. . . ) 
names.splice(1, 0, "오영진")
console.log(names)

names[0]="빠니찬익"
console.log(names)

//요소 찾기 =>주어진 조건 함수를 만족하는 배열의 첫번째 요소를 반환
const findFx = (str) => str === "집보내줘"
const foundName = names.find(findFx)
console.log(foundName)

console.log(names.find((name)=> name === "집보내줘"))

const students = [
{name : "집갈래", age:24},
{name : "집보내줘", age:23},
{name : "집가자", age:22},
{name : "집이좋아", age:21}
]

console.log(students.find((student)=> student.name === "집가자" && student.age === 22))


