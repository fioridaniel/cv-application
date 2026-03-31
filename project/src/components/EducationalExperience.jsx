import { useState } from "react";
import InputInfo from "./InputInfo";

function EducationalExpercience({ data, onChange }) {
    return (
        <>
            <InputInfo
                value={data.studyTitle}
                setFunction={(v) => onChange('studyTitle', v)}
                placeHolder={"Title of study"}
            />
            <InputInfo
                value={data.schoolName}
                setFunction={(v) => onChange('schoolName', v)}
                placeHolder={"School name"}
            />
            <InputInfo
                value={data.schoolDate}
                setFunction={(v) => onChange('schoolDate', v)}
                placeHolder={"Date of study"}
            />
        </>
    );
}

export default EducationalExpercience;