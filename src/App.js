import "./App.css";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header";
import AddCompany from "./components/Company/AddCompany";
import { Provider } from "react-redux";
import store from "./store";
import CompanyDetails from "./components/Company/CompanyDetails";
import StockDetails from "./components/Company/StockDetails";
import Landing from "./components/Layout/Landing";
import Register from "./components/Layout/Authentication/Register";
import Login from "./components/Layout/Authentication/Login";
import jwt_decode from "jwt-decode";
import setJWTToken from "./utils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecureRoute from "./utils/SecureRoute";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken,
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          {
            // Open Routes
          }
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {
            // Authorized Routes
          }
          <Switch>
            <SecureRoute exact path="/dashboard" component={Dashboard} />
            <SecureRoute exact path="/addCompany" component={AddCompany} />
            <SecureRoute
              exact
              path="/companyDetails"
              component={CompanyDetails}
            />
            <SecureRoute
              exact
              path="/stockDetails/:companyCode"
              component={StockDetails}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
