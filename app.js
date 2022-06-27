/*IDEA INCOMPLETA
//-------------
function selecionar() {
    document.getElementById("").addEventListener("click", function(){

        document.getElementById("").innerHTML =
        Math.floor(Math.random() * 4);

    })
}
*/

//---------------------------Condicional If para opciones-------------------------------------
//-----------------Eleccion del usuario PIEDRA
if(opcionUsuario===piedra)
{
    if(opcionMaquina===piedra)
    {
        mensaje += empate;
    }
    if(opcionMaquina===papel)
    {
        mensaje += "La piedra pierde contra el papel" + pierde;
        marcadorMaquina++;
    }
    if(opcionMaquina===tijeras)
    {
        mensaje+= "La piedra rompe las tijeras" + gana;
        marcadorUsuario++;
        mostrar();
    }
}

//-----------------Eleccion del usuario PAPEL
if(opcionUsuario===papel)
{
    if(opcionMaquina===papel)
    {
        mensaje+= empate;
    }
    if(opcionMaquina===piedra)
    {
        mensaje += "El papel envuelve la piedra" + pierde;
        marcadorMaquina++;
    }
    if(opcionMaquina===tijeras){
        mensaje+= "Las tijeras cortan el papel" + gana;
        marcadorMaquina++;
    }
}

//-----------------Eleccion del usuario TIJERAS
if(opcionUsuario===tijeras)
{
    if(opcionMaquina===papel)
    {
        mensaje += "Las tijeras cortan el papel" + gana;
        marcadorUsuario++;
        mostrar();
    }
    if(opcionMaquina===piedra)
    {
        mensaje+= "La piedra rompe las tijeras" + pierde;
        marcadorMaquina++;
    }
    if(opcionMaquina===tijeras)
    {
        mensaje+= empate;
    }
}