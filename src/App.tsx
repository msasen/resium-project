import * as Cesium from "cesium";

import Map from "@/modules/Globe/Map/Index";

// import OnClick from "./Test/OnClick";

Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5M2VhM2UxZC1iZmM0LTRhMDUtOWYxOC1mNDdjNTMyOWE2NGMiLCJpZCI6MTAxNjEwLCJpYXQiOjE2NTgxNTI2ODZ9.B26PPM8laiqfl2OdLS9peyWpPbMfERJyvBAD_XsM7LI";

function App() {
  return (
    <div className="App">
      <Map />
      {/* <OnClick /> */}
    </div>
  );
}

export default App;
