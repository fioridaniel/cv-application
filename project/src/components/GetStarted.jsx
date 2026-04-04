import { useState } from "react";
import { text, submit, standartDiv } from '../styles/style';
import { useNavigate } from 'react-router';

function GetStarted() {
    let navigate = useNavigate();

    return (
        <>
            <div style={standartDiv}>
                <h2 style={text}>Get Started with your new Resume!</h2>
                <button 
                    style={{...submit, marginTop : '60px'}} 
                    onClick={() => { navigate("/general-info") }}>
                    Create new cv
                </button>
            </div>
        </>
    );
}

export default GetStarted;