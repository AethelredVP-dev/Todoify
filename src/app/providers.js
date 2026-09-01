"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/lib/ui/theme";
import { Provider } from "react-redux";
import { store } from "@/store/Store";
import Header from "@/lib/components/Header";

export default function Providers({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
