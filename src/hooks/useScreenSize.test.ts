import { renderHook } from 'test-utils/render'

import { useScreenSize } from './useScreenSize'

describe('useScreenSize', () => {
  it.skip('returns the right initial value based on breakpoints', () => {
    const { result } = renderHook(() => useScreenSize())
    expect(result).toMatchSnapshot()
  })
})
