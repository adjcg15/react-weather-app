import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const { city } = useSelector(state => state.location);

    const [isOpen, setIsOpen] = useState(false);

    const sidebar = useRef(null);

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleOutsideClose = (e) => {
        if(!sidebar.current.contains(e.target)) setIsOpen(false);
    }
    
    return (
        <>
            <div 
                className={ `navbar basic-short-transition ${isOpen && 'navbar-open'} `}
                onClick={ handleOutsideClose }
            >
                <aside 
                    className="navbar__container basic-short-transition"
                    ref={ sidebar }
                >
                    <div className="navbar__container-content container">
                        <svg xmlns="http://www.w3.org/2000/svg" className="navbar__close pointer icon icon-tabler icon-tabler-x" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3c3c3c" fill="none" strokeLinecap="round" strokeLinejoin="round"
                            onClick={ handleClose }
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                        <h3 className="navbar__title">{ city }</h3>
                        <nav className="navbar__navigation">
                            <ul>
                                <li>
                                    <NavLink 
                                        to="./" 
                                        className={ ({isActive}) => `navbar__navigation-link ${isActive && 'active-link'}` }
                                        onClick={ handleClose }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="basic-short-transition icon icon-tabler icon-tabler-sun" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3c3c3c" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <circle cx="12" cy="12" r="4" />
                                            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
                                        </svg>
                                        <p className="basic-short-transition ">Current</p>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink 
                                        to="./daily" 
                                        className={ ({isActive}) => `navbar__navigation-link ${isActive && 'active-link'}` }
                                        onClick={ handleClose }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="basic-short-transition  icon icon-tabler icon-tabler-clock" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3c3c3c" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <circle cx="12" cy="12" r="9" />
                                            <polyline points="12 7 12 12 15 15" />
                                        </svg>
                                        <p className="basic-short-transition ">Daily forecast</p>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink 
                                        to="./weekly" 
                                        className={ ({isActive}) => `navbar__navigation-link ${isActive && 'active-link'}` }
                                        onClick={ handleClose }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="basic-short-transition  icon icon-tabler icon-tabler-calendar" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3c3c3c" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <rect x="4" y="5" width="16" height="16" rx="2" />
                                            <line x1="16" y1="3" x2="16" y2="7" />
                                            <line x1="8" y1="3" x2="8" y2="7" />
                                            <line x1="4" y1="11" x2="20" y2="11" />
                                            <line x1="11" y1="15" x2="12" y2="15" />
                                            <line x1="12" y1="15" x2="12" y2="18" />
                                        </svg>
                                        <p className="basic-short-transition ">Weekly forecast</p>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink 
                                        to="/weather/change" 
                                        className={ ({isActive}) => `navbar__navigation-link ${isActive && 'active-link'}` }
                                        onClick={ handleClose }
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="basic-short-transition icon icon-tabler icon-tabler-world" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3c3c3c" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <circle cx="12" cy="12" r="9" />
                                            <line x1="3.6" y1="9" x2="20.4" y2="9" />
                                            <line x1="3.6" y1="15" x2="20.4" y2="15" />
                                            <path d="M11.5 3a17 17 0 0 0 0 18" />
                                            <path d="M12.5 3a17 17 0 0 1 0 18" />
                                        </svg>
                                        <p className="basic-short-transition ">Change location</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>

            <div className="navbar__open">
                <button className="navbar__open-btn pointer" onClick={ handleOpen }>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3c3c3c" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </button>
            </div>
        </>
    )
};
