import { BrowserRouter,Routes,Route,useNavigate } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Hist1936 from "./pages/Hist1936"
import Hist1940 from "./pages/Hist1940"
import Hist1944 from "./pages/Hist1944"
import Hist1948 from "./pages/Hist1948"
import Treaties from "./pages/Treaties"
import "./styles.css"
import { createContext, useContext, useState } from "react"


export const sidebarContext = createContext();


function App() {
  let [sidebarOut, setSidebarOut] = useState(false);
  return (
    <>
      <sidebarContext.Provider value = {{sidebarOut, setSidebarOut}}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage/>}/>
            <Route path="/Homepage" element={<Homepage/>}/>
            <Route path="/1936-1940" element={<Hist1936/>}/>
            <Route path="/1940-1944" element={<Hist1940/>}/>
            <Route path="/1944-1948" element={<Hist1944/>}/>
            <Route path="/1948-1951" element={<Hist1948/>}/>
            <Route path="/Peace-Treaties" element={<Treaties/>}/>
          </Routes>
        </BrowserRouter>
      </sidebarContext.Provider>    
    </>
    
  )
}

export default App
