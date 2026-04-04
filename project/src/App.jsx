import { useState } from "react";
import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExpercience from "./components/EducationalExperience";
import PraticalExperience from "./components/PraticalExperience";
import GetStarted from "./components/GetStarted";
import { standartDiv, submit, field } from "./styles/style";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [generalInformation, setGeneralInformation] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [educationalExpercience, setEducationalExpercience] = useState({
    schoolName: "",
    studyTitle: "",
    studyDate: "",
  });

  const [praticalExperience, setPraticalExperience] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });

  const handleGeneralInformation = (field, data) => {
    setGeneralInformation((prev) => ({
      ...prev,
      [field]: data,
    }));
  };

  const handleEducationalExperience = (field, data) => {
    setEducationalExpercience((prev) => ({
      ...prev,
      [field]: data,
    }));
  };

  const handlePraticalExperience = (field, data) => {
    setPraticalExperience((prev) => ({
      ...prev,
      [field]: data,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route
            path="/general-info"
            element={
              <GeneralInformation
                data={generalInformation}
                onChange={handleGeneralInformation}
              />
            }
          />
          <Route
            path="/educational-experience"
            element={
              <EducationalExpercience
                data={educationalExpercience}
                onChange={handleEducationalExperience}
              />
            }
          />
          <Route
            path="/pratical-experience"
            element={
              <PraticalExperience
                data={praticalExperience}
                onChange={handlePraticalExperience}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
