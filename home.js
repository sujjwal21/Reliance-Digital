document.querySelector("form").addEventListener("submit",myfun);
console.log("shyam")

function myfun(event){
    event.preventDefault();
    let search=document.querySelector("#searchBox").value;
    localStorage.setItem("searchItem",search)
    console.log("ram")
}


//  let data1=[
//   {
//    "image": "https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
//    "url": "https://www.reliancedigital.in/page/redmi-9-activ-mobiles"
//   },
//   {
//    "image": "https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
//    "url": "https://www.reliancedigital.in/page/oneplus-tv"
//   },
//   {
//    "image": "https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
//    "url": "https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-voltas-beko-refs:availability:Exclude%20out%20of%20Stock&page=0"
//   },
//   {
//    "image": "https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
//    "url": "https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-sparkling-i5-laptops:availability:Exclude%20out%20of%20Stock&page=0"
//   },
//   {
//    "image": "https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
//    "url": "https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-soundbars:availability:Exclude%20out%20of%20Stock&page=0"
//   },
//   {
//    "image": "https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
//    "url": "https://www.reliancedigital.in/page/motorola-e32s-mobile"
//   },
//   {
//    "image": "https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
//    "url": "https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-sparkling-printers:availability:Exclude%20out%20of%20Stock&page=0"
//   },
//   {
//    "image": "https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
//    "url": "https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-sparkling-mixers:availability:Exclude%20out%20of%20Stock&page=0"
//   },
//   {
//    "image": "https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
//    "url": "https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-sparkling-keyboards-mouse:availability:Exclude%20out%20of%20Stock&page=0"
//   },
//   {
//    "image": "https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
//    "url": "https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-sparkling-water-heaters:availability:Exclude%20out%20of%20Stock&page=0"
//   },
//   {
//    "image": "https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
//    "url": "https://www.reliancedigital.in/search?q=:price-asc:productTags:festival-of-electronics-category-neckbands:availability:Exclude%20out%20of%20Stock&page=0"
//   },
//   {
//    "image": "https://www.reliancedigital.in/build/client/images/loaders/mdefault.png",
//    "url": "https://www.reliancedigital.in/page/tecno-pop-5-mobiles"
//   }
//  ]

// function display(data){
//     data.forEach(function(el){
//         let div=document.createElement("div")

//         let an=document.createElement("a")
//         an.url=el.url

//         let img=document.createElement("img")
//         img.src=el.image

//         an.append(img)
//         div.append(an)
//         document.querySelector(".top2").append(div)
//     })
// }
// display(data)