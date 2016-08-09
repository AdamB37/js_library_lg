import { indexOf } from '../dist/indexOf'

describe( 'indexOf()', () => {
  it( 'returns the index of a searched for value', () => {
    expect(indexOf([1, 2, 1, 4], 2, 1)).toEqual(1)
  })
  it( 'if value is not in array returns -1', () => {
    expect(indexOf([1, 2, 1, 4], 8, 1)).toEqual(-1)
  })
})
