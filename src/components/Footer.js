import React from 'react'

export default function Footer() {


    return (
        <footer className='d-flex justify-content-center align-items-center text-center'>
            <p>
            © {new Date().getFullYear()} 
            <br />
            Triangle Asphalt Paving Corp.
            </p>
        </footer>
    )
}
