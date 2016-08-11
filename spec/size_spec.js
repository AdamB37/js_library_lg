import { size } from '../dist/size'

describe( 'size', () => {
  it( 'returns the length of the collection', () => {
    expect(size([2, 1, 4])).toEqual(3)
  })
})
