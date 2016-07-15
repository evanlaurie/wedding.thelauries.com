import $ from 'jquery';
import 'jquery.waypoints';
import 'jquery.easing';
import 'jquery.sticky';
import 'jquery.countdown';
import WebFont from 'webfontloader';
import Carousel from './carousel';
import Map from './map';

WebFont.load({
  google: {
    families: ['Pinyon Script', 'Open Sans Condensed:300', 'Open Sans', 'Julius Sans One'],
  },
});

$(document).ready(function () {
  $('.section').waypoint({
    handler: function (direction) {
      const id = ((direction === 'up') ?
        this.element.previousElementSibling.id :
        this.element.id).split('-')[1];

      $('#nav a').removeClass('active');
      $(`#nav-${id}`).addClass('active');
    },
    offset: '50%',
  });

  function goToSection(id) {
    const offset = $(`#section-${id}`).offset().top - ($('#header').outerHeight(true) + 10);

    $('body,html').stop().animate({
      scrollTop: offset,
    }, 1500, 'easeInOutExpo', () => {
      $('#nav a').removeClass('active');
      $(`#nav-${id}`).addClass('active');
    });
  }

  $('#nav a').on('click', function (event) {
    const id = $(this).attr('id').split('-');
    goToSection(id[1]);
    event.preventDefault();
  });

  $('#header .logo').on('click', function (event) {
    goToSection('home');
    event.preventDefault();
  });

  $('#countdown').countdown('2017/10/20', function (event) {
    $(this).html(event.strftime(
      '<span class="countdown-time"> %-D DAYS</span>'
    ));
  });

  var carousel = new Carousel({
    panels: $('.gallery-item'),
  });

  $('.gallery-nav .next').on('click', () => {
    carousel.next();
  });

  $('.gallery-nav .previous').on('click', () => {
    carousel.previous();
  });

  const wedding = { lat: 47.035527, long: -122.904786, icon: 'flaticon-newly-married-couple' };
  const reception = { lat: 47.042704, long: -122.903550, icon: 'flaticon-champagne-glasses' };

  const map = new Map({
    map: document.getElementById('map-canvas'),
    panel: document.getElementById('map-panel'),
    color: '#454545',
    center: [47.035524, -122.894],
    zoom: 15,
    markers: [wedding, reception],
  });

  $('#directions-wedding').on('click', () => { map.directions(wedding); });
  $('#directions-reception').on('click', () => { map.directions(reception); });

});
