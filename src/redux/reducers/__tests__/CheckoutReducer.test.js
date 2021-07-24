import { UPDATE_CHECKOUT } from '@Redux/actionTypes/Checkout';
import CheckoutReducer from '../Checkout';

describe('Checkout reducer', () => {
  it('should return initial state', () => {
    const newState = CheckoutReducer(undefined, {});

    expect(newState).toEqual({});
  });

  it('should handle UPDATE_CHECKOUT', () => {
    const newState = CheckoutReducer(
      {},
      { type: UPDATE_CHECKOUT, payload: { orderId: '#189045' } }
    );

    expect(newState.orderId).toEqual('#189045');
  });
});
