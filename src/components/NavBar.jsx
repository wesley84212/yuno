import React from "react";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink className="m-3" to="/">聿野首頁</NavLink>
      <NavLink className="m-3" to="/about">關於聿野</NavLink>
      <NavLink className="m-3" to="/shop">聿野商店</NavLink>
      <NavLink className="m-3" to="/connect">聯絡聿野</NavLink>
      <NavLink className="m-3" to="/ex-link">外部連結</NavLink>
    </div>
  );
}
