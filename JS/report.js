import {data} from "../data/data.js";
let user= JSON.parse(localStorage.getItem("loggedUser"));
if(user===null){
   window.location.href="./login.html"
}
let result= JSON.parse(localStorage.getItem("QuizSol"));
let totalScore= data.length;
let FinalScore= result.reduce((ac,el)=>ac+el.score,0);
// console.log(FinalScore)
let Score=  document.getElementById("score")
Score.innerText= `Your Score is : ${FinalScore}/${totalScore}`
let UnAttempt=  [];
let check= result.filter((el)=>el.userAns==="");
UnAttempt.push(check)
console.log("data",UnAttempt);

function AppendData(){

}
result.map((sol,i)=>{
if(sol.userAns!==""){
   let res_div=document.createElement("div");
   res_div.setAttribute("class","resultCard")
   let question=document.createElement("h4");
   question.innerText= `${i+1}. ${sol.question}`
   let correct_answer=document.createElement("p");
   correct_answer.innerText= "Correct Answer :"+ sol.correct_answer;
   let score=document.createElement("p");
   score.innerText= "Score:"+ sol.score;
   
   let User_Ans=document.createElement("p");
   User_Ans.innerText= "Your Answer :"+  sol.userAns;
   if(sol.score==1){
       User_Ans.style.color="green";
   }else if(sol.score==0){
       User_Ans.style.color="red";

   }

   res_div.append(question,correct_answer,score,User_Ans)
   document.getElementById("solution").append(res_div)
}
else{
   let res_div=document.createElement("div");
   res_div.setAttribute("class","resultCard")
   let question=document.createElement("h4");
   question.innerText= `${i+1}. ${sol.question}`
   let correct_answer=document.createElement("p");
   correct_answer.innerText= "Correct Answer :"+ sol.correct_answer;
   correct_answer.style.color='purple'
   let score=document.createElement("p");
   score.innerText= "Score:"+ sol.score;

   let User_Ans=document.createElement("p");
   User_Ans.innerText= "Your Answer :"+  sol.userAns;

   res_div.append(question,correct_answer,score,User_Ans)
   document.getElementById("unsolved").append(res_div)
}
})