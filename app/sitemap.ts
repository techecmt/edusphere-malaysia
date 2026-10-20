import type { MetadataRoute } from "next";
import { courses } from "./data/coursedata";
import { absoluteUrl } from "./data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const courseEntries: MetadataRoute.Sitemap = courses.map((course) => ({
    url: absoluteUrl(`/courses/${course.id}`),
    lastModified: new Date("2026-10-20"),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date("2026-10-20"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/courses"),
      lastModified: new Date("2026-10-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...courseEntries,
    {
      url: absoluteUrl("/about"),
      lastModified: new Date("2026-10-20"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/blog/how-to-become-a-barista-in-malaysia"),
      lastModified: new Date("2026-07-12"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/student-affairs"),
      lastModified: new Date("2026-10-20"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
