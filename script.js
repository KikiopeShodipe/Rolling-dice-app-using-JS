function rollDice(){
    const dicefaces=["🎲", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    //aray to store dice faces
    let dice=document.getElementById("dice-face");
    //display the delay
    dice.innerText="🎲";
    setTimeout(()=>{//arrow function
        let randomNum=Math.floor(Math.random()*6)+1;
        dice.innerText=dicefaces[randomNum];
    },500);
}