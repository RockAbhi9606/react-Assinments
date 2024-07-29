import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client'
import '../index.css'
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Contact from './components/ContactUs';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/useContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


//Normal import syntax.
//import Grocery from './components/Grocery';
//import About from './components/About';


//lazy loading import syntax.
const Grocery = lazy(() => import('./components/Grocery'))
const About = lazy(() => import('./components/About'))

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: 'Abhishek Bande'
    }
    setUserName(data.name)
  }, [])
  const [searchInput, setSearchInput] = useState("");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="App">
          <Header />
          <Outlet context={{ searchInput, setSearchInput }} />
        </div>
      </UserContext.Provider>
    </Provider>
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
        element: <Suspense fallback={<h1>Loading....!!</h1>}><About /></Suspense>
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
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....!!</h1>}><Grocery /></Suspense>
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




