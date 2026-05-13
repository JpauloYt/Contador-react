import { useState } from 'react';

function Contador() {
  const [valor, setValor] = useState(0);

  const incrementar = () => setValor(prev => prev + 1);
  const decrementar = () => setValor(prev => prev - 1);

  const corLum = '#00D2A5';
  const corLumEscura = '#00997A';

  return (
    <div style={{
      textAlign: 'center',
      marginTop: '50px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: corLum, textShadow: '2px 2px 4px #ccc' }}>
        Contador</h1>

      <h2 style={{
        fontSize: '4rem',
        margin: '20px',
        color: corLumEscura,
        backgroundColor: '#f0f0f0',
        display: 'inline-block',
        padding: '20px 40px',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        {valor}
      </h2>

      <div>
        <button onClick={decrementar} style={{
          fontSize: '2.5rem',
          margin: '10px',
          padding: '10px 25px',
          backgroundColor: corLum,
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          transition: '0.2s',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
        onMouseOver={e => e.target.style.backgroundColor = corLumEscura}
        onMouseOut={e => e.target.style.backgroundColor = corLum}>
          ➖
        </button>

        <button onClick={incrementar} style={{
          fontSize: '2.5rem',
          margin: '10px',
          padding: '10px 25px',
          backgroundColor: corLum,
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          transition: '0.2s',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
        }}
        onMouseOver={e => e.target.style.backgroundColor = corLumEscura}
        onMouseOut={e => e.target.style.backgroundColor = corLum}>
          ➕
        </button>
      </div>
    </div>
  );
}

export default Contador;