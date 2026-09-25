export const SITE = {
  name: "Edusphere Academy",
  legalName: "Edusphere Academy Pte Ltd",
  url: "https://www.edusphereacademy.com.my",
  phone: "+65 8221 6423",
  phoneIntl: "+6582216423",
  email: "info@edusphereacademy.com.my",
  logo: "/logo.png",
  address: {
    street: "45-02, Jalan Pendidikan 3, Taman Universiti",
    locality: "Skudai",
    region: "Johor",
    postalCode: "81300",
    country: "Malaysia",
    countryCode: "MY",
    formatted:
      "45-02, Jalan Pendidikan 3, Taman Universiti, 81300 Skudai, Johor, Malaysia",
  },
  geo: {
    latitude: 1.534042,
    longitude: 103.6253388,
  },
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=45-02%2C%20Jalan%20Pendidikan%203%2C%20Taman%20Universiti%2C%2081300%20Skudai%2C%20Johor%2C%20Malaysia",
  mapEmbedUrl:
    "https://www.google.com/maps?q=45-02%2C%20Jalan%20Pendidikan%203%2C%20Taman%20Universiti%2C%2081300%20Skudai%2C%20Johor%2C%20Malaysia&output=embed",
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "18:00",
  },
  socials: [
    "https://www.facebook.com/profile.php?id=61589531251092",
    "https://www.youtube.com/@edusphereacademy",
  ],
};

export type CourseSeo = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  courseName: string;
  courseDescription: string;
  credentialAwarded: string;
  priceMYR: number;
  teaches: string[];
  occupations: string[];
  faqs: { q: string; a: string }[];
};

export const courseSeoBySlug: Record<string, CourseSeo> = {
  "advanced-certificate-in-nursing-aide": {
    slug: "advanced-certificate-in-nursing-aide",
    metaTitle: "Nursing Aide Course in Malaysia (Advanced Certificate)",
    metaDescription:
      "36-hour Advanced Certificate in Nursing Aide at Edusphere Academy, Taman Universiti, Skudai, Johor. First aid & CPR/AED, wound care support and physiotherapy support skills. Weekend classes. Enquire now.",
    keywords: [
      "nursing aide course Malaysia",
      "healthcare assistant course Malaysia",
      "patient care assistant training Malaysia",
      "first aid CPR course Malaysia",
      "wound care course Malaysia",
      "nursing aide certificate Skudai Johor",
    ],
    courseName: "Advanced Certificate in Nursing Aide",
    courseDescription:
      "A 36-hour part-time programme in Malaysia combining classroom learning with hands-on practical training in first aid & CPR/AED, wound care support, and physiotherapy support skills — preparing students for healthcare support roles in hospitals, nursing homes, rehabilitation centres, and home care settings.",
    credentialAwarded: "Advanced Certificate in Nursing Aide",
    priceMYR: 600,
    teaches: [
      "First aid and emergency response",
      "CPR and AED skills",
      "Wound care support and management",
      "Physiotherapy support skills",
      "Infection prevention and control",
      "Safe patient handling and mobility",
    ],
    occupations: [
      "Nursing Aide",
      "Healthcare Assistant",
      "Patient Care Assistant",
      "Home Care Aide",
    ],
    faqs: [
      {
        q: "Who is the Advanced Certificate in Nursing Aide for?",
        a: "The programme suits healthcare support staff, caregivers, and beginners who want structured training in first aid, CPR/AED, wound care support, and physiotherapy support skills for hospitals, nursing homes, and home care in Malaysia.",
      },
      {
        q: "How long is the nursing aide course at Edusphere Academy?",
        a: "It is a 36-hour part-time programme over 12 weeks, with weekend face-to-face classes at our Taman Universiti, Skudai, Johor campus.",
      },
      {
        q: "What certificate will I receive?",
        a: "Graduates receive the Advanced Certificate in Nursing Aide from Edusphere Academy after completing modules and assessments.",
      },
      {
        q: "Where is Edusphere Academy located?",
        a: "45-02, Jalan Pendidikan 3, Taman Universiti, 81300 Skudai, Johor, Malaysia. The campus is open Monday to Sunday, 9am to 6pm.",
      },
    ],
  },
  "advanced-certificate-in-professional-caregiving": {
    slug: "advanced-certificate-in-professional-caregiving",
    metaTitle: "Caregiver Course in Malaysia — Elderly, Autism & Child Care",
    metaDescription:
      "36-hour Advanced Certificate in Professional Caregiving at Edusphere Academy, Taman Universiti, Skudai, Johor. Hands-on elderly care, autism care and child care training. Weekend classes. Enquire now.",
    keywords: [
      "caregiver course Malaysia",
      "caregiver training Malaysia",
      "elderly care course Malaysia",
      "autism caregiving course Malaysia",
      "childcare course Malaysia",
      "caregiver training for domestic helpers Malaysia",
    ],
    courseName:
      "Advanced Certificate in Professional Caregiving (Elderly, Autism & Child Care)",
    courseDescription:
      "A 36-hour part-time caregiving programme in Malaysia covering three high-demand specialisations — elderly care, autism care, and child care — with hands-on, person-centred training for home, community, and institutional care settings.",
    credentialAwarded: "Advanced Certificate in Professional Caregiving",
    priceMYR: 600,
    teaches: [
      "Elderly caregiving",
      "Autism care support",
      "Child care",
      "Person-centred care",
      "Daily living assistance",
    ],
    occupations: [
      "Professional Caregiver",
      "Elderly Care Assistant",
      "Special Needs Support Aide",
      "Childcare Support Assistant",
    ],
    faqs: [
      {
        q: "What does the professional caregiving course cover?",
        a: "The 36-hour programme covers elderly care, autism care, and child care with hands-on, person-centred training for home, community, and institutional settings in Malaysia.",
      },
      {
        q: "Do I need prior experience to join the caregiver course?",
        a: "No prior clinical qualification is required. The course is designed for new and practising caregivers who want formal certificate training.",
      },
      {
        q: "When are classes held?",
        a: "Classes run on weekends in a part-time format at our Skudai, Johor campus, so you can study while working.",
      },
      {
        q: "What qualification do I get after completing the course?",
        a: "You will be awarded the Advanced Certificate in Professional Caregiving (Elderly, Autism & Child Care) from Edusphere Academy.",
      },
    ],
  },
  "hospital-healthcare-administration": {
    slug: "hospital-healthcare-administration",
    metaTitle: "Healthcare Administration Course in Malaysia",
    metaDescription:
      "36-hour Advanced Certificate in Hospital & Healthcare Administration at Edusphere Academy, Taman Universiti, Skudai, Johor. Patient administration, medical records, healthcare IT and service excellence. Enquire now.",
    keywords: [
      "healthcare administration course Malaysia",
      "hospital administration course Malaysia",
      "medical records course Malaysia",
      "patient service associate course Malaysia",
      "clinic administration training Malaysia",
    ],
    courseName: "Advanced Certificate in Hospital & Healthcare Administration",
    courseDescription:
      "A 36-hour, industry-focused programme in Malaysia building practical skills in healthcare operations, patient administration, medical records, healthcare IT systems, and customer service excellence for administrative roles in hospitals, clinics, and healthcare organisations.",
    credentialAwarded: "Advanced Certificate in Hospital & Healthcare Administration",
    priceMYR: 1200,
    teaches: [
      "Healthcare operations",
      "Patient administration",
      "Medical records management",
      "Healthcare IT systems",
      "Customer service excellence",
    ],
    occupations: [
      "Hospital Administrative Assistant",
      "Patient Service Coordinator",
      "Clinic Front Office Executive",
      "Healthcare Operations Staff",
    ],
    faqs: [
      {
        q: "What skills does the healthcare administration course teach?",
        a: "The programme builds practical skills in healthcare operations, patient administration, medical records, healthcare IT systems, and customer service for hospitals, clinics, and healthcare organisations in Malaysia.",
      },
      {
        q: "How long is the hospital administration certificate programme?",
        a: "It is 36 contact hours delivered part-time over 12 weeks with weekend classes at Edusphere Academy, Skudai, Johor.",
      },
      {
        q: "Is this course suitable for clinic front desk staff?",
        a: "Yes. Patient service coordinators, clinic front office teams, and hospital administrator assistants are among the intended learners.",
      },
      {
        q: "What credential is awarded?",
        a: "Graduates receive the Advanced Certificate in Hospital & Healthcare Administration from Edusphere Academy.",
      },
    ],
  },
  "barista-arts": {
    slug: "barista-arts",
    metaTitle: "Barista Course in Malaysia (Certificate in Barista Arts)",
    metaDescription:
      "36-hour Certificate in Barista Arts at Edusphere Academy, Taman Universiti, Skudai, Johor. Espresso extraction, milk texturing, latte art and café service, hands-on. Weekend classes. Enquire now.",
    keywords: [
      "barista course Malaysia",
      "barista training Malaysia",
      "coffee making class Malaysia",
      "latte art class Malaysia",
      "barista certificate Malaysia",
      "F&B course Malaysia",
    ],
    courseName: "Certificate in Barista Arts",
    courseDescription:
      "A 36-hour part-time barista training programme in Malaysia covering espresso extraction, milk texturing, latte art, and café service — preparing students for barista and café roles in coffee chains, hotels, and specialty coffee establishments.",
    credentialAwarded: "Certificate in Barista Arts",
    priceMYR: 600,
    teaches: [
      "Espresso extraction",
      "Milk texturing",
      "Latte art",
      "Café service and workflow",
      "Coffee fundamentals",
    ],
    occupations: ["Barista", "Café Service Crew", "Coffee Specialist"],
    faqs: [
      {
        q: "Do I need experience to join the barista course in Malaysia?",
        a: "No. The Certificate in Barista Arts is suitable for beginners and café crew who want structured hands-on training on real espresso equipment.",
      },
      {
        q: "What will I learn in the barista programme?",
        a: "Espresso extraction and calibration, milk texturing, latte art, specialty beverages, café workflow, hygiene, and customer service over 36 hours.",
      },
      {
        q: "Where is the barista course held?",
        a: "At Edusphere Academy, 45-02, Jalan Pendidikan 3, Taman Universiti, 81300 Skudai, Johor, Malaysia, with weekend part-time sessions.",
      },
      {
        q: "How do I enrol in the barista course?",
        a: "Submit an enquiry on the course page or contact info@edusphereacademy.com.my or +65 8221 6423. Our team will advise intake and fees.",
      },
    ],
  },
};

export function absoluteUrl(path: string) {
  return `${SITE.url}${path === "/" ? "" : path}`;
}

const organizationId = `${SITE.url}/#organization`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": organizationId,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl(SITE.logo),
    image: absoluteUrl(SITE.logo),
    telephone: SITE.phoneIntl,
    email: SITE.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    hasMap: SITE.mapUrl,
    areaServed: {
      "@type": "Country",
      name: "Malaysia",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: SITE.openingHours.days,
        opens: SITE.openingHours.opens,
        closes: SITE.openingHours.closes,
      },
    ],
    sameAs: SITE.socials,
  };
}

export function courseJsonLd(seo: CourseSeo) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${absoluteUrl(`/courses/${seo.slug}`)}#course`,
    name: seo.courseName,
    description: seo.courseDescription,
    url: absoluteUrl(`/courses/${seo.slug}`),
    provider: { "@id": organizationId },
    educationalCredentialAwarded: seo.credentialAwarded,
    teaches: seo.teaches,
    availableLanguage: "en",
    timeRequired: "PT36H",
    offers: {
      "@type": "Offer",
      category: "Paid",
      price: seo.priceMYR,
      priceCurrency: "MYR",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/courses/${seo.slug}`),
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["Onsite", "Online"],
      courseWorkload: "PT36H",
      location: {
        "@type": "Place",
        name: `${SITE.name} — Taman Universiti, Skudai, Johor`,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.locality,
          addressRegion: SITE.address.region,
          postalCode: SITE.address.postalCode,
          addressCountry: SITE.address.countryCode,
        },
      },
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
};

export function articleJsonLd(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: "en-MY",
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords.join(", "),
  };
}
