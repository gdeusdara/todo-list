import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './app/Navigator/Navigator';
import { store, persistor } from './app/Reducers/store';
import { PersistGate } from 'redux-persist/integration/react'


store.subscribe(() => {
  console.log(store.getState());
  console.log('\n\n\n');
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
