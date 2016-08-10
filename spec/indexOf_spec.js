import { indexOf } from '../dist/indexOf'

describe( 'indexOf', () => {
  it( 'returns the index of the index value', () => {
    expect(indexOf([1, 2, 1, 4], 2, 1)).toEqual(1)
  })
  it( 'returns -1 if the value is not in the array', () => {
    expect(indexOf([1, 2, 1, 4], 8, 1)).toEqual(-1)
  })
  it( 'returns -1 if the value is not in the array', () => {
      expect(indexOf([1, 2, 1, 4], 8, 1)).toEqual(-1)
  })
})
