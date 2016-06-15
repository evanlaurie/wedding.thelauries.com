import $ from 'jquery';
import 'jquery.waypoints';
import 'jquery.easing';
import 'jquery.sticky';
import 'jquery.countdown';
import WebFont from 'webfontloader';
import Carousel from './carousel';
import RichMarker from '../lib/rich-marker/src/richmarker.js';

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
    const offset = $(`#section-${id}`).offset().top - ($('#header').outerHeight(true));

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

  // GoogleMapsLoader.load(function (google) {
  const map_color = '#B5838D';
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 47.035524, lng: -122.894 },
    zoom: 15,
    styles: [
      {
        featureType: 'all',
        stylers: [
          { hue: map_color },
          { saturation: -75 },
          { lightness: 5 },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'labels.text.fill',
        stylers: [
          { saturation: 20 },
          { lightness: -70 },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          { saturation: -50 },
          { lightness: 40 },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          { hue: map_color },
          { saturation: -100 },
          { ightness: 0 },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          { hue: map_color },
          { saturation: 5 },
          { lightness: 5 },
        ],
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [
          { saturation: 10 },
          { lightness: 0 },
        ],
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          { saturation: 0 },
          { lightness: 20 },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          { hue: map_color },
          { saturation: 30 },
          { lightness: -30 },
        ],
      },
    ],
  });

  google.maps.event.addDomListener(window, 'resize', function () {
    const center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });

  var bounds = new google.maps.LatLngBounds();

  const markers = [
    { lat: 47.035527, long: -122.904786, icon: 'flaticon-newly-married-couple' },
    { lat: 47.042704, long: -122.903550, icon: 'flaticon-champagne-glasses' },
  ];

  markers.forEach((marker) => {
    const mark = new RichMarker({
      position: new google.maps.LatLng(marker.lat, marker.long),
      map: map,
      anchor: 8,
      anchorPoint: new google.maps.Point(0, -40),
      shadow: 'none',
      content: '<div class="marker"><i class="' + marker.icon + '"></i></div>',
    });

    bounds.extend(mark.getPosition());

  });


  map.fitBounds(bounds);

  // });
});
