import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import pages from "./data/pages";
import { Context } from "./context/LanguageContext";
import { GlobalProvider } from "./context/GlobalState";
import ReactGA from "react-ga"

function App() {
  useEffect(() => {
    ReactGA.initialize("G-EYXW0CL7FR")
    ReactGA.pageview(window.location.pathname + window.location.search)
    console.log(window.location.pathname + window.location.search)

  }, [window.location.pathname])
  const routeMaps = pages.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));
  return (
    <Context>
      <GlobalProvider>
        <BrowserRouter>

          <Switch>
            {routeMaps}
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>
        </BrowserRouter>
      </GlobalProvider>
    </Context>
  );
}

export default App;
