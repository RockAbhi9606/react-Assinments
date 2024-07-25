import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import '../index.css'
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/ContactUs';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () => {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="App">
      <Header />
      <Outlet context={{ searchInput, setSearchInput }} />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <CardContainer />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);




