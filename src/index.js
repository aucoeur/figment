export default class Fig {
  constructor(...args) {
    this._date = new Date(...args);
  }

  static clip(value) {

  }

  get year() {
    return this._date.getFullYear()
  }

  get month() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return months[this._date.getMonth()]
  }

  get day() {
    return this._date.getDate()
  }

  get dayOfWeek() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', ]
    return days[this._date.getUTCDay()]
  }

  get hour() {
    return this._date.getUTCHours()
  }

  get minutes() {
    return this._date.getUTCMinutes()
  }

  get seconds() {
    return this._date.getUTCSeconds()
  }
}

// const fig = new Fig('1988-07-10T16:32:56.123Z')
// console.log(fig.month)
