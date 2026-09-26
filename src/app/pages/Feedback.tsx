import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CheckCircle, MessageSquare } from "lucide-react";

export function Feedback() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    helpful: "",
    newResources: "",
    kitLocations: "",
    improvements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          <Card className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} className="text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Thank You!</h2>
            <p className="text-muted-foreground mb-6">
              Your feedback helps us improve and better serve the community. We appreciate you taking the time to share your thoughts.
            </p>
            <Button onClick={() => setSubmitted(false)}>Submit More Feedback</Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Share Your Feedback</h1>
          <p className="text-lg text-muted-foreground">
            Your input shapes how we serve the community. All feedback is anonymous and deeply valued.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro Card */}
          <Card className="mb-8 bg-accent/10 border-accent/20">
            <div className="flex items-start gap-3">
              <MessageSquare size={20} className="text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">We're Listening</h3>
                <p className="text-sm text-muted-foreground">
                  This feedback is completely anonymous. Share as much or as little as you'd like. Every response helps us understand
                  what's working and what needs to change.
                </p>
              </div>
            </div>
          </Card>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Was Support Helpful */}
            <div>
              <label className="block font-semibold mb-3">
                If you received support from us, was it helpful?
              </label>
              <textarea
                value={formData.helpful}
                onChange={(e) => setFormData({ ...formData, helpful: e.target.value })}
                rows={4}
                placeholder="What worked well? What could have been better?"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            {/* New Resources */}
            <div>
              <label className="block font-semibold mb-3">
                What resources would you like us to add?
              </label>
              <textarea
                value={formData.newResources}
                onChange={(e) => setFormData({ ...formData, newResources: e.target.value })}
                rows={4}
                placeholder="Healthcare services, community programs, educational topics, etc."
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            {/* Kit Locations */}
            <div>
              <label className="block font-semibold mb-3">
                Where should support kits be available?
              </label>
              <textarea
                value={formData.kitLocations}
                onChange={(e) => setFormData({ ...formData, kitLocations: e.target.value })}
                rows={3}
                placeholder="Community centers, libraries, schools, clinics, etc."
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            {/* Improvements */}
            <div>
              <label className="block font-semibold mb-3">
                How can we improve?
              </label>
              <textarea
                value={formData.improvements}
                onChange={(e) => setFormData({ ...formData, improvements: e.target.value })}
                rows={5}
                placeholder="Accessibility, language options, website navigation, types of support offered, anything else..."
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Submit Feedback
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              All fields are optional. Share what feels right to you.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
