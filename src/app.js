// CREAR OPCION 
const opciones = ["rock", "paper", "scissors", "lizard", "spock"];
// REGLAS DEL JUEGO
const reglas = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"],
};
//GENERAR OPCION ALEATORIA
const maquina = () => {
    return opciones[Math.floor(Math.random() * opciones.length)]
};
//COMPARAR OPCIONES PARA REGLAS DE JUEGO
const game = (usuario) => {
    const opcionMaquina = maquina();
    if (usuario == opcionMaquina){
        return "Empate";
    }
    else if (reglas[usuario].includes(opcionMaquina)){
        return "Ganaste";
    }
    else {
        return "Perdiste"
    }        
}
//MOSTRAR EL RESULTADO
console.log(game("rock"))
