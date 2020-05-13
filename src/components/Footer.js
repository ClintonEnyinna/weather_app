import { element } from './MakeElement';

const Footer = () => {
  const footer = element('FOOTER');

  const form = element('FORM');
  form.setAttribute('id', 'weather-data');

  const input = element('INPUT');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Your city name');
  input.setAttribute('id', 'search');

  const btn = element('BUTTON');
  btn.innerText = 'Get Weather';

  const citySpan = element('SPAN');
  citySpan.setAttribute('id', 'city-span');

  form.append(input, btn);
  footer.append(citySpan, form);

  return footer;
};

export default Footer;
