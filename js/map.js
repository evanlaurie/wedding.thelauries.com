/* global window, navigator, google */
import $ from 'jquery';
import { merge } from 'lodash';
import elementResizeEvent from 'element-resize-event';

import RichMarker from '../lib/rich-marker/src/richmarker';

export default class Map {
  constructor(options = {}) {
    const defaults = {
      color: '#454545',
      center: [0, 0],
      zoom: 1,
    };

    this.options = merge(defaults, options);
    this.markers = [];

    const { map, center, zoom, markers } = this.options;

    this.map = new google.maps.Map(map, {
      clickableIcons: false,
      scrollwheel: false,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT,
      },
      scaleControl: true,
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT,
      },
      center: { lat: center[0], lng: center[1] },
      zoom,
    });

    google.maps.event.addDomListener(window, 'resize', () => {
      this.resize();
    });

    elementResizeEvent(map, () => {
      this.resize();
    });

    if (markers) {
      markers.forEach((marker) => {
        this.addMarker(marker);
      });
    }
  }

  resize() {
    const center = this.map.getCenter();
    google.maps.event.trigger(this.map, 'resize');
    this.map.setCenter(center);
  }

  addMarker(marker) {
    const mark = new RichMarker({
      position: new google.maps.LatLng(marker.lat, marker.long),
      map: this.map,
      anchor: 8,
      anchorPoint: new google.maps.Point(0, -40),
      shadow: 'none',
      content: `<div class="marker"><i class="${marker.icon}"></i></div>`,
    });

    this.markers.push(mark);

    return mark;
  }

  clearMarkers() {
    this.markers.forEach((marker) => {
      marker.setMap(null);
    });
  }

  directions(from, to) {
    if (from && !to) {
      if (!navigator.geolocation) return;

      navigator.geolocation.getCurrentPosition((position) => {
        this.directions({ lat: position.coords.latitude, long: position.coords.longitude, icon: 'flaticon-home' }, from);
      });

      return;
    }

    if (this.directionDisplay) this.directionDisplay.set('directions', null);

    const { color, panel } = this.options;

    const start = new google.maps.LatLng(from.lat, from.long);
    const end = new google.maps.LatLng(to.lat, to.long);

    this.clearMarkers();
    this.addMarker(from);
    this.addMarker(to);

    this.directionDisplay = new google.maps.DirectionsRenderer({
      map: this.map,
      panel,
      suppressMarkers: true,
      polylineOptions: { strokeColor: color },
    });

    const directionsService = new google.maps.DirectionsService();

    directionsService.route({
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionDisplay.setDirections(response);
        this.writeDirectionsSteps(from, to, response.routes[0].legs[0]);
      }
    });

    return;
  }

  writeDirectionsSteps(from, to, directions) {
    const { map, panel } = this.options;
    const $panel = $(panel);

    $(map).parent().addClass('panel-open');

    $panel.empty();

    const start = directions.start_address.split(',');
    const end = directions.end_address.split(',');

    $panel.append(`
      <h3 class="facny-title">
        Directions
        <span class="summary">
          ${directions.distance.text} - ${directions.duration.text}
        </span>
      </h3>
    `);

    $panel.append(`
      <div class="placemarker">
        <i class="${from.icon}"></i>
        <span class="address"> 
          <div class="first-line">${start[0]}</div>
          <div class="second-line">${end[1]}, ${end[2]}</div>
        </span>
      </div>
    `);

    directions.steps.forEach((step, i) => {
      const $step = $('<div/>', { class: 'adp-substep' }).appendTo($panel);
      const $icon = $('<span/>', { class: 'step-icon adp-stepicon' }).appendTo($step);
      const $maneuver = $('<div/>', { class: 'adp-maneuver' }).appendTo($icon);


      const $number = $('<span/>', { class: 'step-number' }).appendTo($step);
      const $instructions = $('<span/>', { class: 'step-instructions' }).appendTo($step);
      const $distance = $('<span/>', { class: 'step-distance' }).appendTo($step);

      if (step.maneuver) $maneuver.addClass(`adp-${step.maneuver.replace(' ', '-')}`);
      else $maneuver.hide();

      $number.text(`${(i + 1)}.`);
      $instructions.html(step.instructions);
      $distance.text(step.distance.text);
    });

    $panel.append(`
      <div class="placemarker">
        <i class="${to.icon}"></i>
        <span class="address">
          <div class="first-line">${end[0]}</div>
          <div class="second-line">${end[1]}, ${end[2]}</div>
        </span>
      </div>
    `);
  }
}
