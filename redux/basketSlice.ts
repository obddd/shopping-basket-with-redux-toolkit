import { createSlice } from "@reduxjs/toolkit"
import { INITIAL_STATE } from "./state"

const basketSlice = createSlice({
  name: "Basket",
  initialState: INITIAL_STATE,
  reducers: {
    add: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item
        }
        return {
          ...item,
          added: true
        }
      })
    },
    remove: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item
        }
        return {
          ...item,
          added: false
        }
      })
    }
  }
})

export const { add, remove } = basketSlice.actions
export default basketSlice.reducer
