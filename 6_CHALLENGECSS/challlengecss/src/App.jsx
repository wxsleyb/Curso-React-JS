import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './components/Car'

function App() {
  const myCars = [
    {name: "Fusca", km: 10000, color: "Azul"},
    {name: "Corolla", km: 5000, color: "Verde"},
    {name: "Ferrari", km: 20000, color: "Vermelho"},
  ];
  return (
    <div className="App">
      <h1>Showroom de carros</h1>
      <div className="car-container">
        {myCars.map((car) => (
          <Car car={car}/>
        ))}
      </div>
    </div>
  )
}

export default App
