
import { useState, useContext } from 'react';
// import { UserContext } from '../context/UserProvider';
import { useNavigate } from 'react-router-dom';
const baseURL = import.meta.env.VITE_API_URL;
import axios from 'axios';


const Registro = () => {
    // const { user } = useContext(UserContext); Para usar el token de log, solo los usuarios admin pueden registrar
    // const [photo, setPhoto] = useState(null);
    const navigate = useNavigate(); 

    const [datosUsuario, setDatosUsuario] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setDatosUsuario({
            ...datosUsuario,
            [e.target.name]: e.target.value,
        });
        // setPhoto(e.target.files[0]);
    };

    console.log(datosUsuario);

    const handleSubmit = async (e) => {
        e.preventDefault();

    // if (photo) {
        const formData = new FormData();
        formData.append('nombre', datosUsuario.nombre);
        formData.append('apellidos', datosUsuario.apellidos);
        formData.append('email', datosUsuario.email);
        formData.append('password', datosUsuario.password);
        // formData.append('image', photo);

        // Ver si pasar la foto de perfil
        try {
            const response = await axios.post(`${baseURL}/users`, datosUsuario );
            console.log(response.data.mensaje);
            setTimeout(() => {
                navigate('/registro');
            }, 2000);

            console.log(response.data.mensaje);
        } catch (error) {

            console.error(error);
        }
    // }
    };

    return (
        <>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <h2>Registrar nuevo usuario</h2>
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

                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={datosUsuario.password}
                        onChange={handleChange}
                    />
                    <label htmlFor="">Cuota: 
                        <select name="cuota" id="">
                            <option value="">2 dias</option>
                            <option value="">3 dias</option>
                            <option value="">ilimitado</option>
                        </select>
                    </label>
                    <input
                        type="file"
                        name="photo"
                        onChange={handleChange}
                        accept="image/*"
                    />
                    <button id="login" type="submit">Registrarse</button>
                </form>
            </div>
        </>
    );
};


export default Registro;