import $ from 'jquery';
import 'bootstrap';
import './style.scss';

const $mainBtn = $('#main-btn');

$mainBtn.tooltip({
  title: 'Cliquez ici !',
  placement: 'right',
});

document.addEventListener('click', () => {
  import('./clock').then(({ Clock }) => {
    const horlogeElt = document.querySelector('.horloge');

    const horloge = new Clock({
      container: horlogeElt,
    });

    horloge.start();
  });
});
