import { UPDATE_PRODUCT_DETAIL, UPDATE_PRODUCT_VARIANTS } from '@Redux/actionTypes/Product';
import productReducer from '../Product';

describe('Product reducer', () => {
  it('should return  initial state', () => {
    const newState = productReducer(undefined, {});

    expect(newState).toEqual({});
  });

  it('should handle UPDATE_PRODUCT_DETAIL', () => {
    const newState = productReducer(
      {},
      { type: UPDATE_PRODUCT_DETAIL, payload: { productName: 'shoes' } }
    );

    expect(newState.productName).toEqual('shoes');
  });

  it('should handle UPDATE_PRODUCT_VARIANTS', () => {
    const newState = productReducer(
      { productName: 'shoes' },
      { type: UPDATE_PRODUCT_VARIANTS, payload: { variantSize: 'M' } }
    );

    expect(newState.variantSize).toEqual('M');
    expect(newState.productName).toEqual('shoes');
  });
});
