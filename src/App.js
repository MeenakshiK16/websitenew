import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import Layout from "./Pages/Layout"
import Service from "./Pages/Service"
import Counter from "./Pages/Counter"
import Effect from "./Pages/Effect"
import Reducer from "./Pages/Reducer"
import Callbacks from "./Pages/Callbacks"

export default function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="service" element={<Service/>}/>
          <Route path="counter" element={<Counter/>}/>
          <Route path="effect" element={<Effect/>}/>
          <Route path="reducer" element={<Reducer/>}/>
          <Route path="callback" element={<Callbacks/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  )
}