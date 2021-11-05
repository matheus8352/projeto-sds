import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home"


function AppRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
            <Switch>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </BrowserRouter>
    );
  };
  
  export default AppRoutes;