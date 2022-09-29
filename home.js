let data=document.querySelector("form").addEventListener("submit",myfun);
function myfun(event){
    event.preventDefault();
    let search=document.querySelector("#searchBox").value;
    localStorage.setItem("searchItem",search)
}