import React from "react";
import logo from "../../Assets/Images/Logo.png";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-image" />
          <i
            className="far fa-user-circle"
            style={{ fontSize: "40px", color: "#9C9C9C", alignSelf: "center" }}
          ></i>
          <div className="user">
            <p className="name">Reinhart H.</p>
            <p className="place">Kemang, Jakarta</p>
          </div>
          <i className="fas fa-angle-down arrow" />
        </div>
        <div className="right-header-container">
          <div className="header-right">
            <input
              type="text"
              className="input-text"
              placeholder="Search Text"
              style={{ margin: "5px 10px", marginRight: "0px" }}
            />
            <i id="search-icon" className="fas fa-search" />
          </div>
          <div className="notif-setting">
            <i className="far fa-bell" />
            <i className="fas fa-cog setting" />
          </div>
        </div>
      </header>
      <div className="date" style={{marginTop: '88px'}}>8 April 2021</div>
    </>
  );
}

export default Header;
