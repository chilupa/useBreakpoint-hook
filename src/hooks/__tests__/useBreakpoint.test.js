import { renderHook } from '@testing-library/react-hooks';
import useBreakpoint from '../useBreakpoint';
import { act } from 'react-dom/test-utils';

describe('useBreakpoint hook', () => {
  it('should handle xs breakpoint', async () => {
    act(() => {
      global.innerWidth = 300;
      global.dispatchEvent(new Event('resize'));
    });
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe('xs');
  });

  it('should handle sm breakpoint', async () => {
    act(() => {
      global.innerWidth = 700;
      global.dispatchEvent(new Event('resize'));
    });
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe('sm');
  });

  it('should handle md breakpoint', async () => {
    act(() => {
      global.innerWidth = 1000;
      global.dispatchEvent(new Event('resize'));
    });
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe('md');
  });

  it('should handle lg breakpoint', async () => {
    act(() => {
      global.innerWidth = 1300;
      global.dispatchEvent(new Event('resize'));
    });
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe('lg');
  });

  it('should handle xl breakpoint', async () => {
    act(() => {
      global.innerWidth = 1920;
      global.dispatchEvent(new Event('resize'));
    });
    const { result } = renderHook(() => useBreakpoint());
    expect(result.current).toBe('xl');
  });
});
