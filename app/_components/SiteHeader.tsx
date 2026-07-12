"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiChevronRight, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Student Affairs", href: "/student-affairs" },
  { label: "Courses", href: "/#courses" },
  { label: "Contact", href: "/#contact" },
] as const;

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

  return (
    <header id="home" className="relative z-50">
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

            <div className="flex shrink-0 items-center gap-2 lg:hidden">
              <button
                type="button"
                className="inline-flex h-11 items-center gap-2 rounded-2xl bg-(--brand-2) px-4 text-sm font-extrabold text-white shadow-lg shadow-[#193764]/20 active:scale-[0.98]"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                Menu
                <FiMenu className="h-5 w-5" aria-hidden />
              </button>
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
            <div className="relative overflow-hidden bg-linear-to-br from-[#193764] via-[#1f477c] to-[#10213d] px-4 pb-4 pt-3.5 text-white">
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
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-3">
              <div className="grid gap-1.5">
                {navItems.map((item) => {
                  const cls =
                    "group flex items-center justify-between rounded-xl border border-(--border) bg-white px-3.5 py-3 text-[13px] font-extrabold text-[#193764] shadow-sm shadow-black/4 transition active:scale-[0.98] hover:border-[#faa426]/30 hover:bg-[#fff7e8]";
                  const arrow = (
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#fff7e8] text-(--brand) transition group-hover:bg-(--brand) group-hover:text-white">
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
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center rounded-xl bg-(--brand) px-5 py-2.5 text-sm font-extrabold text-[#193764] shadow-md shadow-[#faa426]/20"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
