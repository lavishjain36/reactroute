import React  from "react";
import { Router,Routes,Route,Link} from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Product from "./Product";
import NotFound from "./NotFound";

const App=()=>{
  return(
    
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </nav>

       <Routes>
       <Route path="/" Component={Home}/>
       <Route path="/about" Component={About}/>
       <Route path="/contact" Component={Contact}/>
       <Route path="/product" Component={Product}/>
       <Route path="*" Component={NotFound}/>
       </Routes>  
      </div>
   
  )
}



export default App;
