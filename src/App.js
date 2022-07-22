import logo from "./logo.svg";
import "./App.css";
import SingUpForm from "./Componets/SingForm/SingUpForm";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "./Pages/Home";
import SingInForm from "./Componets/SingForm/SingInForm";
import Header from "./Componets/Header/Header";
import Header1 from "./Componets/Header/Header1";

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} exact/>
          <Route path="/singup" element={<SingUpForm />} />
          <Route path="/singin" element={<SingInForm />} />
        </Routes>
      </Router> */}
  <Header1></Header1>
    </>
  );
}

export default App;
