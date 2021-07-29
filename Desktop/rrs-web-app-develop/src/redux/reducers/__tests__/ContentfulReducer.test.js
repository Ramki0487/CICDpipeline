import { SET_PAGE_MODEL } from '@Redux/actionTypes/Contentful';
import contentfulReducer from '../Contentful';

describe('Contentful reducer', () => {
  it('should return  initial state', () => {
    const newState = contentfulReducer(undefined, {});

    expect(newState).toEqual({ pageModel: {} });
  });

  it('should handle SET_PAGE_MODEL', () => {
    const newState = contentfulReducer(
      {},
      { type: SET_PAGE_MODEL, payload: { component: 'product', limits: 72 } }
    );

    expect(newState.pageModel).toEqual({ component: 'product', limits: 72 });
  });
});
