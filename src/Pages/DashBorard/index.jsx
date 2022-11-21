import React from "react";
import '../DashBorard/index.css'
import { InputsForm } from "../../Componensts/Inputs";
import {ProfileValues} from "../../Componensts/ValorsProfile"
import { HeaderDash } from "../../Componensts/header";
import { ValueTotal } from "../../Componensts/TotalValue";

export const Dashborading = () => {
    return (
        <div>
            <HeaderDash />
            <div className="container-dash">
                <div className="div-forms-total">
                    <div className="container-form-infosDash">
                        <InputsForm />
                    </div>
                    <div>
                        <ValueTotal />
                    </div>
                </div>
                <div>
                    <ProfileValues/>
                </div>

            </div>
        </div>
    )
}