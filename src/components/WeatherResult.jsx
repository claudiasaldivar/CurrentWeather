import Image from 'next/image';
import capitalizarPrimeraLetra from "@/hooks/getCapitalLetter"

const WeatherResult = ({weather, city}) => {
  const kelvin = 274.15;

  return (
    <>
     {weather && (
          <div className="text-black mt-2.5">
          <h2 className="text-lg font-medium text-center mb-2">
            Clima actual en {capitalizarPrimeraLetra(city)}
          </h2>
          <p className="text-sm text-center mb-1">
            Temperatura: {(weather?.current?.temp - kelvin).toFixed(2)} °C
          </p>
          <div className="mt-2 flex items-center space-x-2 justify-center">
              <Image
                src={`http://openweathermap.org/img/wn/${weather?.current?.weather[0]?.icon}.png`}
                alt="Icono del clima"
                width={50}
                height={50}
              />
              <span className="text-4xl font-bold text-gray-800">{weather?.current?.weather[0]?.main}</span>
            </div>
        </div> 
      )} 
    </>
  )
}

export default WeatherResult
