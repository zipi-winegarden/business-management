import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./commponent/user";
import PageNFound from "./commponent/pageNFound";
import Admin from "./commponent/admin";
import Services from "./commponent/services";
import Meeting from "./commponent/meeting";
import './App.css'
import { useEffect } from "react";
import BusinessStore from "./store/businessStore";


function App() {
  
useEffect(()=>{
  BusinessStore.initBusinessData()
},[])
  return (
    <div className="App">
      

       <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} errorElement={<PageNFound pg={"User"} />} />
        <Route path="admin" element={<Admin errorElement={<PageNFound pg={"admin"} />}/>} >
          <Route path="services" element={<Services />} errorElement={<PageNFound pg={"services"} />} />
          <Route path="meeting" element={<Meeting />} errorElement={<PageNFound pg={"meeting"} />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
