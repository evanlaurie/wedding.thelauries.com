import $ from 'jquery';
import 'jquery.waypoints';
import 'jquery.easing';
import 'jquery.sticky';
import 'jquery.countdown';
import 'jquery.slick';

import WebFont from 'webfontloader';
import Map from './map';

WebFont.load({
  google: {
    families: ['Alex Brush', 'Open Sans Condensed:300', 'Open Sans', 'Sofia', 'Satisfy'],
  },
});

$(document).ready(() => {
  const sections = [];

  $('.section').map(function () { sections.push(this.id); });

  $('.section').waypoint({
    handler(direction) {
      const id = ((direction === 'up') ? sections[sections.indexOf(this.element.id) - 1] : this.element.id).split('-')[1];

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

  $('#header .logo').on('click', (event) => {
    goToSection('home');
    event.preventDefault();
  });

  $('#countdown').countdown('2017/10/20', function (event) {
    $(this).html(event.strftime(
      '<span class="countdown-time"> %-D DAYS</span>'
    ));
  });

  $('.gallery-content').slick({
	  dots: true,
    arrows: false,
  });

  $('.gallery-nav .next').click(function () {
	  $(this).parents('.gallery-nav').siblings('.gallery-content').slick('slickNext');
  });

  $('.gallery-nav .previous').click(function () {
	  $(this).parents('.gallery-nav').siblings('.gallery-content').slick('slickPrev');
  });

  const wedding = { lat: 20.669548, long: -156.442907, icon: 'flaticon-newly-married-couple' };

  const map = new Map({
    map: document.getElementById('map-canvas'),
    panel: document.getElementById('map-panel'),
    color: '#454545',
    center: [20.669548, -156.442907],
    zoom: 11,
    markers: [wedding],
  });
});
