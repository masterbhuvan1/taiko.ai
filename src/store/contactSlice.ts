import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Person {
  id: number;
  name: string;
  lastname: string;
  status: string;
}

type AppState = {
  people: Person[];
};

const dummyPeople: Person[] = [
  {
    id: 1,
    name: "John",
    lastname: "Doe",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane",
    lastname: "Smith",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Michael",
    lastname: "Johnson",
    status: "Active",
  },
  {
    id: 4,
    name: "Emily",
    lastname: "Williams",
    status: "Inactive",
  },
  {
    id: 5,
    name: "David",
    lastname: "Brown",
    status: "Active",
  },
  {
    id: 6,
    name: "Sarah",
    lastname: "Miller",
    status: "Inactive",
  },
  {
    id: 7,
    name: "Daniel",
    lastname: "Jones",
    status: "Active",
  },
  {
    id: 8,
    name: "Olivia",
    lastname: "Davis",
    status: "Inactive",
  },
  {
    id: 9,
    name: "James",
    lastname: "Wilson",
    status: "Active",
  },
  {
    id: 10,
    name: "Sophia",
    lastname: "Moore",
    status: "Inactive",
  },
];

const initialState: AppState = {
  people: dummyPeople, // Initialize state with the dummy data
};

export const contactSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Person>) => {
      state.people.push(action.payload);
    },
    editPerson: (state, action: PayloadAction<Person>) => {
      const { id, name, lastname, status } = action.payload;
      const personIndex = state.people.findIndex((person) => person.id === id);
      if (personIndex !== -1) {
        state.people[personIndex] = { id, name, lastname, status };
      }
    },
    deletePerson: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.people = state.people.filter((person) => person.id !== id);
    },
  },
});

export const { addPerson, editPerson, deletePerson } = contactSlice.actions;
export default contactSlice.reducer;
