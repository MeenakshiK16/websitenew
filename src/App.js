import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Layout from "./Pages/Layout"
import Service from "./Pages/Service"

export default function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="service" element={<Service/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

