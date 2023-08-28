const TemplateExpressions = () =>{
    const name = "Wesley"
    const data = {
        age:22,
        color: "Azul"
    }

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Sua cor favorita é {data.color}</p>
            <p>{16*3}</p>
            <p>{console.log("JSX React")}</p>

        </div>
    )
}

export default TemplateExpressions