import {useState} from 'react'

const listRender = () => {
    const[list] = useState(["Matheus", "Pedro", "Wesley"])

    const [users, setUsers] = useState([
        {id:1, name: "Matheus", age:31},
        {id:2, name: "Gabriel", age:15},
        {id:3, name: "Pedro", age:39},
    ])

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random()*4);

        setUsers((prevUsers)=>{
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default listRender
