import logo from './logo.svg'
import './App.css';
import Botones from './components/Botones';
import Pantalla from './components/Pantalla';
import BtnClear from './components/BtnClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('')

  const agregarValor = valor => {
    setInput(input + valor)
  }
  const resetValor = () => {
    setInput('')
  }
  const calcularResultado = () => {
    if(input){
      setInput(evaluate(input))
    }else{
      alert('ingrese una operacion valida')
    }
    console.log(input);
  }


  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
        src={logo}
        alt='logo'
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className='fila'>
          <Botones manejarClic={agregarValor}>1</Botones>
          <Botones manejarClic={agregarValor}>2</Botones>
          <Botones manejarClic={agregarValor}>3</Botones>
          <Botones manejarClic={agregarValor}>+</Botones>
        </div>
        <div className='fila'>
          <Botones manejarClic={agregarValor}>4</Botones>
          <Botones manejarClic={agregarValor}>5</Botones>
          <Botones manejarClic={agregarValor}>6</Botones>
          <Botones manejarClic={agregarValor}>-</Botones>
        </div>
        <div className='fila'>
          <Botones manejarClic={agregarValor}>7</Botones>
          <Botones manejarClic={agregarValor}>8</Botones>
          <Botones manejarClic={agregarValor}>9</Botones>
          <Botones manejarClic={agregarValor}>*</Botones>
        </div>
        <div className='fila'>
          <Botones manejarClic={calcularResultado}>=</Botones>
          <Botones manejarClic={agregarValor}>0</Botones>
          <Botones manejarClic={agregarValor}>.</Botones>
          <Botones manejarClic={agregarValor}>/</Botones>
        </div>
        <div className='fila'>
          <BtnClear resetearCalc={resetValor}>Clear</BtnClear>
        </div>
      </div>
    </div>
  );
}

export default App;
