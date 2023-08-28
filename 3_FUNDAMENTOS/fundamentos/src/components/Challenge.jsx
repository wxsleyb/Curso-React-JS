const Challenge = () =>{
    const valor1 = 10
    const valor2 = 25
    
    const soma = () =>{
        const resultado = valor1 + valor2;
        console.log(resultado)
        
    }

    return(
    <div>
    <p>A: {valor1}</p>
    <p>B: {valor2}</p>
    
    <button onClick={soma}>Clique para somar</button>

    </div>
    

}

export default Challenge;