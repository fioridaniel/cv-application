import { useState } from "react";
import InputInfo from "./InputInfo";

function PraticalExperience({ data, onChange }) {
    return (
        <>
            <InputInfo 
                value={data.companyName}      
                setFunction={(v) => onChange('companyName', v)}      
                placeHolder={"Company name"} 
            />
            <InputInfo 
                value={data.positionTitle}    
                setFunction={(v) => onChange('positionTitle', v)}    
                placeHolder={"Position title"} 
            />
            <InputInfo 
                value={data.responsibilities} 
                setFunction={(v) => onChange('responsibilities', v)} 
                placeHolder={"Main responsibilities"} 
            />
            <InputInfo 
                value={data.dateFrom}         
                setFunction={(v) => onChange('dateFrom', v)}         
                placeHolder={"Date from"} 
            />
            <InputInfo 
                value={data.dateUntil}        
                setFunction={(v) => onChange('dateUntil', v)}        
                placeHolder={"Date until"} 
            />
        </>
    );
}

export default PraticalExperience;