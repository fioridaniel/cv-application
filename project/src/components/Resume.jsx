import { useNavigate } from "react-router-dom";
import { standartDiv, section, paper, button } from "../styles/style";

function Resume({ generalInfo, educationalInfo, practicalInfo }) {
  const navigate = useNavigate();

  return (
    <div style={standartDiv}>
      <div style={paper}>
        
        {/* HEADER */}
        <header style={section}>
          <h1>{generalInfo.name || "Seu Nome Completo"}</h1>
          <p>
            {generalInfo.email || "email@exemplo.com"} |{" "}
            {generalInfo.phoneNumber || "(00) 00000-0000"}
          </p>
        </header>

        <hr />

        {/* EDUCAÇÃO */}
        <section style={section}>
          <h2>Educação</h2>
          <p><strong>{educationalInfo.studyTitle || "Curso"}</strong></p>
          <p>{educationalInfo.schoolName || "Instituição"}</p>
          <p><em>{educationalInfo.studyDate || "Período"}</em></p>
        </section>

        <hr />

        {/* EXPERIÊNCIA */}
        <section style={section}>
          <h2>Experiência</h2>
          <p><strong>{practicalInfo.positionTitle || "Cargo"}</strong></p>
          <p>{practicalInfo.companyName || "Empresa"}</p>
          <p>
            <em>
              {practicalInfo.dateFrom || "Início"} -{" "}
              {practicalInfo.dateUntil || "Fim"}
            </em>
          </p>
          <p>
            {practicalInfo.responsibilities ||
              "Descreva suas principais atividades e responsabilidades."}
          </p>
        </section>

        {/* BOTÃO */}
        <button 
          type="button"
          style={button} 
          onClick={() => navigate("/general-info")}>
          Editar Informações
        </button>
      </div>
    </div>
  );
}

export default Resume;