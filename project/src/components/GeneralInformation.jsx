import { useState } from "react";
import { useNavigate } from "react-router";
import InputInfo from "./InputInfo";

function GeneralInformation({ data, onChange }) {
  let navigate = useNavigate();

  return (
    <>
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
        onClick={() => {
          navigate("/educational-experience");
        }}
      >
        Educational expercience
      </button>
    </>
  );
}

export default GeneralInformation;
