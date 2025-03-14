import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { NewsProvider } from "./Context.jsx";
import { SearchProvider } from "./ContextSearch.jsx";
import { BooksProvider } from "./ContextBook.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider>
    <NewsProvider>
      <BooksProvider>
    <Router>
      <App />
    </Router>
    </BooksProvider>
    </NewsProvider>
    </SearchProvider>
  </StrictMode>
);
