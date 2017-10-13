import { ACTION_TYPES, updateStore } from './GeneralStoreActions';

describe('updateStore', () => {
  it('should create an action to update', () => {
    const key = 'carer';
    const value = { name: 'John', age: 23 };
    const expectedAction = { type: ACTION_TYPES.UPDATE_STORE, key, value };

    expect(updateStore(key, value)).toEqual(expectedAction);
  });
});
