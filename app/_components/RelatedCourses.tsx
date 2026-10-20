import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { courses } from "../data/coursedata";

type Props = { currentCourseId: string };

export default function RelatedCourses({ currentCourseId }: Props) {
  const others = courses.filter((c) => c.id !== currentCourseId);

  if (others.length === 0) return null;

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
          EXPLORE MORE
        </div>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
          Other courses at Edusphere Academy
        </h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="group flex items-center gap-4 rounded-2xl border border-(--border) bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                <Image
                  alt={course.title}
                  src={course.image}
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold leading-snug text-slate-900 group-hover:text-(--brand)">
                  {course.title}
                </div>
                <div className="mt-1 text-xs font-semibold text-slate-500">
                  {course.hours} · {course.moduleCount} modules
                </div>
              </div>
              <FiArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-(--brand)" aria-hidden />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
