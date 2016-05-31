import $ from 'jquery';
import 'jquery.waypoints';
import 'jquery.easing';
import 'jquery.sticky';
import 'jquery.countdown';
import WebFont from 'webfontloader';

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
});
