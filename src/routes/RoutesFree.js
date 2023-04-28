import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Dashboard from "../pages/dashboard/Dashboard";
import RoutesPrivate from './RoutesPrivate';
import Categorie from '../pages/categories/Categorie';
import AddCategorie from '../pages/categories/AddCategorie';
import DetailCategorie from '../pages/categories/DetailCategorie';
import Demandes from '../pages/demandes/Demandes';
import Users from '../pages/users/Users';
import Cagnottes from '../pages/cagnottes/Cagnottes';
import AddCagnotte from '../pages/cagnottes/AddCagnotte';
import DetailCagnotte from '../pages/cagnottes/DetailCagnotte';
import Home from '../app/pages';

const RoutesFree = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Login />} />

                <Route element={<RoutesPrivate />}>
                    <Route path='/admin/dashboard' element={<Dashboard />} />
                    <Route path='/admin/categories' element={<Categorie />} />
                    <Route path='/admin/demandes' element={<Demandes />} />
                    <Route path='/admin/users' element={<Users />} />
                    <Route path='/admin/categories/add' element={<AddCategorie />} />
                    <Route path='/admin/cagnottes' element={<Cagnottes />} />
                    <Route path='/admin/categories/detail/:id' element={<DetailCategorie />} />
                    <Route path='/admin/cagnottes/add' element={<AddCagnotte />} />
                    <Route path='/admin/cagnottes/detail/:id' element={<DetailCagnotte />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesFree