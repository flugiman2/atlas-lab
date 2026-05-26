import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SmoothScroll from "@/components/SmoothScroll";
import Home from "@/pages/Home";

function App() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
          <Toaster
            theme="dark"
            position="bottom-center"
            toastOptions={{
              style: {
                background: "#0c0c0c",
                color: "#f5f5f7",
                border: "1px solid rgba(255,255,255,0.08)",
              },
            }}
          />
        </div>
      </SmoothScroll>
    </LanguageProvider>
  );
}

export default App;
