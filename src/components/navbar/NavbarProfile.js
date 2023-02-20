import React, { useEffect } from "react";
import navIcon from "../../assets/images/Tiku.svg";
import { Link, useNavigate } from "react-router-dom";
import searchIcon from "../../assets/images/search.svg";
import defaultUser from "../../assets/images/defaultUser.png";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../../redux/reducers/auth";
import { getProfilePicture } from "../../redux/actions/profile";

const NavbarProfile = () => {
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
    <>
      <nav className="navbar flex bg-base-100 sm:hidden px-7 pt-5 py-5 justify-center gap-5">
        <div className="dropdown">
          <label tabIndex={0} className="mt-3 text-4xl">
            ☰
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <button onClick={() => navigate("/")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/list-movie")}>List Movie</button>
            </li>
            <li>
              <button onClick={() => navigate("/profile")}>Profile</button>
            </li>
            <li>
              <button  type="button" onClick={() => logout()}>Logout</button>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <img className="w-32" src={navIcon} alt="icon logo" />
        </div>
      </nav>

      <nav className="hidden sm:flex py-5 px-10 md:px-14 lg:px-28 items-center">
        <div>
          <img className="w-32" src={navIcon} alt="icon logo" />
        </div>
        <div className="flex grow ml-4">
          <Link className="mx-10" to="/">
            Home
          </Link>
          <Link className="mx-10" to="/list-movie">
            List Movie
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
            <img src={profilePicture || defaultUser} alt="profile" className="w-14 h-14 rounded-full border-[1px] border-slate-400" />
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
    </>
  );
};

export default NavbarProfile;
