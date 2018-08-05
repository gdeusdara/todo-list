import React from 'react';
import { Provider } from 'react-redux';
import Navigator from './app/Navigators/Navigator';
import store from './app/Reducers/store';

store.subscribe(() => {
  console.log(store.getState());
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;
