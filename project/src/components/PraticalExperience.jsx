import { useState } from "react";
import InputInfo from "./InputInfo";
import { useNavigate } from "react-router";
import { standartDiv, submit } from "../styles/style";

function PraticalExperience({ data, onChange }) {
  let navigate = useNavigate();
  return (
    <div style={standartDiv}>
      <h2>Pratical Experience</h2>
      <InputInfo
        value={data.companyName}
        setFunction={(v) => onChange("companyName", v)}
        placeHolder={"Company name"}
      />
      <InputInfo
        value={data.positionTitle}
        setFunction={(v) => onChange("positionTitle", v)}
        placeHolder={"Position title"}
      />
      <InputInfo
        value={data.responsibilities}
        setFunction={(v) => onChange("responsibilities", v)}
        placeHolder={"Main responsibilities"}
      />
      <InputInfo
        value={data.dateFrom}
        setFunction={(v) => onChange("dateFrom", v)}
        placeHolder={"Date from"}
      />
      <InputInfo
        value={data.dateUntil}
        setFunction={(v) => onChange("dateUntil", v)}
        placeHolder={"Date until"}
      />
      <button
        type="button"
        onClick={() => {
          navigate("/resume");
        }}

        style={{...submit, marginTop : '15px'}}
      >
        Finish Resume
      </button>
    </div>
  );
}

export default PraticalExperience;
