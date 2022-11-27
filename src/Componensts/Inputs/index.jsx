import { useState } from "react"
import '../Inputs/index.css'


export const InputsForm = ({setListTransactions}) => {

    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [value, setValue] = useState(1)

    const addTransitions = (event) => {
        event.preventDefault()

        if(description !== '' && type !== '' && value !== '') {
            const newTransition = {
                description,
                type,
                value,
            }
            if(newTransition.type === 'Saída' && newTransition.value > 0){
                newTransition.value = (newTransition.value = newTransition.value*-1)
            }else{
                newTransition.value = (newTransition.value = +newTransition.value*+1)
            }
            setListTransactions((oldTransitions) => [...oldTransitions, newTransition])
            setDescription('')
            setType('')
            setValue(0)
        }
    }

    return (
    <div>
        <form onSubmit={addTransitions}>
            <div className="inputs-dash-values">
                <label className="label-form-dash" htmlFor="">Descrição</label>
                <input className="input-descript-form" type="text" value={description} required onChange={event => setDescription(event.target.value)} placeholder="Digite aqui sua descrição" />
                <p className="p-explemp">Ex: Compra de roupas</p>
            </div>

            <div className="container-input-select"> 
                <div className="inputs-dash-values">
                    <label className="label-form-dash" htmlFor="">Valor</label>
                    <input className="inputs-value-select" value={value} required onChange={event => setValue(event.target.value)} type="number" />
                </div>

                <div className="inputs-dash-values">
                    <label className="label-form-dash" htmlFor="">Tipo de valor</label>
                    <select className="inputs-value-select" name="'value-type" value={type} required onChange={event => setType(event.target.value)}>
                        <option  disabled defaultValue>Selecionar Tipo de Valor</option>
                        <option  value="Tipo de Valor">Tipo de Valor</option>
                        <option  value="Entrada">Entrada</option>
                        <option  value="Saída">Saída</option>
                    </select>           
                </div>    
                
            </div>
                <button className="button-form" >Inserir Valor</button>
        </form>

        
    </div>
    )
}
