// app/reports/page.tsx
"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { REPORTS } from "@/lib/data/reports";
import { ReportCard } from "@/components/reports/report-card";

const CATEGORIES = [
  "All",
  "E-commerce",
  "Quick Commerce",
  "Artificial Intelligence",
  "Fintech",
  "Travel",
  "Food & Delivery",
  "Healthcare",
  "Education",
];

export default function ReportsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredReports = useMemo(() => {
    return REPORTS.filter((report) => {
      const matchesCategory =
        activeCategory === "All" || report.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
      {/* Header */}
      <div className="flex flex-col gap-8 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground">
            Reports
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            AI-generated research and market intelligence.
          </p>
        </div>

        <div className="relative w-full md:max-w-sm">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search reports..."
            className="h-11 w-full rounded-full border border-border bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-foreground/30 focus:ring-1 focus:ring-foreground/20"
          />
        </div>
      </div>

      {/* Category Chips */}
      <div className="scrollbar-none mt-6 flex gap-2 overflow-x-auto pb-1">
        {CATEGORIES.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-transparent text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Report Grid */}
      {filteredReports.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredReports.map((report) => (
            <ReportCard
              key={report.slug}
              slug={report.slug}
              title={report.title}
              category={report.category}
              description={report.heroDescription}
              readingTime={report.readingTime}
              updated={report.updated}
              image={report.image}
            />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <p className="text-sm font-medium text-foreground">
            No reports found
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Try a different search term or category.
          </p>
        </div>
      )}
    </div>
  );
}