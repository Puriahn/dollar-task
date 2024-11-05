import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SideBar from "../Base/SideBar";
import Humburgur from "../Base/Humburgur";
import { useEffect, useState } from "react";
import { userNameActions } from "../Store/userName";
import { useDispatch, useSelector } from "react-redux"; 
// import "./x.scss"

export default function Root() {
  const reduxTheme=useSelector(state=>state.user.theme)
  const [theme,setTheme]=useState(localStorage.getItem("theme")||"")
  let finalTheme=""
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
  if (localStorage.getItem("theme")){
      finalTheme=localStorage.getItem("theme")
  }else{
    finalTheme=reduxTheme
  }
  return (
    <div className={finalTheme}>
      <div
        dir="ltr"
        className="pt-3 bg-skin-fill "
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
      <div className="flex py-4 h-screen bg-skin-fill ">
        <SideBar />
        <div className="pt-5 pl-5 mx-auto text-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
