const ProcessWeatherData = async (data) => {
  const main = await data.main;
  const temp = main.temp;
  const feels_like = main.feels_like;
  const humidity = main.humidity;
  const temp_min = main.temp_min;
  const temp_max = main.temp_max;
  const name = data.name;
  const country = data.sys.country;
  const weather = data.weather[0];
  const icon = weather.icon;
  const weatherType = weather.main;
  const weatherDesc = weather.description;
  const wind = data.wind.speed;

  return {
    temp,
    feels_like,
    humidity,
    temp_min,
    temp_max,
    name,
    country,
    icon,
    weatherType,
    weatherDesc,
    wind,
  };
};

export default ProcessWeatherData;
