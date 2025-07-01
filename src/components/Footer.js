import React from 'react'

export default function Footer() {


    return (
        <footer className='d-flex align-items-center text-center'>
            <div className='m-auto'>
                © {new Date().getFullYear()}
                <br />
                <p className='mb-0 pb-0'>Triangle Asphalt Paving Corp.</p>
                <p className='mb-0 pb-0'>501 Sam Ralston Rd.</p>
                <p className='mb-0 pb-0'>Lebanon, IN 46052</p>
            </div>
        </footer>
    )
}
