import { merge } from 'lodash';
export default class Carousel {
  constructor(options = {}) {
    const defaults = {
      current: 0,
      panels: [],
    };

    this.options = merge(defaults, options);
  }

  previous() {
    const { current, panels } = this.options;

    const previous = current - 1;

    if (previous == 0) this.goTo(panels.length);
    this.goTo(previous);
  }

  next() {
    const { current, panels } = this.options;

    const next = current + 1;

    if (next > panels.length) this.goTo(0);
    this.goTo(next);
  }

  goTo(index) {
    const { current, panels } = this.options;

    this.current(index);


  }

  current(index) {
    if (index === undefined) this.options.current = index;
    else return this.options.current;
  }

}
