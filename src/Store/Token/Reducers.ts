import { TokenState, TokenActionTypes, ADD_TOKEN } from './Types';

const initialState: TokenState = {
  tokens: [{ title: 'TRX' }, { title: 'BTC' }],
};

export function tokenReducer(
  state = initialState,
  action: TokenActionTypes
): TokenState {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        tokens: [...state.tokens, action.payload],
      };
    default:
      return state;
  }
}
