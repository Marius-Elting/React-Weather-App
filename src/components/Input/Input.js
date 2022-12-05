import './Input.css';
import { useRef } from 'react';

function Input({ getCity }) {
    const inputRef = useRef();

    function handleCity(city) {
        getCity(city);
    }

    window.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            console.log(inputRef.current.value);

            handleCity(inputRef.current.value);
            // cityInput = "";

        }
    });

    return (
        <div>
            <div className="SearchDiv">
                <input placeholder='Stadt-Name' ref={inputRef} ></input>
                <button onClick={() => handleCity(inputRef.current.value)}>Suchen</button>
            </div>
            <div className="buttonDiv">
                <button onClick={() => handleCity("Berlin")}>Berlin</button>
                <button onClick={() => handleCity("Köln")}>Köln</button>
                <button onClick={() => handleCity("München")}>München</button>
                <button onClick={() => handleCity("Hamburg")}>Hamburg</button>
            </div>
        </div>
    );
}

export default Input;