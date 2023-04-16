import React from "react";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Pnf from "./components/Pnf";
import Create from "./components/Create";
import Update from "./components/Update";

function App(props) {
  return (
    <BrowserRouter>
    <Menu/>
   <ToastContainer theme={'colored'} position={'top-right'}/>
   <Routes>
    <Route path={`/`} element = {<Home/>} />
    <Route path={`/create`} element = {<Create/>} />
    <Route path={`/update/:id`} element = {<Update/>} />
    <Route path={`/*`} element = {<Pnf/>} />
   </Routes>
    </BrowserRouter>
  )
}

export default App;
