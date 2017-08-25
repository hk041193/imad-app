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

//Submit name
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
                var names = request.responseText;
                names = JSON.parse(names);
                var list='';
                for(var i=0; i<names.length; i++){
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
           }
       } 
    };
    
    //make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://hk041193.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
};

//Submit comment
var submit = document.getElementById('submit_btn4');
submit.onclick = function() {
    
    //Create request to object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function () {
       if (request.readyState === XMLHttpRequest.DONE) {
           // Take some action
           if (request.status === 200) {
                //capture a list of names and render it
                var comments = request.responseText;
                comments = JSON.parse(comments);
                var list='';
                for(var i=0; i<comments.length; i++){
                    list += '<li>' + comments[i] + '</li>';
                }
                var ul = document.getElementById('commentlist');
                ul.innerHTML = list;
           }
       } 
    };
    
    //make the request
    var commentInput = document.getElementById('comment');
    var comment = commentInput.value;
    request.open('GET', 'http://hk041193.imad.hasura-app.io/submit-comment?comment=' + comment, true);
    request.send(null);
};