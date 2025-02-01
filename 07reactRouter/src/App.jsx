import "./App.css"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import ContactUs from "./components/ContactUs/ContactUs"
import Github, { githubInfoLoader } from "./components/Github/Github"
import User from "./components/User/User"

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {path: "", element: <Home />},
  //       {path: "about", element: <About />},
  //       {path: 'contact', element: <ContactUs />},
  //       {path: 'github', element: <Github />}
  //     ]
  //   }
  // ])

  //Alternative approach of defining routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<ContactUs />}/>
        <Route 
            path="github"
            loader={githubInfoLoader}
            element={<Github />}/>
        <Route path="user/:userId" element={<User />}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
