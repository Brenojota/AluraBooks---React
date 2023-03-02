import './Pesquisa.css'
import Input from '../Input/'


function Pesquisa (){
    return(
        <section className='pesquisa-container'>
            <h2 className='titulo'>Já sabe por onde começar?</h2>
            <h3 className='subtitulo'>Encontre seu livro em nossa estante.</h3>
            <Input />
           
        </section>
    )
}

export default Pesquisa