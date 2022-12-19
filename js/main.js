
  let navbar = document.querySelector('#title');
  onscroll =function(){
    if(scrollY > 40){
      navbar.classList.add('scrolled');
    }
    else{
      navbar.classList.remove('scrolled');
    }
  }
  
  


   // header
   window.addEventListener('load',function() {
     let url = window.location.href;
     let navLinks = document.querySelectorAll('.navbar-nav a')
     navLinks.forEach(link => {
       if(link.href.includes(url)){
         link.classList.add('active');
        }
      })
    })
 
window.addEventListener('load', function(){
 document.querySelector("#date").innerHTML=`Copyright © ${new Date().getFullYear()}`;
})



// scrollbtn
window.addEventListener('load',function() {

window.onscroll=function(){scrollFunction()};
function scrollFunction(){
    if(document.documentElement.scrollTop>20){
      document.querySelector(".scrollarrow").style.display="block";
      document.querySelector(".head").style.background ="#c9ccd0"
      }
      else{
        document.querySelector(".scrollarrow").style.display="none";
        document.querySelector(".head").style.background ="white"
      }
      document.querySelector(".scrollarrow").addEventListener('click', movetotop)
    }
  
  function movetotop(){    
      document.body.scrollIntoView({behavior: "smooth"});
  }
})




window.addEventListener('load',function(){
  let progressBars = document.querySelectorAll('.progress-bar');
  let values =['85%','80%','82%','90%'];
progressBars.forEach(function(progress,index){
  progress.style.width = values[index];
})
})

let image =document.getElementById("img") 

image.style.animation="image 4s  ease-out";


    

