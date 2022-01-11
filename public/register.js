

    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    fetch('localhost:3000/register')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err));
    const check = () => {
        alert( "yea");
    }