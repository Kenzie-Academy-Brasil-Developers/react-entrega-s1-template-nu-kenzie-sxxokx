import React from "react";
import '../listValues/index.css'
import TrashImg from '../../img/trash.svg'

export const ListValuesProfile = () => {
    return (   
            <li className="container-li">
                <div className="position-div1-li">
                    <h3 className="text-description-li">Descrição</h3>
                    <p className="text-tipyValues-li">Tipo de valor</p>
                </div>
                <div className="position-div2-li">
                    <p className="text-value-li">Valor</p>
                    <button  className="button-trash"  type="button"><img  src={TrashImg}/></button>
                </div>
            </li>
        
    )
}