import React from 'react'
import { Link } from 'react-router-dom'


export default props => (
   <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
         <div className="navbar-reader">
            <Link to="/" className="navbar-brand">
               <i className="fa fa-calendar-check-o"> TodoApp</i>
            </Link>
         </div>
         <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
               <li className="nav-item">
                  <Link to="/todos" className="nav-link" >Todos</Link>
               </li>
               <li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
               </li>
            </ul>
         </div>
      </div>
   </div>
)