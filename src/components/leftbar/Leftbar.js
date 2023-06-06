import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Leftbar.css";
import { FaHandsHelping } from "react-icons/fa"
import { FiBarChart, FiImage, FiList, FiUsers, FiVideo } from 'react-icons/fi';
import { GrUserAdmin } from "react-icons/gr";

const Leftbar = () => {
    return (
        <div className='leftbar'>
            <div className='menu-item'>
                <NavLink to="/admin/dashboard">
                    <div className='item'>
                        <FiBarChart />
                        <span>Dashboard</span>
                    </div>
                </NavLink>
                <NavLink to="/admin/categories">
                    <div className='item'>
                        <FiList />
                        <span>Catégorie</span>
                    </div>
                </NavLink>
                <NavLink to="/admin/cagnottes">
                    <div className='item'>
                        <FaHandsHelping />
                        <span>Productions</span>
                    </div>
                </NavLink>
                <NavLink to="/admin/participants">
                    <div className='item'>
                        <FiUsers />
                        <span>Participants</span>
                    </div>
                </NavLink>
             
                <NavLink to="/admin/users">
                    <div className='item'>
                        <GrUserAdmin />
                        <span>Utilisateurs</span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Leftbar