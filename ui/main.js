//Counter code
var button = document.getElementById('counter');

button.onClick = function () {
    
    //Create request to object
    var request = new XMLhttprequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
       if (request.readyState === xmlhttprequest.DONE) {
           // Take some action
           if (request.status === 200) {
               var counter = request.responseText;
               var span = document.getElementById('num');
               span.innerHTML = counter.toString();
           }
       } 
    };
    
    //make the request
    request.open('GET', 'http://hk041193.imad.hasura-app.io/counter', true);
    request.send(null);
};