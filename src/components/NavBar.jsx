import React from "react";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (<>
    <div className="nav-bar mb-3">
      <NavLink className="p-2 m-1 nav-btn" to="/">首頁</NavLink>
      <NavLink className="p-2 m-1 nav-btn" to="/purchase">進貨填寫</NavLink>
      <NavLink className="p-2 m-1 nav-btn" to="/inventory">存貨列表</NavLink>
    </div>
    <div className="g-line"></div>
  </>);
}
