import { combineReducers } from 'redux';
import { tokenReducer } from './Token/Reducers';

export const rootReducer = combineReducers({
  token: tokenReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
