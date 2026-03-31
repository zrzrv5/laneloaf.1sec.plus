import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LaneLoaf – Dashcam trip library",
  description:
    "Turn dashcam footage and GPX routes into a browsable trip library with export-ready routes, GPX logs, and trip videos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body-root">
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}

