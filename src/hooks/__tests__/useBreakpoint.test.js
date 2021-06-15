import { renderHook } from '@testing-library/react-hooks';
import useBreakpoint from '../useBreakpoint';

describe('useBreakpoint hook', () => {
  it('should return breakpoint based on device width', () => {
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe('md');
    expect(typeof result.current).toBe('string');
  });
});
