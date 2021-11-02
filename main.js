//document.write("Si Funciono")


function Equipo (nombre, posicion, puntos, goles) {
this.nombre = nombre.toUpperCase();
this.posicion = posicion;
this.puntos = puntos;
this.goles = goles;
}
const club1 = new Equipo ("River", 1, 43, "+25");
const club2 = new Equipo ("Talleres", 2,36, "+9");
const club3 = new Equipo ("Lanus",3,34,"+5");
const club4 = new Equipo ("Velez",4,31,"+12");
const club5 = new Equipo ("Defensa y Justicia",5,31,"+5")


let equipo = prompt("ingresa tu club")

function saludarHincha (){
    alert ("Sos hincha de " + equipo);
}

saludarHincha ();

function ranking ()

{ 
       switch (equipo) {
           case "River":
                alert("El equipo " + equipo + " esta en la posición  " + club1.posicion);
                break;
                case "Talleres":
                alert("El equipo " + equipo + " esta en la posición  " + club2.posicion);
                break;
                case "Lanus":
                alert("El equipo " + equipo + " esta en la posición  " + club3.posicion);
                break;
                case "Velez":
                alert("El equipo " + equipo + " esta en la posición  " + club4.posicion);
                break;
                case "Defensa y Justicia":
                alert("El equipo " + equipo + " esta en la posición  " + club5.posicion);
                break;
           default:
               alert("Tu equipo no entra en el ranking")
               break;
       }
       
    }

ranking()

function campeon (){
    switch (equipo) {
        case "River":
            alert ("Si River suma 12 o más puntos es Campeón");
             break;
             case "Talleres":
                alert ("Si Talleres suma 18 puntos y River menos de 12 puntos es Campeón ");
             break;
             case "Lanus":
                alert ("Si Lanus suma 18 puntos y River y Talleres menos de 12 puntos es Campeón ");
             break;
             case "Velez":
                alert ("Si Velez suma 18 puntos y los 3 primeros menos de 12 puntos es Campeón ");
             break;
             case "Defensa y Justicia":
                alert ("Si Defensa y Justicia suma 18 puntos y los primeros, menos de 6 puntos es Campeón ");
             break;
        default:
            alert("El equipo " + equipo + " No tiene chances de salir campeón. Segui Participando" )
            break;
}

}

campeon()

