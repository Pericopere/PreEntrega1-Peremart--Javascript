// Pre entrega 1


alert ("Bienvenido a CoderFun")

let ActividadDelDia = "0"

let DiaDeSemana = prompt("Ingrese un día de la semana para saber la actividad que se realiza");
if ((DiaDeSemana == "lunes") || (DiaDeSemana == "martes") || (DiaDeSemana == "miercoles") || (DiaDeSemana == "jueves") || (DiaDeSemana == "viernes")) {
    alert("Usted eligió un día de la semana");
}

else{
    alert("No es un día hábil")
};


while (DiaDeSemana !== "SALIR") {

    switch(DiaDeSemana) {

        case "lunes":
        case "miercoles":
            ActividadDelDia = "se realizan practicas de fútbol";
            break;

        case "martes":
        case "jueves":
            ActividadDelDia = "se realizan prácticas de hockey";
            break;
        
        case "viernes":
            ActividadDelDia = "se realizan prácticas de basquet";
                break;
        
        case "sabado":
        case "domingo":
            ActividadDelDia = "no se realizan actividades";
                break;
        default:
            ActividadDelDia = "no existe ese día"
    }

    console.log("el " + DiaDeSemana + " " + ActividadDelDia);
    alert("el " + DiaDeSemana + " " + ActividadDelDia);
    
    DiaDeSemana = prompt("Ingrese otro día de la semana para saber la actividad que se realiza (ingrese SALIR si no quiere ver mas actividades");
}