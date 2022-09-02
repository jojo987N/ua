import Home from "./pages/home/Home";
import List from "./pages/list/List";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
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
              <Route path="documentation">
                  <Route index element={<List key="documentation" type="documentation" />} />
              </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;