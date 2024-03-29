import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import Dashboard from "../pages/dashboard/Dashboard";
import RoutesPrivate from './RoutesPrivate';
import Categorie from '../pages/categories/Categorie';
import AddCategorie from '../pages/categories/AddCategorie';
import DetailCategorie from '../pages/categories/DetailCategorie';
import Users from '../pages/users/Users';
import Cagnottes from '../pages/cagnottes/Cagnottes';
import AddCagnotte from '../pages/cagnottes/AddCagnotte';
import DetailCagnotte from '../pages/cagnottes/DetailCagnotte';
import Home from '../app/pages';
import Cagnotte from '../app/pages/cagnottes/Cagnotte';
import Production from '../app/pages/production/Production';
import Paiement from '../app/pages/forms/Paiement';
import AddImages from '../pages/cagnottes/AddImages';
import Participants from '../pages/participants/Participants';
import AddUser from '../pages/users/AddUser';
import Documents from "../pages/documents/Documents"
import DetailDoc from "../pages/documents/DetailDoc"
import AddDocument from "../pages/documents/AddDocument"
import Talents from '../pages/talents/Talents';
import AddTalent from '../pages/talents/AddTalent';
import DetailTalent from '../pages/talents/DetailTalent';
import ServiceById from '../app/pages/services/ServiceById';
import Conditions from '../app/pages/cgu/Conditions';
import Confidentialites from '../app/pages/cgu/Confidentialites';
import Success from '../app/pages/transactions/Success';
import Faillure from '../app/pages/transactions/Faillure';

const RoutesFree = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/productions' element={<Cagnotte />} />
                <Route path='/production/:id' element={<Production />} />
                <Route path='/payement/:id' element={<Paiement />} />
                <Route path='/admin' element={<Login />} />
                <Route path='/service/:id' element={<ServiceById />} />
                <Route path='/cgu' element={<Conditions />} />
                <Route path='/termes-etconfidentialites' element={<Confidentialites />} />
                <Route path='/inscription-success' element={<Success />} />
                <Route path='/inscription-faillure' element={<Faillure />} />

                <Route element={<RoutesPrivate />}>
                    <Route path='/admin/dashboard' element={<Dashboard />} />
                    <Route path='/admin/categories' element={<Categorie />} />
                    <Route path='/admin/participants' element={<Participants />} />
                    <Route path='/admin/users' element={<Users />} />
                    <Route path='/admin/categories/add' element={<AddCategorie />} />
                    <Route path='/admin/cagnottes' element={<Cagnottes />} />
                    <Route path='/admin/categories/detail' element={<DetailCategorie />} />
                    <Route path='/admin/cagnottes/add' element={<AddCagnotte />} />
                    <Route path='/admin/cagnottes/detail/:id' element={<DetailCagnotte />} />
                    <Route path='/admin/cagnottes/add-images/:id' element={<AddImages />} />
                    <Route path='/admin/users/add' element={<AddUser />} />

                    <Route path='/admin/documents' element={<Documents />} />
                    <Route path='/admin/documents/add' element={<AddDocument />} />
                    <Route path='/admin/documents/detail' element={<DetailDoc />} />

                    <Route path='/admin/talents' element={<Talents />} />
                    <Route path='/admin/talents/add' element={<AddTalent />} />
                    <Route path='/admin/talents/detail/:id' element={<DetailTalent />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesFree