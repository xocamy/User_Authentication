

const formSubmit = () => {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    if( username === "" || email === "" || password === "")
    {
        alert("Please fill the required info!")
    }else{
        alert(`your username is : ${username} and password is : ${password}`)
    }
}
