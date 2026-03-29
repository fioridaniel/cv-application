import { useState } from "react";

function EducationalExpercience({ schoolName, studyTitle, studyDate, setSchoolName, setStudyTitle, setStudyDate }) {
    return (
        <>
            <input
                type="text"
                value={schoolName}
                onChange={(event) => setSchoolName(event.target.value)}
                placeholder="School name"
            />

            <input
                type="text"
                value={studyTitle}
                onChange={(event) => setStudyTitle(event.target.value)}
                placeholder="Title of study "
            />

            <input
                type="text"
                value={studyDate}
                onChange={(event) => setStudyDate(event.target.value)}
                placeholder="Date of study"
            />
        </>
    );
}

export default EducationalExpercience;