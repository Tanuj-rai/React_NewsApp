
import './App.css';

import React from 'react'
import NavBar  from './components/NavBar';
import NewsItem from './components/NewsItem';
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar'


import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState } from 'react';

const App =()=>{
  const pageSize = 15;
  // apikey = "2e0c9db2e6a44a8bbb6d5400470f6e33"
  const [progress, setProgress] = useState(0)
  
 
    return (
      <div>
        <BrowserRouter>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={10}
       
      />
       
        
        <Routes>
            <Route path='/' element={<News setProgress = {setProgress} key='general' pageSize={pageSize}country='us' category='general' />}></Route>
            <Route path='/business' element={<News setProgress = {setProgress} key='business' pageSize={pageSize} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress = {setProgress} key='entertainment' pageSize={pageSize} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress = {setProgress} key='health' pageSize={pageSize}country='us' category='health' />}></Route>
            <Route path='/science' element={<News setProgress = {setProgress} key='science' pageSize={pageSize} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress = {setProgress} key='sports' pageSize={pageSize}country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress = {setProgress} key='technology' pageSize={pageSize}country='us' category='technology' />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  
}
export default App;
