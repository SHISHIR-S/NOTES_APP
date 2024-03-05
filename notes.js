/*Variables for further development of code*/
let form = document.getElementById("form")
let msg = document.getElementById("msg")
let input = document.getElementById("input")
let posts = document.getElementById("posts")
form.addEventListener("submit", (e) => {
    e.preventDefault(); /*Cancellable events are prevented*/
    console.log("button clicked");
    fulemp();//
})
/*Function to display if an input has been given or not. */
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
//object to store data //
let data = {};
/*Appends the object "data" and saves it */
let accData = () => {
    data["text"] = input.value;
    console.log(data);
    makepost();
}
/*Usage template literal to display and store the input given */
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
