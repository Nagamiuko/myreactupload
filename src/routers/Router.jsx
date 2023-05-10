import React from 'react'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import App from '../App';
import HomePage from '../pages/HomPage'
import ItemAll from '../pages/ItemAll'
import MyItem from '../pages/MyItem'
import Login from '../pages/Login'
import Upload from '../pages/Upload'
import ErrorPage from '../pages/ErrorPage'
import ViewItem from '../pages/ViewItem';
import ProfileUpdata from '../pages/UpdataProfile';
import Error from '../components/Nodata/Error';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route index element={<Login/>}/>
         <Route path='/dashboard' element={<HomePage/>}/>
         <Route path='/item-all' element={<ItemAll/>}/>
         <Route path='/my-items' element={<MyItem/>}/>
         <Route path='/my-upload/' element={<Upload/>}/>
         <Route path='/my-edit/' element={<Error/>}/>
         <Route path='/my-view/:fileid' element={<ViewItem/>}/>
         <Route path='/my/profile/' element={<ProfileUpdata/>}/>
         <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
