import React, {useEffect} from "react";
import navIcon from "../../assets/images/Tiku.svg";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/images/search.svg";
import defaultUser from "../../assets/images/defaultUser.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction} from "../../redux/reducers/auth";
import { getProfilePicture } from "../../redux/actions/profile";

const NavbarAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const profilePicture = useSelector((state) => state.profile.picture);

  const logout = () => {
    dispatch(logoutAction());
    navigate("/sign-in");
  };

  useEffect(() => {
    dispatch(getProfilePicture(token));
  }, [token, dispatch]);

  return (
    <nav className="nav-bar flex py-5 px-28 items-center">
      <div>
        <img className="w-32" src={navIcon} alt="icon logo" />
      </div>
      <div className="flex grow ml-4">
        <Link className="mx-10" to="/dashboard">
          Dashboard
        </Link>
        <Link className="mx-10" to="/movie/manage">
          Manage Movie
        </Link>
        <Link className="mx-10" to="/movie/manageSchedule">
          Manage Schedule
        </Link>
      </div>
      <div className="flex items-center justify-center gap-10">
          <div className="group flex hover:border-2 hover:border-[#dedede] hover:bg-[#fcfdfe] rounded-2xl">
            <img className="pl-3 mr-3" src={searchIcon} alt="search" />
            <div>
              <input className="hidden group-hover:flex py-3 pr-2 text-xs rounded-2xl bg-[#fcfdfe] focus:outline-none" type="search" name="search" id="search" placeholder="Search Movie Name ..." />
            </div>
          </div>
          <div className="group relative">
            <img src={profilePicture || defaultUser} alt="profile" className="w-14 h-14 rounded-full " />
            <div className="hidden group-hover:block absolute right-0 border-2 border-[#dedede] bg-[#FCFDFE] py-2 pl-4 pr-8">
              <div>
                <button onClick={() => navigate("/profile")}>Profile</button>
              </div>
              <div>
                <button type="button" onClick={() => logout()}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default NavbarAdmin;
