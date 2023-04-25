import { BrowserRouter, Link, Routes, Route, NavLink } from 'react-router-dom';
import './activeNavLink.css'
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';
import { useState } from 'react';

const ReactRouterDom = () => {
    const Paramater = 'thanhtoan';

    return(
        <BrowserRouter>
            <>
                <h1>REACT ROUTER DOM</h1>

                {/* dùng Link không cần active */}
                {/* <nav>
                    <Link to="/">Home</Link>
                    <Link to="/news">News</Link>
                    <Link to="/contact">Contact</Link>
                </nav> */}
                
                {/* dùng NavLink khi cần active */}
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/news">News</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>

                <Link to={`news/${Paramater}`}>Push Paramater News page</Link>

                <main>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/news" element={<News/>} />
                        <Route path="/contact" element={<Contact/>} />
                        
                        {/* hardcode lên route */}
                        <Route path='/news/:value' element={<News/>} />
                    </Routes>
                </main>
            </>
        </BrowserRouter>
    )
}

export default ReactRouterDom;