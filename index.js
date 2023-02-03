var player1 = prompt("Enter player1 name");
var player2 = prompt("Enter player2 name");

document.querySelector("#player1").textContent = player1;
document.querySelector("#player2").textContent = player2;

function rollAgain(){
    
    var randomNumber1 = Math.floor(Math.random()*6+1);
    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
    var randomNumber2 = Math.floor(Math.random()*6+1);
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerText = player1+" wins";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerText = player2 +" wins";
    }
    else{
        document.querySelector("h1").innerText = "draw";
    }
    

}



