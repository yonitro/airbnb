import BusyIndicator from "react-busy-indicator";
import React from "react";
import { Link, NotFoundBoundary, useLoadingRoute } from "react-navi";
import { GlobalProvider } from "../../context/GlobalContext";

import Header from "../widgets/Header";
import Catogary from "../widgets/Catogary";
import Footer from "../widgets/Footer";

export default function Layout({ children }) {
  // If there is a route that hasn't finished loading, it can be
  // retrieved with `useLoadingRoute()`.
  let loadingRoute = useLoadingRoute();

  return (
    <div className="Layout">
      {/* This component shows a loading indicator after a delay */}
      <BusyIndicator isBusy={!!loadingRoute} delayMs={200} />
      <GlobalProvider>
        <Header />
        <Catogary/>
        <main>
          <NotFoundBoundary render={renderNotFound}>
            {children}
          </NotFoundBoundary>
        </main>
        <Footer />
      </GlobalProvider>
    </div>
  );
}

function renderNotFound() {
  return (
    <div className="Layout-error">
      <h1>404 - Not Found</h1>
    </div>
  );
}
