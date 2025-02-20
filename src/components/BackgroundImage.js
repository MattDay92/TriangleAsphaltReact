import { useEffect } from "react";
import Background from '../components/images/TriangleOffice.png'

export default function BackgroundImage() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // How much the user has scrolled
      const windowHeight = window.innerHeight; // Height of the viewport
      const maxOpacity = 0.6; // Opacity at the top
      const minOpacity = 0.3; // Opacity when scrolled beyond window height
      
      // Calculate new opacity based on scroll position
      let newOpacity = maxOpacity - (scrollTop / windowHeight) * (maxOpacity - minOpacity);
      
      // Ensure opacity stays within the 0.3 - 0.7 range
      newOpacity = Math.max(minOpacity, Math.min(maxOpacity, newOpacity));

      document.getElementById("background-img").style.opacity = newOpacity;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  return <img id="background-img" src={Background} alt="Background" />;
}