    let vdata = document.querySelector("#signin");
    vdata.addEventListener("submit",myfun);
let ema=(localStorage.getItem("mail"));
let pas=(localStorage.getItem("password"));
    function myfun(event){
        event.preventDefault();
        let email=document.querySelector("#mail").value;
        let password=document.querySelector("#pass").value;

        console.log(email,password)
        if(email!=ema){
            alert("Email is not registered")
        }else if(password!=pas){
            alert("Password is wrong")
        }else{
            alert("login successful")
        }
        if(email==ema&&password==pas){
            window.location.href="index.html"
        }else{
            // alert("wrong input")
        }

    // window.location.href="puppy.html"
    }
function leman(){
    window.location.href="signup.html"
}