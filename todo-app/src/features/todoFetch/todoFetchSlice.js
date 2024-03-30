import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  todos: null,
  isError: false,
};

// action
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  return res.json();
});
export const addTodos = createAsyncThunk("addTodos", async (title) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/", {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      title,
      id: nanoid(),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const reqForPrevData = await fetch(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  const prevData = await reqForPrevData.json();
  const newlyAdded = await res.json();
  prevData.unshift(newlyAdded);
  console.log(prevData);
  return prevData;
});
export const removeTodos = createAsyncThunk("removeTodos", async (id) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/", {
    method: "DELETE",
    body: JSON.stringify({
      id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const reqForPrevData = await fetch(
    "https://jsonplaceholder.typicode.com/todos/"
  );
  const prevData = await reqForPrevData.json();

  return prevData;
});

const todofetchSlice = createSlice({
  name: "todosfetch",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isError = true;
      console.log("got error :", action.payload);
    });
    builder.addCase(addTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
    builder.addCase(removeTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(removeTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });
  },
});

export default todofetchSlice.reducer;
