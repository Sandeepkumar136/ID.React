import React, {useState} from 'react';

 function Navigation(props){
    const [isSidebaropen, setisSidebarOpen]=useState(false);
    const toggleSidebar=()=>{
        setisSidebarOpen(!isSidebaropen);
    }

    return(
        <>
        <div className="navbar">
        <div className="logo-contain">
            <img src="https://i.ibb.co/RNSJXNC/FB-IMG-1652607151685.jpg" alt="logo" className="nav-logo" />
            <p className="logo-title"><i class='bx bx-code-alt'></i> {props.logo_title}</p>
        </div>
        <ul className="nav-items">
            <li className="nav-lists"><a href="/" className="nav-link">Projects</a></li>
            <li className="nav-lists"><a href="/" className="nav-link">Blogs</a></li>
            <li className="nav-lists"><a href="/" className="nav-link">Skills</a></li>
            <li className="nav-lists"><a href="/" className="nav-link">Gears</a></li>
            <li className="nav-lists"><a href="/" className="nav-link">Gallery</a></li>
        </ul>
        <form action="#" id='searchForm' method="get">
            <input type="text" id="searchinput" placeholder='CTRL+K ' />
        </form>
        <ul className="screen-mode">
            <button type="button" id="screenModeBtn"><i className='bx bxs-moon'></i></button>
        </ul>
        <div className="toggle-f-nav" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
        </div>
    </div>

    <aside className={`sidebar ${isSidebaropen ?'open':''}`}>
        <div className="upper-align-thrdfour">
        <div className="sidebar-upper-align">
        <div className="logo-contain">
            <img src="https://i.ibb.co/RNSJXNC/FB-IMG-1652607151685.jpg" alt="logo" className="nav-logo" />
            <p className="logo-title"><i class='bx bx-code-alt'></i> {props.logo_title}</p>
        </div>
        <div className="toggle-f-nav" onClick={toggleSidebar}>
        <i className="fa-solid fa-x"></i>
        </div>
        </div>
        <ul className="nav-items-sidebar">
            <li className="nav-lists"><a href="/" className="nav-link">Projects</a></li>
            <li className="nav-lists"><a href="/" className="nav-link">Blogs</a></li>
            <li className="nav-lists"><a href="/" className="nav-link">Skills</a></li>
            <li className="nav-lists"><a href="/" className="nav-link">Gears</a></li>
            <li className="nav-lists"><a href="/" className="nav-link">Gallery</a></li>
        </ul>
        </div>
        <div className="downalignSidebar">
        <form action="#" id='searchFormsidebar' method="get">
            <input type="text" id="searchinput" placeholder='CTRL+K ' />
        </form>
        <ul className="screen-modesidebar">
            
        </ul>

        <button type="button" id="screenModeBtn"><i className='bx bxs-moon'></i></button>
        </div>


        <div className="toggle-f-nav" onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
        </div>
    </aside>
        </>
    )

}
export default Navigation;