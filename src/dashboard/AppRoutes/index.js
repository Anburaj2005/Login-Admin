import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Dashboard from "../../Pages/Dashboard";
// import Inventroy from "../../Pages/Inventroy";
import Orders from '../../Pages/Orders';
import Customer from '../../Pages/Customers'
import Inventroy from "../../Pages/Inventroy"
function AppRoutes() {
  return (
    <div>
        

<Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/" element={<Inventroy/>}></Route>
            <Route path="/order" element={<Orders/>}></Route>
            <Route path="/customer" element={<Customer/>}></Route>
        </Routes>
    
 
    
    
      
    
    </div>
  )
}

export default AppRoutes