
    
    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));


    if (loggedInUser) {
        document.getElementById('userSpan').textContent = loggedInUser.name;  
    } else {
       
        window.location = './index.html';
    }


function logout() {
   
    localStorage.removeItem("loggedInUser");
    window.location = './index.html'; 
}
