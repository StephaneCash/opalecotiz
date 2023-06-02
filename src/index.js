import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AppContext from './context/AppContext';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import categoriesSlice from "./features/Categories"
import { getAllcategories } from './features/Categories';
import { getAllUsers } from './features/Users';
import { combineReducers } from "redux";
import userSlice from './features/Users';
import cagnotteSlice, { getAllCagnottes } from './features/Cagnotte';
import imageSlice, { getAllImages } from './features/Images';
import participantslice, { getAllparticipants } from './features/Participants';

const store = configureStore({
  reducer: combineReducers({
    categories: categoriesSlice.reducer,
    users: userSlice.reducer,
    cagnottes: cagnotteSlice.reducer,
    images: imageSlice.reducer,
    participants: participantslice.reducer
  })
});

store.dispatch(getAllcategories());
store.dispatch(getAllUsers());
store.dispatch(getAllCagnottes());
store.dispatch(getAllImages());
store.dispatch(getAllparticipants());

const scrollBtn = document.createElement("button");

const scrollTop = function () {
  scrollBtn.innerHTML = "&uarr;";
  scrollBtn.setAttribute("id", "scroll-btn");
  document.body.appendChild(scrollBtn);
};
scrollTop();

const scrollBtnDisplay = function () {
  window.scrollY > window.innerHeight
    ? scrollBtn.classList.add("show")
    : scrollBtn.classList.remove("show");
};
window.addEventListener("scroll", scrollBtnDisplay);

const scrollWindow = function () {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

};
scrollBtn.addEventListener("click", scrollWindow);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContext>
        <App />
      </AppContext>
    </Provider>
  </React.StrictMode>
);