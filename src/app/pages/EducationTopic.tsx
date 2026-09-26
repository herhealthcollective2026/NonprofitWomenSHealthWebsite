import { useParams, Link } from "react-router";
import { useState } from "react";
import {
  ArrowLeft, Clock, CalendarDays, CheckCircle, AlertCircle, ExternalLink,
  Stethoscope, ChevronDown, ChevronUp, List, Link2, Mail, Linkedin,
} from "lucide-react";

/* ─── Data types ──────────────────────────────────────────────────────────── */

interface Section {
  id: string;
  heading: string;
  body: string;
  bullets?: string[];
  tip?: string;
  infoBox?: string;
}

interface FAQ { q: string; a: string; }
interface LearnMore { title: string; org: string; url: string; }

interface QuickFact { label: string; value: string; }

interface TopicData {
  title: string;
  category: string;
  categoryPath: string;
  readingTime: string;
  summary: string;
  whatYoullLearn: string[];
  highlight?: string;
  quickFacts?: QuickFact[];
  sections: Section[];
  faq: FAQ[];
  keyTakeaways: string[];
  whenToSeeDoctor?: string[];
  learnMore: LearnMore[];
  references: string[];
  relatedTopics: string[];
}

/* ─── Topic data ──────────────────────────────────────────────────────────── */

const topics: Record<string, TopicData> = {
  "patient-rights": {
    title: "Patient Rights",
    category: "Know Your Rights",
    categoryPath: "/health-education#rights",
    readingTime: "6 min read",
    summary: "Every person in Canada has legal rights when receiving healthcare, regardless of immigration status, income, or language.",
    whatYoullLearn: [
      "Your core rights as a patient in Canada",
      "Protections for newcomers and uninsured individuals",
      "How your health information is kept private",
      "What to do if your rights are not respected",
    ],
    highlight: "You have the right to receive safe, respectful, and non-discriminatory healthcare. These rights apply in hospitals, clinics, and community health centres, regardless of whether you have OHIP.",
    sections: [
      {
        id: "core-rights",
        heading: "Your Core Patient Rights",
        body: "Canadian law protects a broad set of rights for anyone receiving healthcare. These rights exist regardless of who you are, where you are from, or your ability to pay.",
        bullets: [
          "The right to be treated with dignity and respect at all times",
          "The right to receive care regardless of age, gender, race, religion, disability, or sexual orientation",
          "The right to be informed about your diagnosis, treatment options, and potential risks in plain language",
          "The right to give or refuse consent before any procedure or treatment",
          "The right to access your own medical records",
          "The right to a second opinion",
          "The right to have a support person present during appointments",
          "The right to request language interpretation or accommodation to ensure you fully understand your care and consent",
        ],
      },
      {
        id: "newcomers",
        heading: "Rights for Newcomers and Uninsured Patients",
        body: "Many people worry that they cannot access healthcare without a provincial health card. This is a common misconception. Important protections exist for newcomers, refugee claimants, and uninsured individuals.",
        bullets: [
          "Hospital emergency departments will provide life-saving and stabilizing emergency care regardless of your immigration or insurance status",
          "Refugee claimants may be eligible for the Interim Federal Health Program (IFHP)",
          "Community health centres provide care on a sliding-scale or no-cost basis regardless of insurance status",
          "Being treated in an emergency room without OHIP or private insurance does not mean the care is free. Uninsured patients will receive a bill from the hospital and attending doctors afterward. For routine, non-emergency care without insurance, Community Health Centres (CHCs) offer free or sliding-scale primary care",
        ],
        infoBox: "The Interim Federal Health Program (IFHP) provides temporary health coverage for refugees and refugee claimants while they wait for provincial coverage to begin. Visit Canada.ca to check eligibility.",
      },
      {
        id: "privacy",
        heading: "Privacy and Confidentiality",
        body: "Your health information is among the most sensitive personal information there is. Ontario's Personal Health Information Protection Act (PHIPA) sets strict rules about how it can be collected, used, and shared.",
        bullets: [
          "Your health information is protected under PHIPA (Ontario)",
          "Your provider cannot share your information without your consent, except in limited legal circumstances",
          "You have the right to know who has accessed your health records",
          "You can request corrections to inaccurate information in your file",
        ],
        tip: "You can request a copy of your health records from any provider. Some offices charge a small administrative fee. Ask in advance about their process.",
      },
    ],
    faq: [
      { q: "Can I be denied care because I don't have OHIP?", a: "No hospital emergency department will turn you away for a life-threatening or urgent condition because you lack OHIP. However, if you do not have OHIP or private health insurance, you will be billed for hospital services and physician fees after receiving treatment. For non-emergency healthcare, Community Health Centres (CHCs) provide care to uninsured residents at no charge." },
      { q: "What if my provider doesn't speak my language?", a: "You can request a professional medical interpreter when booking or arriving for care. While major hospitals and Community Health Centres (CHCs) frequently offer free phone or video interpretation services, availability varies by clinic. If an official interpreter is unavailable, you may bring a trusted adult to assist with translation." },
      { q: "Can I see my medical records?", a: "Yes. Under PHIPA, you have the right to access your health records. Your provider has 30 days to provide them. A small administrative fee may apply." },
    ],
    keyTakeaways: [
      "You have the right to dignified, non-discriminatory care in every healthcare setting.",
      "Many hospitals and public health clinics offer interpretation services upon request. Ask your provider about language support options before or during your appointment.",
      "You may access your own health records and request corrections at any time.",
      "Emergency departments will treat medical emergencies regardless of your insurance status, though hospital fees will apply if you do not have OHIP.",
    ],
    whenToSeeDoctor: undefined,
    learnMore: [
      { title: "Patients' Rights in Ontario", org: "Ontario Ministry of Health", url: "https://www.ontario.ca/page/patient-rights" },
      { title: "Interim Federal Health Program", org: "Government of Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/refugees/help-within-canada/health-care/interim-federal-health-program.html" },
      { title: "Health Care for Newcomers", org: "Settlement.Org", url: "https://settlement.org/ontario/health/ohip-and-health-insurance/health-care/what-health-care-services-are-available-to-newcomers/" },
    ],
    references: [
      "Ontario Ministry of Health — Patient Rights and Responsibilities",
      "Government of Canada — Interim Federal Health Program (IFHP)",
      "Personal Health Information Protection Act (PHIPA), Ontario",
      "Canadian Medical Protective Association — Informed Consent Guidelines",
    ],
    relatedTopics: ["healthcare-consent", "filing-complaints", "accessing-care"],
  },

  "healthcare-consent": {
    title: "Healthcare Consent",
    category: "Know Your Rights",
    categoryPath: "/health-education#rights",
    readingTime: "5 min read",
    summary: "Informed consent means you fully understand and freely agree to any medical procedure before it happens. You can change your mind at any time.",
    whatYoullLearn: [
      "What makes consent legally valid",
      "Your right to refuse any treatment",
      "Special consent situations (youth, capacity, advance directives)",
      "How to respond if you feel pressured",
    ],
    highlight: "Consent must be informed, voluntary, and specific. You can withdraw consent at any time, even after a procedure has started.",
    sections: [
      {
        id: "valid-consent",
        heading: "What Makes Consent Valid",
        body: "Not all consent is legally or ethically valid. For consent to be meaningful, it must meet a clear set of conditions that protect your autonomy and wellbeing.",
        bullets: [
          "You must be given enough information to make a decision, including risks, benefits, and alternatives",
          "You must be free from pressure, threats, or manipulation",
          "You must have the mental capacity to understand and decide",
          "Consent for one procedure does not automatically apply to others",
          "You can withdraw consent at any time, even mid-procedure",
        ],
        tip: "Ask your provider to explain all alternatives, including the option of doing nothing. You are never required to say yes.",
      },
      {
        id: "right-to-refuse",
        heading: "Your Right to Say No",
        body: "One of the most important patient rights is the right to refuse treatment, even if your provider strongly disagrees with your decision.",
        bullets: [
          "You can refuse any treatment or procedure for any reason",
          "You cannot be punished, judged, or receive lower-quality care for refusing",
          "Your provider must document your refusal and continue supporting you",
          "If you feel pressured, ask to speak with a patient advocate or patient relations office",
        ],
        infoBox: "If you are unsure about a recommended procedure, asking for more time is always appropriate. Most decisions (other than true emergencies) do not need to be made immediately.",
      },
      {
        id: "special-situations",
        heading: "Consent in Special Situations",
        body: "There are situations where the standard consent process has additional considerations.",
        bullets: [
          "In Ontario, there is no fixed legal age of consent for healthcare. Patients of any age can consent to or refuse their own treatment if a provider determines they have the maturity and capacity to understand the decision and its consequences",
          "If you are unable to consent, a substitute decision-maker (family member or legal representative) steps in",
          "You can create an advance care directive or power of attorney for personal care to document future wishes",
          "Healthcare providers must ensure you understand proposed treatments before obtaining consent. Many hospitals and clinics provide professional interpretation services upon request to help you make an informed decision",
        ],
      },
    ],
    faq: [
      { q: "Can a doctor treat me without asking?", a: "No. Except in life-threatening emergencies where you are unable to respond, no provider can perform a procedure without your informed consent. Doing so without consent could be considered assault." },
      { q: "What if I feel pressured to sign something?", a: "You are never required to sign a consent form in the moment. Ask for time to think, request an explanation of alternatives, or ask to speak with a patient advocate. Consent under pressure is not valid consent." },
      { q: "Does verbal consent count?", a: "Yes, verbal consent is legally valid in Canada. Written consent forms are used for documentation purposes. They do not replace the need for a proper informed discussion." },
    ],
    keyTakeaways: [
      "You must always be fully informed before agreeing to any medical procedure.",
      "You can say no and you can change your mind at any time.",
      "Consent obtained under pressure or without full information is not legally valid.",
      "Ask questions until you genuinely understand what you are agreeing to.",
    ],
    learnMore: [
      { title: "Consent to Treatment", org: "Ontario Ministry of Health", url: "https://www.ontario.ca/page/consent-to-treatment" },
      { title: "Informed Consent Guide", org: "Canadian Medical Protective Association", url: "https://www.cmpa-acpm.ca/en/advice-publications/handbooks/consent-a-guide-for-canadian-physicians" },
    ],
    references: [
      "Health Care Consent Act, 1996, Ontario",
      "Ontario Ministry of Health — Consent to Treatment",
      "Canadian Medical Protective Association — Consent Guide",
    ],
    relatedTopics: ["patient-rights", "filing-complaints", "speaking-up"],
  },

  "accessing-care": {
    title: "Accessing Care",
    category: "Know Your Rights",
    categoryPath: "/health-education#rights",
    readingTime: "7 min read",
    summary: "There are multiple pathways to healthcare in Ontario, even without a family doctor, insurance, or immigration status.",
    whatYoullLearn: [
      "The different types of healthcare settings available",
      "Options if you don't have OHIP coverage",
      "How to find a family doctor or nurse practitioner",
      "Free 24/7 phone and online health resources",
    ],
    highlight: "Community health centres (CHCs) provide care regardless of OHIP status, income, or immigration status. Many offer services in multiple languages.",
    sections: [
      {
        id: "settings",
        heading: "Types of Healthcare Settings",
        body: "The Canadian healthcare system has several points of entry. Understanding your options helps you get the right care at the right time.",
        bullets: [
          "Family doctor / primary care physician: your first point of contact for most health concerns",
          "Walk-in clinics: no appointment needed, for non-emergency issues",
          "Community Health Centres: serve people facing barriers to care, free or low-cost",
          "Hospital emergency rooms: for serious, urgent, or life-threatening conditions only",
          "Telehealth Ontario / Health811 (call 811): speak to a registered nurse 24/7, free of charge",
          "Nurse practitioner-led clinics: full primary care without a physician",
        ],
        tip: "Reserve the emergency room for true emergencies. For non-urgent concerns, walk-in clinics and telehealth are faster and less overwhelming options.",
      },
      {
        id: "no-ohip",
        heading: "If You Don't Have OHIP",
        body: "Eligible new and returning Ontario residents receive OHIP coverage immediately upon establishing residency. For people who are uninsured or who do not qualify for OHIP, alternative healthcare options are still available.",
        bullets: [
          "Community health centres provide care at no cost during the OHIP waiting period",
          "Emergency care at hospitals cannot be refused, though you may receive a bill",
          "If you do not have OHIP, some Community Health Centres (CHCs) and public health clinics offer free or low-cost medications, vaccines, and sexual health supplies through local support programs",
          "Free immunizations and sexual health clinics are available through local public health units",
        ],
        infoBox: "Refugee claimants are eligible for the Interim Federal Health Program (IFHP), which covers basic healthcare services until provincial coverage begins.",
      },
      {
        id: "finding-doctor",
        heading: "Finding a Family Doctor",
        body: "With a family physician shortage in Ontario, many people do not have a regular doctor. Several programs can help you get connected.",
        bullets: [
          "Health Care Connect (Ontario): be matched with an accepting family doctor or NP at hcc.moh.gov.on.ca",
          "Health811 (call 811): speak with a health navigator who can help you find care, 24/7",
          "Community Health Centres: accept patients without a referral",
          "Some clinics specialize in care for women, 2SLGBTQIA+ individuals, or specific cultural communities",
        ],
      },
    ],
    faq: [
      { q: "Can I go to a community health centre without a health card?", a: "Yes. Community health centres serve everyone, regardless of insurance status, immigration status, or ability to pay. They are one of the most accessible points of care in Ontario." },
      { q: "What is Health811?", a: "Health811 (call 811) is a free, 24/7 service where you can speak with a registered nurse about health concerns, or get connected to local health services. Available in multiple languages." },
      { q: "How long does it take to get a family doctor?", a: "Wait times vary widely by region. In some areas it can take months to years. In the meantime, using a community health centre or walk-in clinic for ongoing care is a good strategy." },
    ],
    keyTakeaways: [
      "You do not need OHIP or a family doctor to access community health centres.",
      "Health811 (call 811) offers free health navigation support 24/7.",
      "Health Care Connect helps match you with a family doctor or nurse practitioner.",
      "Emergency care cannot be withheld, even without insurance.",
    ],
    learnMore: [
      { title: "Health Care Connect", org: "Ontario Ministry of Health", url: "https://hcc3.hcc.moh.gov.on.ca/HCCWeb/faces/layoutHCCHomePage.xhtml" },
      { title: "Find a Community Health Centre", org: "Association of Ontario Health Centres", url: "https://www.aohc.org/find-a-chc" },
      { title: "Telehealth Ontario", org: "Ontario Ministry of Health", url: "https://www.ontario.ca/page/get-medical-advice-telehealth-ontario" },
    ],
    references: [
      "Ontario Ministry of Health — Health Care Connect",
      "Association of Ontario Health Centres",
      "Government of Canada — OHIP Eligibility",
      "Public Health Ontario — Free Health Services",
    ],
    relatedTopics: ["patient-rights", "routine-physical-exams", "questions-for-doctor"],
  },

  "filing-complaints": {
    title: "Filing Complaints",
    category: "Know Your Rights",
    categoryPath: "/health-education#rights",
    readingTime: "5 min read",
    summary: "If your rights were violated or you received poor care, you have the right to file a formal complaint. Doing so will not cause you to lose access to healthcare.",
    whatYoullLearn: [
      "When to consider filing a complaint",
      "How to file through the right channel",
      "Your protections as a patient who complains",
      "Organizations that can support you",
    ],
    highlight: "Filing a complaint can improve care for others. You will not lose access to care by speaking up. Regulated colleges investigate complaints independently and have processes in place to protect patients throughout the review.",
    sections: [
      {
        id: "when",
        heading: "When to Consider Filing a Complaint",
        body: "Not every difficult experience warrants a formal complaint, but some situations clearly do. Recognizing when your rights were genuinely violated is an important first step.",
        bullets: [
          "You were treated in a disrespectful, discriminatory, or demeaning way",
          "A procedure was performed without your informed consent",
          "You received incorrect or delayed care that caused harm",
          "Your privacy or confidentiality was breached",
          "Your concerns were dismissed or ignored repeatedly",
          "You experienced cultural, linguistic, or racial discrimination",
        ],
      },
      {
        id: "how",
        heading: "How to File a Complaint",
        body: "The right channel for your complaint depends on who you are complaining about and what happened.",
        bullets: [
          "Start with the patient relations or patient advocate office at the hospital or clinic",
          "For a specific physician: College of Physicians and Surgeons of Ontario (CPSO)",
          "For a nurse: College of Nurses of Ontario (CNO)",
          "For broader systemic issues: Ontario Patient Ombudsman",
          "Document everything: dates, names, what was said, and any witnesses",
          "Bring a support person or ask a community health worker to help you write the complaint",
        ],
        tip: "Document what happened as soon as possible after the incident since memory fades. Note the date, the names of staff involved, and a clear description of what occurred.",
      },
      {
        id: "protections",
        heading: "Your Protections as a Complainant",
        body: "Many people hesitate to complain out of fear of losing their healthcare. These protections exist to ensure that doesn't happen.",
        bullets: [
          "Regulated colleges prohibit providers from abandoning patients. If a complaint leads to a breakdown in trust, your doctor must continue providing interim or emergency care while helping transition you to a new provider.",
          "Complaints to regulated colleges are investigated by an independent body",
          "You can request regular updates on the status of your complaint",
          "Community legal clinics, patient advocates, and medical malpractice lawyers can offer guidance or free initial consultations if you experienced significant harm",
          "Community health centres and legal clinics can help you navigate the process",
        ],
        infoBox: "The Ontario Patient Ombudsman investigates complaints about hospitals, home care, and long-term care homes. This service is free and independent from the healthcare organizations it oversees.",
      },
    ],
    faq: [
      { q: "Will my doctor stop treating me if I file a complaint?", a: "A doctor cannot immediately abandon you or deny emergency care. However, filing a complaint may lead to a mutual recognition that the doctor-patient relationship has broken down. If your doctor chooses to end the relationship, CPSO rules require them to provide advance written notice, continue care during a reasonable transition period (typically up to 3 months), and facilitate the transfer of your medical records." },
      { q: "How long does the complaints process take?", a: "Timelines vary depending on the complexity of the complaint. While regulatory bodies like the CPSO aim to resolve matters within approximately 150 days (about 5 months), more complex investigations may take between 6 and 12 months. You will receive periodic progress updates throughout the review." },
      { q: "Do I need a lawyer?", a: "For most complaints, no. Patient advocates, community health workers, and legal aid clinics can guide you through the process at no cost." },
    ],
    keyTakeaways: [
      "Every regulated healthcare provider in Ontario is overseen by a college that accepts public complaints.",
      "Document incidents as soon as they happen. Details matter.",
      "You will not lose access to care by filing a legitimate complaint.",
      "Patient advocates, legal aid clinics, and community health centres can all support you.",
    ],
    learnMore: [
      { title: "Making a Complaint About a Doctor", org: "College of Physicians and Surgeons of Ontario", url: "https://www.cpso.on.ca/Patients-Public/Complaints-Concerns" },
      { title: "Ontario Patient Ombudsman", org: "Government of Ontario", url: "https://www.patientombudsman.ca/" },
      { title: "College of Nurses — Complaints", org: "College of Nurses of Ontario", url: "https://www.cno.org/en/protect-the-public/file-a-complaint/" },
    ],
    references: [
      "College of Physicians and Surgeons of Ontario — Patient Complaints",
      "Ontario Patient Ombudsman",
      "College of Nurses of Ontario",
      "Regulated Health Professions Act, 1991, Ontario",
    ],
    relatedTopics: ["patient-rights", "healthcare-consent", "speaking-up"],
  },

  "questions-for-doctor": {
    title: "Questions to Ask Your Doctor",
    category: "Advocating For Yourself",
    categoryPath: "/health-education#advocacy",
    readingTime: "6 min read",
    summary: "Being prepared with specific questions helps you make the most of every appointment and leave feeling informed and confident.",
    whatYoullLearn: [
      "How to prepare effectively before an appointment",
      "Essential questions for any diagnosis",
      "Key questions about medications and tests",
      "How to make sure you understand the answers",
    ],
    highlight: "You are the expert on your own body. There are no stupid questions when it comes to your health, asking questions leads to better outcomes.",
    sections: [
      {
        id: "before",
        heading: "Before Your Appointment",
        body: "A little preparation goes a long way. Taking five minutes the night before your appointment can significantly improve what you get out of it.",
        bullets: [
          "Write down all your symptoms: when they started, how often they occur, and how severe they are",
          "List all medications, supplements, and vitamins you currently take",
          "Bring your health card, ID, and any previous test results or referral letters",
          "Write down your top 2–3 concerns so you can prioritize if time is short",
          "Consider bringing a support person to help you listen and remember",
        ],
        tip: "Put your most important concern first. Doctors often follow the first topic raised, if you save your main worry for last, you may run out of time.",
      },
      {
        id: "diagnosis",
        heading: "Questions to Ask About a Diagnosis",
        body: "If your doctor gives you a new diagnosis, these questions help ensure you leave with a full understanding of what it means and what to do next.",
        bullets: [
          "What is my diagnosis, and what does it mean for my everyday life?",
          "What caused this condition, is it something I can change?",
          "What are all my treatment options?",
          "What happens if I choose not to treat it?",
          "Are there any lifestyle changes that would help?",
          "Do I need to see a specialist, and how urgent is that referral?",
          "Where can I find reliable information to learn more?",
        ],
      },
      {
        id: "medications",
        heading: "Questions to Ask About Medications or Tests",
        body: "Before agreeing to a test or starting a new medication, make sure you understand why it is being recommended and what to expect.",
        bullets: [
          "Why are you recommending this medication or test?",
          "What are the benefits and the most common side effects?",
          "Are there alternatives, including not treating?",
          "How will I know if this is working?",
          "How long will I need to take this medication?",
          "What should I do if I experience side effects?",
          "Is this covered by OHIP, or will I need insurance or pay out of pocket?",
        ],
        infoBox: "It is always okay to ask: 'Can I have a moment to think about this?' Most decisions (other than true emergencies) do not need to be made in the exam room.",
      },
    ],
    faq: [
      { q: "What if my doctor doesn't have time for my questions?", a: "You can say: 'I have a few questions, can we make sure we have time for them?' If there isn't time, ask to schedule a follow-up specifically to discuss them. Your questions are important." },
      { q: "What if I forget my questions during the appointment?", a: "Write them down in advance and bring the list with you. Reading from a paper or phone during an appointment is completely normal and accepted." },
      { q: "Is it rude to ask my doctor to explain in simpler language?", a: "Not at all. Providers expect to explain things in plain language, it is a core part of their job. Saying 'Can you say that in simpler terms?' is a reasonable and professional request." },
    ],
    keyTakeaways: [
      "Always prepare your top concerns in writing before every appointment.",
      "Ask for plain-language explanations, medical jargon is not always necessary.",
      "It is okay to slow the conversation down and ask for clarification.",
      "Always ask: what happens next, and what is the follow-up plan?",
    ],
    learnMore: [
      { title: "Questions to Ask Your Doctor", org: "Canadian Cancer Society", url: "https://cancer.ca/en/living-with-cancer/at-the-cancer-centre/questions-to-ask-your-doctor" },
      { title: "Being an Informed Patient", org: "Health Quality Ontario", url: "https://www.hqontario.ca/patient-and-family-engagement/being-an-informed-patient" },
    ],
    references: [
      "Health Quality Ontario — Patient Engagement Resources",
      "Canadian Cancer Society — Questions for Your Doctor",
      "Mayo Clinic — How to Prepare for an Appointment",
    ],
    relatedTopics: ["speaking-up", "second-opinions", "medical-decisions"],
  },

  "second-opinions": {
    title: "Getting Second Opinions",
    category: "Advocating For Yourself",
    categoryPath: "/health-education#advocacy",
    readingTime: "5 min read",
    summary: "Seeking a second opinion is a normal, accepted part of healthcare, not a sign of distrust. It can significantly influence your care decisions.",
    whatYoullLearn: [
      "When a second opinion is especially important",
      "How to request a referral",
      "What to bring to a second consultation",
      "How to communicate with your original provider",
    ],
    highlight: "Any reputable healthcare provider will support your right to a second opinion. If your provider discourages it, that is a red flag worth noting.",
    sections: [
      {
        id: "when",
        heading: "When to Consider a Second Opinion",
        body: "Second opinions are valuable in a range of situations, not only for serious diagnoses. Any time you feel uncertain, unheard, or are facing a major decision, a second perspective is reasonable.",
        bullets: [
          "You have been diagnosed with a serious, complex, or rare condition",
          "Surgery or an invasive procedure is being recommended",
          "Your current treatment is not working as expected",
          "You feel your concerns have not been fully addressed",
          "Multiple treatment options exist and you are unsure which is best",
          "A diagnosis feels inconsistent with how you feel",
        ],
      },
      {
        id: "how",
        heading: "How to Get a Second Opinion",
        body: "In Ontario, getting a second opinion usually requires a referral. Here is how to navigate the process smoothly.",
        bullets: [
          "How to request: Ask your primary care provider for a referral to another specialist or physician for a second opinion. If your primary provider is hesitant, you can visit a walk-in clinic or Community Health Centre (CHC) to request a referral.",
          "Medical records: Your referring provider will typically send your relevant medical history, test results, and imaging directly to the new specialist before your consultation.",
          "Bring copies of your test results, imaging, and full medical history to the new appointment",
          "Academic hospitals and teaching centres often have specialist consultation services",
          "For complex diagnoses, some organizations offer second opinion programs specifically",
        ],
        tip: "You do not owe anyone an explanation for wanting a second opinion. A simple: 'I'd like a second opinion before moving forward. Can you refer me?' is enough.",
      },
      {
        id: "communication",
        heading: "Talking to Your Original Provider",
        body: "Many people worry that asking for a second opinion will damage their relationship with their doctor. In practice, most providers are supportive.",
        bullets: [
          "A good provider will support your decision without making you feel guilty",
          "Document your request and any unusual response",
          "If your provider reacts negatively, that response is itself valuable information",
          "You can continue to see your original provider while pursuing a second opinion",
        ],
      },
    ],
    faq: [
      { q: "Is it rude to ask for a second opinion?", a: "Absolutely not. It is a sign of engaged, responsible health decision-making. Experienced providers encounter these requests regularly and should handle them professionally." },
      { q: "Will my OHIP cover a second opinion?", a: "Yes. Second opinions provided by physicians or specialists working within Ontario's public healthcare system are fully covered by OHIP, provided you have a valid referral from a licensed Ontario physician or nurse practitioner." },
      { q: "What if the second opinion contradicts the first?", a: "This happens more often than you might think. Discuss both opinions openly with each provider, or consider a third opinion from a specialist if the gap is significant. The final decision is always yours." },
    ],
    keyTakeaways: [
      "Getting a second opinion is your right and is fully supported under Canadian healthcare.",
      "Bring all records, test results, and imaging to your second consultation.",
      "A good provider will support, not discourage, your decision.",
      "Second opinions are especially important for serious diagnoses and major procedures.",
    ],
    learnMore: [
      { title: "Getting a Second Opinion", org: "Canadian Cancer Society", url: "https://cancer.ca/en/living-with-cancer/at-the-cancer-centre/getting-a-second-opinion" },
      { title: "Your Rights as a Patient", org: "Ontario Ministry of Health", url: "https://www.ontario.ca/page/patient-rights" },
    ],
    references: [
      "Canadian Cancer Society — Second Opinions",
      "Ontario Ministry of Health — Patient Rights",
      "Mayo Clinic — Getting a Second Medical Opinion",
    ],
    relatedTopics: ["questions-for-doctor", "medical-decisions", "patient-rights"],
  },

  "speaking-up": {
    title: "Speaking Up During Appointments",
    category: "Advocating For Yourself",
    categoryPath: "/health-education#advocacy",
    readingTime: "6 min read",
    summary: "Learning to communicate clearly and confidently during medical appointments is a powerful health skill that leads to better care.",
    whatYoullLearn: [
      "How to describe symptoms effectively",
      "What to do when you don't understand something",
      "How to handle feeling dismissed or rushed",
      "When and how to bring a support person",
    ],
    highlight: "You deserve to be heard. If you feel dismissed, it is always appropriate to say: \"I don't feel my concern is being fully addressed, can we discuss it more?\"",
    sections: [
      {
        id: "communicating",
        heading: "Communicating Your Concerns",
        body: "How you describe your symptoms can significantly affect the care you receive. Being specific and assertive leads to better investigation and diagnosis.",
        bullets: [
          "State your most important concern first. Appointments often run short on time.",
          "Be specific: describe symptoms in detail, including when they started, how often they occur, and how they affect your daily life",
          "Use a 1–10 pain scale to communicate severity clearly",
          "Don't downplay your symptoms to seem less of a burden. Say exactly how bad it is.",
          "If you feel rushed, say: 'I have a few more things I need to discuss before we finish'",
        ],
        tip: "Describe symptoms in terms of impact: 'This pain stops me from going to work' is more actionable than 'I have some pain.'",
      },
      {
        id: "understanding",
        heading: "When You Don't Understand",
        body: "Medical language can be confusing. Asking for clarification is not a weakness, it is an essential part of informed consent and good health decision-making.",
        bullets: [
          "Ask the provider to explain without medical jargon: 'Can you explain that in plain language?'",
          "Ask them to write things down, draw a diagram, or show you a model",
          "Repeat back what you heard to confirm: 'So what you're saying is...'",
          "Ask for printed materials or reliable websites to review at home",
          "Ask about language translation options if needed. Major hospitals and Community Health Centres (CHCs) frequently offer free telephone or video interpretation services.",
        ],
        infoBox: "Research consistently shows that patients retain only about 20–30% of what they are told during medical appointments. Writing things down or asking for a summary in writing can significantly help.",
      },
      {
        id: "support",
        heading: "Bringing a Support Person",
        body: "Having a trusted person with you during appointments can make a real difference, especially for complex, emotional, or high-stakes visits.",
        bullets: [
          "You have the right to bring a trusted person to any appointment",
          "A support person can help you remember information, take notes, and ask questions",
          "Let your provider know at the start that your support person is there to help you",
          "For sensitive appointments (mental health, sexual health), it is entirely okay to go alone if that feels more comfortable",
        ],
      },
    ],
    faq: [
      { q: "What if my doctor keeps interrupting me?", a: "Politely but firmly say: 'I'm not finished, I want to make sure I explain this fully.' Providers may interrupt unintentionally. Continuing calmly and confidently is often all that is needed." },
      { q: "What if I feel like my concerns are being dismissed?", a: "Name it directly: 'I feel like this concern isn't being taken seriously, and it's really affecting my life.' If the dismissal continues, ask for a referral or consider changing providers." },
      { q: "Is it okay to record the appointment?", a: "While Canada's Criminal Code allows one-party consent for recording conversations, many hospitals and medical clinics in Ontario have strict facility privacy policies prohibiting unannounced recording. It is best practice to ask your doctor or provider for permission first (e.g., 'Can I record this explanation so I can listen back at home?'). Most providers are happy to accommodate." },
    ],
    keyTakeaways: [
      "State your most important concern at the start. Appointments are often shorter than expected.",
      "Describe symptoms in terms of their real impact on your life.",
      "Ask for plain-language explanations and confirm you understood correctly.",
      "Bringing a support person can significantly improve what you get out of complex appointments.",
    ],
    learnMore: [
      { title: "Communicating With Your Provider", org: "Health Quality Ontario", url: "https://www.hqontario.ca/patient-and-family-engagement" },
      { title: "Patient Self-Advocacy", org: "CAMH", url: "https://www.camh.ca/en/health-info" },
    ],
    references: [
      "Health Quality Ontario — Patient Engagement",
      "CAMH — Self-Advocacy in Healthcare",
      "Mayo Clinic — Tips for a Successful Doctor Visit",
    ],
    relatedTopics: ["questions-for-doctor", "filing-complaints", "second-opinions"],
  },

  "medical-decisions": {
    title: "Understanding Medical Decisions",
    category: "Advocating For Yourself",
    categoryPath: "/health-education#advocacy",
    readingTime: "5 min read",
    summary: "Shared decision-making, where you and your provider work together, leads to better outcomes and greater confidence in your healthcare choices.",
    whatYoullLearn: [
      "How to evaluate a medical recommendation",
      "Questions to ask before agreeing to anything",
      "What shared decision-making looks like",
      "How to take time to decide without pressure",
    ],
    highlight: "Shared decision-making, where the provider and patient work together as equals, leads to better treatment adherence and health outcomes. Your values and preferences genuinely matter.",
    sections: [
      {
        id: "understanding",
        heading: "Understanding a Recommendation",
        body: "When your provider recommends a test, medication, or procedure, you have the right to understand the reasoning before agreeing. These questions help you get what you need.",
        bullets: [
          "Why are you recommending this, and what evidence supports it?",
          "What are the benefits and risks?",
          "What are the alternatives, including doing nothing?",
          "How urgently do I need to decide?",
          "What will happen if I wait or choose a different approach?",
        ],
      },
      {
        id: "evaluating",
        heading: "Evaluating Your Options",
        body: "Good medical decisions balance the clinical evidence with your personal values, circumstances, and preferences.",
        bullets: [
          "Consider how the option fits with your daily life, work, family, and values",
          "Look up information from trusted organizations (see Learn More below)",
          "Discuss with people you trust, or connect with a patient advocate",
          "Most major decisions can wait a day or two, use that time if you need it.",
          "Decision aids are written guides that compare options. Ask your provider if one exists for your situation.",
        ],
        tip: "The best medical decision is one that is right for you, not just what is statistically most common. Providers should be asking about your priorities, not just describing their preference.",
      },
      {
        id: "shared",
        heading: "What Shared Decision-Making Looks Like",
        body: "In a shared decision-making model, your provider brings clinical knowledge and you bring knowledge of your own life, values, and priorities. Neither alone is sufficient.",
        bullets: [
          "Your provider explains options, presents evidence, and answers questions",
          "You share what matters most to you, what your life looks like, and what your concerns are",
          "Together, you arrive at a decision that reflects both the evidence and your circumstances",
          "If you feel the conversation is one-sided, it is okay to say: 'I'd like us to make this decision together'",
        ],
        infoBox: "The Ottawa Patient Decision Aids are free, evidence-based tools that help patients compare treatment options for hundreds of health conditions. Find them at decisionaid.ohri.ca",
      },
    ],
    faq: [
      { q: "What if my provider makes me feel stupid for asking questions?", a: "A good provider will never make you feel this way. Questions are a sign of an engaged patient. If you consistently feel dismissed, it may be time to seek a different provider." },
      { q: "Can I change my mind after agreeing to a procedure?", a: "Yes. Consent can be withdrawn at any time, including after agreeing. Inform your provider as soon as possible, and ask about your options going forward." },
      { q: "What if my family has strong opinions about my treatment?", a: "Your healthcare decisions are ultimately yours to make, not your family's. While their input can be valuable, you have the right to decide what happens to your own body." },
    ],
    keyTakeaways: [
      "You have the right to fully understand any recommendation before agreeing to it.",
      "Good medical decisions consider clinical evidence and your personal values equally.",
      "You can take time to decide. Most decisions are not emergencies.",
      "Ask for decision aids: they are free, evidence-based tools that make comparison easier.",
    ],
    learnMore: [
      { title: "Shared Decision Making", org: "Health Quality Ontario", url: "https://www.hqontario.ca/patient-and-family-engagement" },
      { title: "Patient Decision Aids", org: "Ottawa Hospital Research Institute", url: "https://decisionaid.ohri.ca/" },
    ],
    references: [
      "Health Quality Ontario — Shared Decision Making",
      "Ottawa Hospital Research Institute — Patient Decision Aids",
      "Government of Canada — Informed Decision Making",
    ],
    relatedTopics: ["questions-for-doctor", "second-opinions", "healthcare-consent"],
  },

  "vaccinations": {
    title: "Vaccinations",
    category: "Preventive Care",
    categoryPath: "/health-education#preventive",
    readingTime: "7 min read",
    summary: "Vaccines protect you from serious, preventable diseases. Many are free for eligible people in Ontario.",
    whatYoullLearn: [
      "Key vaccines recommended for women",
      "Important vaccines during pregnancy",
      "Where to get vaccinated in Ontario",
      "How to check your vaccination history",
    ],
    highlight: "The HPV vaccine is free in Ontario for people aged 9 to 26. It significantly reduces the risk of cervical cancer and other HPV-related cancers.",
    sections: [
      {
        id: "key-vaccines",
        heading: "Key Vaccines for Women",
        body: "Several vaccines are particularly important for women across different stages of life. Many are covered free under Ontario's publicly funded immunization program.",
        bullets: [
          "HPV vaccine (Gardasil 9): protects against the HPV strains that cause cervical and other cancers",
          "Annual flu vaccine: especially important during pregnancy",
          "Tdap (tetanus, diphtheria, pertussis): recommended every 10 years and during each pregnancy (to protect your newborn)",
          "COVID-19 vaccine: updated doses available through local public health",
          "Hepatitis B: free in Grade 7, available for adults at risk",
          "Pneumococcal vaccine: recommended for adults 65+ and those with certain health conditions",
          "Shingles vaccine (Shingrix): recommended for adults 65+ (publicly funded), or ages 50–64 if at higher risk",
        ],
        infoBox: "Ontario's Publicly Funded Immunization Schedule lists all free vaccines by age and eligibility. Check publichealthontario.ca for the current schedule.",
      },
      {
        id: "pregnancy",
        heading: "Vaccines During Pregnancy",
        body: "Pregnancy changes how your immune system works, making certain vaccines especially important, and others should be avoided until after pregnancy.",
        bullets: [
          "Flu shot is strongly recommended during any trimester",
          "Tdap is recommended between 27–32 weeks of pregnancy to protect newborns from pertussis (whooping cough)",
          "Live vaccines (MMR, chickenpox) should not be given during pregnancy. Discuss your full vaccine history with your provider.",
          "COVID-19 vaccines are safe and recommended during pregnancy",
          "Discuss your vaccination history at your first prenatal visit",
        ],
        tip: "Getting the Tdap vaccine in each pregnancy — even if you had it before — provides the best protection for your newborn, who is too young to be vaccinated at birth.",
      },
      {
        id: "where",
        heading: "Where to Get Vaccinated",
        body: "Vaccines are available at several locations across Ontario, many at no cost depending on eligibility.",
        bullets: [
          "Your family doctor or nurse practitioner",
          "Local pharmacy: most offer flu shots, COVID-19 vaccines, and other publicly funded vaccines at no cost",
          "Public health unit: free vaccines based on age and eligibility",
          "Travel health clinics: specialized vaccines before international travel",
          "Community health centres: free vaccines regardless of insurance or immigration status",
        ],
      },
    ],
    faq: [
      { q: "Is the HPV vaccine only for young people?", a: "The HPV vaccine is most effective before exposure to the virus, which is why it is recommended in youth. However, adults up to age 45 may still benefit. Speak with your provider about whether it makes sense for you." },
      { q: "Can I get vaccinated if I'm immunocompromised?", a: "It depends on the vaccine. Live vaccines are generally avoided in immunocompromised individuals, but inactivated vaccines are usually safe. Discuss your specific situation with your provider." },
      { q: "How do I find out which vaccines I've had?", a: "Check with your family doctor, who should have your vaccination history on file. In Ontario, you can also contact your local public health unit, or check your yellow immunization card if you have one." },
    ],
    keyTakeaways: [
      "Many vaccines are free in Ontario. Check eligibility with your public health unit.",
      "The HPV vaccine significantly reduces cervical cancer risk.",
      "Annual flu shots and Tdap are especially important during pregnancy.",
      "Keep a personal record of your vaccination history.",
    ],
    whenToSeeDoctor: [
      "You are unsure about your vaccination history or missed childhood vaccines",
      "You are pregnant and haven't discussed vaccines with your provider",
      "You are planning international travel",
      "You are immunocompromised or have a chronic condition affecting your immune system",
    ],
    learnMore: [
      { title: "Ontario Immunization Schedule", org: "Public Health Ontario", url: "https://www.publichealthontario.ca/en/health-topics/immunization/immunization-schedules" },
      { title: "HPV Vaccine", org: "Canadian Cancer Society", url: "https://cancer.ca/en/cancer-information/reduce-your-risk/get-vaccinated/hpv-vaccine" },
      { title: "Vaccines in Pregnancy", org: "SOGC", url: "https://www.sogc.org" },
    ],
    references: [
      "Public Health Ontario — Immunization Schedule",
      "Canadian Cancer Society — HPV Vaccine",
      "Society of Obstetricians and Gynaecologists of Canada (SOGC)",
      "Government of Canada — Vaccine-Preventable Diseases",
    ],
    relatedTopics: ["cancer-screening", "routine-physical-exams", "sexual-health"],
  },

  "cancer-screening": {
    title: "Cancer Screening",
    category: "Preventive Care",
    categoryPath: "/health-education#preventive",
    readingTime: "7 min read",
    summary: "Screening tests detect cancer before symptoms appear — when treatment is most effective. Ontario has free, publicly funded programs for several cancers.",
    quickFacts: [
      { label: "Cervical Screening (HPV Test)", value: "Every 5 years, ages 25–69. Covered by OHIP." },
      { label: "Mammogram (breast)", value: "Every 2 years, ages 40–74. Free via OBSP." },
      { label: "Colorectal (FIT test)", value: "Every 1–2 years, ages 50–74. Free at home." },
      { label: "Referral needed?", value: "No. You can self-refer to OBSP." },
    ],
    whatYoullLearn: [
      "Recommended cervical, breast, and colorectal cancer screenings",
      "When to start and how often to screen",
      "What to do if results are abnormal",
      "Where to access free screening in Ontario",
    ],
    highlight: "Cervical cancer is largely preventable. Ontario uses primary HPV testing as the standard screening method to detect high-risk HPV strains before cell changes develop. All people with a cervix aged 25–69 who have ever been sexually active should be screened every 5 years.",
    sections: [
      {
        id: "cervical",
        heading: "Cervical Cancer Screening",
        body: "Cervical cancer is largely preventable. Ontario uses primary HPV testing as the standard screening method to detect high-risk HPV strains before cell changes develop. All people with a cervix aged 25–69 who have ever been sexually active should be screened every 5 years.",
        bullets: [
          "Primary HPV testing directly checks for high-risk strains of human papillomavirus that cause cervical cancer",
          "Recommended every 5 years for people aged 25–69 who have ever had sexual contact",
          "The sample collection feels the same as a Pap test, but the lab analysis is more accurate and sensitive",
          "HPV self-testing is available in some regions. Ask your provider or public health unit.",
          "Abnormal results do not mean you have cancer. Follow-up testing will clarify the finding.",
        ],
        tip: "If your Pap test result comes back 'abnormal,' try not to panic. Most abnormal results are caused by minor cell changes that resolve on their own, not cancer.",
      },
      {
        id: "breast",
        heading: "Breast Cancer Screening",
        body: "Breast cancer is the most commonly diagnosed cancer in Canadian women. Regular mammograms catch most cancers at an early, treatable stage.",
        bullets: [
          "Mammograms are recommended every 2 years for women, Two-Spirit, trans, and non-binary individuals aged 40 to 74 through the Ontario Breast Screening Program (OBSP)",
          "Women aged 30–69 with high-risk factors (BRCA gene, strong family history) should speak with a doctor about earlier screening",
          "Know your body, be familiar with how your breasts normally look and feel",
          "All new lumps, changes in shape, nipple discharge, or skin dimpling should be assessed by a provider",
        ],
        infoBox: "You can self-refer to the Ontario Breast Screening Program (OBSP). You do not need a doctor's referral to book a mammogram.",
      },
      {
        id: "colorectal",
        heading: "Colorectal Cancer Screening",
        body: "Colorectal cancer affects both women and men. Ontario's ColonCancerCheck program provides free screening for eligible individuals.",
        bullets: [
          "Recommended for people aged 50–74 without a family history",
          "The fecal immunochemical test (FIT) can be done at home and mailed to a lab. It is free and non-invasive.",
          "A colonoscopy may be recommended if the FIT result is positive or you have a family history",
          "People with a family history of colorectal cancer should start screening earlier. Discuss with your doctor.",
        ],
      },
    ],
    faq: [
      { q: "Does a Pap test screen for all gynecological cancers?", a: "No. A Pap test only screens for cervical changes. It does not detect ovarian, uterine, or vaginal cancers. If you have symptoms such as unusual bleeding or pelvic pain, discuss them with your provider separately." },
      { q: "I had the HPV vaccine. Do I still need cervical screening?", a: "Yes. The HPV vaccine reduces risk but does not eliminate it. Regular Pap tests remain important even for people who have been vaccinated." },
      { q: "What if I have anxiety about screening?", a: "This is very common. Tell your provider before the procedure. They can walk you through each step, use smaller instruments if needed, and pause if you need a break. Your comfort matters." },
    ],
    keyTakeaways: [
      "Cervical screening (HPV testing) every 5 years is recommended for people with a cervix aged 25–69.",
      "Mammograms every 2 years are recommended for individuals aged 40–74 through OBSP.",
      "You can self-refer to the Ontario Breast Screening Program, no doctor referral needed.",
      "Catching cancer early dramatically improves outcomes. Do not skip or delay screenings.",
    ],
    whenToSeeDoctor: [
      "You haven't had a cervical screening test in over 5 years (or over 3 years if your last screening was a traditional Pap test)",
      "You notice a new breast lump, skin change, or nipple discharge",
      "You experience unusual bleeding between periods, after sex, or after menopause",
      "You have a personal or family history of breast, ovarian, or colorectal cancer",
    ],
    learnMore: [
      { title: "Ontario Breast Screening Program", org: "Cancer Care Ontario", url: "https://www.cancercareontario.ca/en/guidelines-advice/types-of-cancer/breast/screening" },
      { title: "ColonCancerCheck", org: "Cancer Care Ontario", url: "https://www.cancercareontario.ca/en/guidelines-advice/types-of-cancer/colorectal/screening" },
      { title: "Cervical Cancer Screening", org: "Canadian Cancer Society", url: "https://cancer.ca/en/cancer-information/find-cancer-early/regular-tests-and-check-ups/cervical-cancer-screening" },
    ],
    references: [
      "Cancer Care Ontario — Breast and Cervical Screening Programs",
      "Canadian Cancer Society — Screening Recommendations",
      "Public Health Ontario — Cancer Screening",
    ],
    relatedTopics: ["vaccinations", "routine-physical-exams", "when-to-seek-care"],
  },

  "dental-care": {
    title: "Dental Care",
    category: "Preventive Care",
    categoryPath: "/health-education#preventive",
    readingTime: "6 min read",
    summary: "Oral health is directly connected to overall health. The Canadian Dental Care Plan now makes dental care more accessible for uninsured Canadians.",
    whatYoullLearn: [
      "Why oral health matters beyond your teeth",
      "Dental care during pregnancy",
      "Affordable dental care options in Ontario",
      "Daily habits that protect your oral health",
    ],
    highlight: "The Canadian Dental Care Plan (CDCP) provides free or reduced-cost dental care to uninsured Canadians with household incomes under $90,000.",
    sections: [
      {
        id: "basics",
        heading: "Oral Health Basics",
        body: "Good oral hygiene is about more than a clean smile. Gum disease and oral infections have been linked to heart disease, diabetes complications, and adverse pregnancy outcomes.",
        bullets: [
          "Brush teeth twice daily with fluoride toothpaste",
          "Floss at least once a day to remove plaque between teeth",
          "Replace your toothbrush every 3 months or after illness",
          "Limit sugary and acidic foods and drinks",
          "Drink fluoridated tap water when possible",
          "See a dentist every 6–12 months for a cleaning and examination",
        ],
        tip: "Spit, don't rinse, after brushing with fluoride toothpaste. Rinsing removes the protective fluoride coating from your teeth.",
      },
      {
        id: "pregnancy",
        heading: "Dental Care During Pregnancy",
        body: "Pregnancy hormones affect gum tissue, increasing the risk of gum disease and tooth decay. Dental care during pregnancy is safe and important.",
        bullets: [
          "Pregnancy gingivitis (gum inflammation) affects up to 70% of pregnant people",
          "Routine dental care is safe at any point during pregnancy",
          "X-rays can be delayed unless urgent, but modern dental X-rays are low-dose and safe",
          "Tell your dentist you are pregnant at each visit",
          "Untreated gum disease in pregnancy has been associated with preterm birth and low birth weight",
        ],
        infoBox: "If you have morning sickness, rinse your mouth with water or a fluoride rinse after vomiting. Don't brush immediately, as stomach acid softens enamel temporarily.",
      },
      {
        id: "affordable",
        heading: "Affordable Dental Care Options",
        body: "If you don't have dental insurance, several programs in Canada and Ontario can help reduce costs.",
        bullets: [
          "Canadian Dental Care Plan (CDCP): for adults without dental insurance, income-based subsidy",
          "Ontario Seniors Dental Care Program: free care for low-income seniors 65+",
          "Public health unit dental clinics: low-cost or free care for children and some adults",
          "Dental schools: supervised student dentists provide reduced-cost care",
          "Community health centres: some include dental services for patients",
        ],
      },
    ],
    faq: [
      { q: "Is dental care covered by OHIP?", a: "Generally, no. Dental care is not included in Ontario's OHIP coverage except for specific oral surgery procedures. The Canadian Dental Care Plan and provincial programs fill some of this gap for eligible people." },
      { q: "How do I know if I qualify for the Canadian Dental Care Plan?", a: "The CDCP is available to Canadian residents without dental insurance whose household income is under $90,000. Apply through Service Canada. Eligibility details and coverage amounts depend on income." },
      { q: "Can I go to a dental school for care?", a: "Yes. Dental schools operate teaching clinics where supervised students provide care at significantly reduced rates. Appointments take longer, but the quality of care is high and well supervised." },
    ],
    keyTakeaways: [
      "Brushing twice and flossing once daily prevents most dental problems.",
      "The Canadian Dental Care Plan is available for uninsured Canadians under $90,000 household income.",
      "Dental care during pregnancy is safe and important. Pregnancy increases gum disease risk.",
      "Dental schools and public health clinics offer affordable options for those without insurance.",
    ],
    whenToSeeDoctor: [
      "You have tooth pain, swelling, or signs of an abscess",
      "Your gums bleed regularly when brushing",
      "You notice white or red patches in your mouth",
      "You are pregnant and have not had a dental checkup this year",
    ],
    learnMore: [
      { title: "Canadian Dental Care Plan", org: "Government of Canada", url: "https://www.canada.ca/en/health-canada/services/dental-care/canadian-dental-care-plan.html" },
      { title: "Oral Health", org: "Public Health Ontario", url: "https://www.publichealthontario.ca/en/health-topics/oral-health" },
    ],
    references: [
      "Government of Canada — Canadian Dental Care Plan",
      "Public Health Ontario — Oral Health",
      "Ontario Ministry of Health — Seniors Dental Care Program",
    ],
    relatedTopics: ["routine-physical-exams", "vaccinations", "accessing-care"],
  },

  "sexual-health": {
    title: "Sexual Health",
    category: "Preventive Care",
    categoryPath: "/health-education#preventive",
    readingTime: "8 min read",
    summary: "Sexual health is a key part of overall wellbeing. Everyone deserves access to non-judgmental, confidential information and care.",
    whatYoullLearn: [
      "STI prevention and testing options",
      "Where to access free confidential testing",
      "Contraception options and how to choose",
      "Emergency contraception",
    ],
    highlight: "Sexual health clinics provide free, confidential STI testing and treatment. No health card required at many locations.",
    sections: [
      {
        id: "prevention",
        heading: "STI Prevention",
        body: "Sexually transmitted infections are common and treatable, but prevention remains the most effective approach.",
        bullets: [
          "Condoms (external and internal) are the most effective method of STI prevention",
          "Regular STI testing is recommended if you are sexually active with new or multiple partners",
          "PrEP (pre-exposure prophylaxis) is a daily medication that prevents HIV transmission",
          "HPV and Hepatitis B vaccines significantly reduce risk of those viruses",
          "Some STIs have no symptoms. The only way to know your status is to test.",
        ],
        tip: "Testing is not a sign of distrust. It's a regular part of sexual healthcare, like brushing your teeth. Many sexual health organizations recommend testing every 3–6 months for sexually active individuals.",
      },
      {
        id: "testing",
        heading: "Getting Tested",
        body: "Testing is free at most sexual health clinics and public health units across Ontario, and results are kept strictly confidential.",
        bullets: [
          "Free testing at sexual health clinics. No health card required at many locations.",
          "Common tests include blood draws, urine samples, and swabs",
          "Tests are available for HIV, chlamydia, gonorrhea, syphilis, hepatitis B and C, and more",
          "Online self-collection test kits are available for some STIs in Ontario",
          "Results are confidential, they are not shared without your consent.",
        ],
        infoBox: "You can find a local sexual health clinic at ontario.ca or by calling your public health unit. Many clinics offer drop-in hours with no appointment required.",
      },
      {
        id: "contraception",
        heading: "Contraception Options",
        body: "There are many effective contraceptive methods. The right choice depends on your health, lifestyle, and preferences, and a provider can help you evaluate your options.",
        bullets: [
          "Short-acting hormonal methods: pills, patch, vaginal ring",
          "Long-acting reversible contraception (LARC): IUDs (hormonal or copper) and implants",
          "Barrier methods: condoms",
          "Emergency contraception (Plan B): available at pharmacies without a prescription, most effective within 72 hours",
          "Copper IUD: the most effective emergency contraception, inserted within 5 days",
          "Some contraceptives are covered under Ontario Drug Benefit (ODB) for eligible individuals.",
        ],
      },
    ],
    faq: [
      { q: "Do I need to tell my doctor I'm getting tested at a sexual health clinic?", a: "No. Sexual health clinics are confidential and independent from your family doctor. You can access them without any information being shared with another provider." },
      { q: "Can I get birth control without seeing a doctor?", a: "You can get emergency contraception (such as Plan B) directly at a pharmacy without a prescription. However, to start a new form of hormonal contraception (like the pill, patch, ring, or IUD), you must see a doctor, nurse practitioner, or sexual health clinic provider. Once you have an established prescription, an Ontario pharmacist can help manage renewals and refills." },
      { q: "What if I test positive for an STI?", a: "Many STIs are easily treated with antibiotics or antivirals. Your clinic will discuss treatment options with you and provide guidance on informing partners. You will not be judged, this is a healthcare issue, not a moral one." },
    ],
    keyTakeaways: [
      "Regular STI testing is a normal part of sexual healthcare, confidential and often free.",
      "Condoms remain the only contraceptive method that also prevents STIs.",
      "Emergency contraception is available over-the-counter at pharmacies without a prescription.",
      "Pharmacists in Ontario can provide emergency contraception without a prescription and may renew or extend existing birth control prescriptions within their scope of practice. Starting a new hormonal contraceptive generally requires a physician, nurse practitioner, or sexual health clinic provider.",
    ],
    whenToSeeDoctor: [
      "You notice unusual discharge, sores, or rashes",
      "You had unprotected sex and are concerned about STIs or pregnancy",
      "You want to start or change your contraception",
      "You experience pain during sex",
    ],
    learnMore: [
      { title: "Sexual Health Clinics in Ontario", org: "Ontario Ministry of Health", url: "https://www.ontario.ca/page/sexual-health-clinics" },
      { title: "STIs", org: "Public Health Ontario", url: "https://www.publichealthontario.ca/en/diseases-and-conditions/infectious-diseases/stis" },
    ],
    references: [
      "Public Health Ontario — Sexually Transmitted Infections",
      "Ontario Ministry of Health — Sexual Health Clinics",
      "SOGC — Sexual Health Resources",
    ],
    relatedTopics: ["cancer-screening", "vaccinations", "normal-vs-abnormal-periods"],
  },

  "mental-health-checkups": {
    title: "Mental Health Checkups",
    category: "Preventive Care",
    categoryPath: "/health-education#preventive",
    readingTime: "7 min read",
    summary: "Mental health is health, and regular check-ins, including with a professional, can catch and address concerns before they become crises.",
    whatYoullLearn: [
      "Why mental health screening is part of preventive care",
      "What a mental health checkup looks like",
      "Free and low-cost mental health resources in Ontario",
      "When to seek additional support",
    ],
    highlight: "You don't need to be in crisis to access mental health support. Preventive mental health care, including therapy, improves long-term wellbeing for everyone.",
    sections: [
      {
        id: "why",
        heading: "Why Mental Health Screening Matters",
        body: "Mental health conditions are among the leading causes of disability worldwide, yet they remain significantly underdiagnosed, especially in women, who face unique stressors related to reproductive health, caregiving, and gender-based discrimination.",
        bullets: [
          "Women are twice as likely as men to be diagnosed with depression and anxiety",
          "Perinatal mental health, during and after pregnancy, is particularly important to monitor.",
          "Many mental health conditions are highly treatable when identified early",
          "Primary care providers now increasingly include mental health screening in annual visits",
        ],
        infoBox: "Postpartum depression affects up to 1 in 5 new mothers. It is not a sign of weakness or bad parenting. It is a medical condition that responds well to treatment.",
      },
      {
        id: "what",
        heading: "What a Mental Health Checkup Looks Like",
        body: "Mental health checkups are increasingly integrated into regular primary care. Here is what you can expect.",
        bullets: [
          "Your provider may ask you to complete a short validated questionnaire (PHQ-9 for depression, GAD-7 for anxiety)",
          "You can bring up mental health concerns the same way you would physical symptoms",
          "A checkup may lead to a referral for therapy, counselling, or a psychiatrist",
          "OHIP covers visits to psychiatrists and mental health services at community health centres",
          "You can self-refer to many community-based mental health programs without a doctor's note",
        ],
        tip: "At your next annual physical, you can simply say: 'I'd also like to talk about my mental health today.' Most providers will welcome this.",
      },
      {
        id: "resources",
        heading: "Free and Low-Cost Mental Health Resources",
        body: "Ontario has several free and accessible mental health programs. Wait times vary, but some services are available without a waitlist.",
        bullets: [
          "BounceBack: free, telephone coaching program using CBT workbooks for adults and youth aged 15+ (you can self-refer, but you must have a primary care provider listed to monitor safety).",
          "ConnexOntario (1-866-531-2600): connects you to local mental health and addiction services",
          "Ontario Structured Psychotherapy (OSP): free, evidence-based CBT for anxiety and depression",
          "CAMH: resources, a helpline, and a directory of services",
          "Crisis line: 9-8-8 (Suicide Crisis Helpline, 24/7, call or text)",
          "Community mental health centres: free or sliding-scale counselling across Ontario",
        ],
      },
    ],
    faq: [
      { q: "Do I need a referral to see a therapist?", a: "For many community-based mental health programs, no. You can self-refer to programs like BounceBack and Ontario Structured Psychotherapy. For a psychiatrist through the hospital system, a referral from a doctor is typically needed." },
      { q: "What is the difference between a psychologist, therapist, and psychiatrist?", a: "Psychiatrists: Medical doctors who diagnose conditions and prescribe medication (covered by OHIP with a referral). Psychologists: Doctoral-level specialists who perform formal diagnostic assessments and therapy. Registered Psychotherapists (RPs) & Social Workers (RSWs): Licensed professionals who provide clinical talk therapy and counselling. Note on coverage: While private psychotherapy and psychology fees are generally not covered directly by OHIP (unless provided through a hospital or Community Health Centre), many workplace benefits plans and Employee Assistance Programs (EAPs) cover these services." },
      { q: "What should I do if I am in crisis right now?", a: "Call 9-8-8 (Suicide Crisis Helpline, 24/7), go to your nearest emergency room, or call 911. You do not have to manage a crisis alone." },
    ],
    keyTakeaways: [
      "Mental health check-ins are a normal and important part of preventive healthcare.",
      "Programs like Ontario Structured Psychotherapy (OSP) and BounceBack offer free, evidence-based CBT support. Depending on the program and your region, you may be able to self-refer or be referred by a healthcare provider.",
      "Tell your primary care provider about your mental health at every annual visit.",
      "If you are in crisis, call 9-8-8 (24/7 Suicide Crisis Helpline).",
    ],
    whenToSeeDoctor: [
      "You feel persistently sad, anxious, or hopeless for more than two weeks",
      "You are having thoughts of self-harm or suicide: call 9-8-8 immediately.",
      "You are struggling with postpartum mood changes after having a baby",
      "Stress or anxiety is significantly interfering with your daily life",
    ],
    learnMore: [
      { title: "BounceBack Ontario", org: "CAMH", url: "https://bouncebackontario.ca/" },
      { title: "ConnexOntario", org: "ConnexOntario", url: "https://www.connexontario.ca/" },
      { title: "Ontario Structured Psychotherapy", org: "Ontario Ministry of Health", url: "https://osp.silvercloudhealth.com/signup/" },
    ],
    references: [
      "CAMH — Mental Health Statistics",
      "ConnexOntario — Find Local Support",
      "World Health Organization — Mental Health",
    ],
    relatedTopics: ["routine-physical-exams", "speaking-up", "questions-for-doctor"],
  },

  "routine-physical-exams": {
    title: "Routine Physical Exams",
    category: "Preventive Care",
    categoryPath: "/health-education#preventive",
    readingTime: "6 min read",
    summary: "Annual physicals help catch health problems early, update preventive care, and build a relationship with your primary care provider.",
    whatYoullLearn: [
      "What happens during a routine physical",
      "Women-specific screenings included in physicals",
      "How to prepare for your appointment",
      "How often to schedule a checkup",
    ],
    highlight: "Annual physicals are covered by OHIP in Ontario. If you don't have a family doctor, a community health centre can provide a comprehensive health assessment.",
    sections: [
      {
        id: "what",
        heading: "What to Expect at a Physical Exam",
        body: "A routine physical (sometimes called a Periodic Health Visit) covers a broad range of health domains. Here is what is typically included.",
        bullets: [
          "Review of your personal and family health history",
          "Blood pressure, heart rate, height, weight, and body mass measurements",
          "Blood tests (cholesterol, blood sugar, thyroid, complete blood count) may be ordered",
          "Discussion of any new symptoms or concerns",
          "Review of all current medications and supplements",
          "Screening questionnaires for depression, anxiety, and substance use",
          "Referrals to specialists or additional tests if needed",
        ],
        tip: "Write down any symptoms or concerns before your appointment. Bring your full medication list and relevant family health history. Fasting blood tests may be ordered. Ask the office ahead of time whether you need to fast before your appointment.",
      },
      {
        id: "womens",
        heading: "Women-Specific Preventive Care",
        body: "Annual physicals are an opportunity to address health topics that are particularly relevant to women.",
        bullets: [
          "Cervical Cancer Screening: Primary HPV testing every 5 years for individuals with a cervix aged 25 to 69.",
          "Breast Cancer Screening: Mammograms every 2 years through the Ontario Breast Screening Program (OBSP) for women, Two-Spirit, trans, and non-binary individuals aged 40 to 74.",
          "Bone density screening for women 65+ or younger women with risk factors",
          "Discussion of reproductive health, contraception, or perimenopause symptoms",
          "STI screening based on your history",
          "Mental health and mood screening using validated tools",
        ],
        infoBox: "If your provider doesn't bring up women-specific screening topics, ask about them yourself. It is your appointment, you can direct the conversation.",
      },
      {
        id: "frequency",
        heading: "How Often to Get a Physical",
        body: "How frequently you need a physical depends on your age, health history, and whether you have any chronic conditions.",
        bullets: [
          "In Ontario, OHIP covers a Periodic Health Visit (PHV). While adults with chronic conditions or those over 50 may benefit from annual visits, healthy young adults generally only require a periodic health checkup every 2 to 3 years to update immunizations and routine screenings.",
          "More frequent checkups may be recommended if you have a chronic condition (diabetes, hypertension, etc.)",
          "Younger adults in good health may be able to go every 2–3 years. Discuss with your provider.",
          "Any new or worsening symptom should prompt a visit regardless of your last physical",
        ],
      },
    ],
    faq: [
      { q: "Is a routine physical the same as a Pap test appointment?", a: "Not always. Some providers perform routine cervical screening (HPV testing) during a Periodic Health Visit, while others schedule it separately. Confirm with your clinic beforehand if your routine cervical screening is due so they can set aside time for the sample collection." },
      { q: "What if I don't have a family doctor?", a: "Community health centres, nurse practitioner-led clinics, and some walk-in clinics can perform comprehensive health assessments. Health811 (call 811) can help you find local options." },
      { q: "Can I get a physical even if I feel healthy?", a: "Yes, that's exactly the point. Routine physicals are designed to find problems before you feel them. Early detection is one of the most powerful tools in preventive medicine." },
    ],
    keyTakeaways: [
      "Annual physicals are free under OHIP and are your best opportunity for preventive screening.",
      "Bring a written list of symptoms, questions, and current medications.",
      "Ask about women-specific screenings if your provider doesn't raise them.",
      "Even if you feel completely well, regular checkups can find problems before symptoms appear.",
    ],
    learnMore: [
      { title: "OHIP Coverage", org: "Ontario Ministry of Health", url: "https://www.ontario.ca/page/what-is-covered-by-ohip" },
      { title: "Preventive Care for Women", org: "College of Family Physicians of Canada", url: "https://www.cfpc.ca/" },
    ],
    references: [
      "Ontario Ministry of Health — OHIP Coverage",
      "College of Family Physicians of Canada",
      "Canadian Task Force on Preventive Health Care",
    ],
    relatedTopics: ["cancer-screening", "mental-health-checkups", "vaccinations"],
  },

  "normal-vs-abnormal-periods": {
    title: "Normal vs Abnormal Periods",
    category: "Menstrual & Reproductive Health",
    categoryPath: "/health-education#menstrual",
    readingTime: "7 min read",
    summary: "Understanding what is normal for your menstrual cycle helps you recognize when something may need medical attention.",
    quickFacts: [
      { label: "Typical cycle length", value: "21–35 days" },
      { label: "Typical period length", value: "2–7 days" },
      { label: "Normal flow", value: "Light to moderate; changing a pad every 3–6 hours" },
      { label: "When to see a doctor", value: "If pain disrupts daily life, or bleeding is very heavy or irregular" },
    ],
    whatYoullLearn: [
      "What a typical menstrual cycle looks like",
      "Signs that may indicate a problem",
      "How to track your cycle effectively",
      "When to see a healthcare provider",
    ],
    highlight: "Period pain that regularly interferes with your daily life is not normal. It is a medical symptom worth investigating. You should not have to just live with it.",
    sections: [
      {
        id: "normal",
        heading: "What Is Considered Normal",
        body: "Normal periods vary significantly between individuals. Rather than comparing yourself to an average, the most useful reference point is your own baseline.",
        bullets: [
          "Cycle length: typically 21–35 days, counted from the first day of one period to the next",
          "Period length: 2–7 days",
          "Flow: light to moderate. Changing a pad or tampon every 3–6 hours is typical",
          "Colour: bright red to dark red or brown throughout the period",
          "Mild to moderate cramping in the first 1–2 days",
          "Light midcycle spotting around ovulation is normal for some people",
        ],
        tip: "Changes from your own usual pattern are more meaningful than deviating from a general average. Tracking your cycle over several months reveals your personal baseline.",
      },
      {
        id: "abnormal",
        heading: "Signs That May Need Medical Attention",
        body: "Certain period-related symptoms fall outside what is considered medically typical and should be discussed with a provider.",
        bullets: [
          "Periods lasting more than 7 days",
          "Soaking through a pad or tampon every hour for several consecutive hours",
          "Passing blood clots larger than a quarter",
          "Severe cramping that does not respond to over-the-counter pain relief",
          "Cycles consistently shorter than 21 days or longer than 35 days",
          "Missed periods (when not pregnant or breastfeeding)",
          "Spotting between periods or after sex",
          "A sudden change to a previously regular cycle",
        ],
        infoBox: "Heavy menstrual bleeding (soaking through a pad or tampon hourly) affects up to 1 in 3 women and is a leading cause of iron deficiency anemia. It is common, but it is not something you have to live with. Effective treatments exist.",
      },
      {
        id: "tracking",
        heading: "Tracking Your Cycle",
        body: "Cycle tracking is one of the most powerful things you can do for your menstrual health. It helps you spot patterns, communicate with your provider, and notice when something changes.",
        bullets: [
          "Record the first and last day of your period each month",
          "Note your flow level (light, moderate, heavy), pain level (1–10), and any symptoms",
          "Track mood, energy, and any midcycle symptoms",
          "Bring several months of tracking data to medical appointments",
          "Apps like Clue or a simple paper calendar both work well",
        ],
      },
    ],
    faq: [
      { q: "Is it normal to miss a period if I'm not pregnant?", a: "Occasional irregularity can occur due to stress, illness, travel, or significant weight changes. If you miss more than 2 consecutive periods and are not pregnant or breastfeeding, see a provider." },
      { q: "My period has changed since I started a new medication. Is this normal?", a: "Some medications, including hormonal contraceptives, certain antidepressants, and blood thinners, can affect your cycle. Discuss any changes with your prescribing provider." },
      { q: "Can heavy periods be a sign of something serious?", a: "Sometimes. Heavy bleeding can be caused by fibroids, polyps, endometriosis, thyroid issues, or bleeding disorders. A provider can run tests to determine the cause and discuss treatment." },
    ],
    keyTakeaways: [
      "Normal cycles are 21–35 days long with 2–7 days of bleeding.",
      "Severe pain, very heavy bleeding, and irregular cycles are signs to see a provider.",
      "Track your cycle to understand your personal baseline and spot changes.",
      "Changes from your own usual pattern matter more than deviation from a general average.",
    ],
    whenToSeeDoctor: [
      "Your period is consistently very heavy, painful, or irregular",
      "You experience bleeding between periods or after sex",
      "Your periods have stopped and you are not pregnant or menopausal",
      "Period pain is interfering with school, work, or daily activities",
    ],
    learnMore: [
      { title: "Menstrual Health", org: "SOGC", url: "https://www.sogc.org" },
      { title: "Understanding Your Cycle", org: "Mayo Clinic", url: "https://www.mayoclinic.org/healthy-lifestyle/womens-health/in-depth/menstrual-cycle/art-20047186" },
    ],
    references: [
      "SOGC — Menstrual Health",
      "Mayo Clinic — Menstrual Cycle Overview",
      "World Health Organization — Reproductive Health",
    ],
    relatedTopics: ["pain-management", "endometriosis", "pcos"],
  },

  "pain-management": {
    title: "Menstrual Pain Management",
    category: "Menstrual & Reproductive Health",
    categoryPath: "/health-education#menstrual",
    readingTime: "7 min read",
    summary: "Effective pain management options exist for period cramps. You should never have to simply endure severe menstrual pain.",
    whatYoullLearn: [
      "Evidence-based at-home relief strategies",
      "Medical treatment options for severe pain",
      "When pain may signal an underlying condition",
      "How to communicate pain effectively to your provider",
    ],
    highlight: "If over-the-counter pain relief is not working and pain is disrupting your life, this may signal an underlying condition like endometriosis or fibroids. This deserves medical investigation.",
    sections: [
      {
        id: "home",
        heading: "At-Home Relief Strategies",
        body: "Several well-studied strategies can reduce menstrual cramping. The most effective approaches work by reducing uterine contractions or blocking the pain signals.",
        bullets: [
          "Heat: a heating pad on the lower abdomen is highly effective and well-supported by research",
          "NSAIDs (ibuprofen, naproxen): most effective when taken 1–2 days before your period starts",
          "Staying hydrated: reduces bloating and can lessen cramping",
          "Light movement: walking and gentle stretching can ease cramps",
          "Magnesium supplements: evidence supports modest reduction in pain severity",
          "Adequate sleep: poor sleep significantly worsens pain sensitivity",
        ],
        tip: "The key to NSAIDs for period pain is timing. Starting ibuprofen the day before your period (rather than waiting until pain is severe) is significantly more effective because it prevents the prostaglandin buildup that causes cramps.",
      },
      {
        id: "medical",
        heading: "Medical Treatment Options",
        body: "When at-home strategies are insufficient, medical treatments can provide significant and sometimes complete relief.",
        bullets: [
          "Hormonal contraception (pills, patch, ring, hormonal IUD): can significantly reduce cramping and flow",
          "Hormonal IUDs (e.g., Mirena): often reduce or eliminate periods altogether",
          "Prescription NSAIDs: stronger doses for severe pain",
          "Tranexamic acid: reduces heavy bleeding without hormones",
          "Pelvic floor physiotherapy: helpful for pelvic pain components",
          "Investigation and treatment for underlying conditions (endometriosis, fibroids, etc.): may be needed when symptoms persist",
        ],
        infoBox: "Hormonal contraception is not the only option for managing period symptoms. Non-hormonal approaches such as prescription NSAIDs, tranexamic acid (for heavy bleeding), and targeted pelvic floor physiotherapy can effectively relieve pain without the use of hormones. Note: Non-hormonal copper IUDs typically increase menstrual cramping and heavy bleeding and should not be used to treat period pain.",
      },
      {
        id: "underlying",
        heading: "When Pain May Signal Something More",
        body: "Not all period pain is primary dysmenorrhea (simple cramping). For a significant number of people, severe pain is a symptom of an underlying condition.",
        bullets: [
          "Endometriosis: tissue similar to the uterine lining grows outside the uterus, causing significant pelvic pain",
          "Uterine fibroids: benign growths that can cause heavy, painful periods",
          "Adenomyosis: uterine lining grows into the uterine muscle wall",
          "Pelvic inflammatory disease (PID): infection of the reproductive organs",
          "Documenting your pain patterns and its relationship to your cycle: helps providers identify the cause",
        ],
      },
    ],
    faq: [
      { q: "Is it bad to take ibuprofen every month for period pain?", a: "For most healthy adults, taking NSAIDs for a few days each month is safe. If you have stomach, kidney, or heart concerns, discuss with your provider. Long-term reliance on pain medication to function is a signal to explore underlying causes." },
      { q: "Why doesn't ibuprofen work for my pain?", a: "For some people, ibuprofen alone is insufficient, especially when pain has an underlying cause. If NSAIDs don't provide adequate relief, discuss other medical options, including hormonal treatments or investigation for endometriosis." },
      { q: "Does the birth control pill help with period pain?", a: "For many people, yes. Hormonal contraception reduces the prostaglandin levels that drive cramping, and can reduce or eliminate periods altogether. It is one of the most commonly prescribed treatments for period pain." },
    ],
    keyTakeaways: [
      "Heat and NSAIDs started before pain begins are the most evidence-based at-home treatments.",
      "Medical options (hormonal and non-hormonal) can provide significant relief.",
      "Pain that disrupts your daily life deserves medical investigation, not just management.",
      "Severe pain that doesn't respond to treatment may signal endometriosis or another condition.",
    ],
    whenToSeeDoctor: [
      "Over-the-counter pain relief is not adequately controlling your pain",
      "Pain is interfering with work, school, or daily activities",
      "You also experience pain during sex or bowel movements",
      "Your pain has recently become noticeably worse",
    ],
    learnMore: [
      { title: "Dysmenorrhea", org: "SOGC", url: "https://www.sogc.org" },
      { title: "Menstrual Cramps", org: "Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/menstrual-cramps/symptoms-causes/syc-20374938" },
    ],
    references: [
      "SOGC — Dysmenorrhea Clinical Practice Guideline",
      "Mayo Clinic — Menstrual Cramps",
      "CDC — Menstrual Health",
    ],
    relatedTopics: ["endometriosis", "normal-vs-abnormal-periods", "pcos"],
  },

  "pcos": {
    title: "Polycystic Ovary Syndrome (PCOS)",
    category: "Menstrual & Reproductive Health",
    categoryPath: "/health-education#menstrual",
    readingTime: "8 min read",
    summary: "PCOS is one of the most common hormonal conditions in women of reproductive age yet it remains significantly underdiagnosed.",
    quickFacts: [
      { label: "How common", value: "Affects approximately 1 in 10 people with ovaries" },
      { label: "Common symptoms", value: "Irregular periods, excess hair, acne, weight changes" },
      { label: "Is it curable?", value: "No cure, but symptoms are highly manageable" },
      { label: "Affects fertility?", value: "Can affect ovulation, but most people with PCOS can conceive" },
      { label: "When to see a doctor", value: "If periods are consistently irregular or you suspect PCOS" },
    ],
    whatYoullLearn: [
      "The full range of PCOS symptoms",
      "How PCOS is diagnosed",
      "Medical and lifestyle management strategies",
      "How PCOS affects fertility",
    ],
    highlight: "PCOS affects approximately 1 in 10 people with ovaries. Many live with symptoms for years before receiving a diagnosis. If you suspect PCOS, ask your doctor specifically about testing for it.",
    sections: [
      {
        id: "symptoms",
        heading: "Common Symptoms",
        body: "PCOS is a syndrome, which means it presents as a cluster of symptoms, not a single finding. You do not need to have every symptom to have PCOS.",
        bullets: [
          "Irregular, infrequent, or absent periods",
          "Excess hair growth on the face, chest, or back (hirsutism)",
          "Acne, especially along the jawline and chin",
          "Hair thinning or loss on the scalp",
          "Weight gain or difficulty managing weight",
          "Dark patches of skin (acanthosis nigricans) on the neck or underarms",
          "Difficulty conceiving",
          "Mood changes, depression, and anxiety",
        ],
        tip: "You can have PCOS and be any size or shape. Weight is not a diagnostic criterion for PCOS, and not everyone with PCOS gains weight.",
      },
      {
        id: "diagnosis",
        heading: "How PCOS Is Diagnosed",
        body: "PCOS is diagnosed using the Rotterdam Criteria, requiring at least two of three features. Your provider will use a combination of blood tests and ultrasound.",
        bullets: [
          "Criterion 1: Irregular or absent periods",
          "Criterion 2: Clinical or biochemical signs of elevated androgens (excess hair, acne, or a blood test showing high testosterone)",
          "Criterion 3: Polycystic ovarian morphology on ultrasound (20+ follicles in an ovary, or an ovarian volume of 10 mL or greater) OR elevated Anti-Müllerian Hormone (AMH) blood levels (for adults). Note: If an adult patient has both irregular periods and clinical or biochemical high androgen levels, an ultrasound or AMH test is not strictly required to make a diagnosis. Ultrasounds and AMH tests are not used to diagnose PCOS in adolescents.",
          "Blood tests may also check LH, FSH, prolactin, thyroid, blood sugar, and insulin levels",
          "Other conditions (thyroid disorder, hyperprolactinemia) must be ruled out first",
        ],
        infoBox: "On average, it takes over 2 years to receive a PCOS diagnosis. If your provider dismisses your concerns, bring them up again or seek a second opinion.",
      },
      {
        id: "management",
        heading: "Management Options",
        body: "PCOS has no cure, but symptoms can be effectively managed through a combination of lifestyle approaches and medical treatment.",
        bullets: [
          "Hormonal contraception: regulates periods and reduces androgen-driven symptoms like acne and hair growth",
          "Metformin: improves insulin sensitivity and may restore regular periods",
          "Anti-androgen medications: target excess hair growth and acne",
          "Low-glycemic diet and regular physical activity: can significantly improve hormonal balance",
          "Fertility treatments (ovulation induction): for those trying to conceive",
          "Mental health support: depression and anxiety are significantly more common in people with PCOS",
        ],
      },
    ],
    faq: [
      { q: "Does PCOS mean I can't have children?", a: "No. Many people with PCOS conceive naturally or with minimal assistance. PCOS is a common cause of irregular ovulation, but fertility treatments ranging from ovulation-inducing medications to IVF are highly effective when needed." },
      { q: "Does PCOS go away after menopause?", a: "Some PCOS symptoms, like irregular periods, resolve after menopause. However, the underlying metabolic features (insulin resistance, elevated androgen levels) may persist. Long-term health monitoring remains important." },
      { q: "Is PCOS related to diabetes?", a: "PCOS is associated with insulin resistance, which increases the risk of type 2 diabetes. Regular blood sugar monitoring and a healthy lifestyle significantly reduce this risk." },
    ],
    keyTakeaways: [
      "PCOS is common but often missed. Advocate for a full diagnostic evaluation if you suspect it.",
      "You don't need every symptom. Meeting two of the three updated diagnostic criteria (irregular cycles, high androgens, or polycystic ovarian morphology/elevated AMH) is sufficient for an adult diagnosis.",
      "Lifestyle changes can dramatically improve PCOS symptoms.",
      "PCOS affects fertility but does not prevent pregnancy for most people.",
    ],
    whenToSeeDoctor: [
      "Your periods are consistently irregular, very infrequent, or absent",
      "You have unexplained excess hair growth or acne that is not responding to usual treatments",
      "You have been trying to conceive for over 6 months without success",
      "You have been told you have insulin resistance or pre-diabetes",
    ],
    learnMore: [
      { title: "PCOS", org: "SOGC", url: "https://www.sogc.org" },
      { title: "Polycystic Ovary Syndrome", org: "Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/pcos/symptoms-causes/syc-20353439" },
    ],
    references: [
      "SOGC — PCOS Clinical Practice Guideline",
      "Mayo Clinic — PCOS Overview",
      "World Health Organization — PCOS",
    ],
    relatedTopics: ["normal-vs-abnormal-periods", "pain-management", "endometriosis"],
  },

  "endometriosis": {
    title: "Endometriosis",
    category: "Menstrual & Reproductive Health",
    categoryPath: "/health-education#menstrual",
    readingTime: "9 min read",
    summary: "Endometriosis affects 1 in 10 people with a uterus and is one of the most underdiagnosed and undertreated conditions in women's health.",
    quickFacts: [
      { label: "How common", value: "Affects 1 in 10 people with a uterus" },
      { label: "Average diagnosis time", value: "7–10 years after symptoms begin" },
      { label: "Common symptoms", value: "Severe pelvic pain, painful periods, pain during sex" },
      { label: "Is it curable?", value: "No cure; treatments significantly improve quality of life" },
      { label: "When to see a doctor", value: "If period pain is severe or disrupts your daily life" },
    ],
    whatYoullLearn: [
      "The full range of endometriosis symptoms",
      "How it is diagnosed — including why it takes so long",
      "Available medical and surgical treatment options",
      "How to advocate for faster diagnosis",
    ],
    highlight: "On average, it takes 7–10 years to receive an endometriosis diagnosis. If you experience severe pelvic pain, especially with your period or during sex, advocate strongly and persistently for investigation.",
    sections: [
      {
        id: "symptoms",
        heading: "Symptoms of Endometriosis",
        body: "Endometriosis occurs when tissue similar to the uterine lining grows outside the uterus: on the ovaries, fallopian tubes, bladder, bowel, or elsewhere. Symptoms are related to inflammation and scarring caused by this misplaced tissue.",
        bullets: [
          "Severe, debilitating period pain (dysmenorrhea)",
          "Pelvic pain that occurs outside of menstruation",
          "Pain during or after sex (dyspareunia)",
          "Pain during bowel movements or urination, especially during your period",
          "Heavy periods or bleeding between periods",
          "Fatigue, bloating, and low energy, particularly around menstruation",
          "Difficulty conceiving",
          "Digestive symptoms: nausea, diarrhea, constipation, and pain with bowel movements.",
        ],
        tip: "Endometriosis does not always correlate with visible severity. Someone with minimal visible endometriosis can have debilitating pain; someone with extensive disease may have few symptoms. Trust your experience.",
      },
      {
        id: "diagnosis",
        heading: "Diagnosis",
        body: "Endometriosis is notoriously difficult to diagnose quickly. Understanding the diagnostic process helps you advocate more effectively for yourself.",
        bullets: [
          "Laparoscopy (a minimally invasive surgery) remains the gold standard for definitive diagnosis.",
          "Ultrasound and MRI can detect some types of endometriosis (such as ovarian cysts) but cannot rule it out.",
          "A thorough symptom history, especially pain patterns, is an essential diagnostic tool.",
          "Some providers will begin empirical treatment (such as hormonal therapy) without laparoscopy if symptoms are clear.",
          "Seeking a provider who specializes in endometriosis significantly improves diagnostic accuracy and speed",
        ],
        infoBox: "Endometriosis Network Canada (endometriosisnetwork.com) has a directory of endometriosis specialists across Canada and resources to help you prepare for specialist appointments.",
      },
      {
        id: "treatment",
        heading: "Treatment Options",
        body: "There is no cure for endometriosis, but multiple effective treatments can significantly improve quality of life.",
        bullets: [
          "Hormonal therapy: combined pill, progestins, GnRH agonists, suppresses disease activity and reduces pain",
          "Surgical excision: laparoscopic removal of endometriosis lesions; can provide significant long-term relief",
          "Pain management: NSAIDs, prescription analgesics",
          "Pelvic floor physiotherapy: addresses the pelvic floor dysfunction that often accompanies endometriosis",
          "Anti-inflammatory dietary approaches: some evidence of symptom improvement",
          "Mental health support: chronic pain has profound emotional impacts",
        ],
      },
    ],
    faq: [
      { q: "My doctor says my pain is 'just bad periods.' What should I do?", a: "Period pain that severely disrupts your daily life is a medical symptom, not a normal part of being female. Seek a second opinion from a gynaecologist, preferably one with experience in endometriosis." },
      { q: "Can endometriosis come back after surgery?", a: "Yes. Endometriosis can recur after excision surgery, especially without hormonal suppression. However, many people experience years of improved quality of life following a skilled surgical excision. Discuss long-term management with your surgeon." },
      { q: "Does pregnancy cure endometriosis?", a: "No. While pregnancy may temporarily reduce symptoms due to hormonal changes, endometriosis often returns after delivery. Pregnancy is not a treatment for endometriosis." },
    ],
    keyTakeaways: [
      "Endometriosis is common and underdiagnosed. Do not accept severe period pain as normal.",
      "Diagnosis and treatment can often begin using specialized imaging and clinical evaluation. Surgery is generally reserved for confirming difficult cases, treating severe symptoms, or removing endometriosis lesions when appropriate.",
      "Surgical excision and hormonal therapies can substantially improve quality of life.",
      "Specialist care makes a significant difference. Seek out providers experienced in endometriosis.",
    ],
    whenToSeeDoctor: [
      "Your period pain is severe and does not respond to NSAIDs",
      "You experience pelvic pain outside of your period",
      "You have pain during or after sex",
      "You have been trying to conceive with irregular or very painful periods",
    ],
    learnMore: [
      { title: "Endometriosis", org: "SOGC", url: "https://www.sogc.org" },
      { title: "Endometriosis Network Canada", org: "ENDOCAN", url: "https://endometriosisnetwork.com/" },
      { title: "Endometriosis", org: "Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/endometriosis/symptoms-causes/syc-20354656" },
    ],
    references: [
      "SOGC — Endometriosis Clinical Practice Guideline",
      "Endometriosis Network Canada",
      "Mayo Clinic — Endometriosis",
      "World Health Organization — Endometriosis",
    ],
    relatedTopics: ["pain-management", "pcos", "when-to-seek-care"],
  },

  "menstrual-products": {
    title: "Menstrual Products Guide",
    category: "Menstrual & Reproductive Health",
    categoryPath: "/health-education#menstrual",
    readingTime: "6 min read",
    summary: "There are more menstrual product options than ever before. Understanding each helps you choose what works best for your body and lifestyle.",
    whatYoullLearn: [
      "Overview of all disposable and reusable options",
      "How to choose a product that suits you",
      "Safety and toxic shock syndrome (TSS) facts",
      "How to access free or low-cost menstrual products",
    ],
    highlight: "All menstrual products approved for sale in Canada have been reviewed for safety. There is no single \"right\" product, the best choice is what works for your body and circumstances.",
    sections: [
      {
        id: "disposable",
        heading: "Disposable Products",
        body: "Disposable menstrual products are single-use and widely available at pharmacies and grocery stores across Canada.",
        bullets: [
          "Pads: worn externally, come in many absorbency levels, require no insertion",
          "Tampons: inserted internally, good for swimming and active use, must be changed every 4–8 hours",
          "Pantyliners: thin pads for light flow days or everyday discharge",
          "Disposable period underwear: convenient, but generates more waste than reusable alternatives",
        ],
      },
      {
        id: "reusable",
        heading: "Reusable Products",
        body: "Reusable products have a higher upfront cost but save money over time and produce significantly less waste.",
        bullets: [
          "Menstrual cups: silicone or rubber cups inserted internally, can be worn up to 12 hours, hold more than tampons",
          "Menstrual discs: sit at the cervix rather than the vaginal canal, can sometimes be worn during sex",
          "Period underwear: absorbent underwear that replaces pads, machine washable",
          "Reusable cloth pads: soft, washable, and eco-friendly alternative to disposable pads",
        ],
        tip: "Reusable products can seem intimidating at first. Many people find a cup or disc is a better fit than tampons once they get comfortable with insertion. It may take a cycle or two to get used to them.",
      },
      {
        id: "safety",
        heading: "Safety and Toxic Shock Syndrome",
        body: "Toxic shock syndrome (TSS) is a rare but serious bacterial infection sometimes associated with tampon use. Understanding the risks helps you use menstrual products safely.",
        bullets: [
          "TSS risk with tampons is very low, estimated at 1–3 cases per 100,000 tampon users.",
          "Change tampons every 4–8 hours and empty reusable cups/discs every 8–12 hours.",
          "TSS is very rare across all internal menstrual products (tampons, cups, discs), but practicing proper hand hygiene and knowing warning signs is essential.",
          "Symptoms of TSS include sudden high fever, vomiting, rash resembling a sunburn, and confusion. Seek emergency care immediately.",
          "Menstrual cups and discs carry a small risk of TSS if left in past the recommended time or not properly sanitized. Boil or thoroughly sanitize reusable cups/discs between cycles and wash your hands before insertion and removal.",
        ],
        infoBox: "Her Health Collective distributes free menstrual products in our community kits. Reach out to learn about kit availability in your area.",
      },
    ],
    faq: [
      { q: "Can I swim with a menstrual cup or disc?", a: "Yes, cups and discs are excellent for swimming. Unlike tampons, which can absorb pool water, cups collect flow internally without exposure to water." },
      { q: "Are menstrual products free anywhere in Ontario?", a: "Many Ontario school boards provide free period products in school washrooms. Some community organizations, libraries, and health centres also provide them. Her Health Collective's hygiene kits include menstrual products for people who need them." },
      { q: "Is it normal to use both pads and tampons?", a: "Yes, many people use different products on different days (e.g., tampons during the day, a pad overnight). There is no rule about using a single product type." },
    ],
    keyTakeaways: [
      "All Health Canada-approved menstrual products are safe for use.",
      "Reusable options are more cost-effective and environmentally friendly long-term.",
      "Change tampons every 4–8 hours and empty reusable cups/discs every 8–12 hours.",
      "TSS is very rare across all internal menstrual products, but know the warning signs.",
    ],
    learnMore: [
      { title: "Menstrual Health", org: "SOGC", url: "https://www.sogc.org" },
      { title: "Menstrual Hygiene", org: "WHO", url: "https://www.who.int/news-room/fact-sheets/detail/menstrual-health" },
    ],
    references: [
      "SOGC — Menstrual Health",
      "World Health Organization — Menstrual Hygiene",
      "Health Canada — Menstrual Products Regulation",
    ],
    relatedTopics: ["normal-vs-abnormal-periods", "pain-management", "when-to-seek-care"],
  },

  "when-to-seek-care": {
    title: "When to Seek Medical Care",
    category: "Menstrual & Reproductive Health",
    categoryPath: "/health-education#menstrual",
    readingTime: "6 min read",
    summary: "Knowing when to seek care about your menstrual health can make the difference between early treatment and years of unnecessary suffering.",
    whatYoullLearn: [
      "Urgent symptoms requiring immediate care",
      "Symptoms to book a non-urgent appointment for",
      "How to describe your symptoms effectively",
      "How tracking your cycle prepares you for appointments",
    ],
    highlight: "You know your body better than anyone. If something feels wrong or has changed, trust your instincts and seek care. You are not overreacting.",
    sections: [
      {
        id: "urgent",
        heading: "Seek Care Promptly:",
        body: "Some symptoms related to menstrual and reproductive health require prompt medical attention, often the same day or within a day or two.",
        bullets: [
          "Soaking through a pad or tampon every hour for 2 or more consecutive hours",
          "Severe pelvic pain that is not relieved by over-the-counter pain medication",
          "Lightheadedness or fainting due to blood loss",
          "Signs of infection: fever, chills, foul-smelling discharge, or severe pelvic tenderness",
          "Bleeding after menopause",
          "Sudden onset of severe pelvic pain (may indicate ovarian torsion or ruptured cyst)",
        ],
        infoBox: "If you are experiencing soaking-level heavy bleeding, you may also be losing iron rapidly. Symptoms of anemia (fatigue, shortness of breath, heart pounding) should also prompt a medical visit.",
      },
      {
        id: "schedule",
        heading: "Schedule an Appointment For",
        body: "These symptoms do not require emergency care, but should be discussed with a provider at a booked appointment.",
        bullets: [
          "Periods that have stopped for 3 or more months and you are not pregnant or breastfeeding",
          "Cycles that are consistently shorter than 21 days or longer than 35 days",
          "Period pain that regularly prevents you from attending school, work, or activities",
          "Spotting or bleeding between periods or after sex",
          "Worsening period symptoms over recent months",
          "A feeling that your period \"isn't right,\" even if you can't describe it precisely.",
        ],
        tip: "You know your body. 'It's just not the same as it used to be' is a valid and important thing to tell your provider. Track symptoms for a cycle or two before your appointment if possible.",
      },
      {
        id: "preparing",
        heading: "Preparing for Your Appointment",
        body: "Being prepared helps your provider understand your situation quickly and conduct the right investigations.",
        bullets: [
          "Track your cycle for 2–3 months before your appointment if possible: start dates, flow level, pain scores (1–10)",
          "Note symptoms: when they occur in relation to your cycle, their type, and severity",
          "List all medications and supplements",
          "Describe how symptoms affect your daily life, this context shapes clinical decisions.",
          "Be honest and direct. There is nothing embarrassing about menstrual health concerns.",
        ],
      },
    ],
    faq: [
      { q: "My pain is bad but I'm worried about wasting my doctor's time. Should I go?", a: "Yes. Pain that affects your ability to function is not a waste of anyone's time. Providers are not there to judge the severity of your problems, they are there to help you address them." },
      { q: "What if my provider dismisses my symptoms?", a: "Document your symptoms clearly and bring data (cycle tracking, pain diary). If your concerns are consistently dismissed, seek a second opinion from a gynaecologist. You deserve to be heard." },
      { q: "What tests might my provider order?", a: "Depending on your symptoms, your provider may order blood tests (complete blood count/iron levels, thyroid function, or hormone panels) and a pelvic ultrasound to look at the uterus and ovaries. They may also ensure your routine cervical screening (HPV test) is up to date, or refer you to a gynaecologist for specialized care." },
    ],
    keyTakeaways: [
      "Soaking through a pad hourly for 2+ hours is an urgent medical situation.",
      "Pain that disrupts your daily life is a medical symptom worth investigating.",
      "Tracking your cycle gives your provider valuable diagnostic information.",
      "You are never overreacting by seeking care for menstrual symptoms that concern you.",
    ],
    learnMore: [
      { title: "Abnormal Uterine Bleeding", org: "SOGC", url: "https://www.sogc.org" },
      { title: "Abnormal Uterine Bleeding", org: "Mayo Clinic", url: "https://www.mayoclinic.org/symptoms/abnormal-uterine-bleeding/basics/definition/sym-20050942" },
    ],
    references: [
      "SOGC — Abnormal Uterine Bleeding Guideline",
      "Mayo Clinic — Abnormal Uterine Bleeding",
      "Government of Canada — Women's Health",
    ],
    relatedTopics: ["normal-vs-abnormal-periods", "endometriosis", "pain-management"],
  },
};

/* ─── Related topic labels ────────────────────────────────────────────────── */
const topicTitles: Record<string, string> = {
  "patient-rights": "Patient Rights",
  "healthcare-consent": "Healthcare Consent",
  "accessing-care": "Accessing Care",
  "filing-complaints": "Filing Complaints",
  "questions-for-doctor": "Questions to Ask Your Doctor",
  "second-opinions": "Getting Second Opinions",
  "speaking-up": "Speaking Up During Appointments",
  "medical-decisions": "Understanding Medical Decisions",
  "vaccinations": "Vaccinations",
  "cancer-screening": "Cancer Screening",
  "dental-care": "Dental Care",
  "sexual-health": "Sexual Health",
  "mental-health-checkups": "Mental Health Checkups",
  "routine-physical-exams": "Routine Physical Exams",
  "normal-vs-abnormal-periods": "Normal vs Abnormal Periods",
  "pain-management": "Menstrual Pain Management",
  "pcos": "PCOS",
  "endometriosis": "Endometriosis",
  "menstrual-products": "Menstrual Products Guide",
  "when-to-seek-care": "When to Seek Medical Care",
};

/* ─── FAQ accordion item ─────────────────────────────────────────────────── */
function FAQItem({ q, a }: FAQ) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-sm hover:bg-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-inset"
      >
        <span>{q}</span>
        {open
          ? <ChevronUp size={16} className="flex-shrink-0 text-primary" />
          : <ChevronDown size={16} className="flex-shrink-0 text-muted-foreground" />}
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border bg-muted/20">
          <div className="pt-3">{a}</div>
        </div>
      )}
    </div>
  );
}

/* ─── Main component ──────────────────────────────────────────────────────── */
export function EducationTopic() {
  const { topicId } = useParams<{ topicId: string }>();
  const [copied, setCopied] = useState(false);
  const topic = topicId ? topics[topicId] : undefined;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!topic) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold mb-4">Topic Not Found</h1>
          <p className="text-muted-foreground mb-6">This article could not be found.</p>
          <Link to="/health-education" className="text-primary hover:underline font-medium">
            ← Back to Her Health Library
          </Link>
        </div>
      </div>
    );
  }

  const uniqueOrgs = [...new Set(topic.learnMore.map((l) => l.org))];

  return (
    <div className="min-h-screen bg-background">

      {/* Breadcrumb */}
      <div className="bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/health-education" className="hover:text-primary transition-colors">Her Health Library</Link>
          <span>/</span>
          <span className="text-primary font-medium">{topic.category}</span>
        </div>
      </div>

      {/* Article header */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/health-education" className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium mb-5">
            <ArrowLeft size={15} /> Back to Her Health Library
          </Link>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">{topic.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">{topic.title}</h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-5">{topic.summary}</p>
          <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Clock size={14} /> {topic.readingTime}</span>
            <span className="flex items-center gap-1.5"><CalendarDays size={14} /> Reviewed June 2025</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-12">

          {/* Main article */}
          <article className="space-y-10 min-w-0">

            {/* Quick Facts */}
            {topic.quickFacts && topic.quickFacts.length > 0 && (
              <div className="bg-card border border-border rounded-2xl p-5">
                <h2 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">Quick Facts</h2>
                <dl className="divide-y divide-border">
                  {topic.quickFacts.map((fact, i) => (
                    <div key={i} className="py-2.5 sm:grid sm:grid-cols-[160px_1fr] sm:gap-4 text-sm">
                      <dt className="font-medium text-foreground mb-0.5 sm:mb-0">{fact.label}</dt>
                      <dd className="text-muted-foreground">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Highlight */}
            {topic.highlight && (
              <div className="flex gap-4 bg-accent/10 border-l-4 border-primary rounded-r-2xl p-5">
                <AlertCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground leading-relaxed font-medium">{topic.highlight}</p>
              </div>
            )}

            {/* Content sections */}
            {topic.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">{section.heading}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{section.body}</p>

                {section.bullets && (
                  <ul className="space-y-2 mb-4">
                    {section.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span className="text-muted-foreground leading-relaxed text-sm md:text-base">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.infoBox && (
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-4 text-sm text-foreground leading-relaxed">
                    <span className="font-semibold text-primary">Did You Know? </span>{section.infoBox}
                  </div>
                )}

                {section.tip && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4 text-sm leading-relaxed">
                    <span className="font-semibold text-amber-700">Quick Tip: </span>
                    <span className="text-amber-900">{section.tip}</span>
                  </div>
                )}
              </section>
            ))}

            {/* Key Takeaways */}
            <section id="takeaways" className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={20} className="text-primary" />
                <h2 className="text-xl font-bold">Key Takeaways</h2>
              </div>
              <ul className="space-y-3">
                {topic.keyTakeaways.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-foreground leading-relaxed text-sm md:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* When to Seek Medical Care */}
            {topic.whenToSeeDoctor && topic.whenToSeeDoctor.length > 0 && (
              <section id="when-to-seek" className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Stethoscope size={20} className="text-primary" />
                  <h2 className="text-xl font-bold">When to Seek Medical Care</h2>
                </div>
                <ul className="space-y-2">
                  {topic.whenToSeeDoctor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                      <span className="text-muted-foreground leading-relaxed text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* FAQ */}
            {topic.faq.length > 0 && (
              <section id="faq">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {topic.faq.map((item, i) => <FAQItem key={i} {...item} />)}
                </div>
              </section>
            )}

            {/* Trusted Sources */}
            <section id="trusted-sources">
              <h2 className="text-xl font-bold mb-4">Trusted Sources</h2>
              <div className="flex flex-wrap gap-2 mb-5">
                {uniqueOrgs.map((org, i) => (
                  <span key={i} className="inline-flex items-center bg-muted/60 border border-border rounded-lg px-3 py-1.5 text-sm font-medium text-foreground">
                    {org}
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                {topic.learnMore.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-card border border-border rounded-xl p-4 hover:border-primary hover:shadow-sm transition-all group focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    <div>
                      <p className="font-medium text-sm group-hover:text-primary transition-colors">{item.title}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{item.org}</p>
                    </div>
                    <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
                  </a>
                ))}
              </div>
            </section>

            {/* Related Articles */}
            {topic.relatedTopics.length > 0 && (
              <section id="related">
                <h2 className="text-xl font-bold mb-4">Related Articles</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {topic.relatedTopics.slice(0, 3).map((id) => (
                    <div key={id} className="bg-card border border-border rounded-xl p-4 flex flex-col gap-3">
                      <p className="text-sm font-medium leading-snug flex-1">{topicTitles[id] || id}</p>
                      <Link
                        to={`/health-education/${id}`}
                        className="inline-flex items-center justify-center text-sm font-medium border border-border rounded-lg px-3 py-2 bg-background hover:bg-muted hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
                      >
                        Read Article
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Share */}
            <section className="border-t border-border pt-8">
              <h2 className="text-base font-semibold mb-4">Share This Article</h2>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 text-sm font-medium border border-border rounded-lg px-4 py-2 bg-card hover:bg-muted hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <Link2 size={14} />
                  {copied ? "Copied!" : "Copy Link"}
                </button>
                <a
                  href={`mailto:?subject=${encodeURIComponent(topic.title)}&body=${encodeURIComponent("I found this article helpful: " + window.location.href)}`}
                  className="inline-flex items-center gap-2 text-sm font-medium border border-border rounded-lg px-4 py-2 bg-card hover:bg-muted hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <Mail size={14} />
                  Email
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium border border-border rounded-lg px-4 py-2 bg-card hover:bg-muted hover:border-primary hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </div>
            </section>

            {/* References */}
            <div className="border-t border-border pt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">References</h2>
              <ul className="space-y-1.5">
                {topic.references.map((ref, i) => (
                  <li key={i} className="text-xs text-muted-foreground leading-relaxed">• {ref}</li>
                ))}
              </ul>
            </div>

            {/* Medical Disclaimer */}
            <div className="bg-muted/40 border border-border rounded-xl p-5 text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Medical Disclaimer: </span>
              The information provided by Her Health Collective is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for advice about your specific situation.
            </div>

            {/* Back link */}
            <Link to="/health-education" className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium">
              <ArrowLeft size={15} /> Back to Her Health Library
            </Link>

          </article>

          {/* Sidebar — Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <List size={15} className="text-primary" />
                  <span className="text-sm font-semibold">In This Article</span>
                </div>
                <nav className="space-y-0.5">
                  {topic.sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 leading-snug"
                    >
                      {s.heading}
                    </a>
                  ))}
                  <a href="#takeaways" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                    Key Takeaways
                  </a>
                  {topic.whenToSeeDoctor && topic.whenToSeeDoctor.length > 0 && (
                    <a href="#when-to-seek" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      When to Seek Medical Care
                    </a>
                  )}
                  {topic.faq.length > 0 && (
                    <a href="#faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      Frequently Asked Questions
                    </a>
                  )}
                  <a href="#trusted-sources" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                    Trusted Sources
                  </a>
                  {topic.relatedTopics.length > 0 && (
                    <a href="#related" className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      Related Articles
                    </a>
                  )}
                </nav>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
