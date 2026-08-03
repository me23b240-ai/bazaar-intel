"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowUpRight, MapPin, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";

const filters = [
  "All",
  "Marketplace",
  "Quick Commerce",
  "Fintech",
  "Travel",
  "Consumer AI",
  "EdTech",
  "HealthTech",
];

import { companies } from "@/lib/data/company-profile";

export default function CompaniesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const matchesFilter =
        activeFilter === "All" || company.industry === activeFilter;
      const matchesQuery = company.name
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
              Companies
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore India&apos;s leading consumer internet companies.
            </p>
          </div>

          <div className="relative w-full md:max-w-sm">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search companies..."
              className="h-11 rounded-full border-border bg-card pl-10 text-sm shadow-none focus-visible:ring-1 focus-visible:ring-foreground/20"
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

        {/* Company Grid */}
        {filteredCompanies.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCompanies.map((company) => (
              <Link
                key={company.slug}
                href={`/companies/${company.slug}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors duration-150 hover:border-foreground/20"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted/60 text-sm font-semibold text-foreground">
                      {company.name.charAt(0)}
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
                      <TrendingUp className="h-3 w-3" />
                      {company.growth}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-foreground">
                    {company.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {company.industry}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {company.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {company.hq}
                    </span>
                    <span className="text-border">|</span>
                    <span>{company.stage}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center justify-center text-center">
            <p className="text-sm font-medium text-foreground">
              No companies found
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