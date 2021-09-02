import React, {useState, useEffect} from 'react'

function App() {

  const [numero, setNumero] = useState('');
  const [segundoNumero, setSegundoNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const somar = () => {
    const numeroInt = parseInt(numero);
    const segNumeroInt = parseInt(segundoNumero);

    setResultado(numeroInt + segNumeroInt);
  }

  //[] executa uma vez, [] com variáveis sempre que a variavel for alterada, passar nada executa a toda alteração de variáveis
  useEffect(() => {
    console.log("variavel nmr: ", numero)
  }, [numero]);

  return (
    <div>
      Número 1: <br/>
      <input type="text" value={numero} onChange={e => setNumero(e.target.value)} />
      <br />

      Número 2: <br/>
      <input type="text" value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)}/>
      <br />
      <button onClick={somar}>Somar</button> <br/>
      Resultado: <br/>
      <input type="text" value={resultado} />
    </div>
  );
}

export default App;
