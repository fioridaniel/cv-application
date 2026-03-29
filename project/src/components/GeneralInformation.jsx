import { useState } from "react";

import InputInfo from "./InputInfo";

function GeneralInformation({ name, email, phoneNumber, setName, setEmail, setPhoneNumber }) {
    return (
        <>
            <InputInfo
                value={name}
                setFunction={setName}
                placeHolder={"Name"}
            ></InputInfo>

            <InputInfo
                value={email}
                setFunction={setEmail}
                placeHolder={"Email"}
            ></InputInfo>

            <InputInfo
                value={phoneNumber}
                setFunction={setPhoneNumber}
                placeHolder={"Phone"}
            ></InputInfo>
        </>
    );
}

export default GeneralInformation;