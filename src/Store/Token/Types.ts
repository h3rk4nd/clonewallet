export interface Token {
  title: string;
}

export interface TokenState {
  tokens: Token[];
}

export const ADD_TOKEN = 'ADD_TOKEN';

interface AddTokenAction {
  type: typeof ADD_TOKEN;
  payload: Token;
}

export type TokenActionTypes = AddTokenAction;
