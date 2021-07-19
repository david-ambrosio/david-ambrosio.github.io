//declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var Curso=document.getElementById("cboCurso");
var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbN=document.getElementById("rbN");
var chkEst=document.getElementById("chkEst");
var btnRegistrar=document.getElementById("btnRegistrar");

//creamos un procedimientoa para mostrar
function MostrarRegistro(){
    //declaramos una variable para guardar los datos
    var listaalumno=Mostrar();
    //selecciono el tbody de la tabla donde voy a guardar
    tbody=document.querySelector("#tbAlumno tbody");    
    tbody.innerHTML="";
    //agregamos las columnas que se registren
    for (var i=0; i<listaalumno.length;i++){
        //declaramos una variable para la fila
        var fila=tbody.insertRow(i);
        //declaramos variables para los títulos
        var titulonombre=fila.insertCell(0);
        var tituloapellido=fila.insertCell(1);
        var titulodni=fila.insertCell(2);
        var titulocurso=fila.insertCell(3);
        var tituloturno=fila.insertCell(4);
        var tituloestado=fila.insertCell(5);
        //agregamos los valores
        titulonombre.innerHTML=listaalumno[i].nombre;
        tituloapellido.innerHTML=listaalumno[i].apellido;
        titulodni.innerHTML=listaalumno[i].dni;
        titulocurso.innerHTML=listaalumno[i].curso;
        tituloturno.innerHTML=listaalumno[i].turno;
        tituloestado.innerHTML=listaalumno[i].estado;
        tbody.appendChild(fila);
    }
}
//creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    //capturando valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var dni=txtDni.value;
    if (Curso.value==0 || Curso.value==""){
        var cur = textContent = "";
    }else{
        cur = parseFloat(Curso.value);
        var indice=Curso.selectedIndex;
        switch(indice){
            case 1:
                cur="Diseño Web";
                break;
            case 2:
                cur="Base de Datos";
                break;
            case 3:
                cur="Programación Java";
                break;
            default:
                cat=0
                break;
        }
    }
    if (rbM.checked == false & rbT.checked == false & rbN.checked == false){
        return;
    }else if(rbM.checked == true){
        var turn =document.getElementById("rbM").value;
    }else if(rbT.checked == true){
        var turn =document.getElementById("rbT").value;
    }else if(rbN.checked == true){
        var turn =document.getElementById("rbN").value;
    }
    var est = chkEst.checked;
    if (chkEst.checked == true){
        var est = document.getElementById("chkEst").value;
    }else if(chkEst.checked == false){
        var est = document.getElementById("chkEst").textContent = "No Habilitado";
    }
    //llamamos al procedimiento Registrar
    Registrar(nom,ape,dni,cur,turn,est);
    MostrarRegistro();
}

//agregamos un evento al boton
// btnRegistrar.addEventListener("click",function(){
//     alert("Hola");
// });
//creamos un procedimiento Registrar
// function Mensaje(){
//     alert("Hola");
// }
// agregamos el evento al boton
// btnRegistrar.addEventListener("click",Mensaje);

//asignamos la funcion registrar datos al boton
btnRegistrar.addEventListener("click",RegistrarDatos);