let userscore = 0;
let compscore = 0;
let userkascore = document.querySelector("#userkascore");
let compkascore = document.querySelector("#compkascore");
let choices = document.querySelectorAll(".choice-button");
let msgg = document.querySelector(".message");
let resetbt = document.querySelector("#resetbt");
let newbt = document.querySelector("#newbt");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    let randomindex = Math.floor(Math.random() * 3);
    return options[randomindex];
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});


const playgame = (userchoice) => {
    console.log("userchoice", userchoice);
    let compchoice = gencompchoice();
    console.log("computerchoice", compchoice);


    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            //comp--paper ya toh scissor 
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            //comp-- rock ya toh scissor
            userwin = compchoice === "scissor" ? false : true;
        }
        else {
            //comp-- rock ya toh paper
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin);
    }

};
const showwinner = (userwin) => {
    if (userwin) {
        console.log("You WIN")
        msgg.innerText = "Congratulations! YOU WIN!"
        userscore++;
        userkascore.innerText = userscore;
    } else {
        console.log("Computer WIN");
        msgg.innerText = "OOPS! COMPUTER WIN!"
        compscore++;
        compkascore.innerText = compscore;
    }
}


const drawgame = () => {
    msgg.innerText = "IT'S A DRAW!"

}



newbt.addEventListener("click", () => {
    msgg.innerText = "ARE YOU READY?";
    userscore = 0;
    compscore = 0;
    userkascore.innerText = userscore;
    compkascore.innerText = compscore;
})

resetbt.addEventListener("click", () => {
    msgg.innerText = "ARE YOU READY?";
    userscore = 0;
    compscore = 0;
    userkascore.innerText = userscore;
    compkascore.innerText = compscore;
})