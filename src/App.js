import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import Login from "./components/Login";
import Registration from "./components/registration";
import Logout from "./components/Logout";
import { Protector } from "./helpers";
import Interface from "./components/Interface";
import './App.css';
import { gapi } from 'gapi-script';
import { useEffect } from "react";

const clientId = "" //ใส่ client id จาก google

function App() {
  useEffect(() => {
    function initClient() {
      gapi.client.init({
        clientId: clientId,
        scope: 'email profile'
      }).then(() => {
        console.log('gapi client initialized');
      }, (error) => {
        console.error('Error loading gapi client', error);
      });
    }

    gapi.load('client:auth2', initClient);
  }, []);

  const onSuccess = (res) => {
    console.log('success', res)
  }

  const onFailure = (res) => {
    console.log('failed', res)
  }
    

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
