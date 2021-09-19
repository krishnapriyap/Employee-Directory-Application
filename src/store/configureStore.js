import {createStore, combineReducers} from 'redux';
import dataReducer from '../reducer/index';
import persistStore from 'redux-persist/es/persistStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({data: dataReducer});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  const store = createStore(persistedReducer);
  return store;
};

const store = configureStore();
export const persistor = persistStore(store);
export default store;
