import { Link } from "react-router";
import { Button, LinkButton } from "../components/Button";
import { Card } from "../components/Card";
import { BookOpen, Navigation, Package, TrendingUp, MapPin, ExternalLink, ArrowRight } from "lucide-react";

/* ── Data ─────────────────────────────────────────────────────────────────── */

const stats = [
  {
    value: "87%",
    body: "Women report experiencing barriers to healthcare.",
    source: "Canadian Women's Foundation",
  },
  {
    value: "1 in 10",
    body: "Indigenous women report not receiving healthcare when they needed it.",
    source: "Public Health Agency of Canada",
  },
  {
    value: "$6.2B",
    body: "Health inequities cost Canada's healthcare system every year.",
    source: "Public Health Agency of Canada",
  },
];

type Scope = "Kingston" | "Ontario-wide" | "Canada-wide";

const resources: { title: string; description: string; scope: Scope; website: string }[] = [
  {
    title: "Women's Health Clinic",
    description: "Reproductive health services, Pap tests, and STI testing regardless of insurance status.",
    scope: "Kingston",
    website: "https://kflaph.ca",
  },
  {
    title: "Crisis Services Canada",
    description: "24/7 emotional support and crisis intervention available by phone and online chat.",
    scope: "Canada-wide",
    website: "https://www.crisisservicescanada.ca",
  },
  {
    title: "Ontario Breast Screening Program",
    description: "Free mammograms every two years for women aged 50 to 74, no referral needed.",
    scope: "Ontario-wide",
    website: "https://www.cancercareontario.ca",
  },
  {
    title: "ConnexOntario",
    description: "Free, confidential referrals to local mental health, addictions, and crisis services.",
    scope: "Ontario-wide",
    website: "https://www.connexontario.ca",
  },
];

const scopeStyle: Record<Scope, string> = {
  Kingston: "bg-primary/10 text-primary",
  "Ontario-wide": "bg-accent/10 text-primary",
  "Canada-wide": "bg-secondary/30 text-foreground",
};

const libraryArticles = [
  { id: "patient-rights", title: "Patient Rights", category: "Know Your Rights", summary: "Your legal rights as a patient in Canada, regardless of immigration status or insurance coverage." },
  { id: "questions-for-doctor", title: "Questions to Ask Your Doctor", category: "Advocating For Yourself", summary: "How to prepare for appointments and communicate your concerns clearly and confidently." },
  { id: "cancer-screening", title: "Cancer Screening", category: "Preventive Care", summary: "Free screening programs for cervical, breast, and colorectal cancer available in Ontario." },
  { id: "normal-vs-abnormal-periods", title: "Normal vs Abnormal Periods", category: "Menstrual Health", summary: "Understanding what a typical cycle looks like and when to speak with a healthcare provider." },
  { id: "pcos", title: "Polycystic Ovary Syndrome (PCOS)", category: "Menstrual Health", summary: "One of the most common hormonal conditions in women of reproductive age, and how it is managed." },
  { id: "mental-health-checkups", title: "Mental Health Checkups", category: "Preventive Care", summary: "Why regular mental health check-ins matter and free programs available across Ontario." },
];

const offerings = [
  {
    icon: BookOpen,
    title: "Education",
    description: "Helping women better understand their health through reliable, evidence-based, and easy-to-understand information.",
  },
  {
    icon: Navigation,
    title: "Resource Navigation",
    description: "Connecting individuals with healthcare services, community organisations, financial assistance, and local supports.",
  },
  {
    icon: Package,
    title: "Community Support",
    description: "Providing hygiene kits and practical resources that help remove barriers to health and well-being.",
  },
  {
    icon: TrendingUp,
    title: "Policy & Systems Change",
    description: "Advocating for lasting policy and systemic changes that improve women's health, reduce inequities, and address the root causes of barriers to care.",
  },
];

/* ── Component ────────────────────────────────────────────────────────────── */

export function Home() {
  return (
    <div>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Making Women's Health Accessible.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                Her Health Collective is a community-driven initiative working to make women's health information, preventive care, essential hygiene products, and support services more accessible. We believe lasting change comes from education, practical resources, and advocacy that addresses the root causes of health inequities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <LinkButton to="/resources" size="lg">Explore Resources</LinkButton>
                <LinkButton to="/our-kits" size="lg" variant="outline">Our Kits</LinkButton>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?w=800&h=600&fit=crop&auto=format"
                alt="Diverse group of women from different backgrounds, ages, and cultures"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why It Matters ────────────────────────────────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why It Matters</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The barriers women face aren't inevitable.<br />
              They're the result of systems we have the power to change.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-7 shadow-sm flex flex-col gap-3">
                <div className="text-4xl md:text-5xl font-bold text-primary leading-none">{stat.value}</div>
                <p className="text-foreground text-sm leading-relaxed flex-1">{stat.body}</p>
                <p className="text-xs text-muted-foreground border-t border-border pt-3 mt-1">
                  Source: {stat.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Community Resources Preview ───────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Community Resources</h2>
              <p className="text-muted-foreground max-w-xl">
                A curated directory of health services, crisis supports, and community organisations available locally and across Canada.
              </p>
            </div>
            <Link to="/resources" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1 shrink-0">
              View all resources <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {resources.map((r, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-5 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-base leading-snug">{r.title}</h3>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap shrink-0 flex items-center gap-1 ${scopeStyle[r.scope]}`}>
                      <MapPin size={10} />
                      {r.scope}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
                </div>
                <div className="mt-auto">
                  <a
                    href={r.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full text-sm font-medium border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg px-4 py-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    Find Support
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Health Library Preview ────────────────────────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Her Health Library</h2>
              <p className="text-muted-foreground max-w-xl">
                Evidence-based health articles written to help you understand your body, your rights, and your options.
              </p>
            </div>
            <Link to="/health-education" className="text-primary text-sm font-semibold hover:underline flex items-center gap-1 shrink-0">
              Browse the library <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {libraryArticles.map((article) => (
              <div key={article.id} className="bg-card border border-border rounded-2xl p-5 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">{article.category}</p>
                  <h3 className="font-semibold text-base leading-snug mb-2">{article.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{article.summary}</p>
                </div>
                <div className="mt-auto">
                  <LinkButton to={`/health-education/${article.id}`} size="sm" variant="outline" className="w-full">Read Article</LinkButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Emergency Help ────────────────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/20 border border-secondary/40 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3 text-foreground">Need Immediate Help?</h2>
              <p className="text-muted-foreground leading-relaxed mb-1">
                If you or someone else is in immediate danger, call <strong className="text-foreground">911</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                If you are experiencing abuse or need immediate support, contact your local women's crisis service or visit{" "}
                <a
                  href="https://www.sheltersafe.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  ShelterSafe
                </a>{" "}
                to find support near you.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="https://www.sheltersafe.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md px-8 py-4 text-lg"
              >
                Find Help Now
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Approach ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <Card key={index} className="flex flex-col">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{offering.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{offering.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>


    </div>
  );
}
