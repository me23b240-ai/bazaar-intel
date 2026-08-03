// app/industries/page.tsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowUpRight, Building2, TrendingUp } from "lucide-react";
import { industries } from "@/lib/data/industries";

const filters = ["All", ...industries.map((i) => i.name)];

export default function IndustriesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filteredIndustries = useMemo(() => {
    return industries.filter((industry) => {
      const matchesFilter =
        activeFilter === "All" || industry.name === activeFilter;
      const matchesQuery = industry.name
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        {/* Header */}
        <div className="flex flex-col gap-8 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground">
              Industries
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore consumer internet industries shaping India&apos;s market.
            </p>
          </div>

          <div className="relative w-full md:max-w-sm">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search industries..."
              className="h-11 w-full rounded-full border border-border bg-card pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-foreground/30 focus:ring-1 focus:ring-foreground/20"
            />
          </div>
        </div>

        {/* Filter Chips */}
        <div className="scrollbar-none mt-6 flex gap-2 overflow-x-auto pb-1">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-transparent text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Industries Grid */}
        {filteredIndustries.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredIndustries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors duration-150 hover:border-foreground/20"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/60 text-sm font-semibold text-foreground">
                      {industry.name.charAt(0)}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      <TrendingUp className="h-3 w-3" />
                      {industry.growth}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {industry.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {industry.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-md bg-muted px-2 py-0.5 font-medium text-foreground/80">
                      {industry.marketSize}
                    </span>
                    <span className="rounded-md bg-muted px-2 py-0.5 font-medium text-foreground/80">
                      CAGR {industry.cagr}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Building2 className="h-3.5 w-3.5" />
                    {industry.trackedCompanies} companies
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center justify-center text-center">
            <p className="text-sm font-medium text-foreground">
              No industries found
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try a different filter or search term.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}