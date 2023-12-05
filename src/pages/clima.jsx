import { useState } from 'react';
import { useForm } from 'react-hook-form'
import '../app/globals.css'

import Error from '@/components/Error';
import Input from '@/components/Input';
import WeatherResult from '@/components/WeatherResult';
import { getWeather } from '@/services/getWeather';
import Header from '@/components/Header';

const Weather = ({apiKey}) => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    getWeather(data.city, setWeather, setError, setLoading, setCity, apiKey)
  }

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-lg rounded-lg p-6 bg-white">
          <h1 className="text-2xl font-bold text-center mb-4 text-black">Clima actual</h1>
          {error && (
            <Error message="Ocurrio un error con el sistema, intenta más tarde"/>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="city" label="Ciudad" register={register} required errors={errors} />
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {loading ? 'Procesando...' : 'Buscar'}
              </button>
            </div>
          </form>
            <WeatherResult weather={weather} city={city} />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {

  const apiKey = process.env.API_KEY;

  return { props: { apiKey } };
};

export default Weather;
