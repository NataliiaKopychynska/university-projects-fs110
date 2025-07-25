import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, toggleCompleted } from "./operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // addTask: (state, action) => {
    //   return {
    //     ...state,
    //     items: [...state.items, action.payload],
    //   };
    // },
    // deleteTask: (state, action) => {
    //   return {
    //     ...state,
    //     items: state.items.filter((task) => task.id !== action.payload),
    //   };
    // },
    // toggleCompleted: (state, action) => {
    //   return {
    //     ...state,
    //     items: state.items.map((task) => {
    //       if (task.id !== action.payload) {
    //         return task;
    //       }
    //       return {
    //         ...task,
    //         completed: !task.completed,
    //       };
    //     }),
    //   };
    // },
    // addTask: (state, action) => {
    //   return state.items.push(action.payload);
    // },
    // deleteTask: (state, action) => {
    //   return state.items.filter((task) => task.id !== action.payload);
    // },
    // toggleCompleted: (state, action) => {
    //   for (const task of state.items) {
    //     if (task.id === action.payload) {
    //       task.completed = !task.completed;
    //       break;
    //     }
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, handlePending)
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, handleRejected)
      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejected)
      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (task) => task.id !== action.payload.id
        );
      })
      .addCase(deleteTask.rejected, handleRejected)
      .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      })
      .addCase(toggleCompleted.rejected, handleRejected);
  },
});

// export const { addTask, deleteTask, toggleCompleted } = slice.actions;
export default slice.reducer;

// const initialState = {
//   tasks: {
//     items: [
//       { id: 0, text: "Learn HTML and CSS", completed: true },
//       { id: 1, text: "Get good at JavaScript", completed: true },
//       { id: 2, text: "Master React", completed: false },
//       { id: 3, text: "Discover Redux", completed: false },
//       { id: 4, text: "Build amazing apps", completed: false },
//     ],
//   },
// };

// export const addTask = createAction("tasks/addTask");

// export const deleteTask = createAction("tasks/deleteTask");

// export const toggleCompleted = createAction("tasks/toggleCompleted");

// export default const tasksReducer = (state = initialState.tasks, action) => {
//   switch (action.type) {
//     case "tasks/addTask": {
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     }

//     case "tasks/deleteTask":
//       return {
//         ...state,
//         items: state.items.filter((task) => task.id !== action.payload),
//       };

//     case "tasks/toggleCompleted":
//       return {
//         ...state,
//         items: state.items.map((task) => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };

//     default:
//       return state;
//   }
// };
