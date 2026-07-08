import LenisComp from "./components/common/LenisComp.jsx";
import NavBar from "./components/common/NavBar.jsx";
import Home from "./pages/Home";
import Logo from "./assets/logos/logo.svg";

export default function App() {

   return (
      <>
         <LenisComp />
         <div className="flex justify-center">
            <NavBar Logo={Logo} />
         </div>
         <Home Logo={Logo} />
      </>
   )
}
