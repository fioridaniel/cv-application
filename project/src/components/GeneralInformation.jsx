import { useState } from "react";

function GeneralInformation({ name, email, phoneNumber, setName, setEmail, setPhoneNumber }) {
    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name"
            />

            <input
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
            />

            <input
                type="text"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                placeholder="Phone"
            />
        </>
    );
}

export default GeneralInformation;