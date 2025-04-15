// let right=prompt("enter a number");
// let is_running=true;
// while(is_running){
    
// let gamenum=prompt("guess the  number");
// if (gamenum==right){
    
//     console.log("you guessed it right");
//     is_running=false;
// }
// else{
//     console.log("wrong Guess..");
// }
// }

// str=prompt("Enter an Username:");
// newstr="@"+ str + str.length;
// console.log(newstr);

// let array=[12,13,14,15,16,17];
// for (let idx=0;idx<array.length;idx++){
//     console.log(array[idx]);
// }

// let students=["sunil","aakash","mohan","sharban","gaurav","deepak","govinda","merrick","khem","lokesh"];
// for(let i=0;i<students.length;i++){
//     console.log(students[i]);
// }

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for (let mark of marks){
//    sum=sum+mark;
//    total=sum/marks.length;
    
// }
// console.log(total);

// let items=[250,245,300,900,50];
// for (let i of items){
//     offer=i/10;
//     total=i-offer;
//     console.log(total);
// }

// let students=[];
// for (let i=1;i<=8;i++){
// let Pushed=prompt("enter a name to push: ")
// students.unshift(Pushed);
// console.log(students);
// }

// let companies=["bloomberg","microsoft","Uber","google","IBM","netflix"];

// console.log("deleted",companies.shift());
// companies.splice(1,1,"ola");
// companies.push("amazon");
// console.log(companies);

// function sum(x,y){
//     s=x+y;
//     return s;
// }
// sum1=sum(5,6);
// console.log(sum1);
// sum2=sum(4,6);
// console.log(sum2);

// function sum(x,y){
//     console.log(x+y);
// }
// sum(4,6);
// sum(5,9);

// function vowels(str){
//     let count=0;
//     for (let letter of str){
//         if (letter==="a"|| letter==="e"|| letter==="i"||letter==="o"||letter==="u"){
//             count++;
//         }
        
//     }
    
//     console.log(count);
// }
// vowels("suniladhikari")

// numbers=[12,34,56,78,9,100];

// numbers.map((val)=>{
//     console.log(val);
    
// });

// numbers=[1,2,34,12,45,67,89,80,90,23];
// let newArr=numbers.filter((val)=>{
//     return val%2==1;
// });

// console.log(newArr);

// let marks=[54,96,99,34,51,23,100,89];

// let result=marks.filter((val)=>{
//     return val>90;
// });
// console.log(result);

// let array=[];
// let n=prompt("enter a number: ");
// for(let i=1;i<=n;i++){
//     array.push(i);
   
// }
// console.log(array);

// let h2=document.querySelector("h2");
// console.dir(h2);

// h2.innerText+=" from sunil adhikari";

// h2=document.querySelector("h2");
// console.dir(h2);
// h2.innerText=h2.innerText + " from all students from BIT";

// let box=document.querySelectorAll(".box");
// let idx=1;
// for (boxes of box){
//     boxes.innerText=`hi lol what ${idx}`;
//     idx++;
// }

// let div=document.querySelectorAll(".box");
// idx=1;
// for(divs of div){
//     divs.innerText=`hi lmao gg bro ${idx}`;
//     idx++;
// }

// let div=document.querySelector("div");
// console.dir(div);

// let btn=document.createElement("button");
// btn.innerText="Click Me!"
// div.prepend(btn);


// let heading=document.createElement("h2");
// heading.innerText="Hi I am Sunil Adhikari";

// document.querySelector("body").prepend(heading);

// let btn1=document.querySelector(".btn1");

// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
    
    

// }


// let box=document.querySelector(".box");

// box.onmouseover=()=>{
//     console.log("you are inside a div lol");

// }

// let btn1=document.querySelector(".btn1");
// btn1.addEventListener("click",()=>{
//     console.log("clicked bro1");
// });

// btn1.addEventListener("click",()=>{
//     console.log("clicked bro2");
// });
// let handler3=()=>{
//     console.log("clicked bro3");
// }
// btn1.addEventListener("click",handler3);


// btn1.addEventListener("click",()=>{
//     console.log("clicked bro4");
// });

// btn1.removeEventListener("click",handler3);


// let body=document.querySelector("body");
// let btn1=document.querySelector(".btn1");
// let box=document.querySelector(".box");

// body.style.backgroundColor="pink";
// btn1.addEventListener("click",()=>{
//     if (body.style.backgroundColor=="aqua"){
        
//         body.style.backgroundColor="pink";
//     }
//     else{
        
//         body.style.backgroundColor="aqua";
//     }
    
// });

// let body= document.querySelector("body");
// let btn1=document.querySelector(".btn1");
// let btn2=document.querySelector(".btn2")
// let box=document.querySelector(".box");
// let mode="light";


// btn1.addEventListener("click",()=>{


// if (mode==="light"){
//     mode="dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
    
// }
// else{
//     mode="light";
//     body.classList.add("light");
    


// }
// })
// btn1.addEventListener("mouseover",()=>{
//     box.style.backgroundColor="aqua";
    
// });

// btn2.addEventListener("mouseover",()=>{
//     box.style.backgroundColor="white";
// });

let playerScore=0;
let compScore=0;

choices=document.querySelectorAll(".choice");

const gencompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
   console.log("Draw");

}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=gencompChoice();
    console.log("comp choice=",compChoice);
    if (compChoice===userChoice){
        drawGame();
    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin= compChoice==="paper"? false:true;
        }
        else if(userChoice==="paper"){
            userwin=compChoice==="scissors"? false:true;
        }
        else{
            userwin=compChoice==="rock"? false:true;
        }
        end(userwin);
    }
    

    // else if(userChoice==="rock"&&compChoice==="paper"){
    //     console.log("comp wins");
    // }
    // else if(userChoice==="paper"&& compChoice==="rock"){
    //     console.log("player wins");
    // }
    // else if(userChoice==="scissors"&& compChoice==="rock"){
    //     console.log("comp wins");
    // }
    // else if(userChoice==="paper"&&compChoice==="scissors"){
    // console.log("comp wins");
    // }
    // else if(userChoice==="rock"&&compChoice==="scissors"){
    //     console.log("player wins");
    // }
    // else if(userChoice==="scissors"&&compChoice==="paper"){
    //     console.log("player wins");
    // }
    
}

const end=(userwin)=>{
    if (userwin){
        console.log("user wins lol");
       }
       else{
        console.log("computer wins");
       }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        
        
    });

    
});



