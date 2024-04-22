import { Routes, Route } from "react-router-dom";
import HomeComponent from "./components/Home";
import Discount from "./components/Discount";
function App() {
  return (
    <Routes>
     <Route  path="/" element={<HomeComponent />}/>
     <Route  path="/discount" element={<Discount />}/>
    </Routes>
  )
}
export default App
