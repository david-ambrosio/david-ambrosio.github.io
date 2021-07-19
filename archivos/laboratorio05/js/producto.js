//creamos un vector para el producto
var producto=[];
//creamos un procedimiento para registrar
//catgoria se va a registrar de un Combobox -> select
//catgoria: Entretenimiento, Tecnología, Línea Blanca
function Registrar(nomproducto,preproducto,canproducto,catproducto,){
    var NuevoProducto={
        nombre:nomproducto,
        precio:preproducto,
        cantidad:canproducto,
        categoria:catproducto,
    };
    producto.push(NuevoProducto);
}
//creamos una función para obtener los valores del registro
function Mostrar(){
    return producto;
}