import { useParams } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../ContextSearch";
import Loading from "../components/Loading";
import ErrorPage from "./ErrorPage";

const SingleSearchArticle = () => {
  const { slug } = useParams();
  const { results, loading, error } = useContext(SearchContext);

  const article = results.find(
    (item) => item.headline.main.replace(/\s+/g, "-").toLowerCase() === slug
  );

  if (loading) return <Loading />;
  if (error) return <ErrorPage/>
  if (!article) return  <div className="flex flex-col items-center px-4">
  <h1 className="text-2xl font-bold text-center mb-4 pt-4">
    There has been an error during loading this article, try reloading the page
  </h1>
  </div>;

  return (
    <div className="flex flex-col px-4 md:px-6 lg:px-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4">
        {article.headline.main}
      </h1>
      <p className="text-gray-600 text-base md:text-xl lg:text-2xl mb-4">
        {article.abstract}
      </p>

      <div className="flex justify-center">
        {article.multimedia.length > 0 && article.multimedia[0] ? (
          <img
            src={`https://www.nytimes.com/${article.multimedia[0].url}`}
            alt="Article Image"
            className="pb-2 pr-3 pl-3 w-full md:w-3/4 lg:w-1/2 object-cover pt-4"
          />
        ) : (
          <p>Loading image...</p>
        )}
      </div>

      <div className="flex justify-center w-full pb-7">
        <div className="w-full max-w-2xl text-sm md:text-base lg:text-lg text-justify">
          <p className="mt-4 pr-3 pl-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
            expedita similique suscipit tempore at nisi eum quos quam. Delectus
            in harum debitis sed? Mollitia sed voluptates nulla obcaecati
            quaerat aspernatur explicabo, sapiente culpa nam non officiis.
            Consequatur soluta ex consequuntur quaerat minus necessitatibus
            nesciunt voluptatibus, ipsa eius magnam, omnis molestias animi
            mollitia. Explicabo impedit aperiam repellat est recusandae earum
            illo iure nam optio sed dolores doloribus dicta deleniti quo, eum
            eaque voluptatem consequuntur voluptates voluptate quam dolore quod!
            Nesciunt, molestiae error? Corporis ad soluta excepturi, architecto
            corrupti maxime quasi illo, libero doloremque unde, nemo non fugit
            neque quas ipsa obcaecati! Placeat natus consectetur totam,
            accusamus aperiam architecto eligendi aut pariatur ipsum omnis illo.
            Esse at eum aliquid, maxime eius harum quo fuga veritatis ad quasi
            provident odio accusamus deserunt sit cum enim error voluptatum
            ratione similique culpa iste. Ratione, dicta. Error saepe id
            praesentium alias similique ipsam cum aperiam dolor iusto atque
            officia nihil vitae ducimus quae dicta, quasi impedit, aut,
            voluptate aspernatur commodi nisi eaque! Illum assumenda eius
            voluptatem doloremque, aliquam recusandae ullam ea veritatis, alias
            molestias tempore unde distinctio amet placeat a dolorem earum porro
            sapiente. Sint provident temporibus eaque cumque mollitia! Minima
            quaerat dolores accusamus necessitatibus cum dolorum voluptatem
            error amet laudantium, reprehenderit magnam id. Inventore
            repellendus, praesentium maxime reprehenderit fuga expedita facilis
            odio vitae? Voluptates corrupti inventore eaque harum. Deserunt
            enim, illo non beatae cumque dolor nobis aliquam, vero laboriosam
            laudantium dolorem sint. Itaque ut corrupti dicta eos pariatur
            obcaecati inventore molestias, soluta dignissimos, error quas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleSearchArticle;