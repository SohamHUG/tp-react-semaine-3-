import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  firstname: 'Alan',
  lastname: 'Turing',
  email: 'alan@turing.dev',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { firstname, lastname, email } = action.payload;
      state.firstname = firstname;
      state.lastname = lastname;
      state.email = email;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;