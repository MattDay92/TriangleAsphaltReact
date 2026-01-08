import React, { useEffect, useState } from 'react'
import FirebaseCarousel from '../components/AdminCarousel'
import { getDatabase, push, ref as refDB, set, remove, get } from 'firebase/database'
import { getStorage, ref, uploadBytes, uploadBytesResumable, uploadString, getDownloadURL } from 'firebase/storage'

export default function Admin({ info, storage }) {
    const [editKey, setEditKey] = useState('')
    const [fileUpload, setFileUpload] = useState('')
    const [fileUploadName, setFileUploadName] = useState('')
    const [fileDownload, setFileDownload] = useState('')
    const [featuredInfo, setFeaturedInfo] = useState('')

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

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0]

        console.log(selectedFile)

        let reader = new FileReader();

        reader.readAsDataURL(selectedFile)

        reader.onload = () => {
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
                    console.log(link)
                };
                xhr.open('GET', url);
                xhr.send()
            })
            .catch((error) => {
                console.log('ERROR Downloading File')
            })
    }

    const updateFeaturedInfo = (event) => {
        event.preventDefault()
        const db = getDatabase();

        const caption = event.target.featuredCaption.value
        const thisFileDownload = fileDownload


        set(refDB(db, 'featuredTitle'), {
            caption: caption,
            thisFileDownload: thisFileDownload
        }).then(() => {
            alert('Featured Title updated successfully!');
        }).catch((error) => {
            console.error('Error saving data:', error);
            alert('An error occurred while updating the featured title. Please try again.');
        });
    }


    return (
        <div id='fullpage'>
            <h1 className='my-5 text-center'>Admin Page</h1>

            <div className='admin-photos'>
                <h3>Our Story 1</h3>
                <div className='admin-photos-row w-100'>
                    <form >
                        <div className='admin-photo-div'><img className='w-100' id='photo1' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto1?alt=media&token=cc746590-0cbb-46fe-9e50-696f25d16016' /></div>
                        <input type='file' name='photo1' onChange={handleFileChange} />
                    </form>
                    <form >
                        <div className='admin-photo-div'><img className='w-100' id='photo2' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto2?alt=media&token=9eab9ff9-bc70-4796-afcd-07c6b7c3c4ea' /></div>
                        <input type='file' name='photo2' onChange={handleFileChange} />
                        <p>***Not on Mobile***</p>
                    </form>
                    <form >
                        <div className='admin-photo-div'><img className='w-100' id='photo3' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto3?alt=media&token=9eab9ff9-bc70-4796-afcd-07c6b7c3c4ea' /></div>
                        <input type='file' name='photo3' onChange={handleFileChange} />
                    </form>
                    <form >
                        <div className='admin-photo-div'><img className='w-100' id='photo4' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto4?alt=media&token=9eab9ff9-bc70-4796-afcd-07c6b7c3c4ea' /></div>
                        <input type='file' name='photo4' onChange={handleFileChange} />
                        <p>***Not on Mobile***</p>
                    </form>
                    <form >
                        <div className='admin-photo-div'><img className='w-100' id='photo5' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto5?alt=media&token=9eab9ff9-bc70-4796-afcd-07c6b7c3c4ea' /></div>
                        <input type='file' name='photo5' onChange={handleFileChange} />
                    </form>
                    <form >
                        <div className='admin-photo-div'><img className='w-100' id='photo6' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto6?alt=media&token=9eab9ff9-bc70-4796-afcd-07c6b7c3c4ea' /></div>
                        <input type='file' name='photo6' onChange={handleFileChange} />
                        <p>***Not on Mobile***</p>
                    </form>
                </div>
                <h3>Our Story 2</h3>
                <div className='admin-photos-row'>
                    <form >
                        <div className='admin-photo-div'><img className='w-100' id='photo7' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto7?alt=media&token=9eab9ff9-bc70-4796-afcd-07c6b7c3c4ea' /></div>
                        <input type='file' name='photo7' onChange={handleFileChange} />
                    </form>
                    <form >
                        <div className='admin-photo-div'><img className='w-100' id='photo8' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto8?alt=media&token=9eab9ff9-bc70-4796-afcd-07c6b7c3c4ea' /></div>
                        <input type='file' name='photo8' onChange={handleFileChange} />
                        <p>***Not on Mobile***</p>
                    </form>
                    <form >
                        <div className='admin-photo-div'><img className='w-100' id='photo9' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto9?alt=media&token=9eab9ff9-bc70-4796-afcd-07c6b7c3c4ea' /></div>
                        <input type='file' name='photo9' onChange={handleFileChange} />
                    </form>
                    <form >
                        <div className='admin-photo-div'><img className='w-100' id='photo10' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto10?alt=media&token=9eab9ff9-bc70-4796-afcd-07c6b7c3c4ea' /></div>
                        <input type='file' name='photo10' onChange={handleFileChange} />
                        <p>***Not on Mobile***</p>
                    </form>
                    <form >
                        <div className='admin-photo-div'><img className='w-100' id='photo11' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto11?alt=media&token=9eab9ff9-bc70-4796-afcd-07c6b7c3c4ea' /></div>
                        <input type='file' name='photo11' onChange={handleFileChange} />
                    </form>
                    <form >
                        <div className='admin-photo-div'><img className='w-100' id='photo12' src='https://firebasestorage.googleapis.com/v0/b/triangleasphalt-4b0f2.firebasestorage.app/o/files%2Fphoto12?alt=media&token=9eab9ff9-bc70-4796-afcd-07c6b7c3c4ea' /></div>
                        <input type='file' name='photo12' onChange={handleFileChange} />
                        <p>***Not on Mobile***</p>
                    </form>
                </div>

            </div>

            

            <h2 className='text-center mt-5'>Insert New Job</h2>
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
                    </div>
                )
                )}
            </div>
                :
                <div className='job-card m-auto mt-5'>
                    <h2>General Application</h2>
                    <p>No openings are currently available.</p>
                </div>}

            <FirebaseCarousel storage={storage} />
        </div>
    )
}
