import 'bootstrap';
import 'core-js/fn/promise';
import $ from 'jquery';
import './style.scss';

const $mainBtn = $('#main-btn');

$mainBtn.tooltip({
  placement: 'right',
  title: 'Cliquez ici !',
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
