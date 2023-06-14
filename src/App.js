import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import LogementProfile from "./pages/LogementProfile";

const App = () => {
  const urlImageHome = "/images/home.jpg";
  const urlImageAbout = "/images/about.jpg";
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home url={urlImageHome} />} />
        <Route path="/home" element={<Home url={urlImageHome} />} />
        <Route path="/kasa" element={<Home url={urlImageHome} />} />
        <Route path="/about" element={<About url={urlImageAbout} />} />
        <Route path="/logement/:id" element={<LogementProfile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
