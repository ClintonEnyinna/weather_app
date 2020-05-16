import { element, text } from './MakeElement';

const Footer = () => {
  const footer = element('FOOTER');

  const form = element('FORM');
  form.setAttribute('id', 'weather-data');

  const celsiusLabel = element('LABEL');
  const celsiusTxt = text('°C');
  celsiusLabel.appendChild(celsiusTxt);
  const celsiusRadio = element('INPUT');
  celsiusRadio.setAttribute('type', 'radio');
  celsiusRadio.setAttribute('id', 'celsius-radio');
  celsiusRadio.setAttribute('name', 'temperature');
  celsiusRadio.setAttribute('checked', 'true');
  celsiusRadio.setAttribute('value', 'celsius');

  const farenheitLabel = element('LABEL');
  const farenheitTxt = text('°F');
  farenheitLabel.appendChild(farenheitTxt);
  const farenheitRadio = element('INPUT');
  farenheitRadio.setAttribute('type', 'radio');
  farenheitRadio.setAttribute('id', 'farenheit-radio');
  farenheitRadio.setAttribute('name', 'temperature');
  farenheitRadio.setAttribute('value', 'farenheit');

  const input = element('INPUT');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Your city name');
  input.setAttribute('id', 'search');

  const btn = element('BUTTON');
  btn.innerText = 'Get Weather';

  const citySpan = element('SPAN');
  citySpan.setAttribute('id', 'city-span');

  form.append(
    celsiusRadio,
    celsiusLabel,
    farenheitRadio,
    farenheitLabel,
    input,
    btn
  );
  footer.append(citySpan, form);

  return footer;
};

export default Footer;
