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
    return days[this._date.getDay()]
  }

  get hour() {
    return this._date.getHours()
  }

  get minutes() {
    return this._date.getMinutes()
  }

  get seconds() {
    return this._date.getSeconds()
  }

  format(pattern) {
    // Split by anything that is not a digit
    const sequence = pattern.split(/[^ymdwhs]/gi)

    // matches everything in sequence, returns array of separators
    // const separators

    let formatted = []

    sequence.map(s => {
      switch (true) {
        case s.toLowerCase().includes('y'):
          formatted.push(this.year.toString().slice(-s.length))
          break;
        case s.includes('m'):
          formatted.push(this.month.slice(0, 3))
          break;
        case s.includes('M'):
          formatted.push(this.month)
          break;
        case s.toLowerCase().includes('d'):
          formatted.push(this.day)
          break;
        default:
          return this._date.toDateString()
      }
    })

    // TODO: join with included separators
    return formatted
  }
}

const fig = new Fig('1988-07-10T16:32:56.123Z')
// console.log(fig.month)
console.log(fig.format('YYYY MM mm DD'))
