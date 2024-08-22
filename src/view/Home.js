import React, { useEffect, useState, useRef } from 'react'
import Background from '../components/images/TestBackground.jpg'
import Collage1 from '../components/images/Collage1.svg'
import Collage2 from '../components/images/Collage2.svg'
import TriangleBanner from '../components/images/TriangleAsphaltBannerWhite.svg'
import TitlebarImageList from '../components/Photos.js'
import WorkPhotos from '../components/Photos.js'
import JobPostings from '../components/JobPostings.js'
import InstagramEmbed from '../components/Instagram.js'


export default function Home({info}) {
    const [zoom, setZoom] = useState(1)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const fullHeight = () => {
        let pageHeight = document.getElementById("fullpage").offsetHeight

        let position = window.scrollY

        setZoom(1 + position / pageHeight * 3)
    }

    const updateZoom = () => {
        document.getElementById("background-img").style.scale = `${zoom}`
    }

    useEffect(() => {
        const handleScroll = () => {
            fullHeight();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        updateZoom()
    }, [zoom])

    return (
        <div id='fullpage'>
            <img id='background-img' src={Background} />
            <nav id="nav">
                <div className='nav-info'>
                    <p className='py-0 my-0'>(765) 482-5701</p>
                </div>
                <div id="logo">
                    <img id="nav-logo-small" src={TriangleBanner} />
                </div>
                <div className="nav-info">
                    <p className='py-0 my-0'>Proudly serving Central Indiana since 1961</p>
                </div>
            </nav>


            <button onClick={scrollToTop} id="BackToTopBTN">Back to Top</button>

            <a href="https://www.linkedin.com/company/triangle-asphalt-paving-corp/" target="_blank" id="LinkedInBTN"><i class="fa-brands fa-linkedin"></i></a>

            <div id="banner">
                <img class="bannerIMG" src={TriangleBanner} />
            </div>
            <div id="about">
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
            <div id="SJ">
                <div class="SJ-info">
                    <h1>Daytime Trucking</h1>
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

            <JobPostings info={info} />


            <div id="contact">
                <div>
                    <h1>Contact</h1>
                    <label className='form-label' for="exampleFormControlInput1">Name</label>
                    <input className='form-control my-2' id="exampleFormControlInput1"></input>
                    <label className='form-label' for="exampleFormControlInput1">Email</label>
                    <input className='form-control my-2' id="exampleFormControlInput1"></input>
                    <label className='form-label' for="exampleFormControlInput1">Inquiry</label>
                    <input className='form-control my-2' id="exampleFormControlInput1"></input>
                    <button className='contact-btn my-2'>Submit</button>
                </div>
                <InstagramEmbed />
            </div>


        </div>
    )
}
