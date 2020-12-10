import { createSlice } from "@reduxjs/toolkit"
import { INITIAL_STATE } from "./state"

const basketSlice = createSlice({
  name: "Basket",
  initialState: INITIAL_STATE,
  reducers: {
    add: (state, action) => {}
  }
})

export const { add } = basketSlice.actions
export default basketSlice.reducer;