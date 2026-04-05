import { useState } from "react";
import { useNavigate } from "react-router";
import InputInfo from "./InputInfo";
import { standartDiv, submit } from "../styles/style";

function GeneralInformation({ data, onChange }) {
  let navigate = useNavigate();

  return (
    <div style={standartDiv}>
      <h2>General information</h2>
      <InputInfo
        value={data.name}
        setFunction={(v) => onChange("name", v)}
        placeHolder={"Name"}
      />
      <InputInfo
        value={data.email}
        setFunction={(v) => onChange("email", v)}
        placeHolder={"Email"}
      />
      <InputInfo
        value={data.phoneNumber}
        setFunction={(v) => onChange("phoneNumber", v)}
        placeHolder={"Phone"}
      />

      <button
        type="button"
        onClick={() => {
          navigate("/educational-experience");
        }}

        style={{...submit, marginTop : '15px'}}
      >
        Educational expercience
      </button>
    </div>
  );
}

export default GeneralInformation;
