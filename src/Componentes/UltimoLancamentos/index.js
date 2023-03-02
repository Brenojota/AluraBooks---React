import './UltimoLancamentos.css'
import { livros } from '../UltimoLancamentos/dadosUltimosLancamentos'
import CardRecomenda from '../CardRecomenda'
import imagem from'../../imagens/livro.png'

function UltimoLancamento() {
    return (
        <section className='container-secao'>
            <h2 className='titulo-lancamentos'>Ultimos Lançamentos</h2>
            <div className='novos-livros'>
                {
                    livros.map(livro =>(
                    <img src={livro.src} alt={livro.nome}/>
                    ))
                }
                </div>
            <CardRecomenda
                titulo='Talvez você se interesse por...'
                subtitulo='Angular 12'
                descricao='Construindo uma aplicação com a plataforma Google'
                img={imagem}
                />

        </section>
    )
}
export default UltimoLancamento