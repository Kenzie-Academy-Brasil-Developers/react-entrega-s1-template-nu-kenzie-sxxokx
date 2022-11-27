import React from "react";
import  '../Home/index.css'
import NuImag from '../../img/Nu Kenzie.svg'
import FormHome from '../../img/illustration.svg'
import { useState } from "react";


export const HomePage = ({Login}) => {
      
    return(
        <div className="container-home">
            <div className="container-infos">
                <div className="container-h2">
                    <img src={NuImag} />
                    <h3>Centralize o controle das suas finanças</h3>
                </div>
                <p className="text-p">de forma rápida e segura</p>
                <button type="button" className="button-Start" onClick={() => Login()}>Iniciar</button>
            </div>
            <div className="container-form">
                <img src={FormHome} />
            </div>
        </div>
)
}