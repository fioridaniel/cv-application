import { useState } from "react";
import InputInfo from "./InputInfo";

function EducationalExpercience({ schoolName, studyTitle, studyDate, setSchoolName, setStudyTitle, setStudyDate }) {
    return (
        <>
            <InputInfo
                value={studyTitle}
                setFunction={setStudyTitle}
                placeHolder={"Title of study"}
            ></InputInfo>

            <InputInfo
                value={schoolName}
                setFunction={setSchoolName}
                placeHolder={"School name"}
            ></InputInfo>

            <InputInfo
                value={studyDate}
                setFunction={setStudyDate}
                placeHolder={"Date of study"}
            ></InputInfo>
        </>
    );
}

export default EducationalExpercience;