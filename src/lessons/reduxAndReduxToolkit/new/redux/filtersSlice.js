// import { createAction } from "@reduxjs/toolkit";

// const initialState = {
//   status: "all",
// };

// export const setStatusFilter = createAction("filters/setStatusFilter");

// export default const filtersReducer = (state = initialState.filters, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// src/redux/filtersSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "all",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    // setStatusFilter(state, action) {
    //   return {
    //     ...state,
    //     status: action.payload,
    //   };
    // },
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = slice.actions;

export default slice.reducer;
