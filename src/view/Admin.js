import React, { useEffect, useState } from 'react'
import { getDatabase, push, ref as refDB, set, remove, get } from 'firebase/database'
import { getStorage, ref, uploadBytes, uploadBytesResumable, uploadString, getDownloadURL } from 'firebase/storage'
import EditJob from '../components/EditJob'

export default function Admin({ info, storage }) {
    const [editKey, setEditKey] = useState('')
    const [fileUpload, setFileUpload] = useState('')
    const [fileUploadName, setFileUploadName] = useState('')
    const [fileDownload, setFileDownload] = useState('')

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

    const removeJob = (key) => {
        const db = getDatabase();
        const removeRef = refDB(db, `/job/${key}`)

        remove(removeRef)
    }

    const showEditJob = (key) => {
        setEditKey(key)

        document.getElementById('edit-job').style.display = 'block'
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]

        console.log(selectedFile)

        let reader = new FileReader();

        reader.readAsDataURL(selectedFile)

        reader.onload = () => {
            console.log(reader.result);
            setFileUpload(reader.result)
            setFileUploadName(event.target.name)
        }

        reader.onerror = () => {
            console.log(reader.error)
        }
    }

    const handleUpload = () => {
        const filesRef = ref(storage, `files/${fileUploadName}`)

        if (fileUpload) {
            uploadString(filesRef, fileUpload, 'data_url').then((snapshot) => {
                console.log('Uploaded a file!');
            })
        }

        if (fileUploadName) {
            downloadFile(fileUploadName)
        }
    }

    useEffect(() => {
        handleUpload()
    }, [fileUpload])


    const downloadFile = (name) => {
        const gsReference = ref(storage, `gs://triangleasphalt-4b0f2.firebasestorage.app/files/${name}`)

        getDownloadURL(gsReference)
            .then((url) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = (event) => {
                    const link = xhr.responseURL
                    setFileDownload(link)
                    console.log('Ran Download')
                };
                xhr.open('GET', url);
                xhr.send()
            })
            .catch((error) => {
                console.log('ERROR Downloading File')
            })
    }

    return (
        <div id='fullpage'>

            <EditJob info={info} editKey={editKey} />

            <h1 className='my-5 text-center'>Admin Page</h1>

            <form className='admin-col' >
                <h3>Test Photo #1</h3>
                <div className='w-50 m-auto'><img className='w-100' id='TestPhoto1' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2FTestPhoto1?alt=media&token=470b630b-cbd2-49cd-9b1b-78cf83b35a45' /></div>
                <input type='file' name='TestPhoto1' onChange={handleFileChange} />
            </form>

            <h2 className='text-center '>Insert New Job</h2>
            <form className='mb-5 w-75 m-auto text-center' onSubmit={updateInfo}>
                <input className='form-control' name='jobTitle' placeholder='Insert Job Title' />
                <input className='form-control' name='jobDescription' placeholder='Insert Job Description' />
                <input className='form-control' name='jobApplicationLink' placeholder='Insert Job Application Link' />
                <button className='btn btn-primary my-2' type='submit'>Submit Job</button>
            </form>

            {info ? <div className='job-postings-div'>
                {info.map((job) => (
                    <div className='job-card'>
                        <h2>{job[1].title}</h2>
                        <p>{job[1].description}</p>
                        <p>Job Posted on {job[1].date}</p>
                        <a className='btn btn-danger' onClick={() => { removeJob(job[0]) }}>Remove Job</a>
                        {/* <a className='btn btn-primary' onClick={() => { showEditJob(job[0]) }}>Remove Job</a> */}
                    </div>
                )
                )}
            </div>
                :
                <></>}


        </div>
    )
}
