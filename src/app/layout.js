import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import Providers from "./providers";
import "./globals.css";
import Header from "@/lib/components/Header";

export const metadata = {
  title: "Kanban",
  description: "A Todoist-style productivity app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Runs before React, sets the scheme class on <html> — no dark-mode flicker [36] */}
        <InitColorSchemeScript attribute="class" defaultMode="dark" />
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
