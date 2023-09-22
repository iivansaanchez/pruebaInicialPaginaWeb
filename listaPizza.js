let listaPizza = ["CARBONARA", "MARGARITA"];

function anadirNombrePizza(){
    let nombrePizza = prompt("Introduce el nombre de la pizza: ").toUpperCase();
    //De esta forma capamos que no se pueda anadir una pizza con dos nombre iguales
    for(let i = 0; i<listaPizza.length; i++){
        while(nombrePizza==listaPizza[i]){
            nombrePizza = prompt("Introduce el nombre de la pizza: ").toUpperCase();
            /*Le ponemos i = 0 para que cuando recorremos el bucle por primera vez,
            si el nombre no es el primero, este queda inmune. Por ejemplo: 
            si ponemos "Margarita" y luego ponemos "Carbonara" nos la cogera como
            un nombre nuevo debido a que la primera posición ya se habia comprobado*/
            i=0;
        }
    }
    let ingredientes = prompt("Introduce los ingredientes: ");

    let tabla = document.getElementById("tabla");

    //Campo 1 =  Nombre pizza
    let campo1 = document.createElement("td");
    //Campo 2 = Nombre ingredientes
    let campo2 = document.createElement("td");

    //Guardamos el texto introducido por pantalla
    let texto = document.createTextNode(nombrePizza);
    let texto1 = document.createTextNode(ingredientes);

    //Al campo1=td le añadimos el texto=nombrePizza
    campo1.appendChild(texto);
    campo2.appendChild(texto1);

    //Id pizza (nombre)
    let fila = document.createElement("tr");

    //Le añadimos a la fila 1 los campos 1 y 2
    fila.appendChild(campo1);
    fila.appendChild(campo2);

    //Le añadimos a la tabla la fila
    tabla.appendChild(fila);

    listaPizza[listaPizza.length]=nombrePizza;
}

function borrarNombrePizza(){
    let nombrePizza = prompt("Introduce el nombre de la pizza a borrar: ").toUpperCase();
    
    
    //Capturamos la tabla
    let tabla = document.getElementById("tabla");
    
    //Capturamos las filas de la tabla
    let filas = document.getElementsByTagName("tr");
    
    //Recorremos las filas capturadas de la tabla
    for(let i = 0; i<filas.length; i++){
        let fila= filas[i];
        
        let columna =  fila.getElementsByTagName("td")[0];
        
        //Capturamos la columna concreta que usamos como referencia
        let texto = columna.textContent;
        
        if(texto===nombrePizza){
            filas[i].remove();
        }
    }
    /*De esta manera borramos la pizza de la lista interna aparte de la tabla,
    porque si la borramos de la tabla solo el dato sigue existiendo y no nos dejaria
    añadirla otra vez.
    */
    for(let j = 0; j< listaPizza.length; j++){
        if(nombrePizza==listaPizza[j]){
            listaPizza[j].remove();
        }
    }

}