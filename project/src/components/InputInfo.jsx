import { field } from '../styles/style';

function InputInfo({ value, setFunction, placeHolder }) {
    return (
        <input
            type="text"
            style={field}
            value={value}
            onChange={(event) => setFunction(event.target.value)}
            placeholder={placeHolder}
        />
    );
}

export default InputInfo;