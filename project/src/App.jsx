import { useState } from 'react'
import './App.css'
import GeneralInformation from './components/GeneralInformation'
import EducationalExpercience from './components/EducationalExperience'

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [studyTitle, setStudyTitle] = useState('');
  const [studyDate, setStudyDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  }
  
  return (
    <>
      <h2>Fill your Resume!</h2>
      <form
        onSubmit={handleSubmit}
      >
        <GeneralInformation
          name={name} email={email} phoneNumber={phoneNumber}
          setName={setName} setEmail={setEmail} setPhoneNumber={setPhoneNumber}
        ></GeneralInformation>
        
        <EducationalExpercience
          schoolName={schoolName} studyTitle={studyTitle} studyDate={studyDate}
          setSchoolName={setSchoolName} setStudyTitle={setStudyTitle} setStudyDate={setStudyDate}
        ></EducationalExpercience>
        
        <button type="submit">Salvar Currículo</button>
      </form>
    </>
  )
}

export default App
