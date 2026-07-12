import Image from "next/image";
import { FiArrowRight, FiArrowUp } from "react-icons/fi";

type FooterProps = {
  className?: string;
};

export default function SiteFooter({ className }: FooterProps) {
  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Student Affairs", href: "/student-affairs" },
    { label: "Courses", href: "/#courses" },
    { label: "Contact", href: "/#contact" },
  ];

  const categories = [
    "Physiotherapy Support",
    "Wound Care Support",
    "Autism Caregiving",
    "Therapy Assistant Skills",
    "Childcare Management",
  ];

  return (
    <footer
      id="contact"
      className={[
        "relative overflow-hidden rounded-t-[28px] bg-[#10143a] text-white",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#faa426]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pt-14 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.8fr_0.95fr_1.25fr] lg:gap-12">
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              <span className="grid h-20 w-20 place-items-center overflow-hidden rounded-2xl bg-white p-2 ring-1 ring-white/10 sm:h-24 sm:w-24">
                <Image
                  src="/logo.png"
                  alt="Edusphere Academy"
                  width={96}
                  height={192}
                  className="h-full w-full object-contain"
                />
              </span>
            </a>

            <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/60">
              Edusphere Academy delivers industry-relevant skill development and
              vocational education programmes for learners across Malaysia.
            </p>
          </div>

          <div>
            <div className="text-sm font-extrabold uppercase tracking-wide">
              Company Info
            </div>
            <div className="mt-3 h-px w-16 bg-white/30" />
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 hover:text-white"
                  >
                    <FiArrowRight
                      className="h-3.5 w-3.5 text-[#faa426] transition group-hover:translate-x-0.5"
                      aria-hidden
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-extrabold uppercase tracking-wide">
              Categories
            </div>
            <div className="mt-3 h-px w-16 bg-white/30" />
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {categories.map((x) => (
                <li key={x}>
                  <a
                    href="/#courses"
                    className="group inline-flex items-center gap-2 hover:text-white"
                  >
                    <FiArrowRight
                      className="h-3.5 w-3.5 text-[#faa426] transition group-hover:translate-x-0.5"
                      aria-hidden
                    />
                    {x}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="self-start rounded-3xl bg-linear-to-br from-[#faa426] to-[#d98a16] p-7 text-[#193764] shadow-[0_28px_80px_-55px_rgba(250,164,38,0.8)]">
            <div className="text-xl font-extrabold">Subscribe Our Newsletter</div>
            <p className="mt-3 max-w-sm text-sm font-medium leading-relaxed text-[#193764]/80">
              Get programme updates, admission news, and learning resources from
              Edusphere Academy.
            </p>
            <form className="mt-6 flex rounded-full bg-white/15 p-1.5 ring-1 ring-[#193764]/15 backdrop-blur-sm">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm font-semibold text-[#193764] outline-none placeholder:text-[#193764]/60"
              />
              <button
                type="submit"
                className="h-10 shrink-0 rounded-full bg-white px-5 text-sm font-bold text-[#193764] shadow-sm transition hover:bg-[#193764] hover:text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 py-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>
            Copyright © {new Date().getFullYear()} Edusphere Academy. All Rights Reserved.
          </div>
        </div>
      </div>

      <a
        href="#"
        className="absolute bottom-0 right-4 grid h-12 w-12 place-items-center rounded-t-2xl bg-[#faa426] text-[#193764] shadow-lg transition hover:brightness-110 sm:right-8"
        aria-label="Back to top"
      >
        <FiArrowUp className="h-5 w-5" aria-hidden />
      </a>
    </footer>
  );
}
