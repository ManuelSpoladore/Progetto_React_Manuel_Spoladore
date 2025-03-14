import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const API_KEY = "DLjZ5aJ1pCn62VToWjAwZQEP35gj4IFV";
  const BASE_URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=${API_KEY}`;

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setBooks(response.data.results.books);
      } catch (error) {
        console.log("Error during books loading:", error);
      }
    };
    getBooks();
    
  }, []);

  return (
    <BooksContext.Provider value={{ books }}>{children}</BooksContext.Provider>
  );
};

export default BooksContext;