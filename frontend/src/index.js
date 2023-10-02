import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";
import { HashRouter } from "react-router-dom"; // Change this line

ReactDOM.render(
  <ChakraProvider>
    <HashRouter> {/* Change this line */}
      <ChatProvider>
        <App />
      </ChatProvider>
    </HashRouter> {/* Change this line */}
  </ChakraProvider>,
  document.getElementById("root")
);

reportWebVitals();
