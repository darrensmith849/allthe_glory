import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "All The Glory | From Darkness To Light",
    template: "%s | All The Glory"
  },
  description: site.description,
  openGraph: {
    title: "All The Glory",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/media/4f0992a6-4ba7-451c-b4dd-1642f6149b7d.jpg",
        width: 1200,
        height: 630,
        alt: "From Darkness To Light artwork"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "All The Glory",
    description: site.description,
    images: ["/media/4f0992a6-4ba7-451c-b4dd-1642f6149b7d.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
