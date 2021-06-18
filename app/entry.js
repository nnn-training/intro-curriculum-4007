'use strict';
import $ from 'jquery';
const block = $('#block');
const movingButton = $('#moving-button');

movingButton.click(() => {
  block.animate({ 'marginLeft' : '500px' }, 2000);
  block.animate({ 'marginLeft' : '20px' }, 2000);
});
