const student = {
    name : "오영진",
    age : 24,
    address : "부산",
    phone : "010-1234-5678"
}

const {name, address} = student
console.log(name,address)

//REST 문법
const {age, phone, ...other} = student
console.log(age)
console.log(phone)
console.log(other)

const numbers = [1,2,3,4]
const [n1, n2, ...ns] = numbers
console.log(n1,n2,ns)

//Spread 문법
//기존 객체의 모든 속성을 새로운 객체에 복사하거나 
//새로운 속성을 추가할 때 사용된다.

const newStudent = {
    ...student,
    gender : "남자",
}
console.log(newStudent)

const newNumbers = [...numbers, 5,6]
console.log(newNumbers)

let names = []
function addName(){
    names = [...names, name]
}

addName("오영진")
addName("안도이")
addName("크아악")

console.log(names)


let obj = {
    data1 : "data1",
    data2 : "data2"
}

let datas = []
function addData(){
    datas = [...datas, obj]
}

addData("data3")
addData("data4")

console.log(datas)



const book = {
    title : "해리포터",
    author : "J.K 롤링",
    publisherYear : 1997
}

book.publisherYear = 2000;

console.log(book.title)
console.log(book.author)

console.log(book["title"])
console.log(book["author"])

book.getAge = () => {const currentYear = new Date().getFullYear()
    return currentYear - book.publisherYear
}

// function getage(bookObj) {
//     return new Date().getFullYear() - bookObj.publisherYear;
// }

console.log(book.getAge())

book.genre = "판타지"
book.publisherYear = 2000

console.log(book)



const products = [
  { id: 1, name: "노트북", price: 1200000, category: "전자제품" },
  { id: 2, name: "티셔츠", price: 25000, category: "의류" },
  { id: 3, name: "모니터", price: 300000, category: "전자제품" },
  { id: 4, name: "청바지", price: 50000, category: "의류" },
  { id: 5, name: "마우스", price: 15000, category: "전자제품" },
];
//1. 50000원 이상인 제품만 필터링해서 expensiveProducts 배열에 넣고 출력
const expensiveProducts = products.filter(product => product.price >= 50000);

console.log(expensiveProducts);
//2. products배열에서 각 제품의 이름과 가격만 포함하는 productNamesAndPrices배열 만들기
const productNamesAndPrices = products.map(product => ({
  name: product.name,
  price: product.price
}));

console.log(productNamesAndPrices);

//map
// [{name: "노트북", price: 1200000}, {}...]
//3. products배열에서 category가 전자제품인 제품만 선택해서 각 제품의 이름과 가격을
const discountProducts = products
  .filter(product => product.category === "전자제품")
  .map(product => ({
    name: product.name,
    price: product.price * 0.9
  }));

console.log(discountProducts);

//10%할인한 discountProducts배열을 만드세요

