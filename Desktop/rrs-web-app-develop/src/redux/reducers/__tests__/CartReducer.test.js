import { UPDATE_CART_ITEMS } from '@Redux/actionTypes/Cart';
import CartReducer from '../Cart';

describe('Cart reducer', () => {
  it('should return initial state', () => {
    const newState = CartReducer(undefined, {});

    expect(newState).toEqual({});
  });

  it('should handle UPDATE_CART_ITEMS', () => {
    const newState = CartReducer({}, { type: UPDATE_CART_ITEMS, payload: { orderId: '#189045' } });

    expect(newState.orderId).toEqual('#189045');
  });
});
