let str = [
    "abba",
    "harmonium",
    "bajate",
    "the"
];
let randInd=Math.floor(Math.random()*4);
let inp = document.getElementById("inp");
let wd=str[randInd];
let timer = document.querySelector("#timer");
let countdown=5;
let pts = 0;
let currentWord = "";
document.getElementById("para").innerText=wd;

setInterval(() => {
        timer.innerText=countdown;
        countdown--;
        if(countdown===0)
        {
            
            countdown=5;
            wd = changeText();
            currentWord = "";

        }
    }, 1000);


document.getElementById("inp").addEventListener("input", () =>
{
    

        if(document.getElementById("inp").value===wd){
    currentWord="";    
    document.querySelector("#gameboard #result").innerText="correct";
    changeText();

    pts++;
    
 }
else{
    document.querySelector("#gameboard #result").innerText="wrong";
    }
});


function changeText(){
    let randInd=Math.floor(Math.random()*4);
    let wd=str[randInd];
    
    
    document.querySelector("#gameboard #para").innerText=wd;
    document.getElementById("score").innerText=pts;
    return wd;
    
    

 
}