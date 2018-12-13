// import 'core-js/fn/string/starts-with';
// import format from 'date-fns/format'; // cherry picking
import { format } from 'date-fns'; // tree shaking

export interface IClockOptions {
  container?: Element | null;
  format?: string;
}

export class Clock {
  public container: Element | null;
  public format: string;

  constructor(options: IClockOptions = {}) {
    this.container = options.container || document.body;
    this.format = options.format || 'HH:mm:ss';
  }

  public start() {
    this.update();
    setInterval(() => {
      this.update();
    }, 1000);
  }

  private update() {
    if (!this.container) {
      return;
    }
    const now = new Date();
    this.container.innerHTML = format(now, this.format);
  }
}
