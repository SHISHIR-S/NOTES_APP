
let form = document.getElementById("form")
let msg = document.getElementById("msg")
let input = document.getElementById("input")
let posts = document.getElementById("posts")
form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    console.log("button clicked");
    fulemp();//
}
let fulemp = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be empty"
        console.log("failure")
    } else {
        console.log("success")
        msg.innerHTML = ""
        accData();
    }
}

let data = {};
let accData = () => {
    data["text"] = input.value;
    console.log(data);
    makepost();
}
let makepost = () => {
    posts.innerHTML +=
    `<div>
        <label id="labbel">${data.text}</label>
        <span class="options">
            <button onClick = "editpost(this)" id="editbutton1">EDIT</button>
            <button onClick = "delpost(this)" id="deletebutton1">DELETE</button>
        </span> 
    </div>`;
    input.value = "";
}
let delpost = (e) => {
    e.parentElement.parentElement.remove();
}
let editpost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}
