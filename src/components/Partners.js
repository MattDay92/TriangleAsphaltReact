import React from "react";
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

  // duplicate once so loop looks continuous
  const extendedImages = [...images, ...images];

  return (
    <div className="partners-wrapper">
      <div className="fade-left" />
      <div className="fade-right" />

      <div className="partners-viewport">
        <div className="partners-track">
          {extendedImages.map((src, index) => (
            <div key={index} className="partner-card">
              <img src={src} alt={`partner-${index}`} draggable="false" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;

