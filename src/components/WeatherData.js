const GetWeatherData = async (location, unit = 'metric') => {
  try {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=87ca226fc9777f45c599892ee088e23b&units=${unit}`,
    );
    const weatherData = await weather.json();
    return weatherData;
  } catch (err) {
    alert(err.message);
    return {};
  }
};

export default GetWeatherData;
