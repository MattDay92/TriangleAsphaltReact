import React from 'react'

export default function JobPostings({info}) {
    const jobInfo =
        [
            {
                name: 'Job Title 1',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolor',
                link: 'https://www.linkedin.com'
            },
            {
                name: 'Job Title 2',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolor',
                link: 'https://www.google.com'
            },

        ]


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
                <></>}
            </div>
        </div>
    )
}
