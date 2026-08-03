// lib/reports-data.ts
export interface ReportStat {
  label: string;
  value: string;
}

export interface ReportData {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  updated: string;
  heroDescription: string;
  executiveSummary: string;
  keyInsights: string[];
  marketStatistics: ReportStat[];
  opportunities: string[];
  risks: string[];
  aiTakeaways: string[];
  image?: string;
}

export const REPORTS: ReportData[] = [
  {
    slug: "marketplace-landscape-2026",
    title: "Marketplace Landscape 2026",
    category: "E-commerce",
    readingTime: "12 min read",
    updated: "Jul 2, 2026",
    image: "/reports/marketplace-landscape-2026.jpg",
    heroDescription:
      "A comprehensive view of India's e-commerce marketplace ecosystem, mapping incumbents, challengers, and the forces reshaping category leadership.",
    executiveSummary:
      "India's marketplace ecosystem has entered a consolidation phase, with Flipkart and Amazon defending scale while Meesho pressures the value segment. Quick commerce continues to pull discretionary spend away from traditional marketplaces, forcing incumbents to rethink delivery speed as a core competitive lever rather than a differentiator.",
    keyInsights: [
      "Value-tier commerce is growing faster than premium categories across Tier 2 and Tier 3 India.",
      "Same-day and next-day delivery are becoming baseline expectations, not premium features.",
      "Private label penetration is rising as marketplaces seek margin independent of third-party sellers.",
      "Retail media is emerging as a primary profitability lever for large platforms.",
    ],
    marketStatistics: [
      { label: "Market Size (2026E)", value: "$120B" },
      { label: "YoY Growth", value: "18%" },
      { label: "Tier 2+ Share of GMV", value: "62%" },
      { label: "Active Online Shoppers", value: "270M" },
    ],
    opportunities: [
      "Expansion into vernacular-first shopping experiences for Tier 3+ users.",
      "Monetization through retail media and sponsored placements.",
      "Cross-border sourcing to widen assortment at lower cost.",
    ],
    risks: [
      "Margin compression from continued discounting to defend share.",
      "Regulatory scrutiny around marketplace-seller relationships.",
      "Customer acquisition costs rising as quick commerce absorbs impulse purchases.",
    ],
    aiTakeaways: [
      "Winners will be platforms that treat logistics as a product, not a cost center.",
      "Category leadership will increasingly be decided at the Tier 2+ level, not metros.",
      "Expect further capital consolidation among mid-tier vertical marketplaces.",
    ],
  },
  {
    slug: "quick-commerce-report",
    title: "Quick Commerce Report",
    category: "Quick Commerce",
    readingTime: "9 min read",
    updated: "Jun 28, 2026",
    image: "/reports/quick-commerce-report.jpg",
    heroDescription:
      "An in-depth look at India's quick commerce race, covering dark store economics, unit-level profitability, and the next phase of category expansion.",
    executiveSummary:
      "Quick commerce has moved from a novelty to a default shopping habit in urban India. Blinkit and Zepto continue to lead on dark store density, while profitability remains the central industry question as players expand assortment beyond groceries into electronics and pharmacy.",
    keyInsights: [
      "Dark store density in metros has crossed the threshold needed for sub-15-minute delivery at scale.",
      "Basket sizes are increasing as platforms add non-grocery categories.",
      "Unit economics are improving but remain sensitive to discounting intensity.",
      "Tier 2 expansion is the next major growth vector for major players.",
    ],
    marketStatistics: [
      { label: "Market Size (2026E)", value: "$8.5B" },
      { label: "YoY Growth", value: "45%" },
      { label: "Avg. Delivery Time", value: "11 min" },
      { label: "Dark Stores (Top 3 Players)", value: "5,200+" },
    ],
    opportunities: [
      "Expansion into pharmacy and electronics as high-margin categories.",
      "B2B dark store infrastructure leasing to smaller regional players.",
      "Advertising revenue from brands seeking placement in high-frequency apps.",
    ],
    risks: [
      "Path to sustainable profitability remains unproven at current discount levels.",
      "Labor and gig-worker regulation could raise operating costs.",
      "Market saturation in top metros limiting further density gains.",
    ],
    aiTakeaways: [
      "Profitability, not growth, will define the next competitive phase.",
      "Category expansion beyond groceries is now a strategic necessity.",
      "Consolidation among smaller quick commerce players is likely within 12–18 months.",
    ],
  },
  {
    slug: "consumer-ai-in-india",
    title: "Consumer AI in India",
    category: "Artificial Intelligence",
    readingTime: "15 min read",
    updated: "Jun 21, 2026",
    image: "/reports/consumer-ai-in-india.jpg",
    heroDescription:
      "Examining how Indian consumers are adopting AI-native products, from assistants to personalized commerce, and what it means for platform builders.",
    executiveSummary:
      "Consumer AI adoption in India is accelerating faster than global averages, driven by vernacular AI assistants and mobile-first product design. Companies embedding AI directly into everyday workflows, search, recommendations, customer support, are seeing measurable engagement lifts over traditional interfaces.",
    keyInsights: [
      "Vernacular language support is a major driver of AI product adoption outside metros.",
      "AI-powered discovery is outperforming traditional search-based commerce in engagement.",
      "Voice-first interfaces are gaining traction among first-time internet users.",
      "Enterprises are increasingly embedding AI copilots into internal operations.",
    ],
    marketStatistics: [
      { label: "AI Product Users (2026E)", value: "190M" },
      { label: "YoY Growth in Usage", value: "68%" },
      { label: "Vernacular AI Queries Share", value: "41%" },
      { label: "Enterprise AI Adoption", value: "34%" },
    ],
    opportunities: [
      "Building AI-native shopping assistants tailored to regional languages.",
      "Embedding AI copilots into SME workflows for productivity gains.",
      "Personalization engines that reduce discovery friction in commerce apps.",
    ],
    risks: [
      "Data privacy regulation could constrain personalization approaches.",
      "Trust gaps remain around AI-generated recommendations and content.",
      "Infrastructure costs for large-scale inference remain high.",
    ],
    aiTakeaways: [
      "Vernacular-first AI is the single biggest unlock for mass adoption.",
      "AI interfaces are shifting from novelty to default in high-frequency apps.",
      "Companies slow to embed AI into core flows risk losing engagement share.",
    ],
  },
  {
    slug: "fintech-ecosystem",
    title: "Fintech Ecosystem",
    category: "Fintech",
    readingTime: "11 min read",
    updated: "Jun 14, 2026",
    image: "/reports/fintech-ecosystem.jpg",
    heroDescription:
      "Mapping India's fintech landscape across payments, lending, and wealth-tech, with a focus on where the next wave of growth will come from.",
    executiveSummary:
      "India's fintech ecosystem continues to be anchored by UPI-driven payments infrastructure, with PhonePe maintaining a leading position. Growth is increasingly shifting toward credit and wealth-tech products as payment-led platforms seek to diversify revenue beyond thin transaction margins.",
    keyInsights: [
      "UPI transaction volumes continue to grow, though monetization per transaction remains low.",
      "Embedded lending is becoming a key revenue driver for payment-first platforms.",
      "Wealth-tech adoption is rising among first-time investors under 30.",
      "Regulatory clarity on digital lending has improved investor confidence.",
    ],
    marketStatistics: [
      { label: "UPI Monthly Volume", value: "18B+ txns" },
      { label: "Digital Lending Market", value: "$350B" },
      { label: "Wealth-tech Users", value: "45M" },
      { label: "YoY Sector Growth", value: "22%" },
    ],
    opportunities: [
      "Cross-selling credit and insurance products through existing payment rails.",
      "Wealth-tech expansion into Tier 2+ first-time investors.",
      "B2B fintech infrastructure for SME lending and payments.",
    ],
    risks: [
      "Thin margins on core UPI payments limiting standalone profitability.",
      "Regulatory tightening around digital lending practices.",
      "Rising competition compressing customer acquisition economics.",
    ],
    aiTakeaways: [
      "Payments alone are no longer a defensible business, credit and wealth are the real prize.",
      "Platforms with the widest distribution will win the cross-sell race.",
      "Regulatory alignment will separate durable players from short-term entrants.",
    ],
  },
  {
    slug: "traveltech-landscape",
    title: "TravelTech Landscape",
    category: "Travel",
    readingTime: "8 min read",
    updated: "Jun 9, 2026",
    image: "/reports/traveltech-landscape.jpg",
    heroDescription:
      "A look at India's travel technology sector, covering booking platforms, experiential travel, and the return of outbound tourism demand.",
    executiveSummary:
      "India's travel sector has fully recovered to pre-pandemic booking volumes, with MakeMyTrip retaining category leadership. Outbound travel demand is rising sharply among affluent urban consumers, while domestic experiential travel is emerging as a fast-growing niche.",
    keyInsights: [
      "Outbound leisure travel bookings have grown significantly among urban millennials.",
      "Experiential and offbeat domestic travel is gaining share from traditional packages.",
      "Mobile-first booking now accounts for the majority of transaction volume.",
      "Loyalty and rewards programs are becoming key retention levers.",
    ],
    marketStatistics: [
      { label: "Market Size (2026E)", value: "$32B" },
      { label: "YoY Growth", value: "16%" },
      { label: "Mobile Booking Share", value: "74%" },
      { label: "Outbound Traveler Growth", value: "21%" },
    ],
    opportunities: [
      "Curated experiential travel packages for niche traveler segments.",
      "Deeper loyalty integration with fintech and payments partners.",
      "Expansion of B2B travel-as-a-service for SMEs and corporates.",
    ],
    risks: [
      "Fuel price volatility affecting airfare-linked booking margins.",
      "Intense price competition compressing take rates.",
      "Seasonal demand concentration creating revenue unpredictability.",
    ],
    aiTakeaways: [
      "Experience-led travel is the fastest-growing wedge against commoditized booking.",
      "Loyalty ecosystems will matter more than price alone going forward.",
      "Outbound travel represents the highest-margin growth opportunity in the sector.",
    ],
  },
  {
    slug: "food-delivery-market",
    title: "Food Delivery Market",
    category: "Food & Delivery",
    readingTime: "10 min read",
    updated: "Jun 3, 2026",
    image: "/reports/food-delivery-market.jpg",
    heroDescription:
      "Tracking the evolution of India's food delivery market as quick commerce, dining-out recovery, and subscription models reshape demand.",
    executiveSummary:
      "Food delivery growth has moderated as quick commerce captures adjacent snacking and grocery occasions. Swiggy continues to compete on delivery speed and platform breadth, while profitability gains are increasingly tied to advertising and subscription monetization rather than order volume alone.",
    keyInsights: [
      "Order frequency growth has slowed as dining-out demand recovers in metros.",
      "Subscription programs are driving higher order frequency among loyal users.",
      "Advertising revenue from restaurant partners is becoming a meaningful margin lever.",
      "Ten-minute food delivery pilots are testing the limits of kitchen logistics.",
    ],
    marketStatistics: [
      { label: "Market Size (2026E)", value: "$14B" },
      { label: "YoY Growth", value: "13%" },
      { label: "Subscription Penetration", value: "38%" },
      { label: "Avg. Delivery Time", value: "24 min" },
    ],
    opportunities: [
      "Deeper monetization through restaurant advertising and sponsored listings.",
      "Bundling food delivery with grocery and quick commerce offerings.",
      "Premium subscription tiers targeting high-frequency urban users.",
    ],
    risks: [
      "Margin pressure from ultra-fast delivery experiments.",
      "Rising competition from quick commerce players entering food.",
      "Gig-worker cost inflation affecting delivery unit economics.",
    ],
    aiTakeaways: [
      "The next growth phase depends on monetization depth, not order volume.",
      "Bundled commerce super-apps are likely to outperform single-category players.",
      "Ultra-fast delivery remains a margin risk unless kitchen density improves.",
    ],
  },
  {
    slug: "healthtech-outlook",
    title: "HealthTech Outlook",
    category: "Healthcare",
    readingTime: "13 min read",
    updated: "May 27, 2026",
    image: "/reports/healthtech-outlook.jpg",
    heroDescription:
      "Assessing India's health-tech sector across telemedicine, diagnostics, and digital pharmacy as consumer trust in online healthcare matures.",
    executiveSummary:
      "India's health-tech sector is maturing beyond telemedicine into integrated care journeys spanning diagnostics, pharmacy, and chronic disease management. Consumer trust has grown steadily, though profitability remains concentrated among platforms with strong offline integration.",
    keyInsights: [
      "Digital pharmacy adoption is growing fastest in Tier 2+ cities.",
      "Chronic disease management platforms are seeing rising enterprise partnerships.",
      "Diagnostics-at-home services are becoming a key trust-building entry point.",
      "Insurance integration is emerging as a differentiator for full-stack platforms.",
    ],
    marketStatistics: [
      { label: "Market Size (2026E)", value: "$21B" },
      { label: "YoY Growth", value: "19%" },
      { label: "Telemedicine Users", value: "80M" },
      { label: "Digital Pharmacy Share", value: "27%" },
    ],
    opportunities: [
      "Integrated care platforms combining diagnostics, pharmacy, and consultations.",
      "Insurance partnerships to reduce out-of-pocket friction.",
      "Chronic care subscription models for long-term patient retention.",
    ],
    risks: [
      "Regulatory complexity around digital prescriptions and data privacy.",
      "Trust barriers persist for serious or specialized conditions.",
      "High customer acquisition costs relative to lifetime value.",
    ],
    aiTakeaways: [
      "Full-stack integration is becoming the defining moat in health-tech.",
      "Insurance partnerships will be a key unlock for mainstream adoption.",
      "Trust-building through offline touchpoints remains essential for growth.",
    ],
  },
  {
    slug: "edtech-industry-report",
    title: "EdTech Industry Report",
    category: "Education",
    readingTime: "10 min read",
    updated: "May 19, 2026",
    image: "/reports/edtech-industry-report.jpg",
    heroDescription:
      "Reviewing the state of India's ed-tech sector following its post-pandemic correction, and where sustainable growth is re-emerging.",
    executiveSummary:
      "India's ed-tech sector has stabilized after a period of sharp correction, with sustainable growth now concentrated in test-prep, upskilling, and B2B school infrastructure rather than broad consumer subscriptions. Profitability discipline has replaced growth-at-all-costs as the dominant strategy.",
    keyInsights: [
      "Test-prep and competitive exam platforms remain the most resilient revenue segment.",
      "Upskilling and professional certification demand is rising among working professionals.",
      "B2B school infrastructure tools are gaining traction as a stable revenue base.",
      "Consumer willingness to pay for broad-subject subscriptions has declined.",
    ],
    marketStatistics: [
      { label: "Market Size (2026E)", value: "$6.2B" },
      { label: "YoY Growth", value: "9%" },
      { label: "Upskilling Segment Growth", value: "24%" },
      { label: "B2B School Adoption", value: "31%" },
    ],
    opportunities: [
      "Expansion into professional upskilling and certification programs.",
      "B2B infrastructure partnerships with schools and institutions.",
      "Hybrid online-offline learning models for improved retention.",
    ],
    risks: [
      "Continued consumer pullback from discretionary subscription spending.",
      "High competitive intensity in test-prep compressing margins.",
      "Investor caution following prior sector-wide corrections.",
    ],
    aiTakeaways: [
      "Durable ed-tech growth is now B2B and outcomes-driven, not consumer-subscription-led.",
      "Upskilling represents the sector's clearest path to sustainable margins.",
      "Hybrid delivery models are outperforming pure online-only offerings.",
    ],
  },
];

export function getReportBySlug(slug: string): ReportData | undefined {
  return REPORTS.find((report) => report.slug === slug);
}