import React from "react"
import "../ValorsProfile/index.css"
import { ListValuesProfile } from "../listValues"


export const ProfileValues = () => {
    return (
        <div className="container-profile-all">
            <div className="container-profileValues">
            <div>
                <p className="text-resume-financ">Resumo financeiro</p>
            </div>

            <div className="types-values-buttons">
                <button>Todos</button>
                <button>Entradas</button>
                <button>Despesas</button>
            </div>
            </div>
            <h2 className="info-not-have">Você ainda não possui nenhum lançamento</h2>
                                
            <ul className="container-ul">
                <ListValuesProfile/>
                <ListValuesProfile/>
                <ListValuesProfile/>
                <ListValuesProfile/>
                <ListValuesProfile/>
            </ul>
        </div>
    )
}