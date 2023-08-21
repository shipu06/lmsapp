import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, legacy_createStore as createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import dashboardReducer from './reducers/dashboardReducer';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};


const rootReducer = combineReducers({
	dashboard: persistReducer(persistConfig, dashboardReducer)
});

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
