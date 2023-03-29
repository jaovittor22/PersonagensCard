import './Personagem.css'

const Personagem = ({nome, imagem, deonde, corDeFundo}) => { //jeito de fazer sem o props
    return(
        <div className='personagem'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src= {imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{deonde}</h5>
            </div>
        </div>
    )

}


export default Personagem