import { months, days, formatYear, formatPadded, formatMonth, formatDay, formatDateName } from './formatHelpers.js'

export default class Fig {
  constructor(...args) {
    this._date = new Date(...args);
  }

  get year() {
    return this._date.getFullYear()
  }

  get month() {
    return months[this._date.getMonth()]
  }

  get day() {
    return this._date.getDate()
  }

  get dayOfWeek() {
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

  // [TODO]: Add 12/24 hour
  format(pattern) {
    // return default string
    if (!pattern) {
      return this._date.toDateString()
    }

    // Split by anything that is not a digit
    const sequence = pattern.split(/\b[^ymdwhisap]+\b/gi)

    // matches everything in sequence, returns array of separators
    const separators = pattern.split(/[ymdwhisap]+/gi)
    // console.log({sequence, separators})

    let formatted = []

    sequence.map((s,i) => {
      // peek at first char to determine Y, M, D or H, I(min), S
      let dateSlice = s.toLowerCase().charAt(0)
      let len = s.length
      let next

      switch (dateSlice) {
        case 'y':
          next = formatYear(this.year, len)
          formatted.push(next, separators[i+1])
          break;
        case 'd':
          next = len <= 2 ? formatPadded(this.day) : formatDateName(this.dayOfWeek, len)
          formatted.push(next, separators[i+1])
          break;
        case 'm':
          // console.log(this.month)
          next = len <= 2 ? formatPadded(this._date.getMonth()+1) : formatDateName(this.month, len)
          formatted.push(next, separators[i+1])
          break;
        case 'h':
          next = formatPadded(this.hour, len)
          formatted.push(next, separators[i+1])
          break;
        case 'i':
          next = formatPadded(this.minutes, len)
          formatted.push(next, separators[i+1])
          break;
        case 's':
          next = formatPadded(this.seconds, len)
          formatted.push(next, separators[i+1])
          break;
        default:
          console.log('unrecognized')
          break;
      }
    })
    return formatted.join('')
  }
}

const fig = new Fig('1988-07-03T13:32:56.123Z')
console.log(fig)
console.log(fig.month)
console.log(fig.hour)
console.log(fig.format())
console.log(fig.format('YYYY MMMM DD HH:II'))
console.log(fig.format('DDDD MMMM DD, YYYY HH:II'))
