import { useState } from "react";
import { text, submit } from '../styles/style';
import { useNavigate } from 'react-router';

function GetStarted() {
    let navigate = useNavigate();

    return (
        <>
            <div>
                <h2>Get Started with your new Resume!</h2>

                {/* <p style={text}>Create  a new Resume</p>
                 */}
                <button onClick={() => {navigate("/general-info")}}>Create new cv</button>
            </div>

        </>
    );
}

export default GetStarted;