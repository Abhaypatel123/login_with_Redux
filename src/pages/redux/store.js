import { createStore ,applyMiddleware} from 'redux';
import RootReducer from './RootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger'


const persistConfig = {
    key: 'auth',
    storage: storage,
    whitelist: ['auth'] // which reducer want to store
};

const pReducer = persistReducer(persistConfig,RootReducer);

const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer,middleware)
const persistor = persistStore(store);

export {persistor, store};


