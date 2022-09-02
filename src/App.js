import Home from "./pages/home/Home";

import PrivateRoute from "./components/privateRoute/PrivateRoute";
 


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