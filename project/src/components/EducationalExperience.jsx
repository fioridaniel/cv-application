import { useState } from "react";
import { useNavigate } from "react-router";
import InputInfo from "./InputInfo";

function EducationalExpercience({ data, onChange }) {
  let navigate = useNavigate();

  return (
    <>
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
        onClick={() => {
          navigate("/pratical-experience");
        }}
      >
        Pratical experience
      </button>
    </>
  );
}

export default EducationalExpercience;
