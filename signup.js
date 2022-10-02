    let data = document.querySelector("#signup").addEventListener("submit",myfun);
let arr=[];
function myfun(event){
    event.preventDefault();
    arr=localStorage.getItem("Arr",JSON.stringify(arr))||[];
    let user={};
    let name=document.querySelector("#name").value;
    let gmail=document.querySelector("#email").value;
    let password=document.querySelector("#passcode").value;

    localStorage.setItem("name",name);
    localStorage.setItem("mail",gmail);
    localStorage.setItem("password",password);
    alert("sign up successfully")
    // user["name"]=document.querySelector("#name").value;
    // user["mail"]=document.querySelector("#email").value;
    // user["password"]=document.querySelector("#passcode").value;
    // arr.push(user);
    // localStorage.setItem("Arr",JSON.stringify(arr))
    window.location.href="login.html"
    // // let name=event.target[0].value;
    // console.log(event)
}

function leman(){
    window.location.href="login.html"
}