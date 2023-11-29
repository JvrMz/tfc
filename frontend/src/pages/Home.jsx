import { useState, useEffect } from 'react';

import Cuotas from '../components/Cuotas.jsx'
import horario from '../assets/horario.png';


const Home = () => {
    const [loading, setLoading] = useState(true); 
    const [agrandar, setAgrandar] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000); 
    }, []);

    const handleImageClick = () => {
        setAgrandar(!agrandar);
    };

    return (
        <div className={`bienvenida ${agrandar ? 'agrandar' : ''}`}>
            <div>
                <p className='p1'>Bienvenid@ a Eko</p>
                <p className='p2'>Consulta nuestros horarios</p>
            </div>
    
            <div>
                {
                loading 
                ? <div className='spinner'></div>    
                :
                <>
                    <section>
                        <img src={horario} 
                        alt="cargando horario" 
                        className={`horario-home ${agrandar ? 'agrandar' : ''}`}
                        onClick={handleImageClick}
                        />
                    </section>

                    <hr />

                    <Cuotas />
                </> 
            
                }
            </div>
        </div>
    );
};

export default Home;