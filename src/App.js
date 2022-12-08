import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import HomepageLogin from "./pages/HomepageLogin";
import ResetPassword from "./pages/ResetPassword";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UpdatePassword from "./pages/UpdatePassword";
import ListMovie from "./pages/ListMovie"
import MovieDetail from "./pages/MovieDetail";
import MovieOrder from "./pages/MovieOrder";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import History from "./pages/History";
import TicketResultActive from "./pages/TicketResultActive";
import TicketResultUsed from "./pages/TicketResultUsed";
import TicketResultExpired from "./pages/TicketResultExpired";
import ManageMovie from './pages/ManageMovie'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/update-password" element={<UpdatePassword/>}/>
        <Route path="/homepage" element={<HomepageLogin/>}/>
        <Route path="/list-movie" element={<ListMovie />}/>
        <Route path="/movie-detail" element={<MovieDetail />}/>
        <Route path="/movie-order" element={<MovieOrder />}/>
        <Route path="/movie-payment" element={<Payment />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/history" element={<History />}/>
        <Route path="/movie-ticket-active" element={<TicketResultActive />}/>
        <Route path="/movie-ticket-used" element={<TicketResultUsed />}/>
        <Route path="/movie-ticket-expired" element={<TicketResultExpired />}/>
        <Route path="/movie/manage" element={<ManageMovie />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
