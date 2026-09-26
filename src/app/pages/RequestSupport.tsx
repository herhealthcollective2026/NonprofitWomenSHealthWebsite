import { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Lock, CheckCircle } from "lucide-react";

export function RequestSupport() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    supportType: [] as string[],
    products: [] as string[],
    identity: "",
    language: "",
    contact: "",
    additionalInfo: "",
  });

  const handleCheckboxChange = (field: "supportType" | "products", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

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
            <h2 className="text-2xl font-bold mb-3">Request Received</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for reaching out. We'll be in touch within 1-2 business days to coordinate support.
            </p>
            <Button onClick={() => setSubmitted(false)}>Submit Another Request</Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Request Support</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Request a support kit, resource guidance, or connect with our team. All requests are confidential.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Privacy Notice */}
          <Card className="mb-8 bg-muted/30 border-border">
            <div className="flex items-start gap-3">
              <Lock size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Your Privacy Matters</h3>
                <p className="text-sm text-muted-foreground">
                  All information is kept strictly confidential. We never share your data without your explicit permission.
                  Contact information is optional and only used to coordinate support delivery.
                </p>
              </div>
            </div>
          </Card>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Support Type */}
            <div>
              <label className="block font-semibold mb-3">What support are you looking for?</label>
              <div className="space-y-3">
                {[
                  "Support kit (hygiene & menstrual products)",
                  "Resource guidance",
                  "Healthcare navigation help",
                  "Mental health resources",
                  "Other",
                ].map((option) => (
                  <label key={option} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.supportType.includes(option)}
                      onChange={() => handleCheckboxChange("supportType", option)}
                      className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-ring"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <label className="block font-semibold mb-3">Which products would help? (Optional)</label>
              <div className="space-y-3">
                {[
                  "Menstrual pads",
                  "Tampons",
                  "Hygiene essentials (soap, toothpaste, etc.)",
                  "Resource cards",
                ].map((option) => (
                  <label key={option} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.products.includes(option)}
                      onChange={() => handleCheckboxChange("products", option)}
                      className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-ring"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Identity */}
            <div>
              <label className="block font-semibold mb-3">I am a... (Optional)</label>
              <select
                value={formData.identity}
                onChange={(e) => setFormData({ ...formData, identity: e.target.value })}
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select an option</option>
                <option value="student">Student</option>
                <option value="newcomer">Newcomer</option>
                <option value="community-member">Community member</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>

            {/* Language */}
            <div>
              <label className="block font-semibold mb-3">Preferred language</label>
              <input
                type="text"
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                placeholder="e.g., English, Spanish, Mandarin..."
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {/* Contact */}
            <div>
              <label className="block font-semibold mb-3">Contact information (Optional)</label>
              <input
                type="text"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                placeholder="Email or phone number (only if you want us to follow up)"
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Leave blank if you prefer to remain anonymous. You can still pick up resources at partner locations.
              </p>
            </div>

            {/* Additional Info */}
            <div>
              <label className="block font-semibold mb-3">Anything else we should know? (Optional)</label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                rows={4}
                placeholder="Special requests, accessibility needs, preferred pickup location, etc."
                className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Submit Request
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
