
function ClaseItem ({ user }) {

    const  nombre  = user.nombre;
    const  apellidos  = user.apellidos;
    const aforo = user.aforo_actual;

    return (
        <>
        <li>
            <h4>{nombre} {apellidos}, Aforo {aforo}</h4>
        </li>
        </>
    );
}


export default ClaseItem;
