"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  FiChevronRight,
  FiMapPin,
  FiMail,
  FiMenu,
  FiPhone,
  FiX,
} from "react-icons/fi";
import { SITE, SITE_CONTACT_LINES } from "../data/seo";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Student Affairs", href: "/student-affairs" },
  { label: "Courses", href: "/courses" },
  { label: "Contact", href: "/#contact" },
] as const;

const REGISTER_URL = "https://form.jotform.com/262932743826465";

function RegisterNowButton({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center rounded-2xl bg-(--brand) font-extrabold text-(--brand-2) shadow-lg shadow-[#DDA15E]/35 transition hover:brightness-105 active:scale-[0.98]",
        className,
      ].join(" ")}
    >
      Register Now
    </a>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const topBarLeft = useMemo(
    () => [
      ...SITE_CONTACT_LINES.map((line) => ({
        icon: FiPhone,
        label: line.headerLabel,
        href: line.href,
      })),
      {
        icon: FiMapPin,
        label: SITE.address.formatted,
      },
      {
        icon: FiMail,
        label: SITE.email,
        href: `mailto:${SITE.email}`,
      },
    ],
    []
  );

  return (
    <header id="home" className="relative z-50">
      <div className="hidden lg:block border-b border-(--border) bg-(--surface-2)">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between gap-6 py-2 text-sm text-slate-600">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {topBarLeft.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 shrink-0 text-(--brand)" aria-hidden />
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-medium text-slate-700 hover:text-(--brand)"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="font-medium text-slate-700">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={[
          "sticky top-0 border-b border-(--border) bg-white/90 backdrop-blur supports-backdrop-filter:bg-white/70",
          scrolled ? "shadow-[0_12px_30px_-20px_rgba(2,6,23,0.35)]" : "",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-[78px] items-center justify-between gap-3 lg:h-[84px]">
            <Link href="/" className="flex min-w-0 items-center">
              <Image
                src="/logo.png"
                alt="Edusphere Academy"
                width={190}
                height={64}
                priority
                className="h-12 w-auto rounded-md object-contain sm:h-15"
              />
            </Link>

            <nav className="hidden flex-1 justify-center lg:flex">
              <div className="flex items-center gap-1">
                {navItems.map((item) =>
                  item.href.startsWith("/") && !item.href.startsWith("/#") ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    >
                      {item.label}
                    </a>
                  )
                )}
              </div>
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <RegisterNowButton className="h-10 px-3 text-xs sm:h-11 sm:px-5 sm:text-sm" />
              <div className="flex items-center gap-2 lg:hidden">
                {SITE_CONTACT_LINES.map((line) => (
                  <a
                    key={line.display}
                    href={line.href}
                    target={line.href.startsWith("http") ? "_blank" : undefined}
                    rel={line.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="hidden h-10 w-10 place-items-center rounded-2xl border border-(--border) bg-(--surface-2) text-(--brand-2) shadow-sm shadow-black/5 min-[420px]:grid"
                    aria-label={line.headerLabel}
                  >
                    <FiPhone className="h-4.5 w-4.5" aria-hidden />
                  </a>
                ))}
                <button
                  type="button"
                  className="inline-flex h-10 items-center gap-2 rounded-2xl bg-(--brand-2) px-3 text-sm font-extrabold text-white shadow-lg shadow-[#32004F]/20 active:scale-[0.98] sm:h-11 sm:px-4"
                  onClick={() => setMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <span className="hidden sm:inline">Menu</span>
                  <FiMenu className="h-5 w-5" aria-hidden />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-60 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu overlay"
          />
          <div className="absolute right-0 top-0 flex h-full w-[min(340px,90vw)] flex-col overflow-hidden rounded-l-4xl bg-white shadow-2xl">
            <div className="relative overflow-hidden bg-linear-to-br from-[#32004F] via-[#5F259F] to-[#2A003F] px-4 pb-4 pt-3.5 text-white">
              <div className="absolute -right-14 -top-14 h-32 w-32 rounded-full bg-(--brand)/25 blur-3xl" />
              <div className="relative flex items-center justify-between gap-3">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl bg-white/95 px-2.5 py-1.5 shadow-sm"
                >
                  <Image
                    src="/logo.png"
                    alt="Edusphere Academy"
                    width={130}
                    height={44}
                    className="h-9 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-white ring-1 ring-white/15"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <FiX className="h-4 w-4" aria-hidden />
                </button>
              </div>

              <div className="relative mt-3 flex items-center gap-2">
                {SITE_CONTACT_LINES.map((line) => (
                  <a
                    key={line.display}
                    href={line.href}
                    target={line.href.startsWith("http") ? "_blank" : undefined}
                    rel={line.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="grid h-10 w-10 place-items-center rounded-xl bg-white/12 ring-1 ring-white/15 transition hover:bg-white/20"
                    aria-label={line.display}
                  >
                    <FiPhone className="h-4.5 w-4.5 text-(--brand)" aria-hidden />
                  </a>
                ))}
                <a
                  href="mailto:info@edusphereacademy.com.my"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/12 ring-1 ring-white/15 transition hover:bg-white/20"
                  aria-label="Email"
                >
                  <FiMail className="h-4.5 w-4.5 text-(--brand)" aria-hidden />
                </a>
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-3">
              <div className="grid gap-1.5">
                {navItems.map((item) => {
                  const cls =
                    "group flex items-center justify-between rounded-xl border border-(--border) bg-white px-3.5 py-3 text-[13px] font-extrabold text-(--brand-2) shadow-sm shadow-black/4 transition active:scale-[0.98] hover:border-(--brand)/30 hover:bg-(--surface-2)";
                  const arrow = (
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-(--surface-2) text-(--brand) transition group-hover:bg-(--brand) group-hover:text-white">
                      <FiChevronRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  );
                  return item.href.startsWith("/") &&
                    !item.href.startsWith("/#") ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cls}
                    >
                      {item.label}
                      {arrow}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cls}
                    >
                      {item.label}
                      {arrow}
                    </a>
                  );
                })}
              </div>
            </nav>

            <div className="border-t border-(--border) bg-(--surface-2) px-3 py-3">
              <RegisterNowButton
                onClick={() => setMenuOpen(false)}
                className="w-full rounded-xl px-5 py-2.5 text-sm"
              />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
