import React, {useState} from "react"

import {LogIn} from "@styled-icons/boxicons-regular"
import { Link, useHistory } from "react-router-dom"
import api from "../../services/api"

import heroesImg from "../../assets/heroes.png"
import logoImg from "../../assets/logo.svg"

import {LogonContainer} from "./styles"

function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {

            const {data} = await api.post('session', {id})
            localStorage.setItem("ongName",data.name)
            localStorage.setItem("ongID", id)

            history.push('/profile')

        } catch(error){
            alert("Falha no login. Tente novamente")
        }
    }    

    return (
        <LogonContainer>
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                    <input 
                        placeholder="Seu Id" 
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button-default" type="submit"> Entrar </button>

                    <Link className="back-link" to="/register">
                        <LogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </LogonContainer>
        )
}

export default Logon