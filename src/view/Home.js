import React, { useEffect, useState, useRef } from 'react'
import JobPostings from '../components/JobPostings.js'
import InstagramEmbed from '../components/Instagram.js'
import ContactForm from '../components/ContactForm.js'
import Footer from '../components/Footer.js'
import BackgroundImage from '../components/BackgroundImage.js'


export default function Home({ info, nojob }) {
    const [zoom, setZoom] = useState(1)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const scrollToSection = (section) => {
        const whatSection = document.getElementById(section).offsetTop

        window.scrollTo({ top: whatSection, behavior: "smooth" })
    }

    const showNavLogo = () => {
        const navLogo = document.getElementById("nav-logo")
        const backToTopBTN = document.getElementById("BackToTopBTN")
        const logoSection = document.getElementById("bannerIMG").offsetTop
        let position = window.scrollY

        if (position > logoSection) {
            navLogo.classList.add("show")
            backToTopBTN.classList.add("show")
        } else {
            navLogo.classList.remove("show")
            backToTopBTN.classList.remove("show")
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", showNavLogo);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener("scroll", showNavLogo);
        };
    }, []);

    // const fullHeight = () => {
    //     let pageHeight = document.getElementById("fullpage").offsetHeight

    //     let position = window.scrollY

    //     setZoom(1 + position / pageHeight * 3)
    // }

    // const updateZoom = () => {
    //     document.getElementById("background-img").style.scale = `${zoom}`
    // }

    // useEffect(() => {
    //     const handleScroll = () => {
    //         fullHeight();
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // useEffect(() => {
    //     updateZoom()
    // }, [zoom])

    return (
        <div id='fullpage'>
            <BackgroundImage />
            <nav id="nav">
                <div className='nav-info nav-info-1'>
                    <button onClick={() => { scrollToSection("careers") }} className='py-0 my-0'>Career Opportunities</button>
                </div>
                <div id="logo">
                    <img id="nav-logo" className='nav-logo' src='/TriangleLogo.webp' alt='Triangle Asphalt' />
                </div>
                <div className="nav-info nav-info-2">
                    <button onClick={() => { scrollToSection("contact") }} className='py-0 my-0'>Contact Us</button>
                </div>
            </nav>

            <button onClick={scrollToTop} id="BackToTopBTN">Back to Top</button>

            <div id='socialdiv'>
                <a href="https://www.instagram.com/triangleasphalt/" aria-label="Visit our Instagram Page" target="_blank" id="InstagramBTN" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
                <a href='https://www.facebook.com/profile.php?id=61573295436266' aria-label='Visit our Facebook Page' target='_blank' id='FacebookBTN' rel="noopener noreferrer"><i class="fa-brands fa-square-facebook"></i></a>
            </div>
            <div id="banner">
                <img class="bannerIMG" id='bannerIMG' src='TriangleLogo.webp' alt='Triangle Asphalt' />
            </div>

            <h1 className='text-center'>Our Story</h1>
            <div id="about">
                <div className='about-IMG'>
                    <img className='photo1' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto1?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                    <img className='photo2' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto2?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                    <img className='photo3' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto3?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                    <img className='photo4' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto4?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                    <img className='photo5' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto5?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                    <img className='photo6' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto6?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                </div>
                <div class="about-info">
                    <article className='about-paragraph-1'>
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

                    </article>
                </div>
                <div className='about-IMG mobile'>
                    <img className='photo7' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto7?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                    <img className='photo8' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto8?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                    <img className='photo9' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto9?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                    <img className='photo10' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto10?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                    <img className='photo11' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto11?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                    <img className='photo12' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto12?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                </div>
                <div class="about-info">
                    <article className='about-paragraph-2'>
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
                <div className='about-IMG desktop'>
                    <img className='photo7' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto7?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                    <img className='photo8' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto8?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                    <img className='photo9' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto9?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                    <img className='photo10' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto10?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                    <img className='photo11' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto11?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                    <img className='photo12' alt='Triangle Asphalt Photo' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto12?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' />
                </div>
            </div>

            <div id='careers'>
                <JobPostings info={info} nojob={nojob} />
            </div>

            <div id="contact">
                <ContactForm />
                <InstagramEmbed />
            </div>

            <Footer />
        </div>
    )
}
