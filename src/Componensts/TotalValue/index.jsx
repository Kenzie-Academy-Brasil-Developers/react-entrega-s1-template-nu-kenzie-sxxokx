import React from "react";
import '../TotalValue/index.css'

export const ValueTotal = ({listFiltered}) => {
    return (
        <div className="container-totalValue">
            <div className="div-total-value">
                <h3 className="text-total">Valor Total</h3>
                <p className="value-total">$ {listFiltered.reduce((acc, elem) => acc+elem.value, 0 )}</p>
            </div>
            <p className="infos-values">O valor se refere ao saldo</p>
        </div>
    )
}