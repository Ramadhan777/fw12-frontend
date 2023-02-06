import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./Homepage";
import ResetPassword from "./ResetPassword";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UpdatePassword from "./UpdatePassword";
import ListMovie from "./ListMovie";
import MovieDetail from "./MovieDetail";
import MovieOrder from "./MovieOrder";
import Payment from "./Payment";
import Profile from "./Profile";
import History from "./History";
import TicketResultActive from "./TicketResultActive";
import TicketResultUsed from "./TicketResultUsed";
import TicketResultExpired from "./TicketResultExpired";
import ManageMovie from "./ManageMovie";
import Dashboard from "./Dashboard";
import ManageMovieSchedule from "./ManageMovieSchedule";

import PrivateRoute from "../components/PrivateRoute";
import PublicRoute from "../components/PublicRoute";
import { useSelector } from "react-redux";

const Main = () => {
  const role = useSelector((state) => state.auth.role);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/list-movie" element={<ListMovie />} />
        <Route
          path="/sign-in"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="/sign-up"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/reset-password"
          element={
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          }
        />
        <Route
          path="/update-password"
          element={
            <PublicRoute>
              <UpdatePassword />
            </PublicRoute>
          }
        />
        {role === "user" && (
          <>
            <Route path="/" element={<Homepage />} />
            <Route path="/list-movie" element={<ListMovie />} />
            <Route
              path="/movie-detail/:id"
              element={
                <PrivateRoute>
                  <MovieDetail />
                </PrivateRoute>
              }
            />
            <Route
              path="/movie-order"
              element={
                <PrivateRoute>
                  <MovieOrder />
                </PrivateRoute>
              }
            />
            <Route
              path="/movie-payment"
              element={
                <PrivateRoute>
                  <Payment />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/history"
              element={
                <PrivateRoute>
                  <History />
                </PrivateRoute>
              }
            />
            <Route
              path="/movie-ticket"
              element={
                <PrivateRoute>
                  <TicketResultActive />
                </PrivateRoute>
              }
            />
            <Route
              path="/movie-ticket-used"
              element={
                <PrivateRoute>
                  <TicketResultUsed />
                </PrivateRoute>
              }
            />
            <Route
              path="/movie-ticket-expired"
              element={
                <PrivateRoute>
                  <TicketResultExpired />
                </PrivateRoute>
              }
            />
          </>
        )}

        {role === "admin" && (
          <>
            <Route
              path="/movie/manage"
              element={
                <PrivateRoute>
                  <ManageMovie />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/movie/manageSchedule"
              element={
                <PrivateRoute>
                  <ManageMovieSchedule />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
