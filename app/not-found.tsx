import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "./_components/SiteHeader";
import SiteFooter from "./_components/SiteFooter";
import { FiArrowRight } from "react-icons/fi";
import { courses } from "./data/coursedata";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-4 py-20 text-center sm:py-28">
        <div className="text-7xl font-extrabold text-(--brand)">404</div>
        <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          The page you are looking for may have moved or no longer exists. Try
          one of the links below.
        </p>

        <div className="mt-10 grid gap-3 text-left sm:grid-cols-2">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="group flex items-center justify-between rounded-2xl border border-(--border) bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="text-sm font-bold text-slate-900 group-hover:text-(--brand)">
                {course.title}
              </span>
              <FiArrowRight className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-(--brand)" aria-hidden />
            </Link>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-(--brand) px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
          >
            Go to homepage
            <FiArrowRight className="ml-2 h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center justify-center rounded-xl border border-(--border) px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Browse courses
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
