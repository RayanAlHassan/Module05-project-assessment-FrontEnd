import React from "react";
import { Route, Routes } from "react-router-dom";
import UserOutlet from "../outlet/UserOutlet";
import Products from "../pages/Products/Products";
import Reviewing from "../pages/Reviewing/Reviewing";
import QuestionAnswer from "../pages/QuestionAnswer/QuestionAnswer";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ProductDetailsPage from "../components/ScrollToTop/ProductDetailsPage";

function AppRoute() {
  return (
    <Routes>
      <Route exact path="/" element={<UserOutlet />}>
        <Route path="/" element={<Products />}></Route>
        <Route path="/product/:productId" component={ProductDetailsPage} />

        <Route path="/reviews" element={<Reviewing />}></Route>
        <Route path="/questionAnswer" element={<QuestionAnswer />}></Route>
      </Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>

    </Routes>
  );
}

export default AppRoute;
