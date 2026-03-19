import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";
import "./styles/globals.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </React.StrictMode>
  );
}
```

So the final correct structure is:
```
frontend/
├── index.html          ← src="/src/main.tsx"
├── src/
│   ├── main.tsx        ← imports ./router and ./styles/globals.css
│   ├── router.tsx      ← imports ./pages/...
│   ├── styles/
│   │   └── globals.css
│   └── pages/
