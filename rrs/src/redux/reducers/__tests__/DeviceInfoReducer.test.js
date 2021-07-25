import {
  UPDATE_DEVICE_TYPE,
  UPDATE_DIMENSIONS,
  UPDATE_SCROLL,
} from '@Redux/actionTypes/DeviceInfo';
import deviceInfoReducer, { initialState } from '../DeviceInfo';

describe('DeviceInfo reducer', () => {
  it('should return initial state', () => {
    const newState = deviceInfoReducer(undefined, {});

    expect(newState).toEqual(initialState);
  });

  it('should handle UPDATE_DIMENSIONS', () => {
    const newState = deviceInfoReducer(undefined, {
      type: UPDATE_DIMENSIONS,
      payload: { width: 580, height: 500 },
    });

    expect(newState).toEqual({
      ...initialState,
      width: 580,
      height: 500,
    });
  });

  it('should handle UPDATE_SCROLL', () => {
    const newState = deviceInfoReducer(undefined, { type: UPDATE_SCROLL, payload: 1200 });

    expect(newState).toEqual({
      ...initialState,
      scrollTop: 1200,
    });
  });

  it('should handle UPDATE_DEVICE_TYPE', () => {
    const newState = deviceInfoReducer(undefined, {
      type: UPDATE_DEVICE_TYPE,
      payload: { isTablet: true, isDesktop: false },
    });

    expect(newState).toEqual({
      ...initialState,
      isTablet: true,
      isDesktop: false,
    });
  });
});
