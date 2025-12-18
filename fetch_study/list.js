const API_URL = "https://jsonplaceholder.typicode.com/posts"
const tbody = document.querySelector("tbody")
const listContainer = document.querySelector("#body_container")
const postCount = document.querySelector("#count_span")


window.onload = async() => {
    tbody.innerHTML = "<div>로딩 중 입니다...</div>"

    const response = await fetch(API_URL)
    
    if (!response.ok) {
        alert("서버를 불러오는 데에 실패했습니다.")
        return;
    }

    const data = await response.json();
    postCount.innerText = data.length
    listContainer.innerHTML = `
    <table>
        <tbody>
        ${data
            .map((post) => {
              return `
            <tr>
                <td>${post.id}</td>
                <td><a href="post.html?postId=${post.id}">${post.title}</a></td>
                <td>${post.userId}</td>
             </tr>
            `
            })
            .join("")}
            </tbody>
        </table>
    `;
};

