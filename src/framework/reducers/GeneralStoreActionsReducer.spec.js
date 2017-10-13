import { updateStore } from '../actions/GeneralStoreActions';
import reducer from './GeneralStoreActionsReducer';

describe('updateStore', () => {
  const key = 'carer';
  const value = { name: 'John', age: 23 };

  it('should not modify store', () => {
    const state = {};

    expect(reducer(state, updateStore())).toEqual(state);
  });

  it('should update store', () => {
    const initialState = {};
    const expectedState = { carer: value };

    expect(reducer(initialState, updateStore(key, value))).toEqual(expectedState);
  });

  it('should update store with new value', () => {
    const initialState = { carer: { name: 'Paul' } };
    const expectedState = { carer: value };

    expect(reducer(initialState, updateStore(key, value))).toEqual(expectedState);
  });

  it('should update store with another value', () => {
    const initialState = { place: 'city' };
    const expectedState = { place: 'city', carer: value };

    expect(reducer(initialState, updateStore(key, value))).toEqual(expectedState);
  });
});
