import React from "react";
import Loadable from "react-loadable";

function Loading() {
  return <div>Loading...</div>;
}

const Home = Loadable({
  loader: () => import("../views/home"),
  loading: Loading,
});

const SearchResult = Loadable({
  loader: () => import("../views/search-results"),
  loading: Loading,
});

const ProductDescription = Loadable({
  loader: () => import("../views/product-description"),
  loading: Loading,
});

const routes = [
  {
    path: "/",
    name: "Home",
    component: SearchBox,
    exact: true,
  },
  {
    path: "/items?search=",
    name: "Results",
    component: Results,
    exact: true,
  },
  {
    path: "/items/:id",
    name: "Product description",
    component: ProductDescription,
    exact: true,
  }
];

export default routes;
