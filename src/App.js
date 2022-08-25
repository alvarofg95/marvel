import React from "react";
import RouterControl from "components/router";
import Header from "components/header";
import Footer from "components/footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <RouterControl />
      </div>
      <Footer />
    </>
  );
}

export default App;
