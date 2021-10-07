import { Switch, Route } from "react-router-dom";

import PageSeasons from "../pages/Seasons";

import Layout from "../components/Layout";

import DriverPage from "../components/Drivers/DriverPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <PageSeasons />
        </Route>
        <Route exact path="/driverPage/:id" component={DriverPage} />
      </Switch>
    </Layout>
  );
}

export default App;
