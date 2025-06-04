import React, { lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Products from "./Products";
// import NotFound from "./NotFound";
import clsx from "clsx";
import css from "./AppRouter";
// import ProductDetails from "./ProductDetails";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Products = lazy(() => import("./Products"));
const NotFound = lazy(() => import("./NotFound"));
const ProductDetails = lazy(() => import("./ProductDetails"));

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function AppRouter() {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
      </nav>

      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default AppRouter;
