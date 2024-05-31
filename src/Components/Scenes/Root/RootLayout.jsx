import React, { useState } from "react";
import Auth from "../Authentication/Auth";
import Sidebar from "../Global/Sidebar";
import Topbar from "../Global/Topbar";
import { Outlet } from "react-router-dom";
import { ColorModeContext, useMode } from "../../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

function RootLayout() {
  const [theme, colorMode] = useMode();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <main>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {!isLoggedIn ? (
            <Auth handleAuth={handleAuth} />
          ) : (
            <div className="app">
              <Sidebar />
              <main className="content">
                <Topbar />
                <Outlet />
              </main>
            </div>
          )}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </main>
  );
}

export default RootLayout;
