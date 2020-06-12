var prompt = require('prompt')

var colors = require('colors');
 
colors.setTheme({
    yellow:'brightYellow',
    winner:'rainbow',
    victoire:'cyan',
    essai:'strikethrough',
    grey:'gray',
    echec:'brightRed'
    
})

var computerScore = 0
var userScore = 0
var count = 3

function game(){
    
    prompt.start();
    var mode = ["Pierre", "Feuille", "Ciseaux"]
    for(var i = 0; i < 1; i++){
        var random = Math.floor(Math.random() * mode.length)
    }
    var computerChoice = mode[random]
    prompt.get(['choice'], function (err, result) {
    var userChoice = result.choice
    
        if(userChoice === computerChoice){
            console.log(colors.yellow("Égalité, rejouez !"))
            console.log(`Votre choix a été : ${userChoice}`)
            console.log(`L'ordinateur à joué : ${computerChoice}`)
            Counter()
        } else if (userChoice === "Ciseaux" && computerChoice === "Feuille" || userChoice === "Pierre" && computerChoice === "Ciseaux" || userChoice === "Feuille" && computerChoice === "Pierre"){
            console.log(colors.victoire("Vous avez gagné !"))
            console.log(`Votre choix a été : ${userChoice}`)
            console.log(`L'ordinateur à joué : ${computerChoice}`)
            userScore++
            count--
            Counter()
        } else if (userChoice === "Feuille" && computerChoice === "Ciseaux" || userChoice === "Ciseaux" && computerChoice === "Pierre" || userChoice === "Pierre" && computerChoice === "Feuille"){
            console.log(colors.victoire("L'ordinateur a gagné !"))
            console.log(`Votre choix a été : ${userChoice}`)
            console.log(`L'ordinateur à joué : ${computerChoice}`)
            computerScore++
            count--
            Counter()
        } else {
            console.log(colors.essai("Je ne comprends votre choix!"))
            Counter()
        }
    });
}
game()

function Counter(){
    if (count === 1){
        if(userScore === 2){
            return console.log(colors.winner("Vous avez remporté la partie !"))
        } else if(computerScore === 2){
            return console.log(colors.echec("L'ordinateur à remporté la partie"))
        }else {
            game()
        }
    } else if(count > 0){
        console.log(colors.grey(`Il vous reste ${count} coups à jouer !`))
        game()
    } else if(count === 0){
        if(userScore > computerScore){
            console.log(colors.winner("Vous avez remporté la partie !"))
        } 
        else {
            console.log(colors.echec("T'es nul, t'as perdu !"))
        }
    }
}