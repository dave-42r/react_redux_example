import counterReducer, {
  increment,
  decrement,
  incrementByAmount,
  square,
  squareRoot,
} from './counterSlice';

describe('counter reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = counterReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = counterReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = counterReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });

  it('should handle square', () => {
    const actual = counterReducer(initialState, square());
    expect(initialState.value).toEqual(3);
    expect(actual.value).toEqual(9);
  });

  it('should handle squareRoot', () => {
    const actual = counterReducer(squaredState, squareRoot());
    expect(actual.value).toEqual(3);
  });
});
