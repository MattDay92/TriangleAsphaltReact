import React, { useEffect, useState, useRef } from 'react'
import { Link, Button, Element, Events, scroller, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Background from '../components/images/TestBackground.jpg'
import Collage1 from '../components/images/Collage1.svg'
import Collage2 from '../components/images/Collage2.svg'
import TriangleBanner from '../components/images/TriangleAsphaltBannerWhite.svg'
import TitlebarImageList from '../components/Photos.js'
import WorkPhotos from '../components/Photos.js'
import JobPostings from '../components/JobPostings.js'


export default function Home() {
    const [zoomLevel, setZoomLevel] = useState(1)
    const myDivRef = useRef(null); 

    const scrollToElement = (name) => {
        scroller.scrollTo(name, {
            duration: 100,
            delay: 100,
            smooth: true,
            offset: 50, // Scrolls to element + 50 pixels down the page
            // ... other options
          });
    }

    useEffect(() => {
        if(window.scrollY > 0){
            scrollToElement('about')
        }
    }, [])

    // const handleZoom = () => {
    //     const windowSize = window.innerHeight
    //     const placement = window.scrollY

    //     const newZoom = (placement/windowSize)/1

    //     setZoomLevel(newZoom)
    // }

    // useEffect(() => {
    //     const myDiv = myDivRef.current;
    //     if (myDiv) {
    //       myDiv.style.transform = `scale(${zoomLevel})`;
    //     }
    
    //     // Clean up the event listener on component unmount
    //     return () => {
    //       window.removeEventListener('scroll', handleZoom);
    //     };
    //   }, [zoomLevel]); // Include zoomLevel as a dependency to update the effect when it changes
    
    //   useEffect(() => {
    //     window.addEventListener('scroll', handleZoom);
    
    //     // Clean up the event listener on component unmount
    //     return () => {
    //       window.removeEventListener('scroll', handleZoom);
    //     };
    //   }, []); // Empty dependency array ensures this runs only once on mount



    return (
        <div>
            <img ref={myDivRef} className='background-img' src={Background} />
            <nav id="nav">
                <p class="nav-info">(765) 482-5701</p>
                <div id="logo">
                    <img id="nav-logo-small" src={TriangleBanner} />
                </div>
                <div class="nav-info">
                    <p>Proudly serving Central Indiana since 1961</p>
                </div>
            </nav>


            <button onClick={() => {scroll.scrollToTop()}} id="BackToTopBTN">Back to Top</button>

            <a href="https://www.linkedin.com/company/triangle-asphalt-paving-corp/" target="_blank" id="LinkedInBTN"><i class="fa-brands fa-linkedin"></i></a>

            <div id="banner">
                <img class="bannerIMG" src={TriangleBanner} />
            </div>
            <Element name='about'><div id="about">
                <img class="about-IMG" src={Collage1} />
                <div class="about-info">
                    <h1>Our Story</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolore
                        libero sapiente rerum similique soluta odit vitae natus amet ipsa velit
                        cupiditate sunt nulla sint ex in? Est, et temporibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolore
                        libero sapiente rerum similique soluta odit vitae natus amet ipsa velit
                        cupiditate sunt nulla sint ex in? Est, et temporibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolore
                        libero sapiente rerum similique soluta odit vitae natus amet ipsa velit
                        cupiditate sunt nulla sint ex in? Est, et temporibus.</p>
                </div>
            </div>
            </Element>
            <div id="SJ">
                <div class="SJ-info">
                    <h1>S&J Construction</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolore
                        libero sapiente rerum similique soluta odit vitae natus amet ipsa velit
                        cupiditate sunt nulla sint ex in? Est, et temporibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolore
                        libero sapiente rerum similique soluta odit vitae natus amet ipsa velit
                        cupiditate sunt nulla sint ex in? Est, et temporibus.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolore
                        libero sapiente rerum similique soluta odit vitae natus amet ipsa velit
                        cupiditate sunt nulla sint ex in? Est, et temporibus.</p>
                </div>
                <img class="SJ-IMG" src={Collage1} />
            </div>

            <WorkPhotos />

            <JobPostings />

            <div id="contact">
                <div>
                    <h1>Contact</h1>
                    <label className='form-label' for="exampleFormControlInput1">Name</label>
                    <input className='form-control my-2' id="exampleFormControlInput1"></input>
                    <label className='form-label' for="exampleFormControlInput1">Email</label>
                    <input className='form-control my-2' id="exampleFormControlInput1"></input>
                    <label className='form-label' for="exampleFormControlInput1">Inquiry</label>
                    <input className='form-control my-2' id="exampleFormControlInput1"></input>
                    <button className='btn btn-success my-2'>Submit</button>
                </div>
            </div>


        </div>
    )
}
