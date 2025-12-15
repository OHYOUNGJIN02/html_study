//단축 평가 논리 연사
// &&, ||

const name = "오영진"
console.log(!!name && !!"오영진")

//앞의 값이 true일때 뒤의 값을 return한다. false일때 false를 return한다
console.log (true && 10)
console.log(false && 10)

const data = [1,2,3,4,5]
console.log(data.length != 0 && "데이터 출력")

//앞의 값이 false일때 뒤의 값을 리턴한다, true일때 true 리턴
console.log(true || 10)

//??
//앞이 값이 null 또는 undefined가 아니면 앞의 값을 리턴, 그 외에는 뒤에 값을 리턴
console.log(null ?? 100)
console.log(undefined ?? 100)
console.log(20 ?? 100)
console.log("" ?? 100)