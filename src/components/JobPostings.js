import React from 'react'

export default function JobPostings({ info }) {

    return (
        <div className='job-postings'>
            <div>
                <h1 className='text-center'>Career Opportunities</h1>
                {info ? <div className='job-postings-div'>
                    {info.map((job) => (
                        <div className='job-card'>
                            <h2>{job[1].title}</h2>
                            <p>{job[1].description}</p>
                            <p>Job Posted on {job[1].date}</p>
                            <a className='btn btn-primary' href={job[1].link} target='_blank'>Apply</a>
                        </div>
                    )
                    )}
                </div>
                    :
                    <div className='job-card m-auto mt-5'>
                        <h2>General Application</h2>
                        <p>Submit an application for employment at a future time.  No openings are currently available.</p>
                        <a className='btn btn-primary' href="www.indeed.com" target='_blank'>Apply</a>
                    </div>}
            </div>
        </div>
    )
}
