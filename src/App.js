import './App.css';
import React, { useState, useEffect } from 'react'
import { getDatabase, ref, set, onValue } from 'firebase/database'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './view/Home';
import Admin from './view/Admin';

function App({storage}) {
  const [info, setInfo] = useState([])

  const getInfo = () => {
    const db = getDatabase()
    const jobInfo = ref(db, `/job`)

    onValue(jobInfo, (snapshot) => {
      const data = snapshot.val()

      console.log(data)
      let jobData = []
      Object.entries(data).forEach(([key, value]) => {
        jobData.push([key, value])
      });
      
      if (jobData) {
        setInfo(jobData)
      }
    })
  }

  useEffect(() => {
    getInfo()
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<Home info={info} />} />
          <Route exact path={'/admin'} element={<Admin info={info} storage={storage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
