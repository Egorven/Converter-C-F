import { useState } from 'react';
import TemperatureConverter from './components/TemperatureConverter';

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (value) => {
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      const f = parseFloat(value) * (9 / 5) + 32;
      setFahrenheit(f.toFixed(2));
    }
  };

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      const c = (parseFloat(value) - 32) * (5 / 9);
      setCelsius(c.toFixed(2));
    }
  };

  return (
    <div className="app">
      <TemperatureConverter
        celsius={celsius}
        fahrenheit={fahrenheit}
        onCelsiusChange={handleCelsiusChange}
        onFahrenheitChange={handleFahrenheitChange}
      />
    </div>
  );
}

export default App;