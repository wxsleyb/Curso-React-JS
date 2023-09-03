import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n=15
  const[name] = useState("Matheus")
  const redTitle= false
  return (
    <div className="App">
      {/*CSS Global*/}
      <h1>React com CSS</h1>
      <MyComponent/>
      {/*CSS de componente*/}
      <p>Este parágrafo é do App.js</p>
      {/*Inline CSS*/}
      <p style={{color:"blue", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p>
      <p style={{color:"red", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado de forma inline</p>
      {/*Dinâmico Inline CSS*/}
      <h2 style={n>10 ?({color: "purple"}) : ({color: "pink"})} >CSS dinâmico</h2>
      <h2 style={name === "Wesley" ?({color: "green", backgroundColor: "yellow"}) : ({color: "white", backgroundColor: "red"})} >CSS dinâmico</h2>
      {/*Classe dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinâmica</h2>
      {/*CSS Modules*/}
      <Title/>
      <h2 className='my_title'>titulo</h2>

    </div>
  )
}

export default App
