import { useState } from 'react'
import './App.css'
import GeneralInformation from './components/GeneralInformation'
import EducationalExpercience from './components/EducationalExperience'
import PraticalExperience from './components/PraticalExeperience';

function App() {
  const [generalInformation, setGeneralInformation] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const [educationalExpercience, setEducationalExpercience] = useState({
    schoolName : '',
    studyTitle : '',
    studyDate : ''
  });

  const [praticalExperience, setPraticalExperience] = useState({
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    dateFrom: '',
    dateUntil: ''
  });

  const handleGeneralInformation = (field, data) => {
    setGeneralInformation(prev => ({
      ...prev, [field]: data
    }));
  };

  const handleEducationalExperience = (field, data) => {
    setEducationalExpercience(prev => ({
      ...prev, [field]: data
    }));
  };

  const handlePraticalExperience = (field, data) => {
    setPraticalExperience(prev => ({
      ...prev, [field]: data
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };
  
  return (
    <>
      <h2>Fill your Resume!</h2>
      <form
        onSubmit={handleSubmit}
      >
        <GeneralInformation
          data={generalInformation}
          onChange={handleGeneralInformation}
        ></GeneralInformation>
        
        <EducationalExpercience
          data={educationalExpercience}
          onChange={handleEducationalExperience}
        ></EducationalExpercience>

        <PraticalExperience
          data={praticalExperience}
          onChange={handlePraticalExperience}
        ></PraticalExperience>
        
        <button type="submit">Submit CV</button>
      </form>
    </>
  );
}

export default App
