import "./App.css";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import AddCompany from "./components/Company/AddCompany";
import { Provider } from "react-redux";
import store from "./store";
import CompanyDetails from "./components/Company/CompanyDetails";
import StockDetails from "./components/Company/StockDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addCompany" component={AddCompany} />
          <Route exact path="/companyDetails" component={CompanyDetails} />
          <Route
            exact
            path="/stockDetails/:companyCode"
            component={StockDetails}
          />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
