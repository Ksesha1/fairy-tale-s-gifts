import { configureStore } from '@reduxjs/toolkit';
import presentsReducer from './reducers/presentsReducer';
import historyReducer from './reducers/historyReducer';

export default configureStore({
  reducer: {
    presents: presentsReducer,
    history: historyReducer,
  },
});
