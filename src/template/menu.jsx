import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Menu = props => (
   <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-between">
         <Link to="/" className="navbar-brand">
            <i className="fa fa-calendar-check-o"></i> TodoApp
         </Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>     
         <div id="navbarSupportedContent" className="navbar-collapse collapse">
            <ul className="navbar-nav">
               <li className="nav-item">
                  <NavLink to="/todos" className="nav-link" activeClassName="active" >Todos</NavLink>
               </li>
               <li className="nav-item">
                  <NavLink to="/about" className="nav-link" activeClassName="active" >About</NavLink>
               </li>
            </ul>
         </div>
      </div>
   </nav>
)

export default Menu