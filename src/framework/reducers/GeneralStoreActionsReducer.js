import { ACTION_TYPES } from '../actions/GeneralStoreActions';

const initialState = {};

const update = (state, action) => {
  const newState = { ...state };
  newState[action.key] = action.value;

  return newState;
};

const GeneralActionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_STORE:
      return update(state, action);
    default:
      return state;
  }
};

export default GeneralActionsReducer;
