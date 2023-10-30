import React from "react";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
             <a className="nav-link" href="/about">
                {props.about}
              </a>
  </li>
          </ul>
          {/*for color palette the logic is disabled in app.js but u can see the button*/}
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}}style={{height:'20px',width:'20px',cursor:'pointer'}}> </div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}}style={{height:'20px',width:'20px',cursor:'pointer'}}> </div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}}style={{height:'20px',width:'20px',cursor:'pointer'}}> </div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}}style={{height:'20px',width:'20px',cursor:'pointer'}}> </div>
            <div className="bg-secondary rounded mx-2" onClick={()=>{props.toggleMode('secondary')}}style={{height:'20px',width:'20px',cursor:'pointer'}}> </div>
          <div className="bg-info rounded mx-2" onClick={()=>{props.toggleMode('secondary')}}style={{height:'20px',width:'20px',cursor:'pointer'}}> </div>
  </div>
          {/*<form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
  </form>*/}
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>{/*to check the color of the text when dark mode is enabled*/}
             <input className="form-check-input" onClick={()=>{props.toggleMode(props.mode)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} mode</label>
            </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = { title: PropTypes.string.isRequired, about: PropTypes.string };
/*Navbar.defaultProps = { title: 'Set your title here', 
about: 'About text here'};*//*when nothing is used default will come for <this></this>*/
Navbar.defaultProps = {
    about: 'About'
};
/*So here I have used one prop for title but haven,t declared anything for about so for about it will take defaultprop
and for the title it will take what is written in App.js*/
/*Now if we use isRequired and don't give any defaultprop  and also haven't declared it in App.js then error*/