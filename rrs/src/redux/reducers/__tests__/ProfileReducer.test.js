import { PROFILE_ACTIONS } from '@Redux/actionTypes/Profile';
import profileReducer from '../Profile';

describe('Profile reducer', () => {
  it('should return initial state', () => {
    const newState = profileReducer(undefined, {});

    expect(newState).toEqual({ login: { success: false }, register: { success: false } });
  });

  it('should handle PROFILE_ACTIONS.LOGIN', () => {
    const newState = profileReducer(undefined, {
      type: PROFILE_ACTIONS.LOGIN,
      payload: { success: true },
    });

    expect(newState).toEqual({ login: { success: true }, register: { success: false } });
  });

  it('should handle PROFILE_ACTIONS.REGISTER', () => {
    const newState = profileReducer(undefined, {
      type: PROFILE_ACTIONS.REGISTER,
      payload: { success: true },
    });

    expect(newState).toEqual({ login: { success: false }, register: { success: true } });
  });
});
