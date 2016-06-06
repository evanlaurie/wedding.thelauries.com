import { merge } from 'lodash';
import jQuery from 'jquery';

jQuery.fn.reverse = [].reverse;

export default class Carousel {
  constructor(options = {}) {
    const defaults = {
      current: 0,
      panels: [],
    };

    this.options = merge(defaults, options);

    this.parent = this.options.panels.parent();

    this.parent.on('touchstart.carousel mousedown.carousel', {
      action: 'start',
    }, this.swipeHandler.bind(this));

    this.parent.on('touchmove.carousel mousemove.carousel', {
      action: 'move',
    }, this.swipeHandler.bind(this));

    this.parent.on('touchend.carousel mouseup.carousel', {
      action: 'end',
    }, this.swipeHandler.bind(this));

    this.parent.on('touchcancel.carousel mouseleave.carousel', {
      action: 'end',
    }, this.swipeHandler.bind(this));

    this.parent.addClass('animate');

    this.goTo(this.current());
  }

  previous() {
    const { current, panels } = this.options;

    const previous = current - 1;

    if (previous < 0) this.goTo(panels.length - 1);
    else this.goTo(previous);
  }

  next() {
    const { current, panels } = this.options;

    const next = current + 1;

    if (next > panels.length - 1) this.goTo(0);
    else this.goTo(next);
  }

  goTo(index) {
    this.current(index);
    this.update();
  }

  swipeHandler(event) {
    const direction = (this.startX > event.offsetX) ? 'left' : 'right';
    const width = this.parent.width();
    const offset = Math.abs(this.currentX - event.offsetX) / width;

    if (event.data.action === 'start') {
      this.currentX = event.offsetX;
      this.dragging = true;
      this.parent.removeClass('animate');
    }

    if (event.data.action === 'end') {
      this.parent.addClass('animate');
      if (this.dragging) {
        if (offset >= 0.25) {
          if (direction === 'left') this.previous();
          if (direction === 'right') this.next();
        }
        else this.update();
      }

      this.dragging = false;
    }

    if (this.dragging && event.data.action === 'move') {
      this.update(((direction === 'left') ? -100 : 100) * offset);
    }
  }

  current(index) {
    if (index !== undefined) this.options.current = index;
    else return this.options.current;
  }

  update(offset = 0) {
    console.log(offset);

    const { current, panels } = this.options;

    panels.slice(0, current + 1).reverse().css({
      'left': (i) => { return ((i * -100) + offset) + '%'; },
    });

    panels.slice(current, panels.length).css({
      'left': (i) => { return ((i * 100) + offset) + '%'; },
    });

    panels.slice(current, current + 1).css({
      'left': offset + '%',
    });
  }

}
