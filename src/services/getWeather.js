import axios from "axios";
export const getWeather = async (dataCity, setWeather, setError, setLoading, setCity) => {
    setLoading(true)
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${dataCity}&limit=1&appid=9a2365c49c12c733f9ca31d301bf6e4c`
      );
      const data = response.data[0];
      setCity(data.name);
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${data.lat}&lon=${data.lon}&exclude=hourly,minutely&appid=9a2365c49c12c733f9ca31d301bf6e4c`
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
