import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import JsonLd from "./_components/JsonLd";
import { organizationJsonLd, SITE } from "./data/seo";

const poppins = Poppins({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  title: {
    default: "Edusphere Academy | Skills Training Academy in Malaysia",
    template: "%s | Edusphere Academy",
  },
  description:
    "Edusphere Academy is a skills training academy in Taman Perling, Johor Bahru, Johor offering hands-on certificate courses in nursing aide, caregiving, healthcare administration, and barista arts.",
  keywords: [
    "skills training academy Malaysia",
    "healthcare courses Malaysia",
    "caregiver course Malaysia",
    "nursing aide course Malaysia",
    "healthcare administration course Malaysia",
    "barista course Malaysia",
    "certificate courses Johor Bahru Johor",
  ],
  applicationName: SITE.name,
  category: "education",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/fav.png", type: "image/png" },
    ],
    apple: [{ url: "/fav.png" }],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "theme-color": "#2A003F",
    "msapplication-TileColor": "#2A003F",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: SITE.name,
    url: "/",
    title: "Edusphere Academy | Skills Training Academy in Malaysia",
    description:
      "Hands-on certificate courses in nursing aide, caregiving, healthcare administration, and barista arts in Johor Bahru, Johor.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edusphere Academy | Skills Training Academy in Malaysia",
    description:
      "Hands-on certificate courses in nursing aide, caregiving, healthcare administration, and barista arts in Johor Bahru, Johor.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-MY"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId="GTM-N369GGSW" />
      <head>
        <link rel="author" href="https://www.edusphereacademy.com.my" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N369GGSW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <JsonLd data={organizationJsonLd()} />
        {children}
      </body>
    </html>
  );
}
