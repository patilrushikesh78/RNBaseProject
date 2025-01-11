import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppNavigator from './navigation/AppNavigator';
import Toast from 'react-native-toast-message'; 
import toastConfig from './components/ToastConfig';
import AppLoader from './components/AppLoader'; 

const App = () => {
  return (
    <Provider store={store}>
      <>
        <AppNavigator />
        <AppLoader/>
        <Toast config={toastConfig} />
      </>
    </Provider>
  );
};

export default App;
