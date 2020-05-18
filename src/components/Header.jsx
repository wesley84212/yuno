import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className="d-flex justify-content-between">
            <div className="header_logo">

            </div>
            <div className="header_btn">
                <button className="btn btn-info mr-3"><NavLink className="
m-registered" to="/registered">註冊會員</NavLink></button>
                <NavLink to="">登入會員</NavLink>

            </div>
        </div>
    )
}
