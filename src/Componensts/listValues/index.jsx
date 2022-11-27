import React from "react";
import '../listValues/index.css'
import TrashImg from '../../img/trash.svg'

export const ListValuesProfile = ({transition, removeTransition}) => {

    return (   
            <li className= {`${transition.type === 'Entrada' ?"container-li-entrada"
            : "container-li-saida"}`}>                 
                
                <div className="position-div1-li">
                    <h3 className="text-description-li">{transition.description}</h3>
                    <p className="text-tipyValues-li">{transition.type}</p>
                </div>
                <div className="position-div2-li">
                    <p className="text-value-li"><strong>R$ </strong> {transition.value}</p>
                    <button  className="button-trash"  type="button"  onClick={(e) => removeTransition(transition.description)}><img  src={TrashImg}/></button>
                </div>
                
            </li>
        
    )
}