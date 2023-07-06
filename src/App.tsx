import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerBindings, {
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeadlessInferencer } from "@refinedev/inferencer/headless";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <Refine
          dataProvider={dataProvider(
            "https://api.spoonacular.com"
          )}
          resources={[
            {
              name: "recipes/complexSearch?apiKey=374947ff09cc4971aaf246907e4bfdd6",
              list: "/recipes",
            },
          ]}
          routerProvider={routerBindings}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          <Routes>
            <Route index element={<NavigateToResource resource="recipes/complexSearch?apiKey=374947ff09cc4971aaf246907e4bfdd6" />} />
            <Route path="/recipes">
              <Route index element={<HeadlessInferencer />} />
            </Route>
          </Routes>
          <RefineKbar />
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
