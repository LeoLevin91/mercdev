document.addEventListener('DOMContentLoaded', function(){
    var login = document.getElementById('login');
    login.onclick= function(){
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var objEmail = {
            "email": email,
            "password": password
        };
        var strJSON = JSON.stringify(objEmail);
        console.log(strJSON);
    
    
    var req = new XMLHttpRequest();
//    req.open('POST', 'https://us-central1-mercdev-academy.cloudfunctions.net/login', strJSON);
//    req.setRequestHeader('Content-Type', 'json');
//    req.onreadystatechange = function() {
//        if(req.readyState == 4 && req.status==200){
//            console.log('Yes');
//            window.location.href = 'account.html';
//        }
//        else {
//            console.log('No');
//        }
//    }
    var url = 'https://us-central1-mercdev-academy.cloudfunctions.net/login';
    var params = strJSON;
    req.open('POST', url, true);
    req.setRequestHeader('Content-type', 'application/json');
    req.send(params);
    req.onreadystatechange = function(){
        if(req.status == 200 && req.readyState == 4){
            console.log('Yes');
            window.location.href = 'account.html';
        }
        else if(req.status != 200 && req.readyState != 4){
            document.getElementById('form-one').style.height = '460px';
            document.getElementById('login').style.top = '380px'; 
            document.getElementById('Rectangle-3').style.display = 'block'; 
            document.getElementById('Rectangle-3').style.display = 'block';
            document.getElementById('email').style.color = '#ed4159';
            document.getElementById('email').style.borderColor = '#ed4159';
            document.getElementById('password').style.borderColor = '#ed4159';
            document.getElementById('password').style.color = '#ed4159';
            
        }
    }
    }
    
//    var style_shit = function(){
////        var height_1 = document.getElementsByClassName('form-one');
////        height_1.style.height = '460px';
//        
//    }
});
