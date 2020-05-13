import GetWeatherData from './components/WeatherData';
import ProcessData from './components/ProcessData.js';
import GetIconImage from './components/GetIconImage';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import places from 'places.js';
import './css/style.css';

const page = document.querySelector('#content');
page.append(Header(), Main(), Footer());

const updateView = async (
  {
    temp,
    name,
    country,
    icon,
    weatherDesc,
    humidity,
    temp_min,
    temp_max,
    wind,
  },
  data
) => {
  const tempData = document.querySelector('#temp-data');
  const city = document.querySelector('#city-span');
  const min = document.querySelector('#min span');
  const max = document.querySelector('#max span');
  const humiditySpan = document.querySelector('#humidity span');
  const windSpeed = document.querySelector('#wind span');
  const weather = document.querySelector('#weather span');

  tempData.innerText = Math.round(temp) + '°';
  city.innerText = name + ', ' + country;
  weather.innerText = weatherDesc;
  min.innerText = temp_min + ' °C';
  max.innerText = temp_max + ' °C';
  humiditySpan.innerText = humidity + ' %';
  windSpeed.innerText = wind + ' m/s';

  const iconImgUrl = await GetIconImage(icon);
  document.querySelector('#description img').src = iconImgUrl;
};

document
  .querySelector('#weather-data')
  .addEventListener('submit', async (e) => {
    e.preventDefault();

    const loadDiv = document.querySelector('#load-data');
    loadDiv.style.opacity = '1';
    const loader = document.querySelector('#progress-bar div');
    let width = 1;
    let done = false;

    const handle = setInterval(() => {
      if (width >= 100) {
        clearInterval(handle);
        loadDiv.style.opacity = '0';
      } else if (width > 90 && !done) {
      } else {
        width++;
        loader.style.width = width + '%';
      }
    }, 10);

    const location = document.querySelector('input[type="text"]').value;
    const weatherData = await GetWeatherData(location);
    const weatherInFarenheit = await GetWeatherData(location, 'imperial');
    const proccessData = await ProcessData(weatherData);
    const dataInFarenheit = await ProcessData(weatherInFarenheit);
    const temperature = document.querySelector('#temperature span');
    temperature.innerText = dataInFarenheit.temp + ' °F';

    done = true;
    updateView(proccessData, dataInFarenheit);
  });

document.querySelector('.hamburger').addEventListener('click', (e) => {
  e.target.classList.toggle('show-content');
  const sideDiv = document.querySelector('#side-data');
  sideDiv.classList.toggle('show');
});

const config = {
  appId: 'plYMQTVVMSA1',
  apiKey: '7c5be0a85bcc7acb3efa4a6d60f6a729',
  container: document.querySelector('#search'),
};

const options = {
  language: 'en',
  type: 'city',
};

const placesInstance = places(config).configure(options);

window.onload = async () => {
  const defaultData = await GetWeatherData('Mexico City');
  const dataInFarenheit = await GetWeatherData('Mexico City', 'imperial');
  const proccessDefaultData = await ProcessData(defaultData);
  const processedDataInFarenheit = await ProcessData(dataInFarenheit);
  const tempFarenheit = document.querySelector('#temperature span');
  tempFarenheit.innerText = processedDataInFarenheit.temp + ' °F';

  updateView(proccessDefaultData);
};
