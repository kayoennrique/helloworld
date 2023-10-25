import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaulPage from "components/DefaultPage";
import Post from "pages/Post";

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu />

    <Routes>
      <Route path="/" element={<DefaulPage />}>
        <Route index element={<Home />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="posts/:id" element={<Post />} />
      </Route>      
      <Route path="*" element={<div>Página não encontrada</div>} />
    </Routes>

    <Footer />
  </BrowserRouter>
);
}

export default AppRoutes; 