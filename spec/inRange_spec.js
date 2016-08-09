import { inRange } from '../dist/inRange'

describe( 'inRange', () => {
  it( 'checks if n is between start and up to, but not including, end.', () => {
    let num = 2
    let start = 1
    let end = 4
    expect(num >= 2 && num < 4).toEqual(num >= 2 && num < 4)
    expect(inRange(num, start, end)).toEqual(true)
  })
})
