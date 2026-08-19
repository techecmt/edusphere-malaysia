import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import JsonLd from "../_components/JsonLd";
import { breadcrumbJsonLd } from "../data/seo";

export const metadata: Metadata = {
  title: "About Us — Skills Training Institute in Malaysia",
  description:
    "Learn about Edusphere Academy, a Malaysia-based skills training institute at Beach Road delivering hands-on certificate programmes in healthcare, caregiving, hospitality, and more — with face-to-face and e-learning pathways.",
  keywords: [
    "about Edusphere Academy",
    "skills training institute Malaysia",
    "vocational education Malaysia",
    "training academy Beach Road Malaysia",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Edusphere Academy — Skills Training Institute in Malaysia",
    description:
      "Malaysia-based skills training institute delivering hands-on, industry-relevant certificate programmes at Beach Road.",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <AboutContent />
    </>
  );
}
