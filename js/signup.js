
var signupNameInput = document.getElementById("signupName");
var signupEmailInput = document.getElementById("signupEmail");
var signupPasswordInput = document.getElementById("signupPassword");
var message = document.querySelector(".message");
var messageSecond = document.querySelector(".message-2");
var messageThird = document.querySelector(".message-3");

var signupList=[];


if(localStorage.getItem("inputContainer") !== null ){
    signupList= JSON.parse(localStorage.getItem("inputContainer"));

    
}


function signup(){


    if(validateInput()==true && !includesEmail(signupEmailInput.value)){
    var product ={
        name: signupNameInput.value.trim() ,
        email:signupEmailInput.value.trim(),
        password:signupPasswordInput.value.trim()
        }

        message.classList.add("d-none");
        message.classList.remove('d-block');
      
        messageThird.classList.remove("d-none");
        messageThird.classList.add("d-block");

        signupList.push(product);
       
      localStorage.setItem("inputContainer" , JSON.stringify(signupList))
      

       
        
        console.log(signupList);


    }else{
        if (includesEmail(signupEmailInput.value)) {
            messageSecond.classList.remove("d-none");
            messageSecond.classList.add('d-block');

            messageThird.classList.add("d-none");
            messageThird.classList.remove("d-block");
        } else {
            message.classList.remove("d-none");
            message.classList.add('d-block');
        }
    }
        
        
}





function validateInput(){
    var nameRegex = /^[A-Za-z]{1,}$/;
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var passwordRegex = /^(?=.*[0-9]).{4,}$/;



  var isNameValid = nameRegex.test(signupNameInput.value);
  var isEmailValid = emailRegex.test(signupEmailInput.value);
  var isPasswordValid = passwordRegex.test(signupPasswordInput.value);



  if (isNameValid ){
    signupNameInput.classList.add('is-valid');
    signupNameInput.classList.remove('is-invalid');
  } else {
    signupNameInput.classList.add('is-invalid');
    signupNameInput.classList.remove('is-valid');
    isNameValid = false;
  }




  if (isEmailValid && !includesEmail(signupEmailInput.value)){
    signupEmailInput.classList.add('is-valid');
    signupEmailInput.classList.remove('is-invalid');
    
  }


   else {
    signupEmailInput.classList.add('is-invalid');
    signupEmailInput.classList.remove('is-valid');
    isEmailValid = false;
  }



  

  if (isPasswordValid){
    signupPasswordInput.classList.add('is-valid');
    signupPasswordInput.classList.remove('is-invalid');
  } else {
    signupPasswordInput.classList.add('is-invalid');
    signupPasswordInput.classList.remove('is-valid');
    isPasswordValid = false;
  }

  return isNameValid && isEmailValid &&isPasswordValid ;

}


function clearForm(){
    signupNameInput.value = null;
    signupEmailInput.value = null;
    signupPasswordInput.value = null;
}





document.getElementById("signinRouting").addEventListener("click" ,function(){
    window.location ='./index.html';
})


function includesEmail(email) {
    return signupList.some(item => item.email.toLowerCase() === email.toLowerCase());
  }








  //   else if(!includesEmail(signupEmailInput.value)){
   
//     signupEmailInput.classList.add('is-valid');
//     signupEmailInput.classList.remove('is-invalid');
  


//   }