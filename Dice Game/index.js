var dice1=Math.floor(Math.random()*6)+1;
var dice2=Math.floor(Math.random()*6)+1;

var imgPath1="./images/dice"+dice1+".png";
document.getElementById("image1").setAttribute("src",imgPath1);

var imgPath2="./images/dice"+dice2+".png";
document.getElementById("image2").setAttribute("src",imgPath2);


if(dice1 === dice2){
    document.querySelector("h1").innerHTML=" Its a Tie !! ";
}else if(dice1 > dice2){
    document.querySelector("h1").innerHTML=" Player - 1 Wins !! ";
}else if(dice1 < dice2){
    document.querySelector("h1").innerHTML=" Player - 2 Wins !! ";
}