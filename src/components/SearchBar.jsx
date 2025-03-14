import {useState, useContext} from "react"
import { SearchContext } from "../ContextSearch";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const {SearchArticles} = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input)
    if(input) {
      SearchArticles(input);
      navigate(`/search?q=${input}`)
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="search-input" placeholder="Search..." onChange={(e) => setInput(e.target.value)}/>
      <button type="submit" className="search-button">GO</button>
    </form>
  );
}
