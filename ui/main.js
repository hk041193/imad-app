//Counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
    //Create request to object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
       if (request.readyState === XMLHttpRequest.DONE) {
           // Take some action
           if (request.status === 200) {
               var counter = request.responseText;
               var span = document.getElementById('count');
               span.innerHTML = counter.toString();
           }
       } 
    };
    
    //make the request
    request.open('GET', 'http://hk041193.imad.hasura-app.io/counter', true);
    request.send(null);
};

//Submit username/password to login
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
    //Create request to object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
       if (request.readyState === XMLHttpRequest.DONE) {
           // Take some action
           if (request.status === 200) {
               //capture a list of names and render it
               submit.value = 'Sucess!';
               alert('logged in successfully');
           } else if (request.status === 403) {
               alert('username/password is incorrect');
           } else if (request.status === 500) {
               alert('username/password invalid');
           }
       } 
    };
    
    //make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://hk041193.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password:password}));
};

