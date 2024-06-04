import React from 'react'

 function Navigation(props){
    return(
        <div className="navbar">
        <div className="logo-contain">
            <img src="https://i.ibb.co/RNSJXNC/FB-IMG-1652607151685.jpg" alt="logo" className="nav-logo" />
            <p className="logo-title">{props.logo_title}</p>
        </div>
        <ul className="nav-items">
            <li className="nav-lists"><a href="/" className="nav-link">Projects</a></li>
            <li className="nav-lists"><a href="/" className="nav-link">Blogs</a></li>
            <li className="nav-lists"><a href="/" className="nav-link">Skills</a></li>
            <li className="nav-lists"><a href="/" className="nav-link">Gears</a></li>
            <li className="nav-lists"><a href="/" className="nav-link">Gallery</a></li>
        </ul>
        <ul className="social">
            <li className="social-list"><a href="/" className="social-links"><i className='bx bxl-facebook-circle'></i></a></li>
            <li className="social-list"><a href="/" className="social-links"><i className='bx bxl-instagram-alt'></i></a></li>
            <li className="social-list"><a href="/" className="social-links"><i className='bx bxl-telegram'></i></a></li>
            <li className="social-list"><a href="/" className="social-links"><i className='bx bxl-github'></i></a></li>
            <li className="social-list"><a href="/" className="social-links"><i className='bx bxs-moon' ></i></a></li>
        </ul>
        <div className="toggle-f-nav">
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-x"></i>
        </div>
    </div>
    )

}
export default Navigation;