 const postIdDiv = document.querySelector("#title_box > div > div:nth-child(1)")
 const userIdDiv = document.querySelector("#user_id_div")
 const postTitle = document.querySelector("#post_title")
 const contentBox = document.querySelector("#content_box")
 const backBtn = document.querySelector("#back_btn")

 window.onload = async() => {
 const fullUrl = window.location.href
 const url = new URL(window.location.href)
 const urlParam = url.searchParams;
 const postId = urlParam.get("postId");
 const API_URL = `https://jsonplaceholder.typicode.com/posts/${postId}`

 const response = await fetch(API_URL)
 if(!response.ok) {
    alert("서버에 문제가 생겼습니다.")
    return;
 }
    const data = await response.json();

    postIdDiv.innerText = `게시글ID:${data.id}`
    userIdDiv.innerText = `유저ID:${data.userId}`
    postTitle.innerText = data.title
    contentBox.innerText = data.body;
 };

//  backBtn.on = () => {
//     window.location.replace = "http://127.0.0.1:5500/fetch_study/list.html"
//  }