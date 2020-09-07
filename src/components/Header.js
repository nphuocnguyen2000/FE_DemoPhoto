import React from 'react'
import {
    Route,
    Link
  } from "react-router-dom"

const MenuLink = ({label, to, activeOnlyWhenExact})=>{
return(
    <Route 
    path={to} exact={activeOnlyWhenExact} children={ ({match})=>{
        var active = match ? 'active' : ''
        return (
        <li className={active}>
            <Link className='link' to={to} >{label}</Link>
        </li>
        )
    }}
    />
)
}
export default function Header() {
    return (
        <div className= "header">
            <div className="header__logo">
                <Link to="/"><img src="./image/logo_demo.png" alt="logoo"/></Link>
            </div>
            <div className="header__right">
                <div className="header__right-cart"><MenuLink to="/cart" label={<i className="far fa-shopping-cart"></i>}></MenuLink></div>
                <div className="header__right-message"><MenuLink to="/message" label={<i className="far fa-envelope"></i>}></MenuLink></div>
                <div className="header__right-account"><i className="far fa-user"></i><MenuLink to="/register" label="Đăng ký"></MenuLink> <span> / </span><MenuLink to="/login" label="Đăng nhập"> </MenuLink></div>
            </div>
        </div>
    )
}
