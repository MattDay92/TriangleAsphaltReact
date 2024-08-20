import React from 'react'
import { getDatabase, push, ref as refDB, set } from 'firebase/database'


export default function Admin({ info }) {

    const updateInfo = (event) => {
        event.preventDefault()
        const db = getDatabase();

        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();

        const title = event.target.jobTitle.value
        const description = event.target.jobDescription.value
        const link = event.target.jobApplicationLink.value

        push(refDB(db, `/job`), {
            title: title,
            description: description,
            link: link,
            date: `${month}/${date}/${year}`
        });
    }

    const removeJob = () => {
        
    }

    return (
        <div id='fullpage'>
            <h1 className='my-5'>Admin Page</h1>
            <form className='my-5 w-75 m-auto text-center' onSubmit={updateInfo}>
                <input className='form-control' name='jobTitle' placeholder='Insert Job Title' />
                <input className='form-control' name='jobDescription' placeholder='Insert Job Description' />
                <input className='form-control' name='jobApplicationLink' placeholder='Insert Job Application Link' />
                <button className='btn btn-primary my-2' type='submit'>Submit Link</button>
            </form>

            {info ? <div className='job-postings-div'>
                {info.map((job) => (
                    <div className='job-card'>
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                        <p>Job Posted on {job.date}</p>
                        <a className='btn btn-danger' onClick={removeJob}>Remove Job</a>
                    </div>
                )
                )}
            </div>
                :
                <></>}


        </div>
    )
}
