/* global document */
import $ from 'jquery';
import 'jquery.waypoints';
import 'jquery.easing';
import 'jquery.sticky';
import 'jquery.slick';

import WebFont from 'webfontloader';
import Map from './map';

WebFont.load({
  google: {
    families: ['Alex Brush', 'Open Sans Condensed:300', 'Open Sans', 'Sofia', 'Satisfy'],
  },
});

$(document).ready(() => {
  if (!('ontouchstart' in document.documentElement)) {
    $(document.documentElement).addClass('no-touch');
  }

  const sections = [];

  $('.section').each(function () { sections.push(this.id); });

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

  $('.gallery-content').slick({
    dots: true,
    arrows: false,
    lazyLoad: 'ondemand',
  });

  $('.gallery-content').on('swipe', (event) => {
    event.stopPropagation();
  });

  $('.slick-dots').on('click', (event) => {
    event.stopPropagation();
  });

  $('.gallery-nav .next').click(function (event) {
    event.stopPropagation();
    $(this).parents('.gallery-nav').siblings('.gallery-content').slick('slickNext');
  });

  $('.gallery-nav .previous').click(function (event) {
    event.stopPropagation();
    $(this).parents('.gallery-nav').siblings('.gallery-content').slick('slickPrev');
  });

  $('.gallery').click(function () {
    $('body').toggleClass('no-scroll');
    $(this).toggleClass('full');
    $(this).children('.gallery-content').slick('setPosition');

    if ($(this).hasClass('full')) {
      $('body').bind('touchmove', (event) => { event.preventDefault(); });
    } else {
      $('body').unbind('touchmove');
    }
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
