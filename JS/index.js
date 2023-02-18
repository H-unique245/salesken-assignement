let user= JSON.parse(localStorage.getItem("loggedUser"));
    if(user===null){
        window.location.href="./login.html"
    }
    let userData= document.getElementById("user");
    userData.setAttribute("class","userDetails")
    let name= document.createElement("p");
    name.innerText= "Name :"+ user.name;
    let email= document.createElement("p");
    email.innerText= "Email :"+ user.email;

    userData.append(name,email);
    
   let start=  document.querySelector("button")
   start.addEventListener("click",()=>{
    window.location.href= "./quiz.html"
   })