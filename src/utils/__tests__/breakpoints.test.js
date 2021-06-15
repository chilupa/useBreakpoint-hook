import breakpoints from '../breakpoints';

describe('breakpoints', () => {
  it('should return a breakpoint based on device width', () => {
    expect(breakpoints[960]).toBe('md');
  });
});
