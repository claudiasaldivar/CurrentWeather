export const getWeather = async (dataCity, setWeather, setError, setLoading, setCity) => {
  setLoading(true);

  try {
    // Obtener datos de ubicación
    const locationResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${dataCity}&limit=1&appid=9a2365c49c12c733f9ca31d301bf6e4c`);
    const locationData = await locationResponse.json();
    const location = locationData[0];

    setCity(location.name);

    // Obtener datos meteorológicos
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=hourly,minutely&appid=9a2365c49c12c733f9ca31d301bf6e4c`);
    const weatherData = await weatherResponse.json();

    setWeather(weatherData);
    setError(false);
    setLoading(false);
  } catch (error) {
    console.error('Error al obtener datos del clima:', error);
    setError(true);
    setLoading(false);
    setCity('');
  }
};

