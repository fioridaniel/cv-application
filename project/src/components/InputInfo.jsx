function InputInfo({ value, setFunction, placeHolder }) {
    return (
        <input
            type="text"
            value={value}
            onChange={(event) => setFunction(event.target.value)}
            placeholder={placeHolder}
        />
    );
}

export default InputInfo;