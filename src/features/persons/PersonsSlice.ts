import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface Person {
  name: string;
  age: number;
  profession: string;
}

interface PersonsState {
  value: Person[];
}

const initialState: PersonsState = {
  value: [],
};

export const personsSlice = createSlice({
  name: "persons",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Person>) => {
      state.value.push(action.payload);
    },
    // Add other reducers as necessary
  },
});

export const { addPerson } = personsSlice.actions;

export const selectPersons = (state: RootState) => state.persons.value;

export default personsSlice.reducer;
