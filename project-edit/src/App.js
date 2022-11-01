import EmployeeList from "./components/EmployeeList";
import EmployeeContextProvider from "./contexts/EmployeeContext";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <Router>
            <Switch>
                <Route path="/register">
                  <Register />
                </Route>

                <Route path="/">
                  <Login />
                </Route>

                <Route path="/employee">
                        <EmployeeContextProvider>
                          <EmployeeList />
                        </EmployeeContextProvider>
                </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
