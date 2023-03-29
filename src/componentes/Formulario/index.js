import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [deonde, setDeOnde] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => 
    {   evento.preventDefault()
        props.aoPersonagemCadastrado({
            nome,
            deonde,
            imagem,
            time
        })
        setNome('')
        setDeOnde('')
        setImagem('')
        setTime('')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do PERSONAGEM</h2>
                <CampoTexto 
                obrigatorio = {true} 
                label = "Nome" 
                placeholder = "Digite o nome do personagem" 
                valor = {nome} 
                aoAlterado = {valor => setNome(valor)}
                />
                <CampoTexto 
                obrigatorio = {true} 
                label = "De onde seu personagem vem?" 
                placeholder = "Ex: Ben 10"
                valor = {deonde} 
                aoAlterado = {valor => setDeOnde(valor)} 
                />
                <CampoTexto 
                obrigatorio = {true} 
                label = "Imagem" 
                placeholder = "Informe o endereço da imagem" 
                valor = {imagem} 
                aoAlterado = {valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio = {true} 
                label = "Time" 
                itens = {props.times}
                valor = {time}
                aoAlterado = {valor => setTime(valor)} 

                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}


export default Formulario