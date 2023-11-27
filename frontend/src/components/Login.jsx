import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;
import { Link } from 'react-router-dom'; 





function Login () {

    const [credenciales, setCredenciales] = useState({
        email: '',
        password: '',
    });
    const [validation, setValidation] = useState({
        email: true,
        password: true
    });

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
            console.log(resp)
        } catch (error) {
            console.error(error);
            console.error(error.resp.data.error);
        }
    };

    return (
        <>
            <div className='login'>
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>  
                {console.log('desde form')}
                    <input 
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={credenciales.email}
                        onChange={handleChange}
                    />
                    <br/>

                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={credenciales.password}
                        onChange={handleChange}
                    />
                    <br/>

                    <button id='login' type="submit">Iniciar sesión</button>
                    <hr/>
                    <Link to="/registro">
                        <button id='nueva_cuenta' type="submit">Crear cuenta nueva</button>
                    </Link>
                </form>

            </div>
        </>
    );
}


export default Login;
