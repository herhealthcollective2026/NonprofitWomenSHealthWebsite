import { useState, useRef } from "react";
import { Link } from "react-router";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { X, MapPin, BookOpen, Navigation, MessageSquare } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import toothbrushPng from "../../imports/toothbrush.png";
import flossPng from "../../imports/floss.png";
import deodorantPng from "../../imports/deoderant.png";
import wetWipesPng from "../../imports/wet_wipes.png";
import handSanitizerPng from "../../imports/hand_sanitizer.png";
import tissuesPng from "../../imports/tissues.png";
import jellyPng from "../../imports/jelly.png";
import padsPng from "../../imports/pads.png";
import tamponsPng from "../../imports/tampons.png";
import linersPng from "../../imports/liners.png";
import toothpastePng from "../../imports/toothpaste.png";
import resourceCardPng from "../../imports/resource_card.png";

type PngIcon = { png: string; alt: string };
type IconType = PngIcon;

function KitIcon({ icon }: { icon: IconType; large?: boolean }) {
  return (
    <ImageWithFallback
      src={icon.png}
      alt={icon.alt}
      className="w-12 h-12 object-contain"
    />
  );
}

interface KitItem {
  name: string;
  icon: IconType;
  why: string;
  tips?: string;
}

const kitContents: KitItem[] = [
  {
    name: "Toothbrush",
    icon: { png: toothbrushPng, alt: "Toothbrush" },
    why: "Maintaining good oral hygiene helps prevent cavities, gum disease, and infections. Regular brushing also supports overall health and reduces the risk of heart disease.",
    tips: "Brush for at least two minutes, twice a day. Replace your toothbrush every 3 months.",
  },
  {
    name: "Toothpaste",
    icon: { png: toothpastePng, alt: "Toothpaste" },
    why: "Fluoride toothpaste strengthens tooth enamel and protects against cavities and tooth decay.",
    tips: "Use a pea-sized amount for adults. Spit, don't rinse, for maximum fluoride protection.",
  },
  {
    name: "Floss",
    icon: { png: flossPng, alt: "Dental floss" },
    why: "Flossing removes plaque and food particles between teeth where brushing cannot reach, preventing gum disease and cavities.",
    tips: "Floss once a day, ideally before bed. Gentle C-shaped motions around each tooth.",
  },
  {
    name: "Deodorant",
    icon: { png: deodorantPng, alt: "Deodorant" },
    why: "Deodorant helps control body odour, which supports confidence and participation in school, work, and community settings.",
  },
  {
    name: "Wet Wipes",
    icon: { png: wetWipesPng, alt: "Wet wipes" },
    why: "Wet wipes provide a quick and effective way to maintain cleanliness when access to running water is limited.",
    tips: "Fragrance-free wipes are gentler on sensitive skin.",
  },
  {
    name: "Hand Sanitizer",
    icon: { png: handSanitizerPng, alt: "Hand sanitizer" },
    why: "Hand sanitizer kills most germs and reduces the spread of illness when soap and water are not available.",
    tips: "Use enough to cover all hand surfaces. Rub until completely dry (about 20 seconds).",
  },
  {
    name: "Tissues",
    icon: { png: tissuesPng, alt: "Tissues" },
    why: "Tissues help contain respiratory droplets and prevent the spread of illness. They also support basic hygiene needs throughout the day.",
  },
  {
    name: "Mini Petroleum Jelly",
    icon: { png: jellyPng, alt: "Mini petroleum jelly" },
    why: "Petroleum jelly protects dry or cracked skin, lips, and minor irritations. It acts as a barrier that retains moisture and supports skin healing.",
  },
  {
    name: "Pads",
    icon: { png: padsPng, alt: "Sanitary pads" },
    why: "Menstrual pads are a fundamental need for managing periods with dignity. Lack of access to menstrual products is a significant barrier to education and participation in daily life.",
  },
  {
    name: "Tampons",
    icon: { png: tamponsPng, alt: "Tampons" },
    why: "Tampons provide flexible, active-friendly period management. Having options supports comfort and participation in all activities during menstruation.",
    tips: "Change every 4–8 hours. Never leave in longer than 8 hours to reduce TSS risk.",
  },
  {
    name: "Liners",
    icon: { png: linersPng, alt: "Panty liners" },
    why: "Pantyliners offer light protection during the beginning or end of a period, or for everyday discharge, supporting comfort and confidence.",
  },
  {
    name: "Resource Cards",
    icon: { png: resourceCardPng, alt: "Resource cards" },
    why: "Each kit includes resource cards connecting recipients to local healthcare services, mental health support, housing resources, and community programs.",
    tips: "Keep these cards somewhere accessible, they may be useful for you or someone you know.",
  },
];

const moreThanKit = [
  {
    icon: BookOpen,
    title: "Health Education",
    description: "Learn about preventive care, menstrual health, and patient advocacy.",
  },
  {
    icon: Navigation,
    title: "Resource Navigation",
    description: "Connect with mental health services, housing support, and community programs.",
  },
  {
    icon: MessageSquare,
    title: "Advocacy",
    description: "We advocate for accessible hygiene products and healthcare equity.",
  },
];

export function OurKits() {
  const [selectedItem, setSelectedItem] = useState<KitItem | null>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  const scrollToLocations = () => {
    locationsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Small essentials. Meaningful impact.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Our kits provide hygiene and preventive care essentials to women, students, newcomers, and community members facing barriers to access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={scrollToLocations} className="focus:outline-none focus:ring-2 focus:ring-primary/40">
                  Where Our Kits Can Be Found
                </Button>
                <a
                  href="https://forms.gle/SsHDpKgA2wgb7CRw5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  Leave Feedback
                </a>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1764909262009-3dcd5691185c?w=800&h=600&fit=crop&auto=format"
                alt="Organized hygiene kit with toiletries and personal care items"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What's Inside?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Each kit is thoughtfully assembled with essential hygiene and menstrual products. Click any item to learn more.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {kitContents.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedItem(item)}
                className="text-center p-4 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md hover:border-primary transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <div className="mb-3 flex items-center justify-center h-10"><KitIcon icon={item.icon} /></div>
                <p className="text-sm font-medium">{item.name}</p>
              </button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center italic">
            Contents may vary based on availability and community needs.
          </p>
        </div>
      </section>

      {/* More Than A Kit */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">More Than A Kit</h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our goal is not only to provide products but to reduce barriers and improve access to women's health resources.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {moreThanKit.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} hover>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Where Our Kits Can Be Found */}
      <section ref={locationsRef} className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <MapPin size={24} className="text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Where Our Kits Can Be Found</h2>
          </div>
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 mt-6">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We are currently preparing for our first community kit distribution.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As our network grows, this page will be updated with schools, community organizations, clinics, and local partners where our kits are available.
            </p>
            <p className="font-semibold text-primary text-lg">Keep your eyes peeled, we're just getting started!</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Help?</h2>
          <p className="text-lg mb-8 opacity-90">
            If you want to support our mission, there are many ways to get involved!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/4.herhealth"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
            >
              Support Our Events
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=HerHealthCollective2026@gmail.com&su=Volunteer%20Interest"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
            >
              Volunteer
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=HerHealthCollective2026@gmail.com&su=Partnership%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary-foreground/40"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* Product Popup */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-card rounded-2xl shadow-2xl max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-muted-foreground/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
              aria-label="Close"
            >
              <X size={16} />
            </button>
            <div className="mb-4 flex items-center justify-center h-14"><KitIcon icon={selectedItem.icon} /></div>
            <h3 className="text-xl font-bold mb-3">{selectedItem.name}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{selectedItem.why}</p>
            {selectedItem.tips && (
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-3">
                <p className="text-sm font-semibold text-foreground mb-1">Tips</p>
                <p className="text-sm text-muted-foreground">{selectedItem.tips}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
