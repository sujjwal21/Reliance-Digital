document.querySelector("form").addEventListener("submit",myfun);
console.log("shyam")

function myfun(event){
    event.preventDefault();
    let search=document.querySelector("#searchBox").value;
    localStorage.setItem("searchItem",search)
    console.log("ram")
}