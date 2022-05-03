
 let searchNews= async(value) => {
    

     try{
         let res=await fetch(
             `https://masai-mock-api.herokuapp.com/news?q=${value}`
         );
         let data=await res.json();
        //  console.log(data)
        //  localStorage.setItem("cart",JSON.stringify(data))
         return(data)
     }
     catch(err){
         console.log(err);
     }
    };

 let search=(e) =>{
  
    let value=document.getElementById("search_input").value;
    searchNews(value).then((data)=>{
    //   console.log(data);
      localStorage.setItem("cart",JSON.stringify(data))

    })
    
    if(e.key==="Enter"){

        window.location.href='search.html'
    }
  
}

export{searchNews,search}




 