import { useEffect, useContext } from "react";
import { SearchContext } from "../ContextSearch";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

export default function SearchResults() {
  const { results, loading, error, SearchArticles } = useContext(SearchContext);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    if (query) {
      SearchArticles(query);
    }
  }, [query]);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;
  if (!results.length) return <p>No Results</p>;

  return (
    <div className="flex flex-col items-center px-4">
      <h1 className="text-2xl font-bold text-center mb-4 pt-4">
        Results for: "{query}"
      </h1>
      <ul className="w-full max-w-3xl">
        {results.map((article) => (
          <li key={article._id} className="w-full">
            <section className="pb-4 pt-3 border-b flex flex-col md:flex-row items-center md:items-start gap-4">
              {/*  titolo */}
              <div className="flex-1 text-left  ">
                <Link
                  to={`/singlesearcharticle/${article.headline.main.replace(/\s+/g, "-").toLowerCase()}`}
                  className="hover:text-[#595959]"
                >
                  <h2 className="font-bold text-lg ">{article.headline.main}</h2>
                  <p>{article.abstract}</p>
                </Link>
              </div>
              {/* immagine */}
              {article.multimedia && article.multimedia.length > 0 ? (
                <div className=" overflow-hidden flex-shrink-0">
                  <img
                    src={`https://www.nytimes.com/${article.multimedia[0].url}`}
                    alt="Article Image"
                    className="w-[165px] h-[110px] object-cover transition-transform duration-300 ease-in-out transform hover:scale-103"
                  />
                </div>
              ) : (
                <p className="text-sm text-gray-500">Loading Image...</p>
              )}
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
}
