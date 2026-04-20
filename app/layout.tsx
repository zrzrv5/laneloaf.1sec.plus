import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://laneloaf.1sec.plus"),
  title: "LaneLoaf: Dashcam Viewer & GPX Trip Log for Mac and iPhone",
  description:
    "Local-first dashcam viewer for Mac and iPhone. Import MP4 footage and GPX files, replay drives on a map, inspect telemetry, and export trip logs.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://laneloaf.1sec.plus/",
    siteName: "LaneLoaf",
    title: "LaneLoaf: Dashcam Viewer & GPX Trip Log",
    description:
      "Import MP4 footage and GPX files, replay drives on one map, inspect telemetry, and export trip logs.",
    images: [
      {
        url: "/icon.png",
        width: 1024,
        height: 1024,
        alt: "LaneLoaf app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaneLoaf: Dashcam Viewer & GPX Trip Log",
    description:
      "Local-first dashcam viewer for Mac and iPhone. Replay drives and export GPX trip logs.",
    images: ["/icon.png"],
  },
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

