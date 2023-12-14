import MiToast from './MiToast.jsx';
import { useState, useContext } from 'react';
// import { UserContext } from '../context/UserProvider';
import { useNavigate } from 'react-router-dom';
const baseURL = import.meta.env.VITE_API_URL;
import axios from 'axios';


const Registro = () => {
    // const { user } = useContext(UserContext); Para usar el token de log, solo los usuarios admin pueden registrar
    // const [photo, setPhoto] = useState(null);
    const navigate = useNavigate(); 

    const [error, setError] = useState('');

    const [datosUsuario, setDatosUsuario] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        cuota: ''
    });

    const handleChange = (e) => {
        setDatosUsuario({
            ...datosUsuario,
            [e.target.name]: e.target.value,
        });
        // setPhoto(e.target.files[0]);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

    // if (photo) {
        const formData = new FormData();
        formData.append('nombre', datosUsuario.nombre);
        formData.append('apellidos', datosUsuario.apellidos);
        formData.append('email', datosUsuario.email);
        formData.append('cuota', datosUsuario.cuota);
        // formData.append('image', photo);

        // Ver si pasar la foto de perfil
        try {
            const response = await axios.post(`${baseURL}/api/users`, datosUsuario );

            if(response){
                setTimeout(() => {
                    navigate('/registro');
                    setDatosUsuario({
                        nombre: '',
                        apellidos: '',
                        email: '',
                        cuota: ''
                    });
                }, 2000);
                MiToast({ type: 'success', message: 'Usuario registrado!' });
            }

        } catch (error) {
            console.error(error);
            setError(error.response.data || 'Error en el registro de sesión');
        }
    // }
    };

    return (
        <>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <h2>Registrar nuevo usuario</h2>
                    {error && <span className='errorMessage'>{error}</span>}
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre"
                        value={datosUsuario.nombre}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="apellidos"
                        placeholder="Apellidos"
                        value={datosUsuario.apellidos}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={datosUsuario.email}
                        onChange={handleChange}
                    />

                    <label htmlFor="">Cuota: 
                        <select 
                        name="cuota"                        
                        value={datosUsuario.cuota}
                        onChange={handleChange}>
                            <option value="">Seleccione</option>
                            <option value="dos">2 dias</option>
                            <option value="tres">3 dias</option>
                            <option value="seis">ilimitado</option>
                        </select>
                    </label>
                    {/* Cuenta bancaria y foto de perfil */}
{/*                     <input
                        type="file"
                        name="photo"
                        onChange={handleChange}
                        accept="image/*"
                    /> */}
                    <button id="login" type="submit">Registrar</button>
                </form>
            </div>
        </>
    );
};


export default Registro;