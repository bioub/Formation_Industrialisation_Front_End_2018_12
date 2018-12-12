import $ from 'jquery';
import 'bootstrap';
import { Clock } from './clock';

const $mainBtn = $('#main-btn');

$mainBtn.tooltip({
  title: 'Cliquez ici',
  placement: 'right',
});

const horlogeElt = document.querySelector('#horloge');

const horloge = new Clock({
  container: horlogeElt,
});

horloge.start();
