


 let btn =document.getElementById("btn");
 let nav = document.getElementById("nav")
  nav.style.color="black"
  nav.style.boxShadow="2px 2px 2px black"

 
    btn.addEventListener("click",()=>{
        document.body.classList.toggle("Dark");
        document.body.classList.toggle("Light");

        if(btn.textContent.includes("Dark mode")){
            btn.textContent="Light mode"
            nav.style.color="white"

            
        }
        else if(btn.textContent.includes("Light mode")){
                btn.textContent="Dark mode"
                nav.style.color="black"
                nav.style.boxShadow="2px 2px 2px black"


            }
        })
















    // btn.addEventListener("click",function(){
    //     if(btn.textContent.includes("dark mode")){
    //        btn.textContent="light mode" 
           
    //     }
    //     else if(btn.textContent.includes("light mode")){
    //        btn.textContent="dark mode"
            
    //     }    
    // })