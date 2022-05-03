// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import{navbar} from "../components/navbar.js";

let n=document.getElementById("navbar");
n.innerHTML=navbar();

import{search} from './fetch.js';


document.getElementById("search_input").addEventListener("keyup",search);


let cNews= async(value) => {
    

    try{

        let res=await fetch(
            `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`
        );
        let data=await res.json();
       console.log(data)
        return data
    }
    catch(err){
        console.log(err);
    }
   };

let sidebar=document.getElementById("sidebar").children;
// var value=document.getElementById("sidebar".children).value;
function cSearch (){
    console.log(this.id);

    cNews(this.id).then((data)=>{ 
       console.log(data);
       let container1=document.getElementById("container");
          container1.innerHTML=null;
       append(data.articles,container1)

   })
}
let append=(data,container) => {
    //  event.preventDefault;
    data.forEach(({description,urlToImage,title}) => {
        let div=document.createElement('div');
        div.setAttribute("class","image")

        let img=document.createElement('img');
        let h3=document.createElement('h3');
       let h2=document.createElement('h2');
        img.src=urlToImage;
        h3.innerText=description;
        h2.innerText=title;
        div.append(h2,img,h3);
        container.append(div);
    });   
}
//     let container=document.getElementById("container");
// container.innerHTML=null;
// append(data.articles,container)
    
       for(let el of sidebar){
           el.addEventListener("click",cSearch);
       }
    




 