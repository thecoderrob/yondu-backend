import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Users from "./pages/Users";
import User from "./pages/User";
import AddUser from "./pages/AddUser";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/create" element={<AddUser />} />
          <Route path="/users/:userId" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
