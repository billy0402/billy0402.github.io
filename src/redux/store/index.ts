import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { isDebug } from '@/fixtures/constants';
import type { AppStore } from '@/redux/models/store';
import appReducer from '@/redux/reducers';

export const store = configureStore({ reducer: appReducer, devTools: isDebug });

export function makeStore() {
  return store;
}

const wrapper = createWrapper<AppStore>(makeStore, { debug: false });

export default wrapper;
