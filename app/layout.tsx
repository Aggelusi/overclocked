import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Navbar at the top */}
        {children} {/* Page content */}
      </body>
    </html>
  );
}
