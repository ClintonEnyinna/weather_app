const ProcessWeatherData = async (data) => {
  const main = await data.main;
  const { temp } = main;
  const { feelsLike } = main;
  const { humidity } = main;
  const { tempMin } = main;
  const { tempMax } = main;
  const { name } = data;
  const { country } = data.sys;
  const weather = data.weather[0];
  const { icon } = weather;
  const weatherType = weather.main;
  const weatherDesc = weather.description;
  const wind = data.wind.speed;

  return {
    temp,
    feelsLike,
    humidity,
    tempMin,
    tempMax,
    name,
    country,
    icon,
    weatherType,
    weatherDesc,
    wind,
  };
};

export default ProcessWeatherData;
