import { Provider } from "jotai";
import "./App.css";

import Router from "./router";

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  );
}

export default App;
