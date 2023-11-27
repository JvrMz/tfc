import { useState, useEffect } from 'react';
import horario from '../assets/horario.png';


const Home = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000); 
    }, []);

    return (
        <div className='bienvenida'>
            <div>
                <p className='p1'>Bienvenid@ a AppBoxeo</p>
                <p className='p2'>Consulta nuestros horarios</p>
            </div>
    
            <div>
                {
                loading 
                ? <div className='spinner'></div>    
                : 
                <section>
                    <img src={horario} alt="cargando horario" className="horario-home" />
                </section>
                }
            </div>
        </div>
    );
};

export default Home;