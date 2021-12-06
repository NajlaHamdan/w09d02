import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Logout from "./components/Logout";
import GetTodo from "./components/GetTodo";
import Login from "./components/GetTodo";
import SignUp from "./components/SignUp";
import Admin from "./components/Admin";
function App() {
  return (
    <div className="App">
      <Logout/>
       <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/getTodo" element={<GetTodo />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
