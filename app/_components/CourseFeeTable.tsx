"use client";

import { motion } from "motion/react";
import { FiTag } from "react-icons/fi";
import { courseFeeBreakdown } from "../data/courseFees";

function LimitedTimeOfferBadge() {
  return (
    <motion.span
      className="fee-limited-offer-badge inline-flex items-center gap-1.5 rounded-full bg-(--brand-2) px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white"
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <FiTag className="h-3 w-3 text-(--brand)" aria-hidden />
      Limited time offer
    </motion.span>
  );
}

export default function CourseFeeTable() {
  return (
    <div className="overflow-hidden rounded-4xl border border-(--border) bg-white shadow-[0_24px_90px_-62px_rgba(2,6,23,0.6)]">
      <div className="bg-linear-to-r from-(--brand-2) to-(--brand-secondary) px-6 py-5 text-white">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/60">
              Part-time · Malaysian Ringgit
            </div>
            <div className="mt-1 text-lg font-extrabold">Fee Breakdown</div>
          </div>
          <LimitedTimeOfferBadge />
        </div>
      </div>
      <div className="divide-y divide-(--border)">
        {courseFeeBreakdown.map((fee) => {
          if (fee.discount) {
            return (
              <div
                key={fee.label}
                className="relative overflow-hidden border-y border-(--brand)/30 bg-linear-to-r from-amber-50/90 via-white to-amber-50/70"
              >
                <div
                  className="fee-discount-row-shimmer pointer-events-none absolute inset-0 opacity-80"
                  aria-hidden
                />
                <div className="relative flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-extrabold text-(--brand-2)">
                        {fee.label}
                      </span>
                      <span className="rounded-md bg-(--brand)/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-(--brand-2)">
                        Discount applied
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-medium text-slate-600">
                      Launching promotion — save{" "}
                      <span className="font-extrabold text-(--brand)">{fee.value}</span>{" "}
                      for a limited time only.
                    </p>
                  </div>
                  <span className="shrink-0 text-xl font-extrabold tracking-tight text-(--brand) sm:text-2xl">
                    − {fee.value}
                  </span>
                </div>
              </div>
            );
          }

          return (
            <div
              key={fee.label}
              className={`flex items-center justify-between gap-4 px-6 ${fee.highlight ? "bg-(--surface-2) py-5" : "py-4"}`}
            >
              <span
                className={
                  fee.highlight
                    ? "text-sm font-extrabold uppercase tracking-wide text-(--brand-2)"
                    : "text-sm font-semibold text-slate-700"
                }
              >
                {fee.label}
              </span>
              <span
                className={
                  fee.highlight
                    ? "text-2xl font-extrabold text-(--brand)"
                    : "text-base font-extrabold text-slate-950"
                }
              >
                {fee.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}