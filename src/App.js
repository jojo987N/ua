import Home from "./pages/home/Home";

import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import { carInputs, categoryInputs, productInputs, restaurantInputs, userInputs } from "./formSource";
import { LoadingProvider } from "./context/LoadingContext";
import { AuthContext } from "./context/Auth";
import Driver from "./pages/driver/Driver";



function App() {

  

  
  return (
     

    <div className="app">
      
        <BrowserRouter>

          <Routes>
            <Route path="/">

              <Route index element={

                 
                  <Home />
                 
              } />

              
                
               
                
                
                
               
                

              
              </Route>
              
           
          </Routes>

        </BrowserRouter>
       
    </div>

   

  );
}

export default App;