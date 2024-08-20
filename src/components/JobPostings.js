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
                <h1 className='text-center'>Employment Opportunities</h1>
                {info ? <div className='job-postings-div'>
                {info.map((job) => (
                    <div className='job-card'>
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                        <p>Job Posted on {job.date}</p>
                        <a className='btn btn-primary' href={job.link} target='_blank'>Apply</a>
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
