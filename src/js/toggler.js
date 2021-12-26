export class Toggler {
  constructor(config) {
    this._config = config;
    this.init();
  }

  init() {
    const trigger = document.querySelector(this._config.trigger.selector);
    const content = document.querySelector(this._config.content.selector);
    if (!trigger || !content) {
      throw new Error('Trigger or content is null, please provide valid selector');
    }
    trigger.addEventListener('click', () => {
      trigger.classList.toggle(this._config.trigger.activeClass);
      content.classList.toggle(this._config.content.activeClass);
    });
  }
}
