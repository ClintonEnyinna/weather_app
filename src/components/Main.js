import { element, text } from './MakeElement';

const Main = () => {
  const main = element('MAIN');

  const parentDiv = element('DIV');
  parentDiv.classList.add('main-data');
  parentDiv.setAttribute('id', 'main-data');

  const sideDiv = element('DIV');
  const detailDiv = element('DIV');
  detailDiv.setAttribute('class', 'details');
  const ul = element('UL');
  detailDiv.append(ul);
  sideDiv.append(detailDiv);

  [
    'weather',
    'temperature',
    'min temperature',
    'max temperature',
    'humidity',
    'wind',
  ].forEach((name) => {
    const li = element('li');
    const liTxt = text(name);
    const spanVal = element('SPAN');
    li.append(liTxt, spanVal);
    li.setAttribute('id', name.split(' ')[0]);
    ul.append(li);
  });

  sideDiv.classList.add('side-data');
  sideDiv.setAttribute('id', 'side-data');

  const loadDiv = element('DIV');
  loadDiv.classList.add('load-data');
  loadDiv.setAttribute('id', 'load-data');
  const h2 = element('H2');
  const h2Txt = text("What's the weather?");
  h2.append(h2Txt);

  const progressDiv = element('DIV');
  const progressBar = element('DIV');
  progressDiv.classList.add('progress-bar');
  progressDiv.setAttribute('id', 'progress-bar');
  progressDiv.append(progressBar);

  loadDiv.append(h2, progressDiv);

  const tempDiv = element('DIV');
  tempDiv.setAttribute('id', 'temp-data');
  tempDiv.setAttribute('class', 'temp-data');

  const descDiv = element('DIV');
  descDiv.setAttribute('id', 'description');
  const img = element('IMG');
  descDiv.appendChild(img);

  parentDiv.append(loadDiv, sideDiv, tempDiv, descDiv);

  main.appendChild(parentDiv);

  return main;
};

export default Main;
