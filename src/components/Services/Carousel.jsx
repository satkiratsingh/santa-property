import React, { useEffect, useRef, useState } from "react";
import { servicesCard } from "../../static/servicesContent";
import ServicesCard from "./ServicesCard";

const Carousel = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const intervalIdRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 768) {
      const items = carouselRef.current.children;
      const itemCount = items.length;

      const startAutoScroll = () => {
        intervalIdRef.current = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
        }, 3000);
      };

      if (isAutoScrolling) {
        startAutoScroll();
      }

      return () => clearInterval(intervalIdRef.current);
    }
  }, [screenWidth, isAutoScrolling]);

  useEffect(() => {
    if (screenWidth < 768) {
      const carousel = carouselRef.current;
      const items = carousel.children;

      const itemWidth = items[currentIndex].offsetWidth;
      const scrollPosition = itemWidth * currentIndex;

      carousel.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [currentIndex, screenWidth]);

  useEffect(() => {
    const handleUserScroll = () => {
      if (isAutoScrolling) {
        setIsAutoScrolling(false);
        clearInterval(intervalIdRef.current);
      }
    };

    const carousel = carouselRef.current;
    carousel.addEventListener("scroll", handleUserScroll);

    return () => {
      carousel.removeEventListener("scroll", handleUserScroll);
    };
  }, [isAutoScrolling]);

  return (
    <div
      id="carousel"
      ref={carouselRef}
      className="flex flex-row items-center p-4 overflow-x-auto overflow-y-hidden no-scrollbar md:px-12 md:space-x-6 max-md:space-x-8 md:justify-center snap-center md:overflow-x-hidden snap-x snap-mandatory"
    >
      {servicesCard &&
        servicesCard.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-[350px] md:w-1/3 md:snap-none snap-always snap-center"
          >
            <ServicesCard {...item} />
          </div>
        ))}
    </div>
  );
};

export default Carousel;
