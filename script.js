var i = 0;
function myFunction(){
   var x =  document.getElementById("par");
   
   if(i==0){
        x.style.backgroundColor="red";
        x.style.color="blue";
        i++;
   }else if(i==1){
       x.style.backgroundColor="blue";
       x.style.color="red";
       i--;
   }else{
       alert("oh shit waddup");
   }
}

var q = 0;
function thisFunction(){for(;;){
   if(q == 0){
      alert("HAHAHAHA");
   }else if(q==0){
      alert("Message");
   }
}
}
function rockPaperScissors(){
    var userChoice = prompt('Do you choose rock, paper, or scissors?');
    // console.log(userChoice)

var computerChoice = Math.random();

if (computerChoice <= .33) {
    var computerChoice = "rock";
}else if (computerChoice <= .66){
    var computerChoice = "paper";
}else{
    var computerChoice = "scissors";
}
// console.log(computerChoice)
var compare = function(userChoice, computerChoice){
    if(userChoice === computerChoice){
    return "The result is a tie!";
    } 
    
    else if(userChoice === "rock"){
        if(computerChoice === "scissors"){
            return "rock wins";
        }else if(computerChoice === "paper"){
         return "paper wins";   
        }
    }
    else if(userChoice === "paper"){
        if(computerChoice === "rock"){
            return "paper wins";
        }else if(computerChoice === "scissors"){
            return "scissors wins";
        }
    }
    else if(userChoice === "scissors"){
         if(computerChoice === "rock"){
             return "rock wins";
         }else if(computerChoice === "paper"){
             return "scissors wins";
         }
         
         
        }
    }
};

//call the function here you idiot Justin
//how does one call a function? Whats its number?
alert(compare(userChoice, computerChoice));


  
  
}