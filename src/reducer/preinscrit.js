import { createSlice } from '@reduxjs/toolkit'

const preinscritSlice = createSlice({
  name: 'preinscrit',
  initialState:{user:null},
  reducers: {
    preinscription(state, action) {
      console.log(action.payload)
      state.user = action.payload
    },
  },
})

export const { preinscription} = preinscritSlice.actions
export default preinscritSlice.reducer