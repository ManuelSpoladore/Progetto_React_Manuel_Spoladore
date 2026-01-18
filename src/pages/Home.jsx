import React from "react";
import { useContext } from "react";
import { newsContext } from "../Context";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

const Home = () => {
  const { articles } = useContext(newsContext);


  if (articles.length === 0) {
    return <Loading />;
  }

  return (
    <>
      <div className="container mx-auto px-4">
        {/* Container principale che contiene tutte le colonne */}
        <div className="flex flex-col lg:flex-row w-full gap-4">
          {/* COLONNA PRINCIPALE SINISTRA - */}
          <div className="flex-1">
            {/* PRIMA TRANCHE DI ARTICOLI */}
            {/* Contenitore per la prima riga principale con testo e immagine affiancati */}
            <div className="flex flex-col md:flex-row border-b">
              {/* Colonna sinistra con testo degli articoli */}
              <div className="md:w-1/2 p-2">
                {/* Articolo principale - Primo articolo */}
                <section className="pb-4 border-b">
                  <Link
                    to={`/article/${articles[0].title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="hover:text-[#595959]"
                  >
                    <h1 className="font-bold text-xl">
                      {articles.length > 0 ? articles[0].title : "Loading..."}
                    </h1>
                    <p className="text-[#595959]">
                      {articles.length > 0
                        ? articles[0].abstract
                        : "Loading..."}
                    </p>
                  </Link>
                </section>

                {/* Secondo articolo */}
                <section className="pb-2 pt-4">
                  <Link
                    to={`/article/${articles[1].title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="hover:text-[#595959]"
                  >
                    <h1 className="font-bold text-xl">
                      {articles.length > 0 ? articles[1].title : "Loading..."}
                    </h1>
                    <p className="text-[#595959]">
                      {articles.length > 0
                        ? articles[1].abstract
                        : "Loading..."}
                    </p>
                  </Link>
                </section>
              </div>

              {/* Colonna destra con immagine del primo articolo */}
              <div className="w-full md:w-1/2 p-4 bg-blue-200 flex flex-col justify-end items-end">
                <Link
                  to={`/article/${articles[0].title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="hover:text-[#595959]"
                >
                  {/* Rendering condizionale dell'immagine */}
                  {articles.length > 0 && articles[0].multimedia ? (
                    <img
                      src={articles[0].multimedia[0].url}
                      alt="Article Image"
                      className="pb-2 w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-103"
                    />
                  ) : (
                    <p>Loading image...</p>
                  )}
                </Link>
                {/* Copyright dell'immagine */}
                {/* togliere div? */}
                <div className="bottom-0">
                  <p className="text-xs">
                    {articles.length > 0 && articles[0].multimedia
                      ? articles[0].multimedia[0].copyright
                      : "Loading..."}
                  </p>
                </div>
              </div>
            </div>

            {/* Riga di articoli secondari - Solo titoli */}
            <div className="bagigio flex flex-col sm:flex-row bg-blue-50 p-2 border-b">
              {/* Terzo articolo - solo titolo */}
              <section className="pb-2 sm:pr-4">
                <Link
                  to={`/article/${articles[2].title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="hover:text-[#595959]"
                >
                  <h1 className="font-bold text-sm">
                    {articles.length > 0 ? articles[2].title : "Loading..."}
                  </h1>
                </Link>
              </section>

              {/* Quarto articolo - solo titolo */}
              <section className="pb-2  sm:pl-4">
                <Link
                  to={`/article/${articles[3].title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="hover:text-[#595959]"
                >
                  <h1 className="font-bold text-sm lg:border-l lg:pl-4">
                    {articles.length > 0 ? articles[3].title : "Loading..."}
                  </h1>
                </Link>
              </section>
            </div>

            {/* SECONDA TRANCHE DI ARTICOLI */}
            {/* Layout prima tranche */}
            <div className="flex flex-col md:flex-row border-b">
              {/* Colonna sinistra con testo degli articoli */}
              <div className="w-full md:w-1/2 p-2">
                {/* Quinto articolo */}
                <section className="pb-4 border-b">
                  <Link
                    to={`/article/${articles[4].title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="hover:text-[#595959]"
                  >
                    <h1 className="font-bold text-xl">
                      {articles.length > 0 ? articles[4].title : "Loading..."}
                    </h1>
                    <p className="text-[#595959]">
                      {articles.length > 0
                        ? articles[4].abstract
                        : "Loading..."}
                    </p>
                  </Link>
                </section>

                {/* Sesto articolo */}
                <section className="pb-2 pt-4">
                  <Link
                    to={`/article/${articles[5].title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="hover:text-[#595959]"
                  >
                    <h1 className="font-bold text-xl">
                      {articles.length > 0 ? articles[5].title : "Loading..."}
                    </h1>
                    <p className="text-[#595959]">
                      {articles.length > 0
                        ? articles[5].abstract
                        : "Loading..."}
                    </p>
                  </Link>
                </section>
              </div>

              {/* Colonna destra con immagine del sesto articolo */}
              <div className="w-full md:w-1/2 p-4 bg-blue-200 flex flex-col items-end">
                <Link
                  to={`/article/${articles[5].title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="hover:text-[#595959]"
                >
                  {articles.length > 0 && articles[5].multimedia ? (
                    <img
                      src={articles[5].multimedia[0].url}
                      alt="Article Image"
                      className="pb-2 w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-103"
                    />
                  ) : (
                    <p>Loading image...</p>
                  )}
                </Link>
                {/* Copyright dell'immagine */}
                <div className="bottom-0">
                  <p className="text-xs">
                    {articles.length > 0 && articles[5].multimedia
                      ? articles[5].multimedia[0].copyright
                      : "Loading..."}
                  </p>
                </div>
              </div>
            </div>

            {/* Riga di articoli secondari - Solo titoli */}
            <div className="bagigio flex flex-col sm:flex-row bg-blue-50 p-2 border-b">
              {/* Settimo articolo - solo titolo */}
              <section className="pb-2 sm:pr-4">
                <Link
                  to={`/article/${articles[6].title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="hover:text-#595959]"
                >
                  <h1 className="font-bold text-sm">
                    {articles.length > 0 ? articles[6].title : "Loading..."}
                  </h1>
                </Link>
              </section>

              {/* Ottavo articolo - solo titolo con bordo a sinistra */}
              <section className="pb-2 sm:pl-4 ">
                <Link
                  to={`/article/${articles[7].title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="hover:text-[#595959]"
                >
                  <h1 className="font-bold text-sm lg:border-l lg:pl-4">
                    {articles.length > 0 ? articles[7].title : "Loading..."}
                  </h1>
                </Link>
              </section>
            </div>

            {/* TERZA TRANCHE DI ARTICOLI */}
            {/* Layout uguale tranche prima */}
            <div className="flex flex-col md:flex-row border-b">
              {/* Colonna sinistra con testo degli articoli */}
              <div className="w-full md:w-1/2 p-2">
                {/* Nono articolo */}
                <section className="pb-4 border-b">
                  <Link
                    to={`/article/${articles[8].title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="hover:text-[#595959]"
                  >
                    <h1 className="font-bold text-xl">
                      {articles.length > 0 ? articles[8].title : "Loading..."}
                    </h1>
                    <p className="text-[#595959]">
                      {articles.length > 0
                        ? articles[8].abstract
                        : "Loading..."}
                    </p>
                  </Link>
                </section>

                {/* Decimo articolo */}
                <section className="pb-2 pt-4">
                  <Link
                    to={`/article/${articles[9].title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="hover:text-[#595959]"
                  >
                    <h1 className="font-bold text-xl">
                      {articles.length > 0 ? articles[9].title : "Loading..."}
                    </h1>
                    <p className="text-[#595959]">
                      {articles.length > 0
                        ? articles[9].abstract
                        : "Loading..."}
                    </p>
                  </Link>
                </section>
              </div>

              {/* Colonna destra con immagine  */}
              <div className="w-full md:w-1/2 p-4 bg-blue-200 flex flex-col items-end">
                <Link
                  to={`/article/${articles[8].title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="hover:text-[#595959]"
                >
                  {articles.length > 0 && articles[8].multimedia ? (
                    <img
                      src={articles[8].multimedia[0].url}
                      alt="Article Image"
                      className="pb-2 w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-103"
                    />
                  ) : (
                    <p>Loading image...</p>
                  )}
                </Link>
                {/* Copyright dell'immagine */}
                <div className="bottom-0">
                  <p className="text-xs">
                    {articles.length > 0 && articles[8].multimedia
                      ? articles[8].multimedia[0].copyright
                      : "Loading..."}
                  </p>
                </div>
              </div>
            </div>

            {/* Riga finale con un solo articolo - Solo titolo */}
            <div className="bagigio flex flex-col sm:flex-row bg-blue-50 p-2 border-b">
              {/* Undicesimo articolo  - solo titolo */}
              <section className="pb-2 sm:pr-4">
                <Link
                  to={`/article/${articles[10].title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="hover:text-[#595959]"
                >
                  <h1 className="font-bold text-sm">
                    {articles.length > 0 ? articles[10].title : "Loading..."}
                  </h1>
                </Link>
              </section>
            </div>
            <div className="bagigio  bg-blue-50  border-b ">
              {/* Undicesimo articolo  - solo titolo */}
              <section className="pb-6 pt-6 text-center">
                <Link
                  to="https://www.nytimes.com/tips"
                  className="hover:text-[#595959]"
                >
                  <h1 className="text-sm">
                    <span style={{ fontWeight: "bold" }}>Got a Tip?</span> The
                    Times offers several ways to send important information
                    confidentially ›
                  </h1>
                </Link>
              </section>
            </div>

            {/* Quarta Tranche */}
            <div className="flex flex-col md:flex-row border-b">
              {/* Colonna sinistra con testo degli articoli */}
              <div className="w-full md:w-1/2 p-2">
                {/* Dodicesimo articolo */}
                <section className="pb-4 border-b">
                  <Link
                    to={`/article/${articles[11].title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="hover:text-[#595959]"
                  >
                    <h1 className="font-bold text-xl">
                      {articles.length > 0 ? articles[11].title : "Loading..."}
                    </h1>
                    <p className="text-[#595959]">
                      {articles.length > 0
                        ? articles[11].abstract
                        : "Loading..."}
                    </p>
                  </Link>
                </section>

                {/* Tredicesimo articolo */}
                <section className="pb-2 pt-4">
                  <Link
                    to={`/article/${articles[12].title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="hover:text-[#595959]"
                  >
                    <h1 className="font-bold text-xl">
                      {articles.length > 0 ? articles[12].title : "Loading..."}
                    </h1>
                    <p className="text-[#595959]">
                      {articles.length > 0
                        ? articles[12].abstract
                        : "Loading..."}
                    </p>
                  </Link>
                </section>
              </div>

              {/* Colonna destra con immagine del dodicesimo articolo */}
              <div className="w-full md:w-1/2 p-4 bg-blue-200 flex flex-col items-end">
                <Link
                  to={`/article/${articles[11].title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="hover:text-[#595959]"
                >
                  {articles.length > 0 && articles[11].multimedia ? (
                    <img
                      src={articles[11].multimedia[0].url}
                      alt="Article Image"
                      className="pb-2 w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-103"
                    />
                  ) : (
                    <p>Loading image...</p>
                  )}
                </Link>
                {/* Copyright dell'immagine */}
                <div className="bottom-0">
                  <p className="text-xs">
                    {articles.length > 0 && articles[11].multimedia
                      ? articles[11].multimedia[0].copyright
                      : "Loading..."}
                  </p>
                </div>
              </div>
            </div>

            {/* Ultimo articolo colonna sinistra */}
            <div className="flex flex-col md:flex-row border-b">
              {/* Colonna sinistra con testo degli articoli */}
              <div className="w-full md:w-1/2 p-2">
                {/* Quattordicesimo articolo */}
                <section className="pb-4">
                  <Link
                    to={`/article/${articles[13].title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    className="hover:text-[#595959]"
                  >
                    <h1 className="font-bold text-xl">
                      {articles.length > 0 ? articles[13].title : "Loading..."}
                    </h1>
                    <p className="text-[#595959]">
                      {articles.length > 0
                        ? articles[13].abstract
                        : "Loading..."}
                    </p>
                  </Link>
                </section>
              </div>

              {/* Colonna destra con immagine del Quattordicesimo articolo */}
              <div className="w-full md:w-1/2 p-4 bg-blue-200 flex flex-col items-end">
                <Link
                  to={`/article/${articles[13].title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                  className="hover:text-[#595959]"
                >
                  {articles.length > 0 && articles[13].multimedia ? (
                    <img
                      src={articles[13].multimedia[0].url}
                      alt="Article Image"
                      className="pb-2 w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-103"
                    />
                  ) : (
                    <p>Loading image...</p>
                  )}
                </Link>
                {/* Copyright dell'immagine */}
                <div className="bottom-0">
                  <p className="text-xs">
                    {articles.length > 0 && articles[13].multimedia
                      ? articles[13].multimedia[0].copyright
                      : "Loading..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Fine della colonna principale sinistra */}

          {/* Separatore verticale tra colonne */}
          <div className="border-l h-auto"></div>

          {/* COLONNA LATERALE DESTRA - Articoli con layout verticale */}
          <div className="w-full lg:w-1/4 p-4 bg-blue-200">
            {/* Quindicesimo articolo */}
            <section className="border-b pb-8">
              <Link
                to={`/article/${articles[14].title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="hover:text-[#595959]"
              >
                {/* Immagine dell'articolo */}
                {articles.length > 0 && articles[14].multimedia ? (
                  <img
                    className="object-cover w-full transition-transform duration-300 ease-in-out transform hover:scale-103"
                    src={articles[14].multimedia[0].url}
                    alt="Article Image"
                  />
                ) : (
                  <p>Loading image...</p>
                )}
                {/* Copyright dell'immagine */}
                <p className="text-xs text-[#595959]">
                  {articles.length > 0 && articles[14].multimedia
                    ? articles[14].multimedia[0].copyright
                    : "Loading..."}
                </p>
                {/* Titolo e abstract */}
                <h1 className="font-bold text-center text-xl">
                  {articles.length > 0 ? articles[14].title : "Loading..."}
                </h1>
                <p>
                  {articles.length > 0 ? articles[14].abstract : "Loading..."}
                </p>
              </Link>
            </section>

            {/* Sedicesimo articolo */}
            <section className="border-b pb-8">
              <Link
                to={`/article/${articles[15].title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="hover:text-[#595959]"
              >
                {/* Immagine dell'articolo */}
                {articles.length > 0 && articles[15].multimedia ? (
                  <img
                    className="object-cover w-full transition-transform duration-300 ease-in-out transform hover:scale-103"
                    src={articles[15].multimedia[0].url}
                    alt="Article Image"
                  />
                ) : (
                  <p>Loading image...</p>
                )}
                {/* Copyright dell'immagine */}
                <p className="text-xs text-[#595959]">
                  {articles.length > 0 && articles[15].multimedia
                    ? articles[15].multimedia[0].copyright
                    : "Loading..."}
                </p>
                {/* Titolo e abstract */}
                <h1 className="font-bold text-center text-xl">
                  {articles.length > 0 ? articles[15].title : "Loading..."}
                </h1>
                <p>
                  {articles.length > 0 ? articles[15].abstract : "Loading..."}
                </p>
              </Link>
            </section>

            {/* Diciasettesimo articolo */}
            <section className="border-b pt-3 pb-8">
              <Link
                to={`/article/${articles[16].title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="hover:text-[#595959]"
              >
                {/* Immagine dell'articolo */}
                {articles.length > 0 && articles[16].multimedia ? (
                  <img
                    className="object-cover w-full transition-transform duration-300 ease-in-out transform hover:scale-103"
                    src={articles[16].multimedia[0].url}
                    alt="Article Image"
                  />
                ) : (
                  <p>Loading image...</p>
                )}
                {/* Copyright dell'immagine */}
                <p className="text-xs text-[#595959]">
                  {articles.length > 0 && articles[16].multimedia
                    ? articles[16].multimedia[0].copyright
                    : "Loading..."}
                </p>
                {/* Titolo e abstract */}
                <h1 className="font-bold text-center text-xl">
                  {articles.length > 0 ? articles[16].title : "Loading..."}
                </h1>
                <p>
                  {articles.length > 0 ? articles[16].abstract : "Loading..."}
                </p>
              </Link>
            </section>
            {/* Diciottesimo articolo */}

            <section className="border-b pt-3 pb-8">
              <Link
                to={`/article/${articles[17].title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="hover:text-[#595959]"
              >
                {/* Immagine dell'articolo */}
                {articles.length > 0 && articles[17].multimedia ? (
                  <img
                    className="object-cover w-full transition-transform duration-300 ease-in-out transform hover:scale-103"
                    src={articles[17].multimedia[0].url}
                    alt="Article Image"
                  />
                ) : (
                  <p>Loading image...</p>
                )}
                {/* Copyright dell'immagine */}
                <p className="text-xs text-[#595959]">
                  {articles.length > 0 && articles[17].multimedia
                    ? articles[17].multimedia[0].copyright
                    : "Loading..."}
                </p>
                {/* Titolo e abstract */}
                <h1 className="font-bold text-center text-xl">
                  {articles.length > 0 ? articles[17].title : "Loading..."}
                </h1>
                <p>
                  {articles.length > 0 ? articles[17].abstract : "Loading..."}
                </p>
              </Link>
            </section>
            {/* Diciannovesimo articolo */}

            <section className="border-b pt-3 pb-8">
              <Link
                to={`/article/${articles[8].title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="hover:text-[#595959]"
              >
                {/* Immagine dell'articolo */}
                {articles.length > 0 && articles[8].multimedia ? (
                  <img
                    className="object-cover w-full transition-transform duration-300 ease-in-out transform hover:scale-103"
                    src={articles[8].multimedia[0].url}
                    alt="Article Image"
                  />
                ) : (
                  <p>Loading image...</p>
                )}
                {/* Copyright dell'immagine */}
                <p className="text-xs text-[#595959]">
                  {articles.length > 0 && articles[8].multimedia
                    ? articles[8].multimedia[0].copyright
                    : "Loading..."}
                </p>
                {/* Titolo e abstract */}
                <h1 className="font-bold text-center text-xl">
                  {articles.length > 0 ? articles[8].title : "Loading..."}
                </h1>
                <p>
                  {articles.length > 0 ? articles[8].abstract : "Loading..."}
                </p>
              </Link>
            </section>
          </div>
          {/* Fine della colonna laterale destra */}
        </div>
      </div>
    </>
  );
};

export default Home;
