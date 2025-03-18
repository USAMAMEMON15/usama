
// init Isotope
var $grid = $('.container').isotope({
    // options
  });
  // filter items on button click
  $('#nav').on( 'click', 'ul li', function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $(document).on("click" ,"ul li",function(){
    $(this).addClass("active").siblings().removeClass("active")
  })

  function velidation(){
    let email =document.getElementById("email").value;
    let password =document.getElementById("password").value;

    let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordCheck = /^[A-Za-z]\w{5,12}$/;
     
   
    if(emailCheck.test(email)){
        document.getElementById("emailerror").innerHTML = ""
    }
    else{
        
        document.getElementById("emailerror").innerHTML = "***Enter Your Valid Email***"
        return false;
}

    if(passwordCheck.test(password)){
        document.getElementById("passworderror").innerHTML = ""
    }
    else{
        document.getElementById("passworderror").innerHTML = "***Enter Your Password At Least Min 5 Characters***"
        return false;
    }

   
if (emailCheck.test(email) && passwordCheck.test(password)){
    swal("Form Submit Successful", "Waiting for the email", "success")
    return false;
}
}


let sign =document.getElementById("sign");
let nav =document.getElementById("nav");
let body =document.getElementsByName("body");


swish.addEventListener("click",function(){
  if(btn.textContent.includes("dark")){
      nav.style.backgroundColor="white"
      body.style.backgroundColor="white"
  }
  else if(btn.textContent.includes("off") && mq. textContent.includes("off")){
      img.src="/pexels-samerdaboul-1627933.jpg";
      btn.textContent="turn on"
      mq.textContent="turn on"
      btn.style.backgroundColor="yellow"
      mq.style.backgroundColor="red"
  }    
})