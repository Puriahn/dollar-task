import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SideBar from "../Base/SideBar";
import Humburgur from "../Base/Humburgur";
import { useEffect } from "react";
import { userNameActions } from "../Store/userName";
import { useDispatch } from "react-redux"; 
// import "./x.scss"

export default function Root() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(userNameActions.set(localStorage.getItem("user")));
  useEffect(() => {
    if (
      localStorage.getItem("user") === undefined ||
      localStorage.getItem("user") === null
    ) {
      navigate("/Login");
    }
  }, []);

  return (
    <>
      <div
        dir="ltr"
        className="pt-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 "
      >
        <Humburgur />
      </div>
      {/* <nav class="nav">
        <input type="checkbox" class="nav__cb" id="menu-cb" />
        <div class="nav__content">
          <ul class="nav__items">
            <li class="nav__item">
              <span class="nav__item-text">Home</span>
            </li>
            <li class="nav__item">
              <span class="nav__item-text">Works</span>
            </li>
            <li class="nav__item">
              <span class="nav__item-text">About</span>
            </li>
            <li class="nav__item">
              <span class="nav__item-text">Contact</span>
            </li>
          </ul>
        </div>
        <label class="nav__btn" for="menu-cb"></label>
      </nav> */}
      <div className="flex py-4 h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 ">
        <SideBar />
        <div className="pt-5 pl-5 mx-auto text-center">
          <Outlet />
        </div>
      </div>
    </>
  );
}
