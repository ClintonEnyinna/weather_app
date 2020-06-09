import { element, text } from './MakeElement';

const Header = () => {
  const header = element('HEADER');

  const nav = element('NAV');

  const h3 = element('H3');
  const h3Txt = text('TheWeather');
  h3.appendChild(h3Txt);

  const span = element('SPAN');
  span.classList.add('hamburger');

  nav.append(h3, span);
  header.append(nav);

  return header;
};

export default Header;
