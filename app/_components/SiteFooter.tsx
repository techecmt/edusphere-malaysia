import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowUp, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

type FooterProps = {
  className?: string;
};

export default function SiteFooter({ className }: FooterProps) {
  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Student Affairs", href: "/student-affairs" },
    { label: "All Courses", href: "/courses" },
    { label: "Contact", href: "/#contact" },
  ];

  const courseLinks = [
    {
      label: "Nursing Aide Course",
      href: "/courses/advanced-certificate-in-nursing-aide",
    },
    {
      label: "Caregiver Course (Elderly, Autism & Child Care)",
      href: "/courses/advanced-certificate-in-professional-caregiving",
    },
    {
      label: "Healthcare Administration Course",
      href: "/courses/hospital-healthcare-administration",
    },
    {
      label: "Barista Course",
      href: "/courses/barista-arts",
    },
    {
      label: "All Courses in Malaysia",
      href: "/courses",
    },
  ];

  return (
    <footer
      id="contact"
      className={[
        "relative overflow-hidden rounded-t-[28px] bg-linear-to-b from-[#fffaf3] via-[#fdf4e7] to-[#f7ecff] text-(--brand-2) ring-1 ring-(--brand)/20",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-(--brand) via-(--brand-secondary) to-(--brand)" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-(--brand)/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-(--brand-secondary)/15 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(95,37,159,0.12) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-14 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.8fr_0.95fr_1.25fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Edusphere Academy — skills training academy in Malaysia"
                width={2976}
                height={797}
                sizes="(min-width: 640px) 300px, 260px"
                className="h-auto w-65 max-w-full sm:w-75"
              />
            </Link>

            <div className="mt-7 space-y-5">
              {[
                {
                  icon: FiPhone,
                  title: "Call us",
                  text: "+65 8221 6423",
                  href: "tel:+6582216423",
                },
                {
                  icon: FiMail,
                  title: "Need support?",
                  text: "info@edusphereacademy.com.my",
                  href: "mailto:info@edusphereacademy.com.my",
                },
                {
                  icon: FiMapPin,
                  title: "Visit us",
                  text: "45-02, Jalan Pendidikan 3, Taman Universiti, 81300 Skudai, Johor, Malaysia",
                  href: "https://www.google.com/maps/search/?api=1&query=45-02%2C%20Jalan%20Pendidikan%203%2C%20Taman%20Universiti%2C%2081300%20Skudai%2C%20Johor%2C%20Malaysia",
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group flex items-start gap-3 rounded-2xl p-2 -m-2 transition hover:bg-white/70"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-linear-to-br from-(--brand) to-[#E9B97F] text-white shadow-lg shadow-(--brand)/30 transition group-hover:scale-105">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-(--brand-secondary)/70">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-sm font-bold leading-relaxed text-(--brand-2)">
                      {item.text}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-extrabold uppercase tracking-wide text-(--brand-2)">
              Company Info
            </div>
            <div className="mt-3 h-1 w-12 rounded-full bg-linear-to-r from-(--brand) to-(--brand-secondary)" />
            <ul className="mt-5 space-y-3 text-sm font-medium text-(--brand-2)/75">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 transition hover:text-(--brand-secondary)"
                  >
                    <FiArrowRight
                      className="h-3.5 w-3.5 text-(--brand) transition group-hover:translate-x-0.5"
                      aria-hidden
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-extrabold uppercase tracking-wide text-(--brand-2)">
              Our Courses
            </div>
            <div className="mt-3 h-1 w-12 rounded-full bg-linear-to-r from-(--brand) to-(--brand-secondary)" />
            <ul className="mt-5 space-y-3 text-sm font-medium text-(--brand-2)/75">
              {courseLinks.map((x) => (
                <li key={x.label}>
                  <a
                    href={x.href}
                    className="group inline-flex items-center gap-2 transition hover:text-(--brand-secondary)"
                  >
                    <FiArrowRight
                      className="h-3.5 w-3.5 text-(--brand) transition group-hover:translate-x-0.5"
                      aria-hidden
                    />
                    {x.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="self-start rounded-3xl bg-linear-to-br from-(--brand-secondary) to-(--brand-2) p-7 text-white shadow-[0_30px_70px_-35px_rgba(95,37,159,0.65)]">
            <div className="text-xl font-extrabold">Subscribe Our Newsletter</div>
            <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-white/80">
              Get programme updates, admission news, and learning resources from
              Edusphere Academy.
            </p>
            <form className="mt-6 flex rounded-full bg-white/15 p-1.5 ring-1 ring-white/25 backdrop-blur-sm">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm font-semibold text-white outline-none placeholder:text-white/60"
              />
              <button
                type="submit"
                className="h-10 shrink-0 rounded-full bg-(--brand) px-5 text-sm font-bold text-(--brand-2) shadow-sm transition hover:bg-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 border-t border-(--brand)/25 py-6 text-center text-sm font-medium text-(--brand-2)/60">
          Copyright © {new Date().getFullYear()} Edusphere Academy. All Rights Reserved.
        </div>
      </div>

      <a
        href="#"
        className="absolute bottom-0 right-4 grid h-12 w-12 place-items-center rounded-t-2xl bg-(--brand-secondary) text-white shadow-lg transition hover:bg-(--brand-2) sm:right-8"
        aria-label="Back to top"
      >
        <FiArrowUp className="h-5 w-5" aria-hidden />
      </a>
    </footer>
  );
}

