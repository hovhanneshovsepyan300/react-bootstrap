import React from 'react'


const Header = ({click}) => {

    return(
        <nav className="navbar navbar-expand-md fixed-top navbar-light bg-light top_navbar">
            <button className="navbar-toggler sidebarCollapse" onClick={click}  type="button" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="/">Marzano</a>
            <ul className="navbar-nav mr-auto">
            </ul>
            <span className="navbar-text">
                    <svg width="30px" height="22px" viewBox="0 0 30 22" version="1.1"  xmlns="http://www.w3.org/2000/svg">
                        <desc>Created with Lunacy</desc>
                        <g id="dropdown/⚙️/arrow-down" transform="translate(6 4)">
                            <path d="M0 0L18 0L9 10L0 0Z" id="Path-2" fill="#FFFFFF" stroke="none" />
                        </g>
                        </svg>
                <span>
                    sritz
                </span>
            </span>
        
        </nav>

    )
}

export default Header