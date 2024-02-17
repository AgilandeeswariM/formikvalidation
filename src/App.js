import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Topbar from "./components/Topbar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddNewBook from "./components/AddNewBook";
import ViewBook from "./components/ViewBook";
import EditBook from "./components/EditBook";
import { ToastContainer } from "react-toastify";
import ViewAllBooks from "./components/ViewAllBooks";


function App() {

  return(
   <BrowserRouter>
    <div id="wrapper">
      
  
  <div id="content-wrapper" className="d-flex flex-column bg-biege min-vh-100">
   
    <div id="content">
        <Topbar />
        <div className="container-fluid p-sm-0 m-sm-0 px-md-5">
          <Routes>
            
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/addbook" element={<AddNewBook />}></Route>
            <Route path="/view-book/:id" element={<ViewBook />}></Route>
            <Route path="/edit-book/:id" element={<EditBook />}></Route>
            <Route path="/allbooks" element={<ViewAllBooks />}></Route>
            

          </Routes>
          <ToastContainer autoClose={1000} />
        </div>
        </div>
        </div>
        </div>
   </BrowserRouter>
  )
}

export default App;
