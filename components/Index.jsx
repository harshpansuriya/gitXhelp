import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Github from './Github';
import Git from './Git';

export default function Index() {
  return (
    <main className='index-container'>
      <Routes>
          <Route path="/" element={<Github/>}/>
          <Route path="/git" component= {<Git/>}/>
          <Route path="/github" element= {<Github/>}/>
      </Routes>
      github
    </main>
  )
}
