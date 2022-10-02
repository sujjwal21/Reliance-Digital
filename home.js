document.querySelector("form").addEventListener("submit",myfun);
// console.log("shyam")

function myfun(event){
    event.preventDefault();
    let search=document.querySelector("#searchBox").value;
    localStorage.setItem("searchItem",search)
    // console.log("ram")
}
let nav=document.querySelector("header");
let napup=document.querySelector(".navupeer");
window.onscroll=function(){
    if(window.pageYOffset>napup.offsetTop){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky");
    }
};
 let data1=[
{
image:"https://www.reliancedigital.in/medias/Redmi-9-activ-6GB-128GB-.jpg?context=bWFzdGVyfGltYWdlc3w4NTQ4OXxpbWFnZS9qcGVnfGltYWdlcy9oNTQvaDE2Lzk4OTUzOTgxNDYwNzguanBnfGY5MGUwNzM0MzBmNTE3NzkzMmY0NzZlNDkyZWJlOWVlZTU1MTMzNmMzY2RjNTUwNjUzYWE1MGJiNmIyNmIwN2M",
url:"https://www.reliancedigital.in/page/redmi-9-activ-mobiles"
},
{
image:"https://www.reliancedigital.in/medias/ONEPLUS-HD-Smart-LED-TV-1-1-.jpg?context=bWFzdGVyfGltYWdlc3w5OTM5MXxpbWFnZS9qcGVnfGltYWdlcy9oMzcvaDYzLzk4OTU0MDE2ODUwMjIuanBnfDQyNDYxMmU0YmEzMjkzMWZhYjZjM2E3OGRmOGE4MjdkZjc1Y2M3NWM1ZTNhMzYyMWIzNDAwYjVlZGMwNTU4NjM",
url:"https://www.reliancedigital.in/page/oneplus-tv"
},
{
image:"https://www.reliancedigital.in/medias/Voltas-Beko-Refrigerators.jpg?context=bWFzdGVyfGltYWdlc3w3NTU5N3xpbWFnZS9qcGVnfGltYWdlcy9oYzQvaDg0Lzk4OTg2NTQ1NjQzODIuanBnfGY4MWRjM2UzNWY1NTI3YzM1OGZiOTQ1YTFlMmJhZWJkYjM3N2UxMjIwMWYyNDI3MWUxOWU5MTU0MTRhNzA3YTI",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-voltas-beko-refs:availability:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Best-Deals-on-Core-i5-Laptops.jpg?context=bWFzdGVyfGltYWdlc3w5NTE2OHxpbWFnZS9qcGVnfGltYWdlcy9oYzMvaGY5Lzk4OTUzOTgzNDI2ODYuanBnfDY3ODIxYTM5M2EzMmVhNjc4ZGVmMzQ5ZGM4ZTk5YzE0NTczNDFkNWU2MmNiYTY0ZTNkMjgyMjRkYmY2MGE5NTc",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-sparkling-i5-laptops:availability:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Speakers-and-Soundbars.jpg?context=bWFzdGVyfGltYWdlc3w3ODUwNHxpbWFnZS9qcGVnfGltYWdlcy9oNWUvaDA4Lzk4OTc0OTcxOTg2MjIuanBnfDIzNjNhNDU5ZDQ1YmY3YjU1NTcxNDM0MDU4N2FjN2U5NWNjZGMwODU5ZDg2ZTI5NWU3ZGFhOTU4NjI5MDQxMzI",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-soundbars:availability:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Motorola-E32s.jpg?context=bWFzdGVyfGltYWdlc3w4MDQxMHxpbWFnZS9qcGVnfGltYWdlcy9oNGQvaDRlLzk4OTk5NDg4MzQ4NDYuanBnfDY1ZmEwZjJhMWNlNzdiODBhYTI5NDIzOWExMGY0NmI0ZmQ5Mzk5YTJjZGQ4NTRhMDA0YTgyN2I2Mjc4Yjk0YWM",
url:"https://www.reliancedigital.in/page/motorola-e32s-mobile"
},
{
image:"https://www.reliancedigital.in/medias/Printers.jpg?context=bWFzdGVyfGltYWdlc3w4MTI3N3xpbWFnZS9qcGVnfGltYWdlcy9oNGYvaDUzLzk4OTUzOTg1MzkyOTQuanBnfGVlZWFjYTlhYjhhMDIzZDVlNDdlOTg1N2JkNWZjOTY4NjQwOTMxOWE4ZGQ1MWM3YWU4MjQ0NDM0MzMxNDVkY2Y",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-sparkling-printers:availability:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Mixer-Grinders.jpg?context=bWFzdGVyfGltYWdlc3w4NzAxNXxpbWFnZS9qcGVnfGltYWdlcy9oZmEvaDBlLzk4OTc1MDAxMTQ5NzQuanBnfGY3N2U0ZTgwNmFmMDdkNDBiZjlhNTZjY2Q0NDI2N2IxNjQ2YzI1ZjczZjliZWJiMjAxNmJkZjY2YTk4ZTM0MmQ",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-sparkling-mixers:availability:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Keyboard-Mouse.jpg?context=bWFzdGVyfGltYWdlc3w3OTc4M3xpbWFnZS9qcGVnfGltYWdlcy9oYTYvaGI2Lzk4OTUzOTg2NzAzNjYuanBnfDIzOGU1ZDYyNDBhNjE1ZDViZGFmYmFkMzFkYWIwZTFkYWNlNzMxOGUwNzg1NjhlZWIwZWEyOTkwMWNjMjIzNTU",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-sparkling-keyboards-mouse:availability:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Water-Heaters.jpg?context=bWFzdGVyfGltYWdlc3w3NDM1N3xpbWFnZS9qcGVnfGltYWdlcy9oNDgvaDJmLzk5MDA4MjQ3NTYyNTQuanBnfDc5ZjQ3YWEwODNjOTc0YzA3YTAyZGI4ZDY5Y2Q4YTY0YzY2M2JlMWZkMWQ4ZDVkZmI4ZWNiMjk2NmQ2YTUxM2Q",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-sparkling-water-heaters:availability:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Earphones-and-Neckbands.jpg?context=bWFzdGVyfGltYWdlc3w4MjAzM3xpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGFkLzk5MDA4MjQ4MjE3OTAuanBnfDE0NjdkMzgyODNjMzE4MzA5MWEyMzcwOGE3ZjJlMjM2MWEzMGE2OWMxMDU2MWVkNzA2ODE1NTRmMGU2OTFlZDU",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-category-neckbands:availability:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Tecno-Pop-5-LTE.jpg?context=bWFzdGVyfGltYWdlc3w4MDcwNXxpbWFnZS9qcGVnfGltYWdlcy9oZDgvaGRkLzk4OTk5NDg5MDAzODIuanBnfDY2NTAxZDg4NjM5NTA4ZTg1NzcxMDMwYzdmZTQ1ZGNiZTg3MjlmMTVmNjVjNjZhYmY1YTczNWQ3NDYwMjRmOGQ",
url:"https://www.reliancedigital.in/page/tecno-pop-5-mobiles"
}
]

 data1.forEach(function(el){
    let div=document.createElement("div")
    let an=document.createElement("a")
    an.href=el.url;
    let img=document.createElement("img")
    img.src=el.image;

    an.append(img)
    div.append(an)
    document.querySelector(".top22").append(div)
 })

// let data2=[
// {
// name:"",
// image:"https://www.reliancedigital.in/medias/Macbooks-Carousel-Banner-D-1-.jpg?context=bWFzdGVyfGltYWdlc3w5MzUxM3xpbWFnZS9qcGVnfGltYWdlcy9oNTkvaDBjLzk4OTYyMzU0OTk1NTAuanBnfGFmOWNmOTIxNmE3NDkyM2IyZGQ5NmNmYWVhMmMwYTBiZDkyZGVjYzViMTQ4MTRkYjM2NGZlZmE5ZGY1YzhjMDA",
// url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-macbooks:availability:Exclude%20out%20of%20Stock:brand:Apple&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/medias/pTron-Pulsefit-P261-Carousel-Banner-23-09-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMjY3MzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDBjL2gyYy85ODk3MjQ5ODY1NzU4LmpwZ3xiNjNmNjJhNDE1Y2JhZmZhMzQyN2NiZDI2YmU0NjljMDEzNzcxM2ZiNTM3Yjg1NzVlMDA0NDYyMDBhMzExOTU1",
// url:"https://www.reliancedigital.in/search?q=ptron%20watch:price-desc:availability:Exclude%20out%20of%20Stock&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/medias/Small-Appliances-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NDEzNHxpbWFnZS9qcGVnfGltYWdlcy9oYTIvaDQyLzk4OTg2NTQzNjc3NzQuanBnfGFjZjQyODRiZWEwMzgxMGE4MDFiZjEzYjM0N2Q0MmY0ZmI3MzRjNmFiMTkxZWE2Y2FkMzQzN2UyYmU0MjI2NDk",
// url:"https://www.reliancedigital.in/brand/Festival-Of-Electronics-SDA"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/medias/Motorola-G71-5G-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NTEzM3xpbWFnZS9qcGVnfGltYWdlcy9oMzQvaDAwLzk4OTYyOTA4MTE5MzQuanBnfDJiYjFlMjA2YTAxNjA3NzA5YjgzODJlYTJhYzA3MzJkYmIzZDI4MzA0MDdlZjNmZGVkZmFiMjUxNDA0ZmI0ZmU",
// url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-motorola-g71:availability:Exclude%20out%20of%20Stock&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/medias/Monitors-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NTQ3MHxpbWFnZS9qcGVnfGltYWdlcy9oOWUvaDYyLzk4OTYyOTEwNzQwNzguanBnfDRhY2I0NDNhYjllZmE5OWIwYjc0ZWU0OTg1YmYwOThhMGY1ZjgwMjg3ODFlM2QzYzcyODA0ZGI4NzdjMmJkZTg",
// url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-deals-monitors:availability:Exclude%20out%20of%20Stock&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/medias/alexa-and-fire-TV-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NjU5MnxpbWFnZS9qcGVnfGltYWdlcy9oNTkvaDhmLzk4OTg5NzUwMDI2NTQuanBnfGU2ZjU0OWU4Njk3MjIxOGU2NDFlNDYwYTk2N2NmZDM5M2Y2MDUzZTQ3Mjk1YjlhYjZhZTk2ZjY3MjgxMTdiZTc",
// url:"https://www.reliancedigital.in/search?q=:relevance:productTags:alexa-diwali-promotion:availability:Exclude%20out%20of%20Stock&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/medias/Printer-Monitor-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NjcyMXxpbWFnZS9qcGVnfGltYWdlcy9oNmIvaGQ5Lzk4OTcyNDkxNzc2MzAuanBnfDM5YTdmNzMyNmI4YzNkMDgyZDU0ZWUyODQzMzgzZmFlYWE0NGI5NDhmMTcwMmE4YmJkOWJmYzNhNjdmODFkNGU",
// url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:Keyboard_Printer:availability:Exclude%20out%20of%20Stock&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/medias/Premium-Audio-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5NDA2MnxpbWFnZS9qcGVnfGltYWdlcy9oOTQvaDE2Lzk4OTc0OTIwNTQwNDYuanBnfGFmN2M4MjBkYzQ0ZTRiZTJkYzk1YzM5M2FhZjNhZTg4MjFhMzRmYjRmODU4ZGViYjMzY2FhZDc5ZTYwYTZiNGI",
// url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-premium-audio:availability:Exclude%20out%20of%20Stock&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/medias/Xiaomi-HD-Ready-Smart-TV-Carousel-Banner.jpg?context=bWFzdGVyfGltYWdlc3w4NzQwMnxpbWFnZS9qcGVnfGltYWdlcy9oNzIvaGFhLzk4OTg1NDkwODQxOTAuanBnfDBkNGFlNjVlZjY4ODY5MjMyOWZkYTNlNjRlN2I2MzYyZDE1NmU2ZmU0ODI1YjFmNTI3NjZmNmVlMmM1OGQ4Zjg",
// url:"https://www.reliancedigital.in/page/mi-tv?searchQuery=:price-asc:availability:Exclude%20out%20of%20Stock:brand:Xiaomi:brand:Mi&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/medias/Macbooks-Carousel-Banner-D-1-.jpg?context=bWFzdGVyfGltYWdlc3w5MzUxM3xpbWFnZS9qcGVnfGltYWdlcy9oNTkvaDBjLzk4OTYyMzU0OTk1NTAuanBnfGFmOWNmOTIxNmE3NDkyM2IyZGQ5NmNmYWVhMmMwYTBiZDkyZGVjYzViMTQ4MTRkYjM2NGZlZmE5ZGY1YzhjMDA",
// url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-macbooks:availability:Exclude%20out%20of%20Stock:brand:Apple&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/medias/pTron-Pulsefit-P261-Carousel-Banner-23-09-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMjY3MzZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDBjL2gyYy85ODk3MjQ5ODY1NzU4LmpwZ3xiNjNmNjJhNDE1Y2JhZmZhMzQyN2NiZDI2YmU0NjljMDEzNzcxM2ZiNTM3Yjg1NzVlMDA0NDYyMDBhMzExOTU1",
// url:"https://www.reliancedigital.in/search?q=ptron%20watch:price-desc:availability:Exclude%20out%20of%20Stock&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
// url:"https://www.reliancedigital.in/brand/Festival-Of-Electronics-SDA"
// },{
// name:"",
// image:"https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
// url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-motorola-g71:availability:Exclude%20out%20of%20Stock&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
// url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-deals-monitors:availability:Exclude%20out%20of%20Stock&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
// url:"https://www.reliancedigital.in/search?q=:relevance:productTags:alexa-diwali-promotion:availability:Exclude%20out%20of%20Stock&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
// url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:Keyboard_Printer:availability:Exclude%20out%20of%20Stock&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
// url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-premium-audio:availability:Exclude%20out%20of%20Stock&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
// url:"https://www.reliancedigital.in/page/mi-tv?searchQuery=:price-asc:availability:Exclude%20out%20of%20Stock:brand:Xiaomi:brand:Mi&page=0"
// },
// {
// name:"",
// image:"https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
// url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-macbooks:availability:Exclude%20out%20of%20Stock:brand:Apple&page=0"
// }
// ]



//  data2.forEach(function(el){
//     let img=document.createElement("img")
//     img.src=el.image;
//     document.querySelector(".swiper-slide").append(img)
//  })

let data2=[
    {
image:"https://www.reliancedigital.in/medias/Refrigerators-TOP-PICKS-BY-CATEGORY-1.jpg?context=bWFzdGVyfGltYWdlc3w0MzM3MnxpbWFnZS9qcGVnfGltYWdlcy9oZTgvaGQ2Lzk4OTYyODc0Njk1OTguanBnfDk5N2E5NGIyOWJhMzkyNzlhN2VkOTczZDA2YTI4YjAzYmNiODEyMTNmOTJlNDJlNWU0NjQ4Y2M1N2YzOTM2NjI",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-deals-refs:Exclude%20out%20of%20Stock&page=0"
},{
image:"https://www.reliancedigital.in/medias/i3-laptops-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w1MDU3OXxpbWFnZS9qcGVnfGltYWdlcy9oYWEvaGU2Lzk4OTUzOTk2NTM0MDYuanBnfDU5ZWJlZThmOTk3Mjg2ZmYwYzdjNmE1ZWM2ZmQ0OTI2ZWIyYzY1NzUwZjY0ZGUxMjM1ZDJkMDNiNzcwNzRlNzA",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-price-drop-laptops:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Smartwatch-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w0ODczOXxpbWFnZS9qcGVnfGltYWdlcy9oOTQvaGVlLzk4OTUzOTk5ODEwODYuanBnfDkxZDJkNzgzMzExZDlmZDE2MjBjNzZiOWQ0MzkzMWNjNDdkNGQ1NDU1YTliZWFkNzM2MzkxNjA3Mzg1OTljNzM",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-smartwatches:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Samsung-Smart-HD-Ready-TV-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w3NDQ3NXxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDMxLzk4OTgzNDk1MjcwNzAuanBnfDQ3MjZlZGJjYzU2N2Q3MmVkMjBlZWIxYTRkNzU2YmJhMmZiMDMwZDIzMWU1OWE0N2RlNDgyNmU2OThlM2ZlYzU",
url:"https://www.reliancedigital.in/page/samsung-tv?searchQuery=:price-asc:availability:Exclude%20out%20of%20Stock:brand:Samsung&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Refrigerators-TOP-PICKS-BY-CATEGORY-1.jpg?context=bWFzdGVyfGltYWdlc3w0MzM3MnxpbWFnZS9qcGVnfGltYWdlcy9oZTgvaGQ2Lzk4OTYyODc0Njk1OTguanBnfDk5N2E5NGIyOWJhMzkyNzlhN2VkOTczZDA2YTI4YjAzYmNiODEyMTNmOTJlNDJlNWU0NjQ4Y2M1N2YzOTM2NjI",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-deals-refs:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/New-Audio-Launchers-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w0NDE1OXxpbWFnZS9qcGVnfGltYWdlcy9oODgvaGE0Lzk4OTUzOTk4NTAwMTQuanBnfDNhMGZiMTAxMDA5OWYzODQ1OWEyODFlODNlZDIxZmM5ZTNmNWY3NjAyNjNlMjdmZWZmMzUzOWYxYmYyYWVjMjM",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-new-audio-launch:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Washing-Machine-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w0NTgxNHxpbWFnZS9qcGVnfGltYWdlcy9oZTkvaDljLzk4OTYyODc1MzUxMzQuanBnfGZlMTUzODhkODFlNjhjMGJiYjkwNTM3Mjg2YTZiZGIyYzBmMjM5MTc0YzRlMTU4YTMwYTc4ODU0ZWZlODA0MTQ",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-washing-machines:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Tablets-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3wzNzUyNnxpbWFnZS9qcGVnfGltYWdlcy9oNjYvaDZlLzk4OTU0MDAwNDY2MjIuanBnfDBmMTlkNmM3ZmM2MWE0N2Y5NzUxOWI3ZTE4N2Q0NzQwM2E2NGNjYWYyZTIwMWIyMDcwMTgzNjc3ZmQ3YTM5Mzg",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-tablets:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Audio-Accesories-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w1MTAwMXxpbWFnZS9qcGVnfGltYWdlcy9oYzIvaDY3Lzk4OTU0MDAxMTIxNTguanBnfDI5NGNlZGViY2M0YzVmOGM2MGIxY2VmZTE1YzMwZTNmYjgwYzVhNGQ5ZjQxNjU5MWNlZmViMWUxNTI1ZGZkNjk",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-audio-accessories:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Samsung-Galaxy-M53-5G-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w2MzQzN3xpbWFnZS9qcGVnfGltYWdlcy9oNzIvaGI4Lzk4OTU0MDAxNzc2OTQuanBnfGVkZTI2OTIzNmMxNTY5Yzc3MDYwMzJkM2VjMGVkN2VmNjcwZTFhNTQyNzA2MzM4Y2U3YTQ1NjgzYjU5NTZlOGE",
url:"https://www.reliancedigital.in/page/samsung-m53-mobile"
},
{
image:"https://www.reliancedigital.in/medias/Monitor-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w1MzA3OHxpbWFnZS9qcGVnfGltYWdlcy9oNDQvaDJjLzk4OTU0MDAyNDMyMzAuanBnfGE1MzA0MjI5ZWYwZGY3NjIyNTRlMzdhNWM1M2ZlZjAxNzcyNjllMTg1NTUxZDE1MzE1NmM0YWZiMmE1NGM5OTY",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-deals-storage:Exclude%20out%20of%20Stock&page=0"
},
{
image:"https://www.reliancedigital.in/medias/Air-Conditioners-TOP-PICKS-BY-CATEGORY.jpg?context=bWFzdGVyfGltYWdlc3w0NDcwMXxpbWFnZS9qcGVnfGltYWdlcy9oOWIvaDYyLzk4OTU0MDAzMDg3NjYuanBnfDEzNGU5MGRlNGI4NTc0MGJhZmIyZGUxYjAwMjRiZWUwNmM4NzhhZTcxYTkyZWU0YmQ4YmQ5NWNjMjllNWY2ZmM",
url:"https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-inverters-acs:Exclude%20out%20of%20Stock&page=0"
}
];


data2.forEach(function(el){
    let div=document.createElement("div")
    let an=document.createElement("a")
    an.href=el.url;
    let img=document.createElement("img")
    img.src=el.image;
    an.append(img)
    div.append(an)
    document.querySelector("#top23").append(div)
 })

function fumsum(){
    console.log("radhey radhey")
    window.location.href="discount.html"
}

function leman(){
    window.location.href="gamingConsole.html"
}
function login(){
    window.location.href="login.html"
}
function lema(){
    window.location.href="index.html"
}