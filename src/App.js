import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './css/style.css';
import Home from './Pages/Home/Home';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        </Router>
    )
}


export default App;