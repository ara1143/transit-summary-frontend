import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AddDataCSVPage from './pages/AddDataCSVPage';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'

const App = () => {
  //Add new Presto Card Data CSV

  /*
  const addDataCSV = async (newDataCSV) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDataCSV),
    });
    return;
  };
  //<Route path='/add-file' element={<AddDataCSVPage addDataCSVSubmit={newDataCSV} />} />
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/add-file' element={<AddDataCSVPage/>} />
        
        <Route
          path='/wrapped/:id'
          element={<WrappedPage />}
          loader={wrappedLoader}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );
  */

  //can only use router after pages are already made. Or else it will NOT work.
  //learned from experience :(
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/add-file' element={<AddDataCSVPage/>} />

      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App

