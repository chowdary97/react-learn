import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header, Body } from "./components";
import { Contact, Error, Restaurant } from "./screens";
import { lazy, Suspense, useContext, useEffect, useState } from "react";
const Grocery = lazy(() => import("./screens/Grocery/Grocery"));
const About = lazy(() => import("./screens/about/About"));
import UserContext from "./utils/context/UserContext";
const AppLayout = () => {
  const [userName, setUserName] = useState("");
  const data = useContext(UserContext);
  console.log(data, "inside home");
  useEffect(() => {
    const data = {
      loggedInUser: "Thimma Chowd",
    };
    setUserName(data.loggedInUser);
  }, []);

  return (
    <UserContext.Provider value={{loggedInUser:"Thimma"}} >
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    fallback: <h1>Page not found</h1>,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading About...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Grocery...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
