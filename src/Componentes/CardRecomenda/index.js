function CardRecomenda({titulo, subtitulo, descricao, img}) {
    return (
        <div className="card-recomenda">
            <h3 className="titulos">{titulo}</h3>
            <h4 className="titulos">{subtitulo}</h4>
            <p className="descricao">{descricao}</p>
            <img src={img} alt={titulo}/>
            <button>Saiba mais</button>
        </div>
    )
}

export default CardRecomenda