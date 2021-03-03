import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../store'

interface ClockState {
  lastUpdate: number
  light: boolean
}

const initialState: ClockState = {
  lastUpdate: 0,
  light: true,
}

const clockSlice = createSlice({
  name: 'clock',
  initialState,
  reducers: {
    tick: (
      state,
      action: PayloadAction<{ lastUpdate: number; light: boolean }>
    ) => {
      state.lastUpdate = action.payload.lastUpdate
      state.light = !!action.payload.light
    },
  },
})

export const selectClock = (state: RootState): ClockState => state.clock

export const { tick } = clockSlice.actions

export default clockSlice.reducer
