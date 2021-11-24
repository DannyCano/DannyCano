function Jugador(nombre){
     this.nombre = nombre;
     
}





function JuegoDados(numeroJuego, j1, j2){
    this.numeroJuego = numeroJuego;
    this.jugador1 = j1;
    this.jugador2 = j2;
    this.caraDado1 = 0;
    this.caraDado2 = 0;


    this.tirarDados = function() {
        this.jugador1.caraDado1 = Math.floor((Math.random()*(6-1))+1); //usar random(1,6)
        this.jugador1.caraDado2 = Math.floor((Math.random()*(6-1))+1); //usar random(1,6)

        this.jugador2.caraDado1 = Math.floor((Math.random()*(6-1))+1); //usar random(1,6)
        this.jugador2.caraDado2 = Math.floor((Math.random()*(6-1))+1); //usar random(1,6)
    }

    this.determinaGanador = function() {
        if ( (this.jugador1.caraDado1 + this.jugador1.caraDado2 == 7)
            && (this.jugador2.caraDado1 + this.jugador2.caraDado2 != 7) ) {
            return this.jugador1.nombre
        }
        else if ( (this.jugador2.caraDado1 + this.jugador2.caraDado2 == 7)
            && (this.jugador1.caraDado1 + this.jugador2.caraDado1 != 7) ) {
            return this.jugador2.nombre
        }
        else return "Empate";
    }
}



let pedro = new Jugador("Pedro Sánchez");
let antonio = new Jugador("Antonio Ramírez");
let juego1 = new JuegoDados(1, pedro, antonio);


//inicio el ciclo del torneo
for(let contador=0;contador<4;contador++){
juego1.tirarDados();
let ganador = juego1.determinaGanador();

console.log("El ganador del juego " + contador  + " es: " + ganador);
}
//Determinar el primer ganador de 3 juegos y cuantos juegos hubo
