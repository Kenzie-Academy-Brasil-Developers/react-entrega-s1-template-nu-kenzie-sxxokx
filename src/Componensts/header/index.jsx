import React from "react";
import '../header/index.css'
import NuImageDash from "../../img/NuKenzieDash.svg"


export const HeaderDash = () => {
    return (
        <header className="container-header">
            <div>
                <img className="img-header" src={NuImageDash}/>
            </div>
            <div>
                <button type="button" className="button-header" >Inicio</button>
            </div>
        </header>
    )
}