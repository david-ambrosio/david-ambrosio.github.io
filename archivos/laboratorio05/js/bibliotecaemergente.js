//creamos un procedimiento

function Cargar(url,titulo,ancho,alto){
    //declaramos variables para capturar el ancho y el alto de la pantalla
    var anc=screen.width;
    var alt=screen.height;
    //declaramos variables para ubicar la ventana emegerte en el centro
    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);
    // alert(x);
    // alert(y);
    window.open(url,titulo,"width="+ancho+", height="+alto+", left="+x+", top="+y+", scrollbars=NO, menubar=no, toolbar=no, locationbar=no, resizable=no")
}
//llamamos a la funcion Cargar
window.onload=Cargar("pagina4.html","Ventana Emergente",400,400);