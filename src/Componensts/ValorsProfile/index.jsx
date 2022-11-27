import React from "react"
import "../ValorsProfile/index.css"
import { ListValuesProfile } from "../listValues"


export const ProfileValues = ({setFiltered, listFiltered, removeTransition}) => {
    return (
        <div className="container-profile-all">
            <div className="container-profileValues">
            <div>
                <p className="text-resume-financ">Resumo financeiro</p>
            </div>

            <div className="types-values-buttons">
                <button onClick={() => setFiltered('todos')}>Todos</button>
                <button onClick={() => setFiltered('Entrada')}>Entradas</button>
                <button onClick={() => setFiltered('Saída')}>Despesas</button>
            </div>
            </div>
            {
                ListValuesProfile === '' ?
                <h2 className="info-not-have">Você ainda não possui nenhum lançamento</h2>
                :
            <ul className="container-ul">
                 {
              listFiltered.map((transition, i) => 
              <ListValuesProfile key={i} transition={transition} removeTransition={removeTransition} />
                )
              }
               
            </ul>
            }
                                
        </div>
    )
}