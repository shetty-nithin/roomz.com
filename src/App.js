import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import HotelsPage from "./pages/hotelsPage/HotelsPage";
import HotelPage from "./pages/hotelPage/HotelPage";
import LoginPage from "./pages/loginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/hotels" element = {<HotelsPage/>} />
        <Route path = "/hotels/:id" element = {<HotelPage/>} />
        <Route path = "/login" element = {<LoginPage/>} />
        <Route path = "/signup" element = {<SignupPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
