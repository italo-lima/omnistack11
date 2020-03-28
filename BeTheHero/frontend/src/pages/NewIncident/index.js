import React, {useState} from "react"
import { Link, useHistory } from "react-router-dom"
import api from "../../services/api"

import {WrapperNewIncident} from "./styles"
import logoImg from "../../assets/logo.svg"
import {LeftArrowAlt} from "@styled-icons/boxicons-regular"

function NewIncident() {

    const [valuesNewIncident, setValuesNewIncident] = useState([])

    const ongId = localStorage.getItem('ongID')
    const history = useHistory()

    async function handleNewIncident(e){
        e.preventDefault()
        
        try {
            await api.post('incidents', valuesNewIncident, {
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile')
        } catch(e){
            alert("Erro ao cadastrar caso, tente novamente!")
        }
    }

    function changeValues(e){
        setValuesNewIncident({...valuesNewIncident, [e.target.name]: e.target.value})
    }

    return(
        <WrapperNewIncident>
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>

                    <Link className="back-link" to="/profile">
                        <LeftArrowAlt size={16} color="#E02041" />
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso"
                        name="title"
                        value={valuesNewIncident.title ? valuesNewIncident.title : ""}
                        onChange={e => changeValues(e)}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        name="description"
                        value={valuesNewIncident.description ? valuesNewIncident.description : ""}
                        onChange={e => changeValues(e)}
                    />

                    <input 
                        placeholder="Valor em reais" 
                        name="value"
                        value={valuesNewIncident.value ? valuesNewIncident.value : ""}
                        onChange={e => changeValues(e)}
                    />

                    <button className="button-default" type="submit">Cadastrar</button>
                </form>
            </div>
    </WrapperNewIncident>
    )
}


export default NewIncident