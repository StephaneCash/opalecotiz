import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Leftbar.css";
import { FaHandsHelping, FaImage, FaTable, FaTachometerAlt, FaUsers, FaVideo } from "react-icons/fa"

const Leftbar = () => {
    return (
        <div className='leftbar'>
            <div className='menu-item'>
                <NavLink to="/admin/dashboard">
                    <div className='item'>
                        <FaTachometerAlt />
                        <span>Dashboard</span>
                    </div>
                </NavLink>
                <NavLink to="/admin/categories">
                    <div className='item'>
                        <FaTable />
                        <span>Catégorie</span>
                    </div>
                </NavLink>
                <NavLink to="/admin/cagnottes">
                    <div className='item'>
                        <FaHandsHelping />
                        <span>Productions</span>
                    </div>
                </NavLink>
                <NavLink to="/admin/images">
                    <div className='item'>
                        <FaImage />
                        <span>Images</span>
                    </div>
                </NavLink>
                <NavLink to="/admin/videos">
                    <div className='item'>
                        <FaVideo />
                        <span>Vidéos</span>
                    </div>
                </NavLink>
                <NavLink to="/admin/users">
                    <div className='item'>
                        <FaUsers />
                        <span>Utilisateurs</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Leftbar