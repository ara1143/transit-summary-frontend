import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AddDataCSVPage from './pages/AddDataCSVPage';
import SummaryPage from './pages/SummaryPage';
import './App.css'

import React from 'react'

const App = () => {
  //Add new Presto Card Data CSV

  /*
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
  
  // NOT going to make this file upload dependent 
  // dec 29 morning goal: make everything as if you are querying the entire transactions table
  // later goal: adjust so that you only use info form the table associated with your login info
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/add-file' element={<AddDataCSVPage/>} />
        <Route path='/summary' element={<SummaryPage/>} />

      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App

