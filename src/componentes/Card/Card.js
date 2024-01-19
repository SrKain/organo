import './Card.css'
import { AiFillCloseCircle } from "react-icons/ai"

const Card = (props) => {
    return(
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => {props.aoDeletar(props.id)}}
            />
            <div className='cabeçalho' style={{backgroundColor: props.cor}}>
                <img src={props.imagem} alt={props.nome}></img>         
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Card