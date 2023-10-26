import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaulPage from "components/DefaultPage";
import Post from "pages/Post";
import NotFound from "pages/NotFound";
import ScrollToTop from "components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<DefaulPage />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes; 