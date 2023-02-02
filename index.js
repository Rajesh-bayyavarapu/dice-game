var temp1=0;
var temp2=0;
function rollAgain1(){
    var randomNumber1 = Math.floor(Math.random()*6+1);
    temp1 = randomNumber1;
    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

}
function rollAgain2(){
    var randomNumber2 = Math.floor(Math.random()*6+1);
    temp2 = randomNumber2;
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

}
console.log(temp1);
console.log(temp2);
// if(randomNumber1>randomNumber2){
//     document.querySelector("h1").innerText = "player 1 wins";
// }
// else if(randomNumber1<randomNumber2){
//     document.querySelector("h1").innerText = "player 2 wins";
// }
// else{
//     document.querySelector("h1").innerText = "draw";
// }