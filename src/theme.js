import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//color designe token
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#dce1e3",
          200: "#b8c3c6",
          300: "#94a5a8",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#e0f7f1",
          200: "#c2eee3",
          300: "#a3e6d5",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f9e1e0",
          200: "#f2c4c1",
          300: "#eba6a3",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e7e8fe",
          200: "#cfcffd",
          300: "#b7b6fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
        sidebarhover: {
          1: "#141b2d",
        },
      }
    : {
        grey: {
          100: "#1a1a1a",
          200: "#333333",
          300: "#4d4d4d",
          400: "#666666",
          500: "#808080",
          600: "#999999",
          700: "#D1D1D1",
          800: "#cccccc",
          900: "#e6e6e6",
        },
        primary: {
          100: "#f0f1f2",
          200: "#d1d3d5",
          300: "#b2b5b8",
          400: "#f2f0f0",
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#13302a",
          200: "#266054",
          300: "#39807e",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#35110f",
          200: "#6a221e",
          300: "#9f332e",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#1a1b33",
          200: "#343666",
          300: "#4e5199",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
        sidebarhover: {
          1: "#D1D1D1",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[400],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#D1D1D1",
            },
          }),
    },
    typography: {
      fontFamily: ["Noto Sans", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Noto Sans", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Noto Sans", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Noto Sans", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Noto Sans", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Noto Sans", "sans-serif"].join(","),
        fontSize: 14,
      },
      h6: {
        fontFamily: ["Noto Sans", "sans-serif"].join(","),
        fontSize: 10,
      },
    },
  };
};

// create react context for color mode

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
