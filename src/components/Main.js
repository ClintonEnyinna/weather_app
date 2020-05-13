import { element } from './MakeElement';

const Main = () => {
  const main = element('MAIN');

  const parentDiv = element('DIV');
  parentDiv.classList.add('main-data');
  parentDiv.setAttribute('id', 'main-data');

  const sideDiv = element('DIV');
  sideDiv.classList.add('side-data');
  sideDiv.setAttribute('id', 'side-data');

  const loadDiv = element('DIV');
  loadDiv.classList.add('load-data');
  loadDiv.setAttribute('id', 'load-data');

  const tempDiv = element('DIV');
  tempDiv.setAttribute('id', 'temp-data');
  tempDiv.setAttribute('class', 'temp-data');

  const descDiv = element('DIV');
  descDiv.setAttribute('id', 'description');
  const img = element('IMG');
  descDiv.appendChild(img);

  parentDiv.append(sideDiv, tempDiv, descDiv);

  main.appendChild(parentDiv);

  return main;
};

export default Main;
