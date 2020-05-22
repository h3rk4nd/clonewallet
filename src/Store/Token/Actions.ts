import { Token, ADD_TOKEN, TokenActionTypes } from './Types';

export function addToken(token: Token): TokenActionTypes {
  return {
    type: ADD_TOKEN,
    payload: token,
  };
}
