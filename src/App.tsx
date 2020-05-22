import 'react-native-gesture-handler';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { rootReducer } from './Store';

import AppNavigation from './Navigations/AppNavigation';

const store = createStore(rootReducer);

interface IProps {}

const App: React.FC<IProps> = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
