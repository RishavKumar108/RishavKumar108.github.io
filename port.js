// menuBar.classList.remove("none")
document.querySelector(".home").addEventListener("click",()=>{
    document.querySelector("#home").scrollIntoView();
  
})

document.querySelector(".about").addEventListener("click",()=>{
   document.querySelector("#about").scrollIntoView();
  
})

document.querySelector(".skills").addEventListener("click",()=>{
   document.querySelector("#skills").scrollIntoView();
  
})

document.querySelector(".projects").addEventListener("click",()=>{
   document.querySelector("#projects").scrollIntoView();
  
})
document.querySelector(".contact").addEventListener("click",()=>{
   document.querySelector("#contact").scrollIntoView();
  
})

document.querySelector("#resume-button-1").addEventListener("click",()=>{
   window.location.href="https://drive.google.com/file/d/1IM0EGep76hyjC-Sw-BNywfH_UZ6D98gc/view?usp=sharing";
   window.open("https://drive.google.com/file/d/1IM0EGep76hyjC-Sw-BNywfH_UZ6D98gc/view?usp=sharing","_blank") ;
})

document.querySelector("#resume-button-2").addEventListener("click",()=>{
   window.location.href="https://drive.google.com/file/d/1IM0EGep76hyjC-Sw-BNywfH_UZ6D98gc/view?usp=sharing";
  window.open("https://drive.google.com/file/d/1IM0EGep76hyjC-Sw-BNywfH_UZ6D98gc/view?usp=sharing","_blank") ;
})

document.querySelector(".travelDep").addEventListener("click",()=>{
  window.open("https://drive.google.com/file/d/1na30X33jRYeAxiE4koIcZLgLFyGXEVn5/view?usp=sharing","_blank") ;
})
document.querySelector(".travelGit").addEventListener("click",()=>{
   window.open("https://github.com/sagarkumarojha/habitual-harbor-2140","_blank") ;
})

document.querySelector(".mailGit").addEventListener("click",()=>{
    window.open("https://github.com/sofiyanshaikh008/Tales-of-time-travel","_blank") ;
 })

document.querySelector(".mailDep").addEventListener("click",()=>{
    window.open("https://drive.google.com/file/d/1FN0k73_DNbdg8fKqmcbxee5j7XBgicvt/view","_blank") ;
 })

document.querySelector(".linkedIn").addEventListener("click",()=>{
   window.open("https://www.linkedin.com/in/rishav-kumar-1a9239237/","_blank") ;
})

document.querySelector(".portfolio").addEventListener("click",()=>{
   window.open("https://github.com/RishavKumar108/","_blank") ;
})

const mediaQuery = window.matchMedia('(min-width: 1001px)');

// Check if the media query matches


let menuButton=document.getElementById("menu");
//  console.log(menuButton)
let menuBar=document.querySelector("#nav-menu>div:nth-child(2)");

mediaQuery.addEventListener('change',(event) => {
   if (event.matches) {
       menuBar.style="display:flex";
    }
 });
let click_count=0;
menuButton.addEventListener("click",()=>{
   click_count++;



   if (menuButton.classList.contains('fa-xmark')) {
       menuButton.classList.remove("fa-bars");
       menuButton.classList.add("fa-xmark");
       menuBar.style="display:flex";
     } else {
       // menuBar.style="display:none";
       menuButton.classList.add("fa-bars");
       menuButton.classList.remove("fa-xmark");
     }

   // console.log(click_count)
   if(click_count%2==0){
       menuBar.style="display:none";
       menuButton.classList.add("fa-bars");
       menuButton.classList.remove("fa-xmark");
   }else{
       menuButton.classList.remove("fa-bars");
       menuButton.classList.add("fa-xmark");
       menuBar.style="display:flex";
   }
})
