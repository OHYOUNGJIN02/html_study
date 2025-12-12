//객체

const student={
    name : "오영진",
    age:24
}
console.log(student.name)
console.log(student.age)

console.log(student)
console.log(student["name"])
console.log(student["age"])

student["name"] = "집"
student["age"] = 15

console.log(student)

student.name = "집보내줘"
student.age = 120
student.hobby = "집가기"

console.log(student)

student.printName = () => console.log("이름 :", student.name)
student.printName()

const loginButton = {
    text : "로그인",
    value : "로그인이 되었습니다",
    onclick : () => {
        console.log(loginButton.value)
    }
}

loginButton.onclick()

const loginButtonKeys = Object.keys(loginButton)
console.log(loginButtonKeys)

const loginButtonValues = Object.values(loginButton)
console.log(loginButtonValues)

const loginButtonEntries = Object.entries(loginButton)
console.log(loginButtonEntries)

for(let entry of loginButtonEntries){
    const key = entry[0]
    const value = entry[1]
    console.log(entry, key, value)
}