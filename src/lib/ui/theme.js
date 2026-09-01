import { createTheme } from "@mui/material/styles";

// Graphite dark (default) + clean light, violet accent, Linear-inspired
const theme = createTheme({
  cssVariables: { colorSchemeSelector: "class" }, // mode switch via <html> class [34]
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: "#8B7CFF",
          light: "#A89CFF",
          dark: "#6C5CE0",
          contrastText: "#0F0D1A",
        },
        secondary: { main: "#2DD4BF" },
        background: { default: "#0B0C0E", paper: "#14161A" },
        text: { primary: "#EDEEF0", secondary: "#c6d3df" },
        divider: "rgba(255, 255, 255, 0.08)",
        error: { main: "#F47067" },
        warning: { main: "#D29922" },
        info: { main: "#579BFF" },
        success: { main: "#3FB950" },
      },
    },
    light: {
      palette: {
        primary: {
          main: "#6A5AE0",
          light: "#8B7CFF",
          dark: "#5246C4",
          contrastText: "#FFFFFF",
        },
        secondary: { main: "#0F9E8E" },
        background: { default: "#F5F6F7", paper: "#FFFFFF" },
        text: { primary: "#1B1E23", secondary: "#93a2b4" },
        divider: "rgba(0, 0, 0, 0.08)",
      },
    },
  },
  shape: { borderRadius: 10 },
  typography: {
    // System font stack — no font downloads, no network dependency
    fontFamily: `Inter, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`,
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { borderRadius: 8 } },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } }, // flat, border-based surfaces
    MuiDialog: { styleOverrides: { paper: { borderRadius: 16 } } },
    MuiChip: { styleOverrides: { root: { borderRadius: 8 } } },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // Thin, subtle scrollbars in both schemes
          scrollbarColor: "#3A3F47 transparent",
          "&::-webkit-scrollbar": { width: 8 },
          "&::-webkit-scrollbar-thumb": {
            background: "#3A3F47",
            borderRadius: 4,
          },
        },
      },
    },
  },
});

export default theme;
