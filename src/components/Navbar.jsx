import { useState } from "react";
import { format } from "date-fns";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Login from "./Login";

const dataOggi = format(new Date(), "EEEE, MMMM dd, yyyy");

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleLoginToggle = () => setIsLoginOpen(!isLoginOpen);

  return (
    <nav>
      <div className="responsive-div">
        <div className=" flex justify-between items-center p-4 ">
          <button onClick={handleToggle} className=" hamburger-btn z-60">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link to="/">
            <div className="logo-container z-60">
              <img
                className="logo-img"
                src="/images/The-New-York-Times-Logo.svg"
                alt="New York Times Logo"
              />
            </div>
          </Link>

          <div className="account-icon z-60" onClick={handleLoginToggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
        <div className="sticky top-0 bg-white z-60">
          <div className="responsive-div">
            <div className="flex justify-between items-center p-4">
              <button onClick={handleToggle} className="hamburger-btn">
                <X size={24} />
              </button>

              <Link to="/">
                <div className="logo-container">
                  <img
                    className="logo-img"
                    src="/images/The-New-York-Times-Logo.svg"
                    alt="New York Times Logo"
                  />
                </div>
              </Link>

              <div className="account-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 616 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-navbar-content px-4 pb-4">
          <div className="search-subscribe-container mb-4">
            <div className="search-icon">
              
              
            </div>
          </div>

            <ul className="mobile-menu p-4">
              <Link to="/" onClick={() => setIsOpen(false)}>
              <li className=" flex justify-between items-center text-xl pb-3 border-b-1 border-[#c0c0c0]">
                Home
                <img
                  className="ny-icon size-6"
                  src="/public/images/newyorktimes-svgrepo-com.svg"
                />
              </li>
              </Link>
              <Link to="https://www.nytimes.com/section/us" target="_blank" onClick={() => setIsOpen(false)}>
              <li className=" flex justify-between items-center text-xl pt-3 pb-3 border-b-1 border-[#c0c0c0]">
                U.S
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 13.75-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              </Link>
              <Link to="https://www.nytimes.com/section/world" target="_blank" onClick={() => setIsOpen(false)}>
              <li className=" flex justify-between items-center text-xl pt-3 pb-3 border-b-1 border-[#c0c0c0]">
                World
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 13.75-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              </Link>
              <Link to="https://www.nytimes.com/section/business" target="_blank" onClick={() => setIsOpen(false)}>
              <li className=" flex justify-between items-center text-xl pt-3 pb-3 border-b-1 border-[#c0c0c0]">
                Business
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 13.75-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              </Link>
              <Link to="https://www.nytimes.com/section/arts" target="_blank" onClick={() => setIsOpen(false)}>
              <li className=" flex justify-between items-center text-xl pt-3 pb-3 border-b-1 border-[#c0c0c0]">
                Arts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 13.75-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              </Link>
              <Link to="https://www.nytimes.com/spotlight/lifestyle" target="_blank" onClick={() => setIsOpen(false)}>
              <li className=" flex justify-between items-center text-xl pt-3 pb-3 border-b-1 border-[#c0c0c0]">
                Lifestyle
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 13.75-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              </Link>
              <Link to="https://www.nytimes.com/section/opinion" target="_blank" onClick={() => setIsOpen(false)}>
              <li className=" flex justify-between items-center text-xl pt-3 pb-3 border-b-1 border-[#c0c0c0]">
                Opinion
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 13.75-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              </Link>
              <hr className="border-t-4 border-black my-8"></hr>
              <Link to="https://www.nytimes.com/spotlight/podcasts" target="_blank" onClick={() => setIsOpen(false)}>
              <li className=" flex justify-between items-center text-xl pt-3 pb-3 border-b-1 border-[#c0c0c0]">
                Audio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 13.75-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              </Link>
              <Link to="https://www.nytimes.com/crosswords" target="_blank" onClick={() => setIsOpen(false)}>
              <li className=" flex justify-between items-center text-xl pt-3 pb-3 border-b-1 border-[#c0c0c0]">
                Games
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 13.75-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              </Link>
              <Link to="https://cooking.nytimes.com/" target="_blank" onClick={() => setIsOpen(false)}>
              <li className=" flex justify-between items-center text-xl pt-3 pb-3 border-b-1 border-[#c0c0c0]">
                Cooking
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 13.75-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              </Link>
              <Link to="https://www.nytimes.com/wirecutter/" target="_blank" onClick={() => setIsOpen(false)}>
              <li className=" flex justify-between items-center text-xl pt-3 pb-3 border-b-1 border-[#c0c0c0]">
                Wirecutter
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 13.75-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              </Link>
              <Link to="https://www.nytimes.com/athletic/" target="_blank" onClick={() => setIsOpen(false)}>
              <li className=" flex justify-between items-center text-xl pt-3 pb-3 border-b-1 border-[#c0c0c0]">
                The Athletic
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 13.75-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
      <div className="responsive-ds">
        <div className="date-sub">
          <p className="text-xs">{dataOggi}</p>
          <a href="https://www.nytimes.com/subscription?campaignId=9YU8R&source=bar1&redirect_uri=https%3A%2F%2Fwww.nytimes.com%2F" target="_blank">
          <button className="bg-transparent text-black text-xs py-2 border border-black rounded whitespace-nowrap pl-1 pr-1">
            SUBSCRIBE FOR $0.50/WEEK
          </button>
          </a>
        </div>
        <div className="search-icon flex justify-center pt-5 lg:pt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <SearchBar />
          </div>
      </div>

      {/* Navbar desktop */}
      <div className="navbar-content">
        <div className="search-subscribe-container">
          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <SearchBar />
          </div>

          <div className="country">
            <ul>
              <li>
                <a href="#" className="font-bold" >U.S</a>
              </li>
              <li>
                <a href="https://www.nytimes.com/international/" target="_blank">INTERNATIONAL</a>
              </li>
              <li>
                <a href="https://www.nytimes.com/ca/" target="_blank">CANADA</a>
              </li>
              <li>
                <a href="https://www.nytimes.com/es/"  target="_blank">ESPAÑOL</a>
              </li>
              <li>
                <a href="https://cn.nytimes.com/" target="_blank">中文</a>
              </li>
            </ul>
          </div>

          <div className="sub-btn-sec">
            <a href="https://www.nytimes.com/subscription?campaignId=9YU8R&source=bar1&redirect_uri=https%3A%2F%2Fwww.nytimes.com%2F" target="_blank">
            <button className="subscribe-btn font-bold">
              SUBSCRIBE FOR $0.50/WEEK
            </button>
            </a>
          </div>

          <div className="account-sec" onClick={handleLoginToggle}>
            <h6 className="cursor-pointer">Account</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 15.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>

        <div className="title-container">
          <div className="date">
            <h2>{dataOggi}</h2>
            <h2 className="hover:text-gray-500 cursor-pointer">
              Today&apos;s Paper
            </h2>
          </div>
          <Link to="/">
            <div className="logo">
              <img
                className="w-full sm:w-[485px] sm:h-[66px] h-auto object-contain"
                src="/images/The-New-York-Times-Logo.svg"
                alt="New York Times Logo"
              />
            </div>
          </Link>
        </div>
        <div className="ul-topic">
          <ul className="flex flex-nowrap items-center gap-7 text-sm ">
          <Link to="https://www.nytimes.com/section/us" target="_blank">

            <li className="topic flex items-center">
              U.S
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 15.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            </Link>
            <Link to="https://www.nytimes.com/section/world" target="_blank">
            <li className="topic flex items-center">
              World
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 15.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            </Link>
            <Link to="https://www.nytimes.com/section/business" target="_blank" >

            <li className="topic flex items-center">
              Business
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 15.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            </Link>
            <Link to="https://www.nytimes.com/section/arts" target="_blank" >

            <li className="topic flex items-center">
              Arts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 15.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            </Link>
            <Link to="https://www.nytimes.com/spotlight/lifestyle" target="_blank">

            <li className="topic flex items-center">
              Lifestyle
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 15.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            </Link>
            <Link to="https://www.nytimes.com/section/opinion" target="_blank" >
            <li className="topic flex items-center">
              Opinion
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 15.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            </Link>
            <li className="flex items-center text-gray-300">|</li>
            <Link to="https://www.nytimes.com/spotlight/podcasts" target="_blank">
            <li className="topic flex items-center">
              Audio
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 15.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            </Link>
            <Link to="https://www.nytimes.com/crosswords" target="_blank">
            <li className="topic flex items-center">
              Games
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 15.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            </Link>
            <Link to="https://cooking.nytimes.com/" target="_blank">
            <li className="topic flex items-center">
              Cooking
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 15.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            </Link>
            <Link to="https://www.nytimes.com/wirecutter/" target="_blank">
            <li className="topic flex items-center">
              Wirecutter
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 15.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            </Link>
            <Link to="https://www.nytimes.com/athletic/" target="_blank">
            <li className="topic flex items-center">
              The Athletic
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 15.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            </Link>
          </ul>
        </div>

        <div className="w-full border-b border-black-200 my-4"></div>
      </div>
      <Login isOpen={isLoginOpen} onClose={handleLoginToggle} />
    </nav>
  );
}
