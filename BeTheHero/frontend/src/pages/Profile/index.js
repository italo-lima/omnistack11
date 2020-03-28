import React, {useState,useEffect} from "react"

import {Link, useHistory} from "react-router-dom"
import api from "../../services/api"

import {WrapperProfile, ListaCasos} from "./styles"
import logoImg from "../../assets/logo.svg"
import {PowerOff, TrashAlt} from "@styled-icons/boxicons-regular"

function Profile(){
    const [incidents, setIncidents] = useState([])
    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongID')
    
    const history = useHistory();

    async function loadIncidents(id) {
       const {data} = await api.get('profile-incidents', {
           headers: {
               Authorization: id
           }
       })
       setIncidents(data)
    }

    async function handleRemoveIncident(id){
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            })

            setIncidents(incidents.filter(incident => incident.id !== id))
        } catch(err){
            alert("Erro ao deletar caso, tente nnovamente!")
        }
    }

    function handlelogout(){
        localStorage.removeItem('ongID')
        localStorage.removeItem('ongName')

        history.push('/')
    }

    useEffect(() => {
        loadIncidents(ongId)
    }, [])

    return (
    <WrapperProfile>
        <header>
            <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

            <Link className="button-default" to="incidents/new">
                Cadastrar novo caso
            </Link>
            <button type="button" onClick={handlelogout}>
                <PowerOff size={18} color="#e02041"/>
            </button>
        </header>

        <h1>Casos cadastrados</h1>
        <ListaCasos>
            {incidents.length && incidents.map(incident => (
                <li key={incident.id}>
                    <strong>CASO:</strong>
                    <p>{incident.title}</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p>{Intl.NumberFormat('pt-br',{style: 'currency', currency:'BRL'}).format(incident.value)}</p>

                    <button type="button" onClick={() => handleRemoveIncident(incident.id)}>
                        <TrashAlt size={20} color="#a8a8b3"/>
                    </button>
                </li>
            ))}
        </ListaCasos>
    </WrapperProfile>
    ) }
export default Profile