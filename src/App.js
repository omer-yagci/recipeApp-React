import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PrivateRouter from "./router/PrivateRouter";
import "./scss/App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<PrivateRouter />}>
            <Route path="" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
