
function darkMode(){

   var content = document.getElementsByTagName('body')[0];
   var content2 = document.getElementById('my_box')
  
   
   content.classList.toggle("body-a");
   content2.classList.toggle("my_box-a");
  

}


screen.orientation.lock("portrait")





// *scroll animation start*****************************************************************************

window.addEventListener("scroll",()=>{
    let content = document.querySelector(".div-last1");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = h  // ? html.height
    if(contentPosition<screenPosition){
        content.classList.add("div-last1-ativ");

        
    }
    else{
        content.classList.remove("div-last1-ativ")
    }
})

window.addEventListener("scroll",()=>{
    let content = document.querySelector(".div-with-img");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = h  // ? html.height
    if(contentPosition<screenPosition){
        content.classList.add("div-with-img-ativ");

        
    }
    else{
        content.classList.remove("div-with-img-ativ")
    }
})




// ??    ! IMP for all scroll animation for !    ??????????????????????????????????????????????????????

w=window.innerWidth;                                                                                                                                                                                                            
h = window.innerHeight;


if (h<670) {
    h=300;

    
    
}
if(h>670){
    h=520
}

// ??    ! IMP for scroll animation for !    ??????????????????????????????????????????????????????? 


window.addEventListener("scroll",()=>{
    let content = document.querySelector(".text");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = h  // ? html.height
    if(contentPosition<screenPosition){
        content.classList.add("text_active");

        
    }
    else{
        content.classList.remove("text_active")
    }
})





window.addEventListener("scroll",()=>{
    let content = document.querySelector(".div_1");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = h  // ? html.height
    if(contentPosition<screenPosition){
        content.classList.add("div_ativ1");
        

        
    }
    else{
        content.classList.remove("div_ativ1")
    }
})





window.addEventListener("scroll",()=>{
    let content = document.querySelector(".div_3");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = h  // ? html.height
    if(contentPosition<screenPosition){
        content.classList.add("div_ativ3");

        
    }
    else{
        content.classList.remove("div_ativ3")
    }
})




window.addEventListener("scroll",()=>{


    let content = document.querySelector(".div_2");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = h    // ? html.height                                                                       
    if(contentPosition<screenPosition){
        content.classList.add("div_ativ2");

        
    }
    else{
        content.classList.remove("div_ativ2")
    }
})

window.addEventListener("scroll",()=>{


    let content = document.querySelector(".img-ui");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerWidth    // ? html.height                                                                       
    if(contentPosition<screenPosition){
        content.classList.add("img-ui-atvi");

        
    }
    else{
        content.classList.remove("img-ui-atvi")
    }
})

window.addEventListener("scroll",()=>{


    let content = document.querySelector(".img-ui-1");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = h    // ? html.height                                                                       
    if(contentPosition<screenPosition){
        content.classList.add("img-ui-atvi");

        
    }
    else{
        content.classList.remove("img-ui-atvi")
    }
})

window.addEventListener("scroll",()=>{


    let content = document.querySelector(".hey");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight                                                                    
    if(contentPosition<screenPosition){
        content.classList.add("hey-ativ");

        
    }
    else{
        content.classList.remove("hey-ativ")
    }
})






// !!!!!!!!!!!!!!!!!!!!!scroll animation end!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





//? let content = document.querySelector(".div_2");  ----------animation adding content name  eg=> ("div")
//? let contentPosition = content.getBoundingClientRect().top;
//? let screenPosition = innerHeight                                      or give if else :)                              
//? if(contentPosition<screenPosition){
//?     content.classList.add("div_ativ2"); --------- take css form classlist and add to content

    
//? }
//? else{
//?     content.classList.remove("div_ativ2")
//? }
//? })


