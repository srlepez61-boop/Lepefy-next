import "./globals.css";
import LepefyShell from "../components/LepefyShell";

export const metadata = {
  title: "Lepefy",
  description: "A simple Spotify-style music app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LepefyShell>{children}</LepefyShell>
      </body>
    </html>
  );
}
