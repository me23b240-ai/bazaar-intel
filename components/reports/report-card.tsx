// components/reports/report-card.tsx
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Clock, CalendarDays, ArrowUpRight, FileText } from "lucide-react";

interface ReportCardProps {
  slug: string;
  title: string;
  category: string;
  description: string;
  readingTime: string;
  updated: string;
  image?: string;
}

export function ReportCard({
  slug,
  title,
  category,
  description,
  readingTime,
  updated,
  image,
}: ReportCardProps) {
  return (
    <Link
      href={`/reports/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-150 hover:border-foreground/20"
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-muted/60 to-muted/20">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <FileText className="h-6 w-6 text-muted-foreground/30" strokeWidth={1.5} />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-xs font-medium text-muted-foreground">
          {category}
        </span>

        <h2 className="text-base font-semibold leading-snug text-foreground">
          {title}
        </h2>

        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {readingTime}
            </span>
            <span className="text-border">|</span>
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              {updated}
            </span>
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>
      </div>
    </Link>
  );
}