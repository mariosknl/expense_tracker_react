import React from "react";
import ReactDOM from "react-dom";
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="bd248b12-d40a-4ff1-bab3-fad821e957a6" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
