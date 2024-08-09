import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./redux_store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/Watchpage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      { path: "watch", element: <WatchPage /> },
    ],
  },
]);
const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;

/**
 * Project structure:-
 *
 * Head
 * Body
 *  sidebar
 *      menuItems
 *  mainContainer
 *      Buttonlist
 *      videoContainer
 *          video card
 */
