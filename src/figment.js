import { months, days, formatYear, formatMonth, formatDay, formatDateName } from './formatHelpers.js'

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

  format(pattern) {
    // Split by anything that is not a digit
    const sequence = pattern.split(/\b[^ymdwhs]\b/gi)

    // matches everything in sequence, returns array of separators
    const separators = pattern.split(/[ymdwhs]+/gi)
    console.log({separators})

    let formatted = []

    sequence.map((s,i) => {
      let dateSlice = s.toLowerCase().charAt(0)
      // console.log(dateSlice, i, separators[i+1])
      let len = s.length

      let next

      switch (dateSlice) {
        case 'y':
          next = formatYear(this.year, len)
          formatted.push(next, separators[i+1])
          break;
        case 'd':
          next = len <= 2 ? formatDay(this.day) : formatDateName(this.dayOfWeek, len)
          formatted.push(next, separators[i+1])
          break;
        case 'm':
          next = len <= 2 ? formatMonth(this._date.getMonth()+1) : formatDateName(this.month, len)
          formatted.push(next, separators[i+1])
          break;
        default:
          console.log('boop')
          // next = this._date.toDateString()
          // formatted.push(next, separators[i])
          // formatted.push(next)
      }
    })

    return formatted.join('')
  }
}

const fig = new Fig('1988-07-10T16:32:56.123Z')
console.log(fig.month)
console.log(fig.format('YYYY-MM-DD'))
