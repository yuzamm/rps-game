function randomGen(maxRange){
    return Math.floor(Math.random()*maxRange);
}

function oneRound(userChoice){
    let random =randomGen(3);

    if (random === userChoice ){
        return 0
    }

    else if (userChoice ===0 ){
        if(random===1){
            return 2
        }
        else if(random==2){
            return 1
        }
    }

    else if(userChoice===1){
        if(random===2){
            return 2
        }
        else if(random==0){
            return 1
        }
    }

    else if(userChoice===2){
        if(random===0){
            return 2
        }
        else if(random==1){
            return 1
        }
    }

    else if(userChoice<2 || userChoice>0){
        return 3
    }
}

function game(){
    let pcScore=0;
    let userScore=0;

    while(pcScore<3 && userScore<3){

        let userSelection = Number(prompt("Rock=0, Paper=1, Scissors=2"))

        if(oneRound(userSelection)===1){
            console.log("You won this one.\nYour Score: ",userScore,"\nPC Score: ", pcScore)
            userScore++
        }
        else if(oneRound(userSelection)===2){
            console.log("PC takes this one.\nYour Score: ",userScore,"\nPC Score: ", pcScore)
            pcScore++
        }

        else{
            console.log("Incorrect selection made, try again.")
        }
    }

    if (userScore===3){
        console.log("Good show old chap! You win!\nYour Score: ",userScore,"\nPC Score: ", pcScore)
    }

    else if(pcScore===3){
        console.log("Better luck next time, PC wins.\nYour Score: ",userScore,"\nPC Score: ", pcScore)
    }
}

game()