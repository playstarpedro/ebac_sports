import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'basket',
  initialState: {
    basketItems: 0
  },
  reducers: {
    addItem(state, action) {
      return { ...state, basketItems: state.basketItems + 1 }
    },
    removeItem(state, action) {
      return { ...state, basketItems: state.basketItems - 1 }
    }
  }
})

export const { addItem, removeItem } = slice.actions

export default slice.reducer
