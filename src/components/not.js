const Nota = (props) =>{
    return(

        <li>
            <h2>{props.Título}</h2>
            <p>
                {props.contenido}
            </p>
        </li>
    )
}

export default Nota;