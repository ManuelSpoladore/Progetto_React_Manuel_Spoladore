import { createContext, useState } from "react";
import axios from "axios";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const SearchArticles = async (searchTerm) => {
    setQuery();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=DLjZ5aJ1pCn62VToWjAwZQEP35gj4IFV`
      );
      setResults(response.data.response.docs);
    } catch (err) {
      setError("Error with the Search call");
    } finally {
      setLoading(false);
    }
  };
  return (
    <SearchContext.Provider
      value={{ query, results, loading, error, SearchArticles }}
    >
      {children}
    </SearchContext.Provider>
  );
};
