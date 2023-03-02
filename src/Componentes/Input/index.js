import './Input.css'
import { useState } from 'react'
import { livros } from './../Pesquisa/dadosPesquisa'


function Input() {

    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [input, setInput] = useState('')

    function pesquisar(textoDigitado){

        const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
        setLivrosPesquisados(resultadoPesquisa)
        setInput(textoDigitado)
        if(textoDigitado == ''){
            setLivrosPesquisados([])
        }

    }

    return (
        <div>
            <input className='pesquisa-livro'
                type='text'
                placeholder='Escreva sua próxima leitura...'
                onChange={(e)=> pesquisar(e.target.value) 
                }
            />
            { input.length == 0 ? '':livrosPesquisados?.map(
                    livro => 
                        <div className='resultado-livro'>
                            <p className='p'>{livro.nome}</p>
                            <img src={livro.src} alt={livro.nome}/>
                        </div>
                )
            }
        </div>
        
    )
}

export default Input