import React, {useState} from "react"

import {Link, useHistory} from "react-router-dom"
import {LeftArrowAlt} from "@styled-icons/boxicons-regular"

import {WrapperRegisterContainer} from "./styles"
import logoImg from "../../assets/logo.svg"

import api from "../../services/api"

function Register(){
    const history = useHistory();
    
    const [valuesForm, setValuesForm] = useState('')

    async function handleRegister(e){
        e.preventDefault()
        console.log(valuesForm)

        try{

            const {data} = await api.post('ongs', valuesForm)
            history.push('/')
            alert(`Seu ID é ${data.id}`)
           
        } catch(e){
            alert("Erro no cadastro. Tente novamente")
        }
    }

    function changeValue(e){
        setValuesForm({...valuesForm, [e.target.name]: e.target.value})
    }

    return (
        <WrapperRegisterContainer>
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos 
                        da sua ONG.
                    </p>

                    <Link className="back-link" to="/">
                        <LeftArrowAlt size={16} color="#E02041" />
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        name="name"
                        placeholder="Nome da Ong" 
                        onChange={e => changeValue(e)}
                        value={valuesForm.name ? valuesForm.name : ""}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        name="email"
                        onChange={e => changeValue(e)}
                        value={valuesForm.email ? valuesForm.email : ""}
                    />
                    <input 
                        placeholder="Whatsapp" 
                        name="whatsapp"
                        onChange={e => changeValue(e)}
                        value={valuesForm.whatsapp ? valuesForm.whatsapp : ""}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            name="city"
                            onChange={e => changeValue(e)}
                            value={valuesForm.city ? valuesForm.city : ""}
                        />
                        <input 
                            placeholder="UF" 
                            name="uf"
                            onChange={e => changeValue(e)}
                            value={valuesForm.uf ? valuesForm.uf : ""}
                            style={{width: 80}} 
                        />
                    </div>

                    <button className="button-default" type="submit">Cadastrar</button>
                </form>
            </div>
        </WrapperRegisterContainer>
    )
} 

export default Register;