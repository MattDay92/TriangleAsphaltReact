import React, { useEffect, useRef } from "react";
import Browning from '../components/images/browning.png'
import Capitol from '../components/images/capitol.jpg'
import Compass from '../components/images/compass.png'
import Fisher from '../components/images/fisher.png'
import Gilliatte from '../components/images/gilliatte.png'
import GrandContracting from '../components/images/grandcontracting.png'
import MacDougallPierce from '../components/images/macdougallpierce.png'
import Merritt from '../components/images/merritt.png'
import RLTurner from '../components/images/rlturner.png'
import Trimak from '../components/images/trimak.png'

const images = [
  Browning,
  Capitol,
  Compass,
  Fisher,
  Gilliatte,
  GrandContracting,
  MacDougallPierce,
  Merritt,
  RLTurner,
  Trimak
];

const Partners = () => {
  const scrollRef = useRef(null);

  const extendedImages = [...images, ...images, ...images];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const singleSetWidth = container.scrollWidth / 3;
    container.scrollLeft = singleSetWidth;

    const speed = 0.5; // lower = slower scroll

    let animationFrame;

    const autoScroll = () => {
      container.scrollLeft += speed;

      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft = singleSetWidth;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    autoScroll();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="partners-wrapper">
      <div
        ref={scrollRef}
        className="partners-carousel no-user-scroll"
      >
        {extendedImages.map((src, index) => (
          <div key={index} className="partner-card">
            <img src={src} alt={`partner-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
