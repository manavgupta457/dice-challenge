var tempL=Math.random()*6;
tempL=Math.floor(tempL)+1;
var tempR=Math.random()*6;
tempR=Math.floor(tempR)+1;
// while(randomNumber1==randomNumber2){
//     tempR=Math.random()*6;
//     tempR=Math.floor(tempR)+1;
// }
var strL="dice"+tempL+".png";
var strR="dice"+tempR+".png";
document.querySelector("body > div > div:nth-child(2) > img").setAttribute("src",strL);
document.querySelector("body > div > div:nth-child(3) > img").setAttribute("src",strR);

if(tempL>tempR){
    document.querySelector("body > div > h1").innerHTML="Player 1 wins 🚩";
}
else if(tempR>tempL){
    document.querySelector("body > div > h1").innerHTML="Player 2 wins 🚩";
}
else{
    document.querySelector("body > div > h1").innerHTML="Draw!";
}
