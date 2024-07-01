import React from 'react'

export default function JobPostings() {
    const jobInfo =
        [
            {
                name: 'Laborer',
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
                <div className='job-postings-div'>
                    {jobInfo.map((job) => (
                        <div className='job-card'>
                            <h2>{job.name}</h2>
                            <p>{job.info}</p>
                            <a className='btn btn-primary' href={job.link}>Apply</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
