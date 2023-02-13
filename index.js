
function rollAgain(){
    var p1 = document.querySelectorAll(".pname")[0].value ;
    document.querySelector("#player1").textContent = p1;

    var p2 = document.querySelectorAll(".pname")[1].value ;
    document.querySelector("#player2").textContent = p2;

    document.querySelector(".in-field").style.display="none";
    
    var randomNumber1 = Math.floor(Math.random()*6+1);
    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
    var randomNumber2 = Math.floor(Math.random()*6+1);
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerText = p1+" wins";
    }
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerText = p2 +" wins";
    }
    else{
        document.querySelector("h1").innerText = "draw";
    }
    

}



