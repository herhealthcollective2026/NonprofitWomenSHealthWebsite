import { useState } from "react";
import { Link } from "react-router";
import { Search, Clock, CalendarDays, Info } from "lucide-react";

/* ── Types ────────────────────────────────────────────────────────────────── */

type FilterLabel =
  | "All Articles"
  | "Know Your Rights"
  | "Advocating for Yourself"
  | "Preventive Care"
  | "Menstrual & Reproductive Health"
  | "Mental Health"
  | "Navigating Healthcare";

interface Article {
  id: string;
  title: string;
  category: FilterLabel;
  description: string;
  readingTime: string;
  lastReviewed: string;
  featured?: boolean;
}

/* ── Data ─────────────────────────────────────────────────────────────────── */

const filters: FilterLabel[] = [
  "All Articles",
  "Know Your Rights",
  "Advocating for Yourself",
  "Preventive Care",
  "Menstrual & Reproductive Health",
  "Mental Health",
  "Navigating Healthcare",
];

const articles: Article[] = [
  // Featured (Start Here)
  {
    id: "patient-rights",
    title: "Patient Rights",
    category: "Know Your Rights",
    description: "Every person in Canada has the right to receive safe, respectful, and non-discriminatory care. Learn what those rights are and how to protect them.",
    readingTime: "6 min read",
    lastReviewed: "June 2025",
    featured: true,
  },
  {
    id: "questions-for-doctor",
    title: "Questions to Ask Your Doctor",
    category: "Advocating for Yourself",
    description: "Being prepared with specific questions helps you make the most of every appointment and leave feeling informed and confident.",
    readingTime: "6 min read",
    lastReviewed: "June 2025",
    featured: true,
  },
  {
    id: "normal-vs-abnormal-periods",
    title: "Normal vs Abnormal Periods",
    category: "Menstrual & Reproductive Health",
    description: "Understanding what a typical cycle looks like can help you recognise when something may need medical attention.",
    readingTime: "7 min read",
    lastReviewed: "June 2025",
    featured: true,
  },

  // Browse the Library
  {
    id: "healthcare-consent",
    title: "Healthcare Consent",
    category: "Know Your Rights",
    description: "Informed consent means you fully understand and agree to any medical procedure before it happens. You can change your mind at any time.",
    readingTime: "5 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "accessing-care",
    title: "Accessing Care",
    category: "Navigating Healthcare",
    description: "There are multiple pathways to healthcare in Ontario, even without a family doctor, insurance coverage, or immigration status.",
    readingTime: "7 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "vaccinations",
    title: "Vaccinations",
    category: "Preventive Care",
    description: "Vaccines protect you from serious, preventable diseases. Many are available at no cost to eligible people in Ontario.",
    readingTime: "7 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "cancer-screening",
    title: "Cancer Screening",
    category: "Preventive Care",
    description: "Screening tests can detect cancer before symptoms appear, when treatment is most effective. Ontario offers free screening programmes for several cancers.",
    readingTime: "7 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "pain-management",
    title: "Menstrual Pain Management",
    category: "Menstrual & Reproductive Health",
    description: "Effective options exist for period pain. You should never have to simply endure severe menstrual discomfort without support or treatment.",
    readingTime: "7 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "pcos",
    title: "Polycystic Ovary Syndrome (PCOS)",
    category: "Menstrual & Reproductive Health",
    description: "PCOS is one of the most common hormonal conditions in women of reproductive age, yet it remains significantly underdiagnosed.",
    readingTime: "8 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "filing-complaints",
    title: "Filing a Complaint About Your Care",
    category: "Know Your Rights",
    description: "If your rights were not respected or you received poor care, you have the right to make a formal complaint without losing access to services.",
    readingTime: "5 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "second-opinions",
    title: "Getting a Second Opinion",
    category: "Advocating for Yourself",
    description: "Seeking a second opinion is a normal, accepted part of healthcare. It is not a sign of distrust and can significantly influence important care decisions.",
    readingTime: "5 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "endometriosis",
    title: "Endometriosis",
    category: "Menstrual & Reproductive Health",
    description: "Endometriosis affects one in ten people with a uterus and is one of the most underdiagnosed conditions in women's health. Learn the signs and available treatments.",
    readingTime: "9 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "routine-physical-exams",
    title: "Routine Physical Exams",
    category: "Preventive Care",
    description: "Annual check-ups are covered by OHIP and help catch health problems early, update preventive care, and build a relationship with your provider.",
    readingTime: "6 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "mental-health-checkups",
    title: "Mental Health Check-Ins",
    category: "Mental Health",
    description: "Mental health is health. Regular check-ins, including with a professional, can help you address concerns before they become a crisis.",
    readingTime: "7 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "speaking-up",
    title: "Speaking Up During Appointments",
    category: "Advocating for Yourself",
    description: "Learning to communicate clearly and confidently during medical appointments is a skill that leads to better, more personalised care.",
    readingTime: "6 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "sexual-health",
    title: "Sexual Health",
    category: "Preventive Care",
    description: "Sexual health is a key part of overall well-being. Everyone deserves access to non-judgmental, confidential information and care.",
    readingTime: "8 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "dental-care",
    title: "Dental Care",
    category: "Preventive Care",
    description: "Oral health is directly connected to overall health. The Canadian Dental Care Plan now makes dental services more accessible for uninsured Canadians.",
    readingTime: "6 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "when-to-seek-care",
    title: "When to Seek Medical Care",
    category: "Menstrual & Reproductive Health",
    description: "Knowing when to contact a healthcare provider about your menstrual health can make an important difference in early detection and treatment.",
    readingTime: "6 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "menstrual-products",
    title: "Menstrual Products Guide",
    category: "Menstrual & Reproductive Health",
    description: "There are more menstrual product options than ever. Understanding each one helps you choose what works best for your body and lifestyle.",
    readingTime: "6 min read",
    lastReviewed: "June 2025",
  },
  {
    id: "medical-decisions",
    title: "Understanding Medical Decisions",
    category: "Advocating for Yourself",
    description: "Shared decision-making means you and your provider work together as equals. Your values and personal circumstances are a legitimate part of any healthcare decision.",
    readingTime: "5 min read",
    lastReviewed: "June 2025",
  },
];

const INITIAL_VISIBLE = 6;

/* ── Article card component ───────────────────────────────────────────────── */

function ArticleCard({ article }: { article: Article }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-5 shadow-sm flex flex-col gap-4">
      <div className="flex-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
          {article.category}
        </p>
        <h3 className="font-semibold text-base leading-snug mb-2">{article.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{article.description}</p>
      </div>

      <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock size={12} />
          {article.readingTime}
        </span>
        <span className="flex items-center gap-1.5">
          <CalendarDays size={12} />
          Reviewed {article.lastReviewed}
        </span>
      </div>

      <div>
        <Link
          to={`/health-education/${article.id}`}
          className="inline-flex items-center justify-center w-full text-sm font-medium border border-border rounded-lg px-4 py-2.5 bg-background hover:bg-muted hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          Read Article
        </Link>
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */

export function HealthEducation() {
  const [activeFilter, setActiveFilter] = useState<FilterLabel>("All Articles");
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const isSearching = searchTerm.trim() !== "";

  const featured = articles.filter((a) => a.featured);

  const browseable = isSearching
    ? articles.filter((a) => {
        const q = searchTerm.toLowerCase();
        return (
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
        );
      })
    : articles.filter((a) => {
        if (a.featured) return false;
        if (activeFilter === "All Articles") return true;
        return a.category === activeFilter;
      });

  const visible = showAll ? browseable : browseable.slice(0, INITIAL_VISIBLE);

  return (
    <div className="min-h-screen bg-background">

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
            Her Health Collective
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Her Health Library</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Evidence-based health information designed to help you understand your body, your rights, and your options.
          </p>
        </div>
      </section>

      {/* ── Search + Filters ──────────────────────────────────────────────── */}
      <section className="py-8 border-b border-border bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">

          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setShowAll(false); }}
              placeholder="Search articles, symptoms, conditions, or topics..."
              className="w-full pl-11 pr-4 py-3.5 text-sm rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              aria-label="Search health articles"
            />
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter articles by category">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => { setActiveFilter(f); setShowAll(false); }}
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

      {/* ── Start Here ────────────────────────────────────────────────────── */}
      {!isSearching && activeFilter === "All Articles" && (
        <section className="py-14 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Start Here</h2>
              <p className="text-muted-foreground text-sm">
                New to the library? These three articles are a good place to begin.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {featured.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Browse the Library ────────────────────────────────────────────── */}
      <section className="py-14 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Browse the Library</h2>
            <p className="text-muted-foreground text-sm">
              {isSearching
                ? `${browseable.length} result${browseable.length !== 1 ? "s" : ""} for "${searchTerm}".`
                : activeFilter === "All Articles"
                ? `${browseable.length} articles available across all categories.`
                : `${browseable.length} article${browseable.length !== 1 ? "s" : ""} in ${activeFilter}.`}
            </p>
          </div>

          {browseable.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <p className="text-base">No articles available in this category yet.</p>
              <p className="text-sm mt-2">Check back soon, or browse all articles.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                {visible.map((a) => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>

              {!showAll && browseable.length > INITIAL_VISIBLE && (
                <div className="text-center">
                  <button
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center justify-center text-sm font-medium border border-border rounded-xl px-6 py-3 bg-card hover:bg-muted hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    View More Articles
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ── Information You Can Trust ─────────────────────────────────────── */}
      <section className="py-10 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start bg-card border border-border rounded-2xl p-6">
            <Info size={18} className="text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-base mb-1">Information You Can Trust</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                Our articles are based on reliable Canadian health sources and reviewed regularly. They are designed for education and do not replace advice from a qualified healthcare professional.
              </p>
              <Link
                to="/about#our-mission"
                className="text-sm text-primary hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 rounded"
              >
                Learn About Our Standards
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Medical Disclaimer ────────────────────────────────────────────── */}
      <section className="py-8 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed">
            The information in the Her Health Library is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </section>

    </div>
  );
}
