import { Card } from "../components/Card";
import { Target, Heart } from "lucide-react";

export function About() {

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Heart size={24} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Our Story</h2>
          </div>
          <Card>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Her Health Collective was founded in 2026 by two Queen's University students who believed that women's health should never be difficult to access.
              </p>
              <p>
                As women of colour, we grew up hearing the same stories from mothers, friends, relatives, and members of our communities. Women whose concerns were dismissed. Women who delayed care because they couldn't afford it. Women who didn't know where to turn or struggled to navigate a healthcare system that often felt confusing, overwhelming, or inaccessible.
              </p>
              <p>
                Growing up in diverse communities also showed us that these barriers are not experienced equally. Newcomers, racialized communities, 2SLGBTQIA+ individuals, people with disabilities, and others facing systemic inequities often encounter additional obstacles when trying to access healthcare. Language, cost, discrimination, and past negative experiences can all make it harder to receive the care people deserve.
              </p>
              <p>
                We created Her Health Collective to help address those barriers today by connecting women with trusted information, practical resources, and community support. But we also know these efforts alone are not enough.
              </p>
              <p>
                Providing resources matters, but resources are not a substitute for systemic change. We believe the long-term solution is a healthcare system where organizations like ours are no longer necessary because every woman can access the care she needs without unnecessary barriers.
              </p>
              <p>
                That is why Her Health Collective is committed not only to supporting women today, but also to advocating for policy change, challenging the systems that create inequities, and encouraging conversations about why those barriers exist in the first place.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Mission */}
      <section id="our-mission" className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Target size={24} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold">Our Mission</h2>
          </div>
          <Card>
            <div className="space-y-4 leading-relaxed">
              <p>
                Our mission is to make women's health more accessible by connecting women with trusted education, practical resources, and the support they need to make informed decisions about their health.
              </p>
              <p className="text-muted-foreground">
                We recognize that no two women experience healthcare in the same way. Factors such as race, income, disability, sexual orientation, gender identity, immigration status, geography, and family responsibilities all shape access to care. That is why we take an intersectional approach, recognizing that health equity means meeting women where they are and acknowledging the unique barriers they face. Reliable education is crucial in a time where misinformation is rampant, which is why we take pride in ensuring all of our sources shared are reliable and backed by research.
              </p>
              <p className="text-muted-foreground">
                Alongside education and resource navigation, we are committed to advocating for policies that address the root causes of health inequities. We believe meaningful progress comes from improving access today while working toward lasting systemic change for tomorrow.
              </p>
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
}
