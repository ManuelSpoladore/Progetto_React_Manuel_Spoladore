import { useContext, useEffect, useState } from "react";
import ContextBook from "../ContextBook";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestsellerBooks = () => {
  const { books } = useContext(ContextBook);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidesToScroll, setSlidesToScroll] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
        setSlidesToScroll(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
        setSlidesToScroll(2);
      } else {
        setSlidesToShow(3);
        setSlidesToScroll(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10"
        onClick={onClick}
      >
        ➡️
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10"
        onClick={onClick}
      >
        ⬅️
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full m-auto ">
      <h2 className="text-2xl text-center font-bold pt-2 mb-4 ">
        Bestseller Nonfiction
      </h2>
      <div className="px-4">
        <Slider className="pb-7" {...settings}>
          {books.map((book) => (
            <div key={book.rank} className="px-2 ">
              <a
                href={book.amazon_product_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className=" text-black rounded border cursor-pointer hover:shadow-lg transition-shadow ">
                  <div className= "bg-blue-200 flex justify-center items-center border">
                    <img
                      src={book.book_image}
                      alt={book.title}
                      className="h-75 "
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center p-4 h-35">
                    <h2>{book.rank}°</h2>
                    <h3 className="font-semibold">{book.title}</h3>
                    <p>{book.author}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestsellerBooks;
