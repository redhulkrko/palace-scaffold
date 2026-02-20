import { useState } from "react";
import Components from "./Slideshow";
import "./HeroHeader.css";

const defaultMoviesData = [
  {
    title: "From the World of John Wick: Ballerina",
    caption: "An assassin seeks revenge in a high-stakes underworld.",
    image:
      "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2024/12/ana-de-armas-in-ballerina.jpg",
    rating: "PG",
    runtime: "145",
    genres: ["Action", "Thriller"],
  },
  {
    title: "Thunderbolts",
    caption: "A team of anti-heroes is sent on a dangerous mission.",
    image:
      "https://comicbook.com/wp-content/uploads/sites/4/2025/04/thunderbolts-poster-header.jpg",
    rating: "PG-13",
    runtime: "132",
    genres: ["Action", "Adventure"],
  },
  {
    title: "Feature Spotlight",
    caption: "A must-watch cinematic experience on the big screen.",
    image: "https://www.ecartelera.com/images/noticias/80800/80857-h3.webp",
    rating: "PG",
    runtime: "120",
    genres: ["Drama"],
  },
];

const HeroHeader = ({ moviesData = defaultMoviesData }) => {
  const { Slideshow, ThumbsGallery, MovieInfo } = Components;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    setActiveIndex(realIndex);
    if (thumbsSwiper) {
      thumbsSwiper.slideToLoop(realIndex);
    }
  };

  return (
    <header className="hero-header-section">
      <div className="px-4 hero-wrapper">
        <div className="hero-thumbs d-none d-md-block">
          <ThumbsGallery
            moviesData={moviesData}
            setThumbsSwiper={setThumbsSwiper}
            activeIndex={activeIndex}
            showTitle={false}
          />
        </div>

        <div className="hero-image-wrap">
          <Slideshow
            moviesData={moviesData}
            thumbsSwiper={thumbsSwiper}
            onSlideChange={handleSlideChange}
            showDescription={false}
          />
        </div>
      </div>

      <div className="blue-strip">
        <div className="d-flex h-100 justify-content-end align-items-center px-4">
          <span className="text-white">Now Showing</span>
          <span className="text-white mx-3">•</span>
          <span className="text-white">Screen 1</span>
          <span className="text-white mx-3">•</span>
          <span className="text-white">
            {moviesData[activeIndex]?.rating || "PG"}
          </span>
          <span className="text-white mx-3">•</span>
          <span className="text-white">
            {moviesData[activeIndex]?.runtime || "120"} mins
          </span>
        </div>
      </div>

      <div className="ps-3 pe-4 pt-4 card-overlap">
        <h1>{moviesData[activeIndex]?.title}</h1>
      </div>

      <div className="px-4 pb-4">
        <MovieInfo moviesData={moviesData} activeIndex={activeIndex} />
      </div>
    </header>
  );
};

export default HeroHeader;
