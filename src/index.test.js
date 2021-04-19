import {jest} from '@jest/globals';
import Fig from './index';

const fig = new Fig('1988-07-10T16:32:56.123Z')

describe(`figs aren't dates but time isn't real`, () => {
  test('Sanity Check', () => {
    expect(fig._date instanceof Date).toBeTruthy()
  })
})

describe(`Getters`, () => {
  test('year', () => {
    expect(fig.year).toBe(1988)
  })
  test('month', () => {
    expect(fig.month).toBe('July')
  })
  test('day', () => {
    expect(fig.day).toBe(10)
  })
  test('dayOfWeek', () => {
    expect(fig.dayOfWeek).toBe('Sunday')
  })
  test('hour', () => {
    expect(fig.hour).toBe(16)
  })
  test('minutes', () => {
    expect(fig.minutes).toBe(32)
  })
  test('seconds', () => {
    expect(fig.seconds).toBe(56)
  })
})

// test('clip', () => {
//   // expect(fig.getYear().clip(2)).toEqual(88)
// })
