import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Routes = [
    {
        title: "En Curso",
        path: "/pendientes"
    },
    {
        title: "Completadas",
        path: "/completadas"
    },
    {
        title: "Seguimiento",
        path: "/graficas"
    }
  
];

const HeaderLogo = ({ img_src, img_alt, link, linkName }) => {
    return <div><Link to={link}><img src={img_src} alt={img_alt} />
    {linkName}
    </Link></div>
}

const HeaderRight = ({ title, path }) => {
    return(
   <>
    <ul className="header_right_cont">
        <Link to={path}><li className="header_right_li">{title}</li></Link>
    </ul>
   </>
       
    )
}

const Header = () => {
    const [colorMenuItem, setColorMenuItem] = useState(0);

    return (
        <div className="header-container">
            <header className="header-content">
                <HeaderLogo 
                    linkName="Inicio"
                    link="/"
                    src="https://raw.githubusercontent.com/CesarAdan1/Maniak-react-test/master/src/assets/bellotero.png"
                    alt="bellotero"
                />
                <div className="header_right_orientation">
                     {Routes.map((route, key) => {
                    const capitalizedName = route.title;
                    const path = route.path;
                        return <HeaderRight 
                            key={key}
                            title={capitalizedName}
                            path={path}
                         /> 
                    
                })} 
                </div>
            </header>
        </div>
    )
}

export default Header;