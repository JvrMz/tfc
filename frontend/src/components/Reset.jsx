import { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;



function Reset () {

    const { registrationCode } = useParams();
    const navigate = useNavigate(); 
    
    const [credenciales, setCredenciales] = useState({
        password: ''
    });
    const [validation, setValidation] = useState({
        password: true
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
 
        setCredenciales({
            ...credenciales,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const validations = {};


        validations.password = credenciales.password.trim() !== '';
        setValidation(validations);

        if (!validation.password) {
            return;
        }
        

        try {
            const bodyToSend = {
                password: credenciales.password,
            };

            console.log(bodyToSend);
            console.log(registrationCode);

            const resp = await axios.post(`${baseURL}/users/reset/${registrationCode}`, bodyToSend);
 
            navigate('/login');
            
            
        } catch (error) {
            console.error(error.response.data);
            setError(error.response.data || 'Error de inicio de sesión');
        }
    };

    return (
        <>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <h2 className='encabezado'>Nueva contraseña</h2>  
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
                    <button id='login' type="submit">Nueva contraseña</button>
                    <hr/>
                </form>

            </div>
        </>
    );
}


export default Reset;
