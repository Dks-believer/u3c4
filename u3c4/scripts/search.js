// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import{navbar} from "../components/navbar.js";

let n=document.getElementById("navbar");
n.innerHTML=navbar();




var dataN=JSON.parse(localStorage.getItem("cart"))
console.log(dataN)
 let append=(dataN,container1) => {
    //  event.preventDefault;
    dataN.forEach(({description,urlToImage,title}) => {
        let div=document.createElement('div');
        div.setAttribute("class","image")

        let img=document.createElement('img');
        let h3=document.createElement('h3');
       let h2=document.createElement('h2');
        img.src=urlToImage;
        h3.innerText=description;
        h2.innerText=title;
        div.append(h2,img,h3);
        container1.append(div);
    });   
}
    let container1=document.getElementById("results");
container1.innerHTML=null;
append(dataN.articles,container1)
    

 
document.getElementById("search_input").addEventListener("keyup",search)

import{searchNews,search} from './fetch.js';
