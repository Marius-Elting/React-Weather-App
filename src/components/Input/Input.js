import './Input.css';




function Input({ getCity }) {
    let cityInput;

    function handleCity(city) {
        getCity(city);
    }
    window.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {

            handleCity(cityInput);
        }
    });
    return (
        <div>
            <div className="SearchDiv">
                <input placeholder='Stadt-Name' onChange={(e) => cityInput = e.target.value}></input>
                <button onClick={() => handleCity(cityInput)}>Suchen</button>
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