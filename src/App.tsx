import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { userStore } from "./store";

import Layout from "./components/Layout/Layout";

import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App(): JSX.Element {
  return (
    <Provider store={userStore}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
