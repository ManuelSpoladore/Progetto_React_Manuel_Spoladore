import { createContext, useState, useEffect } from "react";
import { newsCaller } from "./api/newsCall";

export const newsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);


useEffect(() => {
  const getArticles = async () => {
    const data = await newsCaller();
    setArticles(data);
  };
  getArticles();
}, []);

return (
    <newsContext.Provider value={{articles}}>
        {children}
    </newsContext.Provider>
)

};


