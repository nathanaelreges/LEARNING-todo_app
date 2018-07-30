import React from 'react'
import { Link } from 'react-router-dom'


export default props => (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
         <Link to="/" className="navbar-brand">
            <i className="fa fa-calendar-check-o"></i> TodoApp
         </Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>     
         <div id="navbarSupportedContent" className="navbar-collapse collapse">
            <ul className="navbar-nav">
               <li className="nav-item">
                  <Link to="/todos" className="nav-link" >Todos</Link>
               </li>
               <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
               </li>
            </ul>
         </div>
      </div>
   </nav>
)