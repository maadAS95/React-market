import React from 'react'
import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './pages/Home';
import Clothes from './pages/Clothes';
import Jewels from './pages/Jewels';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './assests/logoMarket.jpg'
function Navbar (){
    return(
        <div>
           <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
           
              <Link  className="navbar-brand" ><img src={logo} width="40" height="50"/> R_MarkeT</Link>
             
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/clothes" className="nav-link" >Clothes</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/jewels" className="nav-link" >Jewels</Link>
                  </li>
                </ul>
              </div>
              {/* <button className="btn btn-success "> <FontAwesomeIcon icon="fa-solid fa-user" /> log Out</button> */}
             
          
        </div>
      </nav>
              <Route  path="/clothes" component={Clothes} exact />
               <Route  path="/jewels" component={Jewels} exact /> 
               <Route exact path="/" component={Home} />
       </Router>
      </div>
    );

}

export default Navbar