import React from "react";
import  '../Home/index.css'
import NuImag from '../../img/Nu Kenzie.svg'
import FormHome from '../../img/illustration.svg'
import { useState } from "react";


export const HomePage = ( ) => {
    const [inHome, setInHome] = useState(false)
    console.log("page mudou")
    console.log(inHome)
    
    function clickBUtton (e) {
        if( inHome == true){
            inHome = false
            console.log(inHome)
        }
    }


    return(
        <div className="container-home">
        <div className="container-infos">
        <div className="container-h2">
        <img src={NuImag} />
        <h3>Centralize o controle das suas finanças</h3>
        </div>
        <p className="text-p">de forma rápida e segura</p>
        <button type="button" className="button-Start" onClick={clickBUtton}>Iniciar</button>
        </div>
        <div className="container-form">
        <img src={FormHome} />
        </div>
    </div>
)
}