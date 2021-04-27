import {
  months,
  days,
  formatYear,
  formatPadded,
  formatDateName,
} from './formatHelpers';

export default class Fig {
  constructor(...args) {
    this._date = new Date(...args);
  }

  /**
   * Getters from Date Object
   *
   * @readonly
   * @memberof Fig
   */
  get year() {
    return this._date.getFullYear();
  }

  get month() {
    return months[this._date.getMonth()];
  }

  get day() {
    return this._date.getDate();
  }

  get dayOfWeek() {
    return days[this._date.getDay()];
  }

  get hour() {
    return this._date.getHours();
  }

  get minutes() {
    return this._date.getMinutes();
  }

  get seconds() {
    return this._date.getSeconds();
  }

  /**
   * Formats date by parsing Y M D values from the given pattern
   *
   * yy – two-digit year, e.g. 06
   * yyyy – four-digit year, e.g. 2006
   *
   * m – one-digit month for months below 10, e.g. 4
   * mm – two-digit month, e.g. 04
   * mmm – three-letter abbreviation for month, e.g. Apr
   * mmmm – month spelled out in full, e.g. April
   *
   * d – one-digit day of the month for days below 10, e.g. 2
   * dd – two-digit day of the month, e.g. 02
   * ddd – three-letter abbreviation for day of the week, e.g. Tue
   * dddd – day of the week spelled out in full, e.g. Tuesday
   *
   * @memberof Fig
   * @param {string} pattern
   * @return {string}
   */

  format(pattern) {
    // return default string
    if (!pattern) {
      return this._date.toDateString();
    }

    // Split by anything that is not a digit
    const sequence = pattern.split(/\b[^ymdwhisap]+\b/gi);

    // matches everything in sequence, returns array of separators
    const separators = pattern.split(/[ymdwhisap]+/gi);
    // console.log({sequence, separators})

    const formatted = [];

    sequence.map((s, i) => {
      // peek at first char to determine Y, M, D or H, I(min), S
      const dateSlice = s.toLowerCase().charAt(0);
      const len = s.length;
      let next;

      switch (dateSlice) {
        case 'y':
          next = formatYear(this.year, len);
          formatted.push(next, separators[i + 1]);
          break;
        case 'd':
          next = len <= 2 ? formatPadded(this.day) : formatDateName(this.dayOfWeek, len);
          formatted.push(next, separators[i + 1]);
          break;
        case 'm':
          // console.log(this.month)
          next = len <= 2
            ? formatPadded(this._date.getMonth() + 1)
            : formatDateName(this.month, len);
          formatted.push(next, separators[i + 1]);
          break;
        case 'h':
          next = formatPadded(this.hour, len);
          formatted.push(next, separators[i + 1]);
          break;
        case 'i':
          next = formatPadded(this.minutes, len);
          formatted.push(next, separators[i + 1]);
          break;
        case 's':
          next = formatPadded(this.seconds, len);
          formatted.push(next, separators[i + 1]);
          break;
        default:
          // console.log('unrecognized');
          break;
      }
      return next;
    });

    return formatted.join('');
  }

  /**
   * when checks given date with today's date and returns human readable
   * string of how many days have passed/will pass from this._date
   *
   * @memberof Fig
   * @param {Date} date
   * @return {string}
   */
  when(date) {
    // const nowUTC = Date.UTC(date1.getUTCFullYear(), date1.getUTCMonth(), date1.getUTCDate());

    // const diff = (date.valueOf() - nowUTC.valueOf()) / (24 * 60 * 60 * 1000);
    const diff = (date.valueOf() - this._date.valueOf()) / (24 * 60 * 60 * 1000);

    return diff > 0 ? `${diff.toFixed(0)} days from ${this.format('MM/DD/YYYY')}` : `${Math.abs(diff).toFixed(0)} days since ${this.format('MM/DD/YYYY')}`;
  }
}

// const fig = new Fig('1988-07-03T13:32:56.123Z');
// console.log(fig);
// console.log(fig.month);
// console.log(fig.hour);
// console.log(fig.format());
// console.log(fig.format('YYYY MMMM DD HH:II'));
// console.log(fig.format('DDDD MMMM DD, YYYY HH:II'));

// const another = new Date(1970, 3, 23);
// console.log(another);
// console.log(fig.when(another));
