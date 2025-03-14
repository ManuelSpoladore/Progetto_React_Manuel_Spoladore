import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer() {
  const menuItems = [
    { name: "Home Page", path: "/" },
    { name: "U.S.", path: "https://www.nytimes.com/international/section/us" },
    { name: "World", path: "https://www.nytimes.com/international/section/world" },
    { name: "Politics", path: "https://www.nytimes.com/international/section/politics" },
    { name: "New York", path: "https://www.nytimes.com/international/section/nyregion" },
    { name: "Education", path: "https://www.nytimes.com/international/section/education" },
    { name: "Sports", path: "https://www.nytimes.com/international/section/sports" },
    { name: "Business", path: "https://www.nytimes.com/international/section/business" },
    { name: "Tech", path: "https://www.nytimes.com/international/section/technology" },
    { name: "Science", path: "https://www.nytimes.com/international/section/science" },
    { name: "Weather", path: "https://www.nytimes.com/news-event/weather-climate" },
    { name: "The Great Read", path: "https://www.nytimes.com/spotlight/the-great-read" },
    { name: "Obituaries", path: "https://www.nytimes.com/international/section/obituaries" },
    { name: "Headway", path: "https://www.nytimes.com/international/section/headway" },
    { name: "Visual Investigations", path: "https://www.nytimes.com/spotlight/visual-investigations" },
    { name: "The Magazine", path: "https://www.nytimes.com/international/section/magazine" },
  ];

  const menuItemsArts = [
    { name: "Book Review", path: "https://www.nytimes.com/international/section/books/review" },
    { name: "Best Sellers Book List", path: "https://www.nytimes.com/books/best-sellers/" },
    { name: "Dance", path: "https://www.nytimes.com/international/section/arts/dance" },
    { name: "Movies", path: "https://www.nytimes.com/international/section/movies" },
    { name: "Music", path: "https://www.nytimes.com/international/section/arts/music" },
    { name: "Pop Culture", path: "https://www.nytimes.com/spotlight/pop-culture" },
    { name: "Television", path: "https://www.nytimes.com/international/section/arts/television" },
    { name: "Theater", path: "https://www.nytimes.com/international/section/theater" },
    { name: "Visual Arts", path: "https://www.nytimes.com/international/section/arts/design" },
  ];

  const menuItemsHealth = [
    { name: "Health", path: "https://www.nytimes.com/international/section/health" },
    { name: "Well", path: "https://www.nytimes.com/international/section/well" },
    { name: "Food", path: "https://www.nytimes.com/international/section/food" },
    { name: "Restaurant Reviews", path: "https://www.nytimes.com/reviews/dining" },
    { name: "Love", path: "https://www.nytimes.com/international/section/fashion/weddings" },
    { name: "Travel", path: "https://www.nytimes.com/international/section/travel" },
    { name: "Style", path: "https://www.nytimes.com/international/section/style" },
    { name: "Fashion", path: "https://www.nytimes.com/international/section/fashion" },
    { name: "Real Estate", path: "https://www.nytimes.com/international/section/realestate" },
    { name: "T Magazine", path: "https://www.nytimes.com/international/section/t-magazine" },
  ];

  const menuItemsOpinion = [
    { name: "Today's Opinion", path: "https://www.nytimes.com/international/section/opinion" },
    { name: "Columnists", path: "https://www.nytimes.com/international/section/opinion/columnists" },
    { name: "Editorials", path: "https://www.nytimes.com/international/section/opinion/editorialss" },
    { name: "Guest Essays", path: "https://www.nytimes.com/international/section/opinion/contributors" },
    { name: "Op-Docs", path: "https://www.nytimes.com/international/section/opinion/contributors" },
    { name: "Letters", path: "https://www.nytimes.com/international/section/opinion/letters" },
    { name: "Sunday Opinion", path: "https://www.nytimes.com/international/section/opinion/sunday" },
    { name: "Opinion Video", path: "https://www.nytimes.com/spotlight/opinion-video" },
    { name: "Opinion Audio", path: "https://www.nytimes.com/series/opinion-audio" },
  ];

  const menuItemsAdditional = [
    { name: "Audio", path: "https://www.nytimes.com/spotlight/podcasts" },
    { name: "Games", path: "https://www.nytimes.com/crosswords" },
    { name: "Cooking", path: "https://cooking.nytimes.com/" },
    { name: "Wirecutter", path: "https://www.nytimes.com/wirecutter/" },
    { name: "The Athletic", path: "https://www.nytimes.com/athletic/" },
    { name: "Jobs", path: "https://www.nytimes.com/international/section/jobs" },
    { name: "Video", path: "https://www.nytimes.com/video" },
    { name: "Graphics", path: "https://www.nytimes.com/spotlight/graphics" },
    { name: "Trending", path: "https://www.nytimes.com/trending/" },
    { name: "Live Events", path: "https://www.nytimes.com/spotlight/nyt-events" },
    { name: "Corrections", path: "https://www.nytimes.com/international/section/corrections" },
    { name: "Reader Center", path: "https://www.nytimes.com/international/section/reader-center" },
    { name: "TimesMachine", path: "https://timesmachine.nytimes.com/browser" },
    { name: "The Learning Network", path: "https://www.nytimes.com/international/section/learning" },
    { name: "School of The NYT", path: "https://nytedu.com/" },
    { name: "inEducation", path: "https://www.nytimes.com/spotlight/nytimesineducation" },
  ];

  const sections = [
    { title: "NEWS", items: menuItems },
    { title: "ARTS", items: menuItemsArts },
    { title: "LIFESTYLE", items: menuItemsHealth },
    { title: "OPINION", items: menuItemsOpinion },
    { title: "MORE", items: menuItemsAdditional },
  ];

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="mx-auto px-4 py-8">
      <Link to="/">
        <img
          className="w-full sm:w-[300px] sm:h-[66px] h-auto object-contain"
          src="/images/The-New-York-Times-Logo.svg"
          alt="New York Times Logo"
        />
      </Link>

      <div className="sm:flex sm:flex-wrap sm:justify-between">
        {sections.map(({ title, items }) => (
          <div key={title} className="w-full sm:w-1/6 mb-4">
            <h2
              className="font-bold text-lg mb-2 cursor-pointer sm:cursor-default sm:mb-3 border-b"
              onClick={() => toggleSection(title)}
            >
              {title}
            </h2>
            <ul
              className={`transition-all duration-300 ${
                openSections[title] ? "block" : "hidden"
              } sm:block`}
            >
              {items.map(({ name, path }) => (
                <li key={name} className="text-sm mb-2">
                  <Link
                    to={path}
                    className="hover:underline transition-all duration-200"
                    target="_blank"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}