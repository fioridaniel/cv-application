import { useState } from "react";

import InputInfo from "./InputInfo";

function GeneralInformation({ data, onChange }) {
    return (
        <>
            <InputInfo
                value={data.name}
                setFunction={(v) => onChange('name', v)}
                placeHolder={"Name"}
            />
            <InputInfo
                value={data.email}
                setFunction={(v) => onChange('email', v)}
                placeHolder={"Email"}
            />
            <InputInfo
                value={data.phoneNumber}
                setFunction={(v) => onChange('phoneNumber', v)}
                placeHolder={"Phone"}
            />
        </>
    );
}

export default GeneralInformation;