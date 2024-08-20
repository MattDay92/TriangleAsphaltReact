import './App.css';
import React, { useState, useEffect } from 'react'
import { getDatabase, ref, set, onValue } from 'firebase/database'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './view/Home';
import Admin from './view/Admin';

function App() {
  const [info, setInfo] = useState([])

  const getInfo = () => {
    const db = getDatabase()
    const jobInfo = ref(db, `/job`)

    onValue(jobInfo, (snapshot) => {
      const data = snapshot.val()

      const job = []
      Object.values(data).forEach(value => {
        job.push(value)
      });
      

      if (job) {
        setInfo(job);
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
          <Route exact path={'/admin'} element={<Admin info={info}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
