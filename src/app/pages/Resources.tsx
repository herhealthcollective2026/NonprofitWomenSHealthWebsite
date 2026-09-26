import { useState } from "react";
import { Search, MapPin, ExternalLink, Phone, Globe, Star } from "lucide-react";

/* ── Types ────────────────────────────────────────────────────────────────── */

type Scope = "Kingston" | "Ontario-wide" | "Canada-wide";
type Tag = "Free" | "Walk-in Available" | "Referral Required" | "Phone" | "Online";

interface Resource {
  name: string;
  description: string;
  scope: Scope;
  category: string;
  tags?: Tag[];
  website?: string;
  phone?: string;
  phoneNote?: string;
  featured?: boolean;
}

/* ── Data ─────────────────────────────────────────────────────────────────── */

const filters = [
  "All",
  "Healthcare",
  "Mental Health",
  "Sexual Health",
  "Pregnancy",
  "Cancer Screening",
  "Financial Assistance",
  "Housing",
  "Food Support",
  "Newcomers",
  "2SLGBTQIA+",
  "Youth",
  "Indigenous Services",
  "Emergency",
];


const resources: Resource[] = [
  // Featured
  {
    name: "Crisis Services Canada",
    description: "Free, confidential crisis support available 24 hours a day, 7 days a week by phone and online chat. Available in English and French.",
    scope: "Canada-wide",
    category: "Emergency",
    tags: ["Free", "Phone", "Online"],
    phone: "988",
    website: "https://www.crisisservicescanada.ca",
    featured: true,
  },
  {
    name: "Ontario Breast Screening Program",
    description: "Free mammograms every two years for eligible women, Two-Spirit, trans, and non-binary individuals aged 40 to 74. No referral required.",
    scope: "Ontario-wide",
    category: "Cancer Screening",
    tags: ["Free"],
    website: "https://www.cancercareontario.ca",
    featured: true,
  },
  {
    name: "ConnexOntario",
    description: "Free and confidential referrals to mental health, addiction, and crisis services across Ontario. Available 24/7 by phone, text, or chat.",
    scope: "Ontario-wide",
    category: "Mental Health",
    tags: ["Free", "Phone", "Online"],
    phone: "1-866-531-2600",
    website: "https://www.connexontario.ca",
    featured: true,
  },
  {
    name: "Kingston Community Health Centres",
    description: "Comprehensive primary care for people who face barriers to healthcare, including uninsured and newcomer residents. Care is free and available in multiple languages.",
    scope: "Kingston",
    category: "Healthcare",
    tags: ["Free", "Walk-in Available"],
    website: "https://www.kchc.ca",
    featured: true,
  },

  // Mental Health
  {
    name: "BounceBack Ontario",
    description: "Free, phone-based cognitive behavioural therapy (CBT) program for adults and youth experiencing mild to moderate depression or anxiety.",
    scope: "Ontario-wide",
    category: "Mental Health",
    tags: ["Free", "Phone"],
    website: "https://bouncebackontario.ca",
  },
  {
    name: "Ontario Structured Psychotherapy",
    description: "Free, evidence-based CBT for adults living with anxiety, depression, or related conditions. No referral required.",
    scope: "Ontario-wide",
    category: "Mental Health",
    tags: ["Free"],
    website: "https://osp.silvercloudhealth.com",
  },
  {
    name: "CAMH Help Line",
    description: "Information and referrals to mental health and addiction services across Ontario. Available Monday to Friday.",
    scope: "Ontario-wide",
    category: "Mental Health",
    tags: ["Free", "Phone"],
    phone: "1-800-463-2338",
    website: "https://www.camh.ca",
  },

  // Sexual & Reproductive Health
  {
    name: "SOGC Patient Resources",
    description: "Reliable, evidence-based information on sexual and reproductive health from Canada's leading obstetrics and gynaecology organisation.",
    scope: "Canada-wide",
    category: "Sexual Health",
    tags: ["Online"],
    website: "https://www.sogc.org",
  },

  // Pregnancy
  {
    name: "Postpartum Support International",
    description: "Support, resources, and community for people experiencing postpartum depression, anxiety, or mood disorders.",
    scope: "Canada-wide",
    category: "Pregnancy",
    tags: ["Free", "Phone", "Online"],
    phone: "1-800-944-4773",
    website: "https://www.postpartum.net",
  },

  // Housing
  {
    name: "Interval House Kingston",
    description: "Emergency shelter, transitional housing, and long-term support for women and children leaving abusive situations.",
    scope: "Kingston",
    category: "Housing",
    tags: ["Free"],
    phone: "613-546-1777",
    phoneNote: "24/7 Crisis Line",
  },
  {
    name: "Ontario 211",
    description: "Free directory of local social services including housing, food, financial assistance, and more. Available 24/7 by phone or online.",
    scope: "Ontario-wide",
    category: "Housing",
    tags: ["Free", "Phone"],
    phone: "211",
    website: "https://www.211ontario.ca",
  },

  // Food
  {
    name: "Feed Ontario",
    description: "Connects individuals across Ontario to their nearest food bank or hunger relief programme.",
    scope: "Ontario-wide",
    category: "Food Support",
    tags: ["Free"],
    website: "https://feedontario.ca",
  },

  // Financial Assistance
  {
    name: "Ontario Works",
    description: "Financial assistance and employment support for Ontario residents who need help meeting basic living costs.",
    scope: "Ontario-wide",
    category: "Financial Assistance",
    tags: ["Referral Required"],
    website: "https://www.ontario.ca/page/ontario-works",
  },
  {
    name: "Income Security Advocacy Centre",
    description: "Free legal information and advocacy for people navigating social assistance, disability benefits, and income security in Ontario.",
    scope: "Ontario-wide",
    category: "Financial Assistance",
    tags: ["Free"],
    website: "https://incomesecurity.org",
  },

  // Newcomers
  {
    name: "Newcomer Health Ontario",
    description: "Resources to help newcomers understand and navigate Ontario's healthcare system, available in multiple languages.",
    scope: "Ontario-wide",
    category: "Newcomers",
    tags: ["Free", "Online"],
    website: "https://settlement.org",
  },

  // Indigenous Services
  {
    name: "Ontario Federation of Indigenous Friendship Centres",
    description: "Community-based services for Indigenous peoples living in urban areas, including health, wellness, and cultural support.",
    scope: "Ontario-wide",
    category: "Indigenous Services",
    tags: ["Free"],
    website: "https://www.ofifc.org",
  },

  // 2SLGBTQIA+
  {
    name: "Rainbow Health Ontario",
    description: "Province-wide resources for 2SLGBTQIA+ health equity, including a provider directory and health information.",
    scope: "Ontario-wide",
    category: "2SLGBTQIA+",
    tags: ["Online"],
    website: "https://www.rainbowhealthontario.ca",
  },

  // Youth
  {
    name: "Kids Help Phone",
    description: "Free, confidential mental health support for young people in Canada, available 24/7 by phone and text.",
    scope: "Canada-wide",
    category: "Youth",
    tags: ["Free", "Phone"],
    phone: "1-800-668-6868",
    website: "https://kidshelpphone.ca",
  },

  // Emergency
  {
    name: "ShelterSafe",
    description: "Searchable directory of women's shelters and crisis services across Canada to help people find safety near them.",
    scope: "Canada-wide",
    category: "Emergency",
    tags: ["Free", "Online"],
    website: "https://www.sheltersafe.ca",
  },
  {
    name: "9-8-8 Suicide Crisis Helpline",
    description: "Canada's national suicide prevention helpline. Call or text 9-8-8 to reach a trained crisis responder, 24/7.",
    scope: "Canada-wide",
    category: "Emergency",
    tags: ["Free", "Phone"],
    phone: "9-8-8",
  },
];

/* ── Helpers ──────────────────────────────────────────────────────────────── */

const scopeStyle: Record<Scope, string> = {
  Kingston: "bg-primary/10 text-primary",
  "Ontario-wide": "bg-accent/20 text-foreground",
  "Canada-wide": "bg-secondary/40 text-foreground",
};

const tagStyle: Record<Tag, string> = {
  Free: "bg-green-50 text-green-700 border border-green-200",
  "Walk-in Available": "bg-blue-50 text-blue-700 border border-blue-200",
  "Referral Required": "bg-amber-50 text-amber-700 border border-amber-200",
  Phone: "bg-muted text-muted-foreground border border-border",
  Online: "bg-muted text-muted-foreground border border-border",
};

function ScopeBadge({ scope }: { scope: Scope }) {
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${scopeStyle[scope]}`}>
      <MapPin size={10} />
      {scope}
    </span>
  );
}

function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border">
      {label}
    </span>
  );
}

function ResourceCard({ resource, large = false }: { resource: Resource; large?: boolean }) {
  return (
    <div className={`bg-card border border-border rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow ${large ? "p-6" : "p-5"}`}>
      {/* Header */}
      <div>
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 className={`font-semibold leading-snug ${large ? "text-lg" : "text-base"}`}>{resource.name}</h3>
          {resource.featured && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full shrink-0">
              <Star size={10} />
              Featured
            </span>
          )}
        </div>
        <p className={`text-muted-foreground leading-relaxed ${large ? "text-sm" : "text-sm"}`}>{resource.description}</p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        <ScopeBadge scope={resource.scope} />
        <CategoryBadge label={resource.category} />
        {resource.tags?.map((tag) => (
          <span key={tag} className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagStyle[tag]}`}>{tag}</span>
        ))}
      </div>

      {/* Contact info */}
      {(resource.phone || resource.website) && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          {resource.phone && (
            <span className="flex items-center gap-1.5">
              <Phone size={13} className="text-primary" />
              {resource.phone}
              {resource.phoneNote && (
                <span className="text-xs text-muted-foreground">— {resource.phoneNote}</span>
              )}
            </span>
          )}
          {resource.website && (
            <a href={resource.website} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-primary hover:underline">
              <Globe size={13} />
              Visit website
            </a>
          )}
        </div>
      )}

      {/* CTA */}
      <div className="mt-auto pt-1">
        {resource.website ? (
          <a
            href={resource.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full text-sm font-medium rounded-lg px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            Find Support
          </a>
        ) : (
          <span className="inline-flex items-center justify-center w-full text-sm font-medium rounded-lg px-4 py-2 border-2 border-border text-muted-foreground cursor-default">
            Find Support
          </span>
        )}
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

export function Resources() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const featured = resources.filter((r) => r.featured);
  const nonFeatured = resources.filter((r) => !r.featured);

  const filteredResources = nonFeatured.filter((r) => {
    const matchesFilter = activeFilter === "All" || r.category === activeFilter;
    if (!matchesFilter) return false;
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      r.name.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.scope.toLowerCase().includes(q) ||
      (r.tags ?? []).some((t) => t.toLowerCase().includes(q)) ||
      (r.phone ?? "").includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-background">

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Community Resources</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Her Health connects people with trusted health services, community supports, and crisis resources in Kingston, across Ontario, and throughout Canada. All resources are carefully selected to be accessible, welcoming, and relevant to women and underserved communities.
          </p>
        </div>
      </section>

      {/* ── Search + Filters ──────────────────────────────────────────────── */}
      <section className="py-8 border-b border-border bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">

          {/* Search */}
          <div className="relative max-w-xl">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by service, organisation, topic, or keyword..."
              className="w-full pl-11 pr-4 py-3.5 text-sm rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              aria-label="Search resources"
            />
          </div>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter resources by category">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                aria-pressed={activeFilter === f}
                className={`text-sm px-4 py-2 rounded-full font-medium transition-colors border focus:outline-none focus:ring-2 focus:ring-primary/40 ${
                  activeFilter === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scope explainer ───────────────────────────────────────────────── */}
      <section className="py-6 bg-muted/30 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="text-sm text-muted-foreground font-medium">Resource availability:</p>
            <div className="flex flex-wrap gap-3">
              {(["Kingston", "Ontario-wide", "Canada-wide"] as Scope[]).map((s) => (
                <span key={s} className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${scopeStyle[s]}`}>
                  <MapPin size={11} />
                  {s}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground max-w-md">
              Some services are available only in Kingston, while others are offered across Ontario or throughout Canada.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Resources ────────────────────────────────────────────── */}
      <section className="py-14 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Featured Resources</h2>
            <p className="text-muted-foreground text-sm">Commonly accessed services for crisis support, primary care, and health screening.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {featured.map((r, i) => <ResourceCard key={i} resource={r} large />)}
          </div>
        </div>
      </section>

      {/* ── All Resources ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">All Resources</h2>
            <p className="text-muted-foreground text-sm">
              {filteredResources.length === nonFeatured.length
                ? `${nonFeatured.length} resources available. Use the search bar or filters above to narrow your results.`
                : `${filteredResources.length} resource${filteredResources.length !== 1 ? "s" : ""} found.`}
            </p>
          </div>
          {filteredResources.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-base">No resources found matching your search.</p>
              <p className="text-sm mt-2">Try a different keyword or select "All" to browse everything.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredResources.map((r, i) => <ResourceCard key={i} resource={r} />)}
            </div>
          )}
        </div>
      </section>

      {/* ── Emergency Banner ──────────────────────────────────────────────── */}
      <section className="py-10 bg-background border-t border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/20 border border-secondary/40 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">Need Immediate Help?</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                If you or someone else is in immediate danger, call <strong className="text-foreground">911</strong>.
                For crisis support, text or call the Suicide Crisis Helpline at <strong className="text-foreground">9-8-8</strong> anytime, day or night.
                Find a women's shelter near you at{" "}
                <a href="https://www.sheltersafe.ca" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                  ShelterSafe.ca
                </a>.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="https://www.sheltersafe.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md px-6 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                Find Help Now <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
