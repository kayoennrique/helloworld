import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/aboutme" element={<AboutMe />}/>
      <Route path="*" element={<div>Page Not Found</div>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;