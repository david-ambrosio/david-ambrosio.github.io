//declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtPre=document.getElementById("txtPre");
var txtCan=document.getElementById("txtCan");
var Categoria=document.getElementById("cboCategoria");
var btnRegistrar=document.getElementById("btnRegistrar");

//creamos un procedimientoa para mostrar
function MostrarRegistro(){
    //declaramos una variable para guardar los datos
    var listaproducto=Mostrar();
    //selecciono el tbody de la tabla donde voy a guardar
    tbody=document.querySelector("#tbProducto tbody");    
    tbody.innerHTML="";
    //agregamos las columnas que se registren
    for (var i=0; i<listaproducto.length;i++){
        //declaramos una variable para la fila
        var fila=tbody.insertRow(i);
        //declaramos variables para los títulos
        var titulonombre=fila.insertCell(0);
        var tituloprecio=fila.insertCell(1);
        var titulocantidad=fila.insertCell(2);
        var titulocategoria=fila.insertCell(3);
        //agregamos los valores
        titulonombre.innerHTML=listaproducto[i].nombre;
        tituloprecio.innerHTML=listaproducto[i].precio;
        titulocantidad.innerHTML=listaproducto[i].cantidad;
        titulocategoria.innerHTML=listaproducto[i].categoria;
        tbody.appendChild(fila);
    }
}
//creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    //capturando valores
    var nom=txtNom.value;
    var pre=txtPre.value;
    var can=txtCan.value;
    if (Categoria.value==0 || Categoria.value==""){
        var cat = textContent = "";
    }else{
        cat = parseFloat(Categoria.value);
        var indice=Categoria.selectedIndex;
        switch(indice){
            case 1:
                cat="Entretenimiento";
                break;
            case 2:
                cat="Tecnología";
                break;
            case 3:
                cat="Línea Blanca";
                break;
            default:
                cat=0
                break;
        }
    }
    //llamamos al procedimiento Registrar
    Registrar(nom,pre,can,cat);
    MostrarRegistro();
}
//asignamos la funcion registrar datos al boton
btnRegistrar.addEventListener("click",RegistrarDatos);