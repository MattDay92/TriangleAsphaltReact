import React, { useEffect, useState, useRef } from 'react'
import Background from '../components/images/TestBackground.jpg'
import Collage1 from '../components/images/Collage1.svg'
import Collage2 from '../components/images/Collage2.svg'
import TriangleBanner from '../components/images/TriangleAsphaltBannerWhite.svg'
import TitlebarImageList from '../components/Photos.js'
import WorkPhotos from '../components/Photos.js'
import JobPostings from '../components/JobPostings.js'
import InstagramEmbed from '../components/Instagram.js'
import ContactForm from '../components/ContactForm.js'


export default function Home({ info }) {
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
                    <article className='about-paragraph'>
                        <p>Founded in 1961, Triangle Asphalt Paving has been a mainstay of Boone County for over sixty years.
                            With only two dump trucks and an asphalt distributor, founder Jack Day and two original partners
                            (hence “Triangle”) built the company from the ground up.  Beginning with patch work and chip seal,
                            Jack and Triangle quickly expanded and, by 1964, were paving the streets of Lebanon, IN.  </p>
                        <p>Current president Steve Day stepped into a leadership role in 1975 and his brother John Day joined
                            the team in 1980.  Throughout the 70s, Triangle operated two asphalt plants, three paving crews,
                            and twenty dump trucks until scaling back in 1980.  They successfully ran their HMA plants until
                            1990 and 1999 respectively before selling them off and leaving highway work behind to focus on
                            city work and lower-volume roads around the Boone County area.  In the early 2000s, as warehouses
                            grew out of the cornfields, Triangle was right there as one of the leaders in laying large
                            area parking lots.  </p>
                        <p>Even after Jack’s passing in 2000, Triangle remained a family-owned-and-operated business with Steve
                            as president, John as vice-president (until his passing in June 2024), and their older sister
                            Elizabeth “Libby” Lewis running the Lebanon office until her retirement in 2016.  Every one of
                            Jack’s five grandchildren has worked for Triangle in some capacity with multiple still employed
                            by the company today.  </p>
                        <p>If you talk to almost anyone in Lebanon, IN, you can guarantee they know someone connected to Triangle
                            Asphalt.  Whether it’s sponsoring a little league team or donating to local organizations, they are
                            a pillar of the community.  With an unmatched commitment to excellence, Triangle is the best in the
                            asphalt business. </p>
                    </article>
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
                {/* <div>
                    <h1>Contact</h1>
                    <label className='form-label' for="exampleFormControlInput1">Name</label>
                    <input className='form-control my-2' id="exampleFormControlInput1"></input>
                    <label className='form-label' for="exampleFormControlInput1">Email</label>
                    <input className='form-control my-2' id="exampleFormControlInput1"></input>
                    <label className='form-label' for="exampleFormControlInput1">Inquiry</label>
                    <input className='form-control my-2' id="exampleFormControlInput1"></input>
                    <button className='contact-btn my-2'>Submit</button>
                </div> */}
                <ContactForm />
                <InstagramEmbed />
            </div>


        </div>
    )
}
