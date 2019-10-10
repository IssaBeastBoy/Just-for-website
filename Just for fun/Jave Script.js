
window.onload = function () {
    document.getElementById('Logged_In').style.display = 'none';

    document.getElementById('Sign_Up').style.display = 'none';

    let loginbtn = document.getElementById('loginbtn');
    let SignUpbtn = document.getElementById('SignUpbtn');

    loginbtn.onclick = function () {
        document.getElementById('Logged_In').style.display = 'block';
        document.getElementById('Logged_Out').style.display = 'none';
    };

    SignUpbtn.onclick= function(){
        document.getElementById('Logged_In').style.display = 'none';
        document.getElementById('Logged_Out').style.display = 'none';
        document.getElementById('Sign_Up').style.display = 'block';
    };
    
    Back_ToLogOut.onclick = function(){
        document.getElementById('Logged_In').style.display = 'none';
        document.getElementById('Logged_Out').style.display = 'block';
        document.getElementById('Sign_Up').style.display = 'none';        
    };
    
    Back_LogOut.onclick = function(){
        document.getElementById('Logged_In').style.display = 'none';
        document.getElementById('Logged_Out').style.display = 'block';
        document.getElementById('Sign_Up').style.display = 'none';        
    };

};