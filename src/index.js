import $ from 'jquery';
import 'bootstrap';
import { Clock } from './clock';
import css from './style.scss';

console.log(css);

const $mainBtn = $('#main-btn');

$mainBtn.tooltip({
  title: 'Cliquez ici',
  placement: 'right',
});

const horlogeElt = document.querySelector('#horloge');
horlogeElt.classList.add(css.horloge);

const horloge = new Clock({
  container: horlogeElt,
});

horloge.start();
