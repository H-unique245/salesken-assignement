let form = document.querySelector('form');
form.addEventListener('submit', handleLogin);

let user= JSON.parse(localStorage.getItem("SignedUser"));
function handleLogin(event){
 event.preventDefault();
 let email=document.getElementById('email').value
 let password=document.getElementById('password').value
if(user===null || user.email!==email ){
alert("User is not registered with this email \n Please Sign Up first!!")
window.location.href="./signup.html"
}
 else if(user.email===email && user.password===password){
alert("login Sucess!!");
let LoggedUser={
    name: user.name,
    email: user.email,
    password:user.password,
    quiz:[]
}
localStorage.setItem("loggedUser",JSON.stringify(LoggedUser));
window.location.href="../index.html";
}
else if(user.email===email && user.password!==password) {
alert("Please Enter correct Passord")
}
}