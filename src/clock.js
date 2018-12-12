export class Clock {
  /**
   * La classe Horloge (usejsdoc.org)
   * @param {object} options Les options de l'horloge
   * @param {Element} options.container L'élément dans lequel sera inséré l'horloge
   * @param {string} options.format Le format de l'horloge
   */
  constructor(options = {}) {
    this.container = options.container || document.body;
    this.format = options.format || 'HH:mm:ss';
  }
  update() {
    const now = new Date();
    this.container.innerHTML = now.toLocaleTimeString();
  }
  start() {
    this.update();
    setInterval(() => {
      this.update();
    }, 1000);
  }
}
