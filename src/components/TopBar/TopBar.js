import { NavLink } from "react-router-dom";
import "./TopBar.css";

import logo from "../../images/logo.jpg"
import { useContext, useState } from "react";
import { FilmsContext } from "../../Context/FilmsContext";
import BackDrop from "../BackDrop/BackDrop"
export default function TopBar() {
    const [Films] = useContext(FilmsContext);
    const [visible, setVisible] = useState(false);
    const showNavBar = () => setVisible(true);
    const CloseNavBar = () => setVisible(false);
    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
                <div className="container">
                    <NavLink to="/">
                        <img src={logo} height="45px" alt="Logo" />
                    </NavLink>

                    <div>
                        <button className="navbar-toggler" type="button" onClick={showNavBar}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {visible ? <BackDrop CloseNavBar={CloseNavBar}/>: null}
                        <ul className={`${visible ?"showNavBar":"" } navbar-nav`}>
                            <li className="nav-item" onClick={CloseNavBar}>
                                <NavLink className="nav-link " exact to="/">
                                    <i className="fas fa-home"></i>
                                    Главная
                                </NavLink>
                            </li>
                            <li className="nav-item" onClick={CloseNavBar}>
                                <NavLink className="nav-link fav-link" to="/favourite">
                                    {
                                        Films.favourite.length > 0 ?
                                            <span className="bg-danger">{Films.favourite.length}</span>
                                            : null
                                    }
                                    <i className="fas fa-heart"></i>
                                    Избранное
                                </NavLink>
                            </li>
                            <li className="nav-item" onClick={CloseNavBar}>
                                <NavLink className="nav-link" to="/addFilm">
                                    <i className="fas fa-plus-circle"></i>
                                    Добавление 
                                </NavLink>
                            </li>
                            <li className="nav-item" onClick={CloseNavBar}>
                                <NavLink className="nav-link" to="/about">
                                    <i className="fas fa-info-circle"></i>
                                    О нас
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}

