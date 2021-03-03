import { configureStore } from '@reduxjs/toolkit'

import clockReducer from './lib/slices/clockSlice'
import counterReducer from './lib/slices/counterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    clock: clockReducer,
  },
  devTools: true,
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
