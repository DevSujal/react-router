import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import User from "./Components/User/User";
import Github, { useGithubInfoLoader } from "./Components/Github/Github";
import Temp from "./Components/Temp";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,

//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path : "contact",
//         element : <Contact />
//       }
//     ],
//   },
// ]);


 // second approach

 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element= {<App />}>
        <Route path="" element={<Home />}/>
        <Route path="about" element={<About />}>
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="user/:userid" element={<User/>}/>
        <Route path="github/:userid" element={<Github />} loader = { // super imp
          useGithubInfoLoader
        } />
    </Route>
  )
 )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
