import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Employee-Directory-Application/src/components/home';
const Stack = createNativeStackNavigator();
import store, {persistor} from './src/store/configureStore';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import DetailsScreen from './src/components/details';

function NavigationComponents() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Employee List" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationComponents />
      </PersistGate>
    </Provider>
  );
}

export default App;
