import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./styles.css";
import { captureClickIds } from "./lib/click-ids";

// Persist Google Ads click IDs (gclid/wbraid/gbraid) from the landing URL —
// the quote form attaches them to enquiries for offline conversion uploads.
captureClickIds();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
