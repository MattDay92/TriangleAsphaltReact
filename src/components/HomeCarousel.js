import React, { useEffect, useState } from "react";
import { ref, onValue, getDatabase } from "firebase/database";

export default function HomeCarousel() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const slidesRef = ref(db, "slides");
    return onValue(slidesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedSlides = Object.entries(data).map(([id, slide]) => ({
          id,
          ...slide,
        }));
        setSlides(loadedSlides);
      } else {
        setSlides([]);
      }
    });
  }, []);

  if (slides.length === 0) {
    return <p className="text-center py-4">No slides available</p>;
  }

  return (
    <div id="firebaseCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <h1 className="text-center pb-4">Job Photos</h1>

        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item ${index === 0 ? "active" : ""} position-relative`}
          >
            {/* Blurred background */}
            <div
              className="blur-bg"
              style={{ backgroundImage: `url(${slide.url})` }}
            ></div>

            {/* Main image */}
            <img
              src={slide.url}
              className="main-img d-block mx-auto"
              alt={slide.caption || `Slide ${index + 1}`}
            />

            {slide.caption && (
              <div className="caption text-center mt-4 position-relative">
                <p className="mb-0">{slide.caption}</p>
              </div>
            )}
          </div>

        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#firebaseCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#firebaseCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
