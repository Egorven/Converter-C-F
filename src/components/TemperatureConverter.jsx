import './TemperatureConverter.css';

function TemperatureConverter({ celsius, fahrenheit, onCelsiusChange, onFahrenheitChange }) {
  
  const handleCelsiusInput = (value) => {
    if (value === '') {
      onCelsiusChange('');
      return;
    }
  const num = parseFloat(value);
    if (!isNaN(num) && num >= -273.15) {
      onCelsiusChange(String(num));
    }
  };

  const handleFahrenheitInput = (value) => {
    if (value === '') {
      onFahrenheitChange('');
      return;
    }
  const num = parseFloat(value);
    if (!isNaN(num) && num >= -459.67) {
      onFahrenheitChange(String(num));
    }
  };

  return (
    <div className="temp-converter">
      <h2>Конвертер температур</h2>
      <div className="temp-inputs">
        <div className="temp-input">
          <label htmlFor="celsius">Градусы Цельсия (°C):</label>
          <input
            id="celsius"
            type="number"
            step="0.01"
            value={celsius}
            onChange={(e) => handleCelsiusInput(e.target.value)}
            placeholder="≥ -273.15"
          />
        </div>
        <div className="temp-input">
          <label htmlFor="fahrenheit">Градусы Фаренгейта (°F):</label>
          <input
            id="fahrenheit"
            type="number"
            step="0.01"
            value={fahrenheit}
            onChange={(e) => handleFahrenheitInput(e.target.value)}
            placeholder="≥ -459.67"
          />
        </div>
      </div>
    </div>
  );
}

export default TemperatureConverter;