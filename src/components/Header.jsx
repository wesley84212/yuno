import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className="d-flex justify-content-between">
            <div className="header_logo">

            </div>
            <div className="header_btn">
                <NavLink className="mr-3" to="">註冊會員</NavLink>
                <NavLink to="">登入會員</NavLink>

            </div>
        </div>
    )
}
