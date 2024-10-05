import React, {useEffect, useState} from 'react'

export default function EditJob({info, editKey}) {
    const [thisJobInfo, setThisJobInfo] = useState({})

    const findJob = () => {
        console.log(info)
        for (let i = 0; i < info.length; i++){
            if(info[i][0] === editKey){
                setThisJobInfo(info[i][1])
            }
        }
    }

    useEffect(() => {
        findJob()
    }, [editKey])

    useEffect(() => {
        console.log(thisJobInfo)
    }, [thisJobInfo])

    return (
        <div id='edit-job'>
            <form className='job-card m-auto text-center' >
                <input className='form-control' name='jobTitle' defaultValue={thisJobInfo.title} />
                <input className='form-control' name='jobDescription' defaultValue={thisJobInfo.description}  />
                <input className='form-control' name='jobApplicationLink' defaultValue={thisJobInfo.link}  />
                <button className='btn btn-primary my-2' type='submit'>Submit Job</button>
            </form>
        </div>
    )
}
