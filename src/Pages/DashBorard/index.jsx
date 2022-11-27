import React from "react";
import '../DashBorard/index.css'
import { InputsForm } from "../../Componensts/Inputs";
import {ProfileValues} from "../../Componensts/ValorsProfile"
import { HeaderDash } from "../../Componensts/header";
import { ValueTotal } from "../../Componensts/TotalValue";
import { useState } from "react";

export const Dashborading = ({Logout}) => {

    
    const [listTransactions, setListTransactions] = useState([
        { description: 'Salário recebido', type: 'Entrada', value: 2500 },
        { description: 'Conta de luz', type: 'Saída', value: -150 }
    ])
    const [filtered, setFiltered] = useState('todos')
    
    const listFiltered = listTransactions.filter(
        transition => 
        filtered === 'todos' ?
        true :
        transition.type === filtered
        )
    const removeTransition = (transitionName) => {
        const newList = listTransactions.filter(elem => elem.description !== transitionName)
        setListTransactions(newList)
    }


    return (
        <div>
            <HeaderDash Logout={Logout} />
            <div className="container-dash">
                <div className="div-forms-total">
                    <div className="container-form-infosDash">
                        <InputsForm setListTransactions={setListTransactions}/>
                    </div>
                    <div>
                        <ValueTotal listFiltered={listFiltered} />
                    </div>
                </div>
                <div>
                    <ProfileValues setFiltered={setFiltered} listFiltered={listFiltered} removeTransition={removeTransition}/>
                </div>

            </div>
        </div>
    )
}