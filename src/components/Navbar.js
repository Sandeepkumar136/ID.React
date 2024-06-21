import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

 function Navigation(props){
    const [isSidebaropen, setisSidebarOpen]=useState(false);
    const toggleSidebar=()=>{
        setisSidebarOpen(!isSidebaropen);
    }
    const [darkMode, Setdarkmode]=useState(()=>{
        const savedTheme=localStorage.getItem('darkMode');
        return savedTheme==='true'? true: false;
    });

    const screenModeClicker=()=>{
        Setdarkmode(perMode=>{
            const newMode=!perMode;
            localStorage.setItem('darkMode',newMode);
            return newMode;
        });
    };
    useEffect(()=>{
        if(darkMode){
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        }else{
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    }, [darkMode]);
    return(
        <>
        <div className="navbar">
        <Link to="/home" className="logo-contain">
            <img src="https://i.ibb.co/RNSJXNC/FB-IMG-1652607151685.jpg" alt="logo" className="nav-logo" />
            <p className="logo-title"><i class='bx bx-code-alt'></i> {props.logo_title}</p>
        </Link>
        <ul className="nav-items">
            <li className="nav-lists"><Link to="/project" className="nav-link">Projects</Link></li>
            <li className="nav-lists"><Link to="/blogs" className="nav-link">Blogs</Link></li>
            <li className="nav-lists"><Link to="/skills" className="nav-link">Skills</Link></li>
            <li className="nav-lists"><Link to="/gears" className="nav-link">Gears</Link></li>
            <li className="nav-lists"><Link to="/gallery" className="nav-link">Gallery</Link></li>
        </ul>
        <form action="#" id='searchForm' method="get">
            <input type="text" id="searchinput" placeholder='CTRL+K ' />
        </form>
        <ul className="screen-mode">
            <button type="button" onClick={screenModeClicker} id="screenModeBtn">{darkMode?(
                <i className='bx bxs-moon'></i>
            ):(
                <i className='bx bxs-sun'></i>
            )}</button>
        </ul>
        <div className="toggle-f-nav" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
        </div>
    </div>

    <aside className={`sidebar ${isSidebaropen ?'open':''}`}>
        <div className="upper-align-thrdfour">
        <div className="sidebar-upper-align">
        <div className="logo-contain-sidebar">
            <img src="https://i.ibb.co/RNSJXNC/FB-IMG-1652607151685.jpg" alt="logo" className="nav-logo" />
            <p className="logo-title"><i class='bx bx-code-alt'></i> {props.logo_title}</p>
        </div>
        <div className="toggle-f-nav" onClick={toggleSidebar}>
        <i className="fa-solid fa-x"></i>
        </div>
        </div>
        <ul className="nav-items-sidebar">
            <li className="nav-lists-sidebar"><Link to="/project" className="nav-link-sidebar">Projects</Link></li>
            <li className="nav-lists-sidebar"><Link to="/blogs" className="nav-link-sidebar">Blogs</Link></li>
            <li className="nav-lists-sidebar"><Link to="/skills" className="nav-link-sidebar">Skills</Link></li>
            <li className="nav-lists-sidebar"><Link to="/gears" className="nav-link-sidebar">Gears</Link></li>
            <li className="nav-lists-sidebar"><Link to="/gallery" className="nav-link-sidebar">Gallery</Link></li>
        </ul>
        </div>
        <div className="downalignSidebar">
        <form action="#" id='searchFormsidebar' method="get">
            <input type="text" id="searchinput" placeholder='CTRL+K ' />
        </form>
        <ul className="social-items">
          <li className="social-lists"><a href="/facebook" className="social-links bx bxl-facebook-circle"></a></li>
          <li className="social-lists"><a href="/insta" className="social-links bx bxl-instagram-alt"></a></li>
          <li className="social-lists"><a href="/link" className="social-links bx bxl-telegram"></a></li>
          <li className="social-lists"><a href="/github" className="social-links bx bxl-github"></a></li>
          <li className="social-lists" onClick={screenModeClicker}>
            {
                darkMode?(
                    <a href='/mode' className="social-links bx bxs-moon"></a>
                ):(
                    <a href='/mode' className="social-links bx bxs-sun"></a>
                )
            }
          </li>
        </ul>
        </div>
    </aside>
        </>
    )

}
export default Navigation;