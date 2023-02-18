let form = document.querySelector('form');
form.addEventListener('submit', handleSignup);

function handleSignup(event){
 event.preventDefault();
 let name=document.getElementById('name').value
 let email=document.getElementById('email').value
 let password=document.getElementById('password').value
 if(name===""||email===""||password===""){
    alert("please fill all details first!!")
 }
 else{
     let User= {
         name:name,
         email:email,
         password:password
     };
     localStorage.setItem("SignedUser",JSON.stringify(User))
     alert(`${name} User signed up successfully!!` );
     name=""
     email=""
     password=""
     window.location.href="./login.html";
 }
}