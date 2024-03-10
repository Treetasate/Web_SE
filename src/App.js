import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import Login from "./components/Login";
import Registration from "./components/registration";
import Logout from "./components/Logout";
import { Protector } from "./helpers";
import Interface from "./components/Interface";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Container>
          <Routes>
            <Route path="/" element={<Protector Component={Interface} />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
      </Container>
    </BrowserRouter>
        
  );
}

export default App;
