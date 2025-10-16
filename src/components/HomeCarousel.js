import React, { useEffect, useState } from "react";
import { ref, onValue, getDatabase } from "firebase/database";

export default function HomeCarousel() {
  const [slides, setSlides] = useState([]);
  const [enlargedSlide, setEnlargedSlide] = useState(null);

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
    <>
      <div className="container photos-grid py-4">
        <div className="row">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="slide-card"
              onClick={() => setEnlargedSlide(slide)}
            >
              <div className="image-wrapper">
                <div
                  className="blur-bg"
                  style={{ backgroundImage: `url(${slide.url})` }}
                ></div>

                <img
                  src={slide.url}
                  alt={slide.caption || "Slide image"}
                  className="main-img d-block mx-auto"
                />
              </div>

              {slide.caption && (
                <div className="caption text-center mt-2">
                  <p className="mb-0">{slide.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {enlargedSlide && (
        <div
          className="lightbox-overlay"
          onClick={() => setEnlargedSlide(null)}
        >
          <img
            src={enlargedSlide.url}
            alt={enlargedSlide.caption || "Enlarged image"}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          />
          {enlargedSlide.caption && (
            <div className="lightbox-caption">{enlargedSlide.caption}</div>
          )}
        </div>
      )}
    </>
  );
}
