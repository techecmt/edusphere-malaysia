export type CourseFeeLine = {
  label: string;
  value: string;
  highlight?: boolean;
  /** Launching / promotional discount row — shown with offer badge and emphasis. */
  discount?: boolean;
};

export const courseFeeBreakdown: CourseFeeLine[] = [
  { label: "Registration Fee (Non-Refundable)", value: "MYR 100.00 (Waived)" },
  { label: "Course Fee", value: "MYR 2,500.00" },
  { label: "Total Fees", value: "MYR 2,600" },
  { label: "Launching Promotion (Discount)", value: "MYR 1,000", discount: true },
  { label: "Total Fee Payable", value: "MYR 1,500", highlight: true },
  { label: "No. of Instalments", value: "3" },
  { label: "Monthly Payable", value: "MYR 500" },
];

/** Short copy for the fees section beside the breakdown table. */
export const courseFeeSummary =
  "Course fee MYR 2,500 with registration waived at launch. After the MYR 1,000 launching promotion, total payable is MYR 1,500 — MYR 500 per month across 3 instalments.";