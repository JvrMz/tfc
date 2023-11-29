import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;



function Login () {
    const navigate = useNavigate(); 
    const [credenciales, setCredenciales] = useState({
        email: '',
        password: '',
    });
    const [validation, setValidation] = useState({
        email: true,
        password: true
    });

    const [error, setError] = useState('');

    console.log(credenciales);

    const handleChange = (e) => {
 
        setCredenciales({
            ...credenciales,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const validations = {};

        validations.email = credenciales.email.trim() !== '';
        validations.password = credenciales.password.trim() !== '';
        setValidation(validations);

        if (!validation.email || !validation.password) {
            return;
        }
        

        try {
            const bodyToSend = {
                email: credenciales.email,
                password: credenciales.password
            };

            const resp = await axios.post(`${baseURL}/users/login`, bodyToSend);
            // Si la respuesta informa que el usuario es admin podrá registrar más usuarios. Sino puede gestionar sus clases para inscribirse
            if(resp.data.role == 'admin'){
                navigate('/registro');
            }
            if(resp.data.role == 'normal'){
                navigate('/usuarios');
            }
        } catch (error) {
            console.error(error.response.data);
            setError(error.response.data || 'Error de inicio de sesión');
        }
    };

    return (
        <>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <h2 className='encabezado'>Login</h2>  
                    <input 
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={credenciales.email}
                        onChange={handleChange}
                    />
                    { !validation.email && <span className='errorMessage'>Este campo es obligatorio</span>}
                    <br/>

                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={credenciales.password}
                        onChange={handleChange}
                        />
                    { !validation.password && <span className='errorMessage'>Este campo es obligatorio</span>}
                    <br/>
                    {error && <span className='errorMessage'>{error}</span>}
                    <br/>
                    <button id='login' type="submit">Iniciar sesión</button>
                    <hr/>
                </form>

            </div>
        </>
    );
}


export default Login;
