export default class Fig {
  constructor(...args) {
    this._date = new Date(...args);
  }

  check() {
    return(`figs aren't dates but time isn't real`)
  }
}
