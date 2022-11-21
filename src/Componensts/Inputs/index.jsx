import { useState } from "react"
import '../Inputs/index.css'

export const InputsForm = () => {
    return (
    <div>
        <form>
            <div className="inputs-dash-values">
                <label className="label-form-dash" htmlFor="">Descrição</label>
                <input className="input-descript-form" type="text" placeholder="Digite aqui sua descrição" />
                <p className="p-explemp">Ex: Compra de roupas</p>
            </div>

            <div className="container-input-select"> 
                <div className="inputs-dash-values">
                    <label className="label-form-dash" htmlFor="">Valor</label>
                    <input className="inputs-value-select" type="number" />
                </div>

                <div className="inputs-dash-values">
                    <label className="label-form-dash" htmlFor="">Tipo de valor</label>
                    <select className="inputs-value-select">
                        <option  disabled defaultValue>Selecionar Tipo de Valor</option>
                        <option  value="entrada">Entrada</option>
                        <option  value="saida">Saída</option>
                    </select>           
                </div>    
                
            </div>
                <button className="button-form">Inserir Valor</button>
        </form>

        
    </div>
    )
}
function valoresPerfil() {

   
    const valuesData = [
      {valor: 300,
       tipodeValor: 'Entrada'
      },
      {valor: 100,
        tipodeValor: 'Saída'
       },
       {valor: 800,
        tipodeValor: 'Entrada'
       },
       {valor: 200,
         tipodeValor: 'Saída'
        },
    ]
}