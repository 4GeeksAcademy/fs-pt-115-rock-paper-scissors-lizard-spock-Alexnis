const Game = ["rock", "paper", "scissors", "lizard", "spock"]

const opcionesJuego = () => {
    const index = Math.floor(Math.random() * Game.length)
    return Game[index]
}

const comprobarOpciones = (Usuario) => {
    const jugador1 = opcionesJuego ()

if (Usuario === jugador1) {
    console.log("Haz ganado");
    
} else {
    console.log("sigue intentando");
    
}

const guess = prompt ("Selecciona alguna de las opciones: rock, paper, scissors, lizard, spock").toLowerCase()
checkGameGuess(guess)


}



 

