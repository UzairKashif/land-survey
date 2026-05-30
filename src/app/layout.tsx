import type { Metadata } from "next";
import "@fontsource/viga/400.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "LAND Survey | Geospatial and Surveying Engineering",
  description:
    "LAND Survey is a UK registered geospatial engineering firm delivering precise land, marine, and mapping services across Africa and the Middle East.",
  openGraph: {
    title: "LAND Survey | Geospatial and Surveying Engineering",
    description:
      "Total surveying solutions for complex projects on land, coast, and seabed. UK registered, delivering across Africa and the Middle East.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
