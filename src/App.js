import React, { lazy, Suspense, useContext } from "react";
// Router
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Material UI Components
import { CssBaseline, ThemeProvider } from "@material-ui/core";

// Components
import { ContextSetting } from "./Context/ContextSetting";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Containers/Home";
import About from "./Containers/About";
import NotFound404 from "./NotFound404";
import CircularBackdrop from "./Components/Common/CircularBackdrop";

const RecipeLookup = lazy(() => import("./Components/Common/RecipeLookup"));
const Categories = lazy(() => import("./Containers/Categories"));
const Ingredients = lazy(() => import("./Containers/Ingredients"));
const Category = lazy(() => import("./Containers/Category"));
const Ingredient = lazy(() => import("./Containers/Ingredient"));
const Area = lazy(() => import("./Containers/Area"));
const FirstLetter = lazy(() => import("./Containers/FirstLetter"));
const SearchRecipe = lazy(() => import("./Containers/SearchRecipe"));

export default function App() {
  const { theme } = useContext(ContextSetting);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="try-recipe-app">
        <BrowserRouter>
          <Route path="/">
            <Navigation />
          </Route>

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/recipe/:id" exact>
              <Suspense fallback={<CircularBackdrop />}>
                <RecipeLookup />
              </Suspense>
            </Route>

            <Route path="/categories" exact>
              <Suspense fallback={<CircularBackdrop />}>
                <Categories />
              </Suspense>
            </Route>

            <Route path="/category/:id" exact>
              <Suspense fallback={<CircularBackdrop />}>
                <Category />
              </Suspense>
            </Route>

            <Route path="/ingredients" exact>
              <Suspense fallback={<CircularBackdrop />}>
                <Ingredients />
              </Suspense>
            </Route>

            <Route path="/ingredient/:id" exact>
              <Suspense fallback={<CircularBackdrop />}>
                <Ingredient />
              </Suspense>
            </Route>

            <Route path="/area/:id" exact>
              <Suspense fallback={<CircularBackdrop />}>
                <Area />
              </Suspense>
            </Route>

            <Route path="/first_letter/:id" exact>
              <Suspense fallback={<CircularBackdrop />}>
                <FirstLetter />
              </Suspense>
            </Route>

            <Route path="/search/:id" exact>
              <Suspense fallback={<CircularBackdrop />}>
                <SearchRecipe />
              </Suspense>
            </Route>

            <Route path="/about" exact>
              <About />
            </Route>

            <Route>
              <NotFound404 />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
