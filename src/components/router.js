import React from "react";
import { Routes, Route } from 'react-router-dom';
import Categoris from "../templates/categories"
import Tags from "../templates/tags"
import PostDetil from "../templates/post-details"


const  Router = () =>{
  return(
    <Routes>
      <Route path="/categories/:id" element={<Categoris />} />
      <Route path="/tags/:id" element={<Tags />} />
      <Route path="/detaile:id" element={<PostDetil />} />
    </Routes>
  )
}

export default Router;
