export const ACTION_TYPES = {
  UPDATE_STORE: 'UPDATE_STORE',
};

export const updateStore = (key, value) => {
  return {
    type: ACTION_TYPES.UPDATE_STORE,
    key,
    value,
  };
};
