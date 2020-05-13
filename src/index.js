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

const updateView = async ({ temp, name, country, icon }) => {
  const tempData = document.querySelector('#temp-data');
  const city = document.querySelector('#city-span');

  tempData.innerText = Math.round(temp) + '°';
  city.innerText = name + ', ' + country;

  const iconImgUrl = await GetIconImage(icon);
  document.querySelector('#description img').src = iconImgUrl;
};

document
  .querySelector('#weather-data')
  .addEventListener('submit', async (e) => {
    e.preventDefault();
    const location = document.querySelector('input[type="text"]').value;
    const weatherData = await GetWeatherData(location);
    const weatherInFarenheit = await GetWeatherData(location, 'imperial');
    const proccessData = await ProcessData(weatherData);
    const dataInFarenheit = await ProcessData(weatherInFarenheit);

    updateView(proccessData);
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

  updateView(proccessDefaultData);
};
