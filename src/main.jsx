import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Outlet,
  Router,
} from "react-router-dom";
import './App.css'
import About from './routes/About'
import Contact from './routes/Contact'
import Projects from './routes/Projects'
import Navbar from "./components/Navbar";
import ErrorPage from "./routes/ErrorPage";
import Footer from "./routes/Footer";




const AppLayout = () =>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}




const route = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement : <ErrorPage />,
    children : [
      {
        path: "/",
        element : <About/>
      },
      {
        path: "/projects",
        element : <Projects/>
      },
      {
        path: "/contact",
        element : <Contact/>
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router = {route}/>
)


