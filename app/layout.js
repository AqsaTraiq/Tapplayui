import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#0d1117", margin: 0 }}>
        <Navbar />
        <div style={{ paddingTop: "64px" }}>{children}</div>
      </body>
    </html>
  );
}


