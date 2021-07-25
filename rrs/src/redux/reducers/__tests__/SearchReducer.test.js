import { UPDATE_SEARCH_RESULTS } from '@Redux/actionTypes/Search';
import searchProducer from '../Search';

describe('Search reducer', () => {
  it('should return initial state', () => {
    const newState = searchProducer(undefined, {});

    expect(newState).toEqual({});
  });

  it('should handle UPDATE_SEARCH_RESULTS', () => {
    const newState = searchProducer(undefined, {
      type: UPDATE_SEARCH_RESULTS,
      payload: { productName: 'shoes' },
      isReset: true,
    });

    expect(newState.productName).toEqual('shoes');
  });

  it('should update the state when isReset was false', () => {
    const newState = searchProducer(
      { results: ['dress'], variantSize: 'M' },
      { type: UPDATE_SEARCH_RESULTS, payload: { results: ['shoes'] }, isReset: false }
    );

    expect(newState.results).toEqual(['dress', 'shoes']);
    expect(newState.variantSize).toEqual('M');
  });
});
