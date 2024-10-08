function validate(){
    let username=document.getElementById('un').value;
    // alert(username);
    let password=document.getElementById('password').value;
    // alert(password);
    let p1=document.getElementById('result');
    if (username=="admin"){
        if (password=="admin"){
           p1.innerText="valid";
        }
        else
        {
            p1.innerText="invalid pas";
        }
    }
    else{
        p1.innerText= "Invalid Username or Password";
    }
        
    
}