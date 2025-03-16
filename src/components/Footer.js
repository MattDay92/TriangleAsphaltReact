import React from 'react'

export default function Footer() {


    return (
        <footer className='d-flex align-items-center text-center'>
            <div className='m-auto'>
                © {new Date().getFullYear()}
                <br />
                Triangle Asphalt Paving Corp.
            </div>
        </footer>
    )
}
