import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Eduardo", email:"edu@gmail.com", bio:"Sou escultor", role:"admin"}}/>
    </div>
  )
}

export default App
