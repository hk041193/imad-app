//Counter code
var button = document.getElementById('counter');

button.onclick = function () {
    
    //Create request to object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadyStatechange = function () {
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

//Submit name

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
   
    var name= ['name1', 'name2', 'name3', 'name4'];
    var list='';
    for(var i=0; i<name.length; i++){
        list == '<li>' + name[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
    
};