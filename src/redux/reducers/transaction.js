import { createSlice } from "@reduxjs/toolkit";

import { createTransaction } from "../actions/transactions";

const initialState = {
  movieId: "",
  movieName: '',
  cinemaId: "",
  bookingDate: "",
  bookingTime: "",
  seatNum: "",
  fullName: "",
  email: "",
  phoneNumber: "",
  paymentMethodId: "",
  price: '',
  totalPrice: ''
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
      state.price = payload.price
      state.movieName = payload.movieName
    },
    chooseSeat: (state, action) => {
      state.seatNum = action.payload.seatNum
      state.totalPrice = action.payload.totalPrice
    },
  },
  extraReducers: (build) => {
    build.addCase(createTransaction.pending, (state, action) => {
      state = {
        ...state,
        ...action.payload,
      };
    });
    build.addCase(createTransaction.fulfilled, (state, action) => {
     return initialState
    });
  },
});

export const {
  chooseMovie,
  chooseSeat,
} = transactionReducer.actions;

export default transactionReducer.reducer;
