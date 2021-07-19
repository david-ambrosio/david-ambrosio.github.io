//creamos un vector que contenga la información
var alumno=[];
//creamos un procedimiento para registrar
function Registrar(nomalumno,apealumno,dnialumno,curalumno,turalumno,estalumno,){
    var NuevoAlumno={
        nombre:nomalumno,
        apellido:apealumno,
        dni:dnialumno,
        curso:curalumno,
        turno:turalumno,
        estado:estalumno,
    };
    alumno.push(NuevoAlumno);
}
//creamos una función para obtener los valores del registro
function Mostrar(){
    return alumno;
}