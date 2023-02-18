import {data} from "../data/data.js"
let user= JSON.parse(localStorage.getItem("loggedUser"));
    if(user===null){
        window.location.href="./login.html"
    }
console.log("hello",data);

let container= document.getElementById("container");

let i=0
appendQuestion()

let nextButton= document.getElementById("next");
nextButton.addEventListener("click",nextquestion,Save)


function nextquestion () {
  if (i ===data.length-1 ) {
  document.getElementById("container").innerHTML=null
    let result= document.createElement("button")
    result.innerText=" Check Result";
    result.addEventListener("click",()=>{
        window.location.href="./report.html"
    })
    nextButton.innerHTML=null
    document.getElementById("container").append(result)
return
  }
  i++;
  document.getElementById("container").innerHTML=null
  appendQuestion()
}

function appendQuestion(){
    let firstques = data[i];
    console.log("options: ",i,firstques.options);
    //storing unattempted question
    Save(firstques,"")
    let options= document.createElement("div")
    let option_div1= document.createElement("div")
    let option_div2= document.createElement("div")
    let option_div3= document.createElement("div")
    let option_div4= document.createElement("div")
    options.setAttribute("class","options")
let question= document.createElement("h2")
question.innerText = `${firstques.id}.   ${firstques.question}`;
//optionn1
let option1= document.createElement("input");
option1.type="radio"
option1.name="optionClick"
option1.value=firstques.options[0];
option1.addEventListener('change', () => {
    if (option1.checked) {
      console.log(`${option1.value} is checked`);
      Save(firstques,option1.value)
    }
    
  });
let option1_label= document.createElement("label");
option1_label.name=firstques.options[0];
option1_label.textContent=firstques.options[0];

//optionn2
let option2= document.createElement("input");
option2.type="radio"
option2.name="optionClick"
option2.value=firstques.options[1];
option2.addEventListener('change', () => {
    if (option2.checked) {
      console.log(`${option2.value} is checked`);
    //   correct_answer
      Save(firstques,option2.value)
    }
    else{
      Save(firstques,"")
    }
  });

let option2_label= document.createElement("label");
option2_label.for=firstques.options[1];
option2_label.textContent=firstques.options[1];

//optionn3
let option3= document.createElement("input");
option3.type="radio"
option3.name="optionClick"
option3.value=firstques.options[2];
option3.addEventListener('change', () => {
    if (option3.checked) {
      console.log(`${option3.value} is checked`);
      Save(firstques,option3.value)

    }else{
      Save(firstques,"")
    }
  });

let option3_label= document.createElement("label");
option3_label.for=firstques.options[2];
option3_label.textContent=firstques.options[2];

//optionn4
let option4= document.createElement("input");
option4.type="radio"
option4.name="optionClick"
option4.value=firstques.options[3];
option4.addEventListener('change', () => {
    if (option4.checked) {
      console.log(`${option4.value} is checked`);
      Save(firstques,option4.value)

    }
    else{
    }
});


let option4_label= document.createElement("label");
option4_label.for=firstques.options[3];
option4_label.textContent=firstques.options[3];

option_div1.append(option1,option1_label)
option_div2.append(option2,option2_label)
option_div3.append(option3,option3_label)
option_div4.append(option4,option4_label)
options.append(option_div1,option_div2,option_div3,option_div4);

document.getElementById("container").append(question,options);

}


function Save(data,answer){
let QuizSol= JSON.parse(localStorage.getItem("QuizSol"))|| [];
    let user_ans={};
 console.log(data.correct_answer)
 console.log(answer)
let present= QuizSol.filter((el)=> el.id===data.id);
//  if()
 if(data.correct_answer===answer){
    console.log("correct")
    user_ans= {...data,score:1,userAns:answer};
    if(present.length===0){
        QuizSol.push(user_ans);
        localStorage.setItem("QuizSol",JSON.stringify(QuizSol));
    }
    else{
        present[0].userAns=answer;
        QuizSol.map(el=>{
            if(el.id===present[0].id){
                if(el.correct_answer===present[0].userAns){
                el.userAns=present[0].userAns; 
                el.score=1    
                }
                else{
                    el.userAns=present[0].userAns;     
                    el.score=0
                }
            }
        })
        localStorage.setItem("QuizSol",JSON.stringify(QuizSol));

    }
}
else if(data.correct_answer!==answer || answer=="" ){
    console.log("chek",present);
    // alert("already")
    user_ans= {...data,score:0,userAns:answer};
    if(present.length===0){
        QuizSol.push(user_ans);
        localStorage.setItem("QuizSol",JSON.stringify(QuizSol));
    }
}

}
