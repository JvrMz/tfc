import card1 from '../assets/card1.jpg';
import card2 from '../assets/card2.jpg';
import card3 from '../assets/card3.jpg';

const Cuotas = () => {
  const cuotasData = [
    {
      id: 1,
      title: 'Básica',
      image: card1,
      description: 'Dos dias a la semana.',
      price: '40€/mes',
    },
    {
      id: 2,
      title: 'Estándar',
      image: card2,
      description: 'Tres dias a la semana',
      price: '60€/mes',
    },
    {
      id: 3,
      title: 'Ilimitada',
      image: card3,
      description: 'Acceso ilimitado.',
      price: '80€/mes',
    },
  ];

  return (
    <>
        <h2>Tarifas</h2>    
        <div className="cuotas-container">
        {cuotasData.map((cuota) => (
            <div key={cuota.id} className="cuota-card">
            <img src={cuota.image} alt={cuota.title} className="cuota-image" />
            <h2>{cuota.title}</h2>
            <p>{cuota.description}</p>
            <p className="cuota-price">{cuota.price}</p>
            </div>
        ))}
        </div>
    </>
  );
};

export default Cuotas;
