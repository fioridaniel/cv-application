import { useState } from "react";
import { useNavigate } from "react-router";
import InputInfo from "./InputInfo";
import { standartDiv, submit } from "../styles/style";

function EducationalExpercience({ data, onChange }) {
  let navigate = useNavigate();

  return (
    <div style={standartDiv}>
      <h2>Educational Experience</h2>
      <InputInfo
        value={data.studyTitle}
        setFunction={(v) => onChange("studyTitle", v)}
        placeHolder={"Title of study"}
      />
      <InputInfo
        value={data.schoolName}
        setFunction={(v) => onChange("schoolName", v)}
        placeHolder={"School name"}
      />
      <InputInfo
        value={data.schoolDate}
        setFunction={(v) => onChange("studyDate", v)}
        placeHolder={"Date of study"}
      />
      <button
        type="button"
        onClick={() => {
          navigate("/pratical-experience");
        }}

        style={{...submit, marginTop : '15px'}}
      >
        Pratical experience
      </button>
    </div>
  );
}

export default EducationalExpercience;
