import './ItensLista.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS' , 'MINHA ESTANTE']

const icones = [perfil , sacola]

function ItensLista(){
    return(
        <>
            <ul className='opcoes'>
                { textoOpcoes.map( (texto) => ( <li className='opcao'><p>{texto}</p></li>))  }
            </ul>
            <ul className='icones'>
                {icones.map((icone) => (
                    <li className='icone'><img src={icone} alt='icone'/></li>
                ))}
            </ul>
        </>
    )
}
export default ItensLista