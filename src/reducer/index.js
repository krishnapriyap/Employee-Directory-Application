import {SAVE_DATA} from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const dataReducerConfig = {
  key: 'data',
  storage: AsyncStorage,
};

const initialState = {
  data: [],
};
export const getEmployeeList = state => state.data.data;

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default persistReducer(dataReducerConfig, dataReducer);
