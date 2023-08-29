import './App.css'
import { useState } from 'react'
import City from './assets/city.jpg'
import ManageData from '../../components/ManageData'
import ConditionalRender from '../../components/ConditionalRender'
import ShowUserName from '../../components/ShowUserName'
import ListRender from '../../components/ListRender'
import CarDetails from '../../components/CarDetails'
import Fragment from '../../components/Fragment'
import Container from '../../components/Container'
import ExecuteFunction from '../../components/ExecuteFunction'
import Message from '../../components/Message'
import ChangeMessageState from '../../components/ChangeMessageState'
import UserDetails from '../../components/UserDetails'
function App() {

  const cars = [
    { id: 1, brand: "Ferrari", color: "Vermelho", newCar: true, km: 0 },
    { id: 2, brand: "Chevrolet", color: "Amarelo", newCar: false, km: 30000 },
    { id: 3, brand: "Ford KA", color: "Azul", newCar: true, km: 5000 },
  ]

  const users = [
    {id: 1, name: "Wesley", job: "Programador", age:22},
    {id: 2, name: "Carol", job: "Programadora", age:17},
    {id: 3, name: "Felipe", job: "Porteiro", age:35},
  ]

  function showMessage(){
    console.log("Evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) =>{
    setMessage(msg)
  }
  return (
    <>
      <h1>Avançando em React</h1>
      {/*Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>

      <ManageData></ManageData>
      <ListRender></ListRender>
      <ConditionalRender></ConditionalRender>
      {/*props*/}
      <ShowUserName name="Matheus"></ShowUserName>
      {/*destructuring*/}
      <CarDetails brand="VW" km={100000} color="azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={9000} color="vermelho" newCar={true} />
      <CarDetails brand="Lamborguini" km={4000} color="verde" newCar={true} />
      {/*loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      {/*Fragment*/}
      <Fragment propFragment="teste" />

      {/*children*/}
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
      {/*executar função*/}
      <ExecuteFunction myFunction={showMessage}/>
      {/*state lift*/}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/*Desafio*/}
      {users.map((user)=>(
        <UserDetails
        key={user.id}
        name={user.name}
        job={user.job}
        age={user.age}
        />
      ))}

    </>
  )
}

export default App
