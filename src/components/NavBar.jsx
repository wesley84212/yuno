import React from "react";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink to="">聿野首頁</NavLink>
      <NavLink to="">關於聿野</NavLink>
      <NavLink to="">聿野商店</NavLink>
      <NavLink to="">聯絡聿野</NavLink>
      <NavLink to="">外部連結</NavLink>
    </div>
  );
}
