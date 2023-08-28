import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// styles css
import './App.css'

//components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'
import Challenge from './components/Challenge'


function App() {

  return (
    <>
    <h1>Fundamentos React</h1>
    <FirstComponent></FirstComponent>
    <TemplateExpressions></TemplateExpressions>
    <MyComponent></MyComponent>
    <Events></Events>
    <Challenge></Challenge>

    </>
  )
}

export default App
