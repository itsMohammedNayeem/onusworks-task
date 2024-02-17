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
    updatePerson: (state, action) => {
      const { name, age, profession } = action.payload;
      const index = state.value.findIndex((person) => person.name === name);
      if (index !== -1) {
        state.value[index] = { name, age, profession };
      }
    },
  },
});

export const { addPerson, updatePerson } = personsSlice.actions;

export const selectPersons = (state: RootState): Person[] =>
  state.persons.value;

export const selectPersonByName = (
  state: RootState,
  name: string
): Person | undefined =>
  state.persons.value.find((person: Person) => person.name === name);

export default personsSlice.reducer;
