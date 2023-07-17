// import "./App.css";
// import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <div className="container">This is my home page</div>
//     </div>
//   );
// }

// export default App;

import React, { lazy, Suspense } from "react"; // Must be imported for webpack to work
import "./App.css";

const Header = lazy(() => import("HeaderApp/Header"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <div className="container">Demo home page testing</div>
    </div>
  );
}

export default App;
