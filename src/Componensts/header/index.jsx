import React from "react";
import '../header/index.css'
import NuImageDash from "../../img/NuKenzieDash.svg"


export const HeaderDash = ({Logout}) => {
    return (
        <header className="container-header">
            <div>
                <img className="img-header" src={NuImageDash}/>
            </div>
            <div>
                <button type="button" className="button-header" onClick={() => Logout()}>Inicio</button>
            </div>
        </header>
    )
}