import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import HotelsPage from "./pages/hotelsPage/HotelsPage";
import HotelPage from "./pages/hotelPage/HotelPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/hotels" element = {<HotelsPage/>} />
        <Route path = "/hotels/:id" element = {<HotelPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
