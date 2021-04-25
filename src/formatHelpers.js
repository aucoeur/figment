// yy – two-digit year, e.g. 06
// yyyy – four-digit year, e.g. 2006

// m – one-digit month for months below 10, e.g. 4
// mm – two-digit month, e.g. 04
// mmm – three-letter abbreviation for month, e.g. Apr
// mmmm – month spelled out in full, e.g. April

// d – one-digit day of the month for days below 10, e.g. 2
// dd – two-digit day of the month, e.g. 02
// ddd – three-letter abbreviation for day of the week, e.g. Tue
// dddd – day of the week spelled out in full, e.g. Tuesday

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const month_shor = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const dys = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

//  YYYY-MM-D
// ['YYYY', 'MM', 'D']

export function formatYear(y, type) {
  let year = y.toString()
  switch (type) {
    case 2:
      return year.slice(-2)
    case 4:
      return year
    default:
      console.log('Unrecognized format, defaulting to full year value')
      return year
  }
}

export function formatDay(d) {
  let day =  d.toString()
  return day.length === 1 ? day = `0${day}` : day
}

export function formatMonth(m) {
  let month =  m.toString()
  return month.length === 1 ? month = `0${month}` : month
}

export function formatPadded(v, len) {
  let val = v.toString()

  return len === 2 && v < 10 ? `0${val}` : `${val}`
}

export function formatDateName(name, len) {
  switch (len) {
    case 2:
    case 3:
      return name.toString().substr(0, len)
    default:
      return name
  }
}
