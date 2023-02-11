import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from '../Home';
import Photag from '../Pages/Photag/photag';
import Ngo from '../Pages/FindNgo/Ngo';
import Tracker from '../Pages/Tracker';
import { Login } from '@mui/icons-material';
import Loginas from '../Pages/Login/Login';

function Routee() {
  return (
    <div>
        <Router>
        <Routes>
           <Route exact path="/home" element={<Home/>}/>
           <Route exact path="/" element={<Loginas/>}/>
           <Route exact path="/photag" element={<Photag/>}/>
           <Route exact path="/Findngo" element={<Ngo/>}/>
           <Route exact path="/track" element={<Tracker/>}/>
           </Routes>
           
       

        </Router>
        
    </div>

  )
}
export default Routee;
