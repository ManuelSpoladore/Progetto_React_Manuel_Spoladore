import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleArticle from "./pages/SingleArticle";
import SearchResults from "./pages/SearchResults";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import { NewsProvider } from "./Context";
import Footer from "./components/Footer";
import Credits from "./components/Credits";
import SliderBooks from "./components/SliderBooks";
import ScrollToTop from "./components/ScrollToTop";
import SingleSearchArticle from "./pages/SingleSearchArticle";

function App() {
  return (
    <>
     <NewsProvider>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:slug" element={<SingleArticle />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/singlesearcharticle/:slug" element={<SingleSearchArticle />} />
        <Route path="*" element={<ErrorPage />} />
        
      </Routes>
      <SliderBooks/>
      <Footer/>
      <Credits/>
      </NewsProvider>
      
    </>
  );
}

export default App;
