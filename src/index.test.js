import {jest} from '@jest/globals';
import Fig from './index';

const fig = new Fig()

test('Sanity Check', () => {
  expect(fig.check()).toEqual(`figs aren't dates but time isn't real`)
})
