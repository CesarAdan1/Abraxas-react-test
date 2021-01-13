import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ModalAdd } from '../common/modal/ModalAdd';
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
    const [openModal, setOpenModal] = useState(false);

    const openModalAddTask = () => {
        setOpenModal(!openModal)
    }

    return (
        <div className="header-container">
            <header className="header-content">
                <div className="header_right_orientation">
                <HeaderLogo 
                    linkName="Inicio"
                    link="/"
                    src="https://raw.githubusercontent.com/CesarAdan1/Maniak-react-test/master/src/assets/bellotero.png"
                    alt="bellotero"
                />
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
                <button 
                    className="buttonAction"
                    onClick={openModalAddTask}
                >{`Añadir Tarea ${" "}${" "} ${"+"}`}</button>
            </header>
            {openModal ? <ModalAdd/> : null}
        </div>
    )
}

export default Header;