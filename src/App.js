import './App.css';
import Header from './components/header/Header';
import { useState, useEffect } from 'react';
import Input from './components/Input/Input';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

function App() {
  const [curWeather, setCurWeather] = useState([]);
  const [city, setCity] = useState("Berlin");

  function getCity(selectedCity) {
    setCity(selectedCity);
  }

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=de&appid=c41b8a39a3c402e02819bd223ee1f116`)
      .then(response => response.json())
      .then((data) => {
        setCurWeather(data);
        console.log(data);

      });

  }, [city]);

  return (
    <div className='wrapper'>
      <h1>{"Wetter"}</h1>
      <Header />
      <Input getCity={getCity} />
      <CurrentWeather weatherData={curWeather} city={city} />
    </div>
  );
}

export default App;
