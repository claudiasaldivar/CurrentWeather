import axios from "axios";

export const getWeather = async (dataCity, setWeather, setError, setLoading, setCity, apiKey) => {
  setLoading(true)
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${dataCity}&limit=1&appid=${apiKey}`
      );
      const data = response.data[0];
      setCity(data.name);
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${data.lat}&lon=${data.lon}&exclude=hourly,minutely&appid=${apiKey}`
      );
      setWeather(weatherResponse.data);
      setError(false);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener datos del clima:', error);
      setError(true);
      setLoading(false);
      setCity('');
    }
  };
