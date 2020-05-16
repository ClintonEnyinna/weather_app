import places from 'places.js';
import GetWeatherData from './components/WeatherData';
import ProcessData from './components/ProcessData';
import GetIconImage from './components/GetIconImage';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './css/style.css';

const page = document.querySelector('#content');
page.append(Header(), Main(), Footer());

let tempFormat;

const updateView = async ({
  temp,
  name,
  country,
  icon,
  weatherDesc,
  humidity,
  tempMin,
  tempMax,
  wind,
}) => {
  const tempData = document.querySelector('#temp-data');
  const temperature = document.querySelector('#temperature span');
  const city = document.querySelector('#city-span');
  const min = document.querySelector('#min span');
  const max = document.querySelector('#max span');
  const humiditySpan = document.querySelector('#humidity span');
  const windSpeed = document.querySelector('#wind span');
  const weather = document.querySelector('#weather span');

  const tempUnit = tempFormat === 'celsius' ? 'C' : 'F';

  console.log(tempUnit, tempFormat);

  tempData.innerText = `${Math.round(temp)}° ${tempUnit}`;
  temperature.innerText = `${temp} ° ${tempUnit}`;
  city.innerText = `${name}, ${country}`;
  weather.innerText = weatherDesc;
  min.innerText = `${tempMin} ° ${tempUnit}`;
  max.innerText = `${tempMax} ° ${tempUnit}`;
  humiditySpan.innerText = `${humidity} %`;
  windSpeed.innerText = `${wind} m/s`;

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
    let width = 0;
    let done = false;
    const timeIntervals = setInterval(() => {});
    for (let i = 0; i < timeIntervals; i += 1) clearInterval(i);

    const handle = setInterval(() => {
      if (width >= 100) {
        clearInterval(handle);
        loadDiv.style.opacity = '0';
      } else if (width > 90 && !done) {
        clearInterval(handle);
        alert('something went wrong, try modifying the name of the city!');
      } else {
        loader.style.width = `${width}%`;
        width += 1;
      }
    }, 10);

    const location = document.querySelector('input[type="text"]').value;
    const weatherData = await GetWeatherData(location);
    const weatherInFarenheit = await GetWeatherData(location, 'imperial');
    const proccessData = await ProcessData(weatherData);
    const dataInFarenheit = await ProcessData(weatherInFarenheit);

    done = true;

    tempFormat = document.querySelector('input[name=temperature]:checked')
      .value;

    if (tempFormat === 'celsius') updateView(proccessData);
    else updateView(dataInFarenheit);
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

places(config).configure(options);

window.onload = async () => {
  const defaultData = await GetWeatherData('Mexico City');
  const dataInFarenheit = await GetWeatherData('Mexico City', 'imperial');
  const proccessDefaultData = await ProcessData(defaultData);
  const processedDataInFarenheit = await ProcessData(dataInFarenheit);
  const tempFarenheit = document.querySelector('#temperature span');
  tempFarenheit.innerText = `${processedDataInFarenheit.temp} °C`;

  updateView(proccessDefaultData);
};
