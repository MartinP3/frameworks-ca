import React from "react";
import "./App.css";
import { Layout } from './components/Layout';
import { SiteRoutes } from './components/Routes';

function App() {
  return (
  <Layout>
    <SiteRoutes />
  </Layout>
  )
}

export default App;