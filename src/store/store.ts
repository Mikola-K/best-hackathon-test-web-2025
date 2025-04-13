import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import authReducer from './features/authSlice';

const loadStateFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const auth = localStorage.getItem('auth');
    return {
      auth: auth ? JSON.parse(auth) : {},
    };
  }
  return {};
};

const preloadedState = loadStateFromLocalStorage();

const rootReducer = combineReducers({
  auth: authReducer,
});

const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (typeof window !== 'undefined') {
    const state = store.getState();
    const savedState = loadStateFromLocalStorage();
    if (JSON.stringify(state) !== JSON.stringify(savedState)) {
      console.log('States differ, updating localStorage...');

      localStorage.setItem('auth', JSON.stringify(state.auth));
    }
  }

  return result;
};

const cookiesMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (typeof window !== 'undefined') {
    const state = store.getState();
    Cookies.set('auth', JSON.stringify(state.auth), { expires: 7 });
  }
  return result;
};
const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware, cookiesMiddleware),
});

const mergeStates = (
  initialState: Record<string, any>,
  cookieState: Record<string, any>,
  existingState: Record<string, any>
) => {
  const mergedCookieState = { ...cookieState };

  Object.entries(initialState).forEach(([key, value]) => {
    mergedCookieState[key] = value;
  });

  const finalMergedState = { ...existingState };

  Object.entries(mergedCookieState).forEach(([key, value]) => {
    if (value !== undefined && finalMergedState[key] === undefined) {
      finalMergedState[key] = value;
    }
    if (!Object.prototype.hasOwnProperty.call(finalMergedState, key)) {
      finalMergedState[key] = value;
    }
  });


  return finalMergedState;
};


export const createStore = (initialPreloadedState = {}) => {
  const existingState = loadStateFromLocalStorage() || {};
  const cookieState = loadStateFromCookies() || {};

  const preloadedState = mergeStates(initialPreloadedState, cookieState, existingState);

  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware, cookiesMiddleware),
  });
};

const loadStateFromCookies = () => {
  if (typeof window !== 'undefined') {
    const auth = Cookies.get('auth');

    return {
      auth: auth ? JSON.parse(auth) : {},
    };
  }
  return {};
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export const initializeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware, cookiesMiddleware),
  });
  return store;
};