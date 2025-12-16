const inputButton = document.querySelector(".input_button");


const personList = []

inputButton.onclick = () => {
    const inputName = document.querySelector(".inputName")
    const inputAge = document.querySelector(".inputAge")
    const inputAdd = document.querySelector(".inputAdd")

    if (inputName.value === "") {
        alert("이름빈칸이다")
        return
    }

    if (inputAge.value === "") {
        alert("나이빈칸이다")
        return
    }

    if (inputAdd.value === "") {
        alert("주소빈칸이다")
        return
    }

    
    personList.push({
        name: inputName.value,
        age: inputAge.value,
        address: inputAdd.value
    });

    const tbody = document.querySelector(".person_table > tbody")
    const trs = personList.map((person, index) => {
        return `
        <tr>
            <td>${index + 1}</td>
            <td>${person.name}</td>
            <td>${person.age}</td>
            <td>${person.address}</td>
        </tr>
        `
    })

    console.log(trs)

    
    tbody.innerHTML = trs.join("")

   
    const tdList = document.querySelectorAll("td")
    console.log(tdList)

   
    inputName.value = ""
    inputAge.value = ""
    inputAdd.value = ""
};


