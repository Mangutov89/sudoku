import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';

import { checkRow1, checkCol1, square, placeRandom } from './sudoku.js';



$(document).ready(function() {
  placeRandom();
});



$(".row1").change(function() {
  checkRow1("row1");
});
$(".row2").change(function() {
  checkRow1("row2");
});
$(".row3").change(function() {
  checkRow1("row3");
});
$(".row4").change(function() {
  checkRow1("row4");
});
$(".row5").change(function() {
  checkRow1("row5");
});
$(".row6").change(function() {
  checkRow1("row6");
});
$(".row7").change(function() {
  checkRow1("row7");
});
$(".row8").change(function() {
  checkRow1("row8");
});
$(".row9").change(function() {
  checkRow1("row9");
});



$(".col1").change(function() {
  checkCol1("col1");
});
$(".col2").change(function() {
  checkCol1("col2");
});
$(".col3").change(function() {
  checkCol1("col3");
});
$(".col4").change(function() {
  checkCol1("col4");
});
$(".col5").change(function() {
  checkCol1("col5");
});
$(".col6").change(function() {
  checkCol1("col6");
});
$(".col7").change(function() {
  checkCol1("col7");
});
$(".col8").change(function() {
  checkCol1("col8");
});
$(".col9").change(function() {
  checkCol1("col9");
});


$(".top-left").change(function() {
  square("top-left");
});
$(".top-middle").change(function() {
  square("top-middle");
});
$(".top-left").change(function() {
  square("top-left");
});
$(".middle-left").change(function() {
  square("middle-left");
});
$(".middle").change(function() {
  square("middle");
});
$(".middle-right").change(function() {
  square("middle");
});
$(".bottom-left").change(function() {
  square("bottom-left");
});
$(".bottom-middle").change(function() {
  square("bottom-middle");
});
$(".bottom-right").change(function() {
  square("bottom-right");
});
