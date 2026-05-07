import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import ThemeProvider from "../components/ThemeProvider";
import BootstrapClient from "../components/BootstrapClient";

export const metadata = {
  title: "Shuhan Zhang - Personal website",
  description: "Personal website for me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ThemeProvider>
          {children}
          <BootstrapClient />
        </ThemeProvider>
      </body>
    </html>
  );
}
