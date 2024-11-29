
var loginEmailInput = document.getElementById("signinEmail");
var loginPasswordInput = document.getElementById("signinPassword");
var signupNameInput = document.getElementById("signupName");

var message = document.querySelector(".message");





function login(){



    if (loginEmailInput.value.trim() === '' || loginPasswordInput.value.trim() === '') {
        
        message.classList.remove("d-none");
        message.classList.add('d-block');
        return;
    }
    var storedUsers = JSON.parse(localStorage.getItem("inputContainer"));

    if (storedUsers) {
        var foundUser = storedUsers.find(function(user) {
            return user.email === loginEmailInput.value && user.password === loginPasswordInput.value;
        });

        if (foundUser) {
        
            localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
            window.location = './home.html';
        } else {
            
              message.textContent = "Incorrect email or password";
            message.classList.remove("d-none");
            message.classList.add('d-block');
        }
    } else {
        
        message.textContent = "Incorrect email or password";
        message.classList.remove("d-none");
        message.classList.add('d-block');
    }
}







document.getElementById("signupRouting").addEventListener("click" ,function(){
    window.location ='./signup.html';
})




// if("".length ){
     
//     message.classList.add("d-none");
//     message.classList.remove('d-block');
//     }else{


//     message.classList.remove("d-none");
//     message.classList.add('d-block');
//     }