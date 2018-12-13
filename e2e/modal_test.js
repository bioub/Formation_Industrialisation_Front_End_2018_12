/// <reference path="./steps.d.ts" />
/* global Feature, Scenario */

Feature('Modal');

Scenario('I should modal on click', I => {
  I.amOnPage('/');
  I.click('Contact');
  I.see('Modal title');
});
