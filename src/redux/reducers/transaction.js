import { createSlice } from "@reduxjs/toolkit";

import { createTransaction } from "../actions/transactions";

const initialState = {
  movieId: "",
  cinemaId: "",
  bookingDate: "",
  bookingTime: "",
  seatNum: "",
  fullName: "",
  email: "",
  phoneNumber: "",
  paymentMethodId: "",
};

const transactionReducer = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    chooseMovie: (state, {payload}) => {
      state.movieId = payload.movieId
      state.cinemaId = payload.cinemaId
      state.bookingDate = payload.bookingDate
      state.bookingTime = payload.bookingTime
     
      // state = {
      //   ...state,
      //   ...{ movieId, cinemaId, bookingDate, bookingTime },
      // };
      
    },
    chooseSeat: (state, action) => {
      state.seatNum = action.payload.seatNum
      return state;
    },
    // choosePayment: (state, action) => {
    //     const {paymentMethodId, fullName, email, phoneNumber} = action.payload
    //     return state = {
    //         ...state,
    //         ...{paymentMethodId, fullName, email, phoneNumber}
    //     }
    // }
  },
  extraReducers: (build) => {
    build.addCase(createTransaction.pending, (state, action) => {
      state = {
        ...state,
        ...action.payload,
      };
    });
  },
});

export const {
  chooseMovie,
  chooseSeat,
  //  choosePayment
} = transactionReducer.actions;

export default transactionReducer.reducer;
