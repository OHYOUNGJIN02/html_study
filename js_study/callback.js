//콜백함수 
//다른 함수의 인자로 전달되는 함수

//비동기 콜백
//비동기 작업이 완료된 후에 호출되는 콜백함수 

function getData(callback) {
    setTimeout(() => {
        console.log("서버에서 데이터 받아옴")
        callback({ name:"오영진" })
    }, 3000)
}

getData((data) => {
    console.log(data)
})