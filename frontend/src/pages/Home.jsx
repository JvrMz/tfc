import { useState, useEffect } from 'react';
import IncidentsList from '../components/IncidentsList.jsx';
import './Home.css';

const Home = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000); 
    }, []);

    return (
        <>
            <div>
                <p className='p1'>Bienvenid@ a AppBoxeo</p>
                <p className='p2'>Puedes encontrar información de nuestros gimnasios</p>
            </div>
    
            <div>
                {
                loading 
                ? <div className='spinner'></div>    
                : 
                <section>
                    <img src="horario.png" alt="cargando horario" />
                </section>
                }
            </div>
        </>
    );
};

export default Home;