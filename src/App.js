import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './css/style.css';
import Home from './Pages/Home/Home';

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />}/>
                </Routes>
            </Router>
        </React.Fragment>
    )
}


export default App;