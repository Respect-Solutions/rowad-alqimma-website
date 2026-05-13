export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" }
] as const;

export const aboutFeatures = [
  { label: "Fast company formation", icon: "featurePin" },
  { label: "Deep knowledge of Saudi regulations", icon: "featureRegulation" },
  { label: "End-to-end support", icon: "featureSupport" }
] as const;

export const bentoCards = [
  {
    title: "Command Center System",
    body: "Our integrated system gives you full visibility over every step from documentation to execution ensuring your business is structured, compliant, and ready to scale.",
    action: "Explore System",
    className: "lg:col-span-2"
  },
  {
    title: "Speed & Efficiency",
    body: "We accelerate your setup through optimized processes and direct regulatory channels reducing delays and getting you operational faster.",
    light: true
  },
  {
    title: "Transparency",
    body: "Every step, document, and cost is clearly structured and shared giving you full control and confidence throughout the process."
  },
  {
    title: "Execution First",
    body: "We don’t stop at advice. We execute, manage, and deliver turning plans into fully operational businesses.",
    className: "lg:col-span-2"
  }
] as const;

export const stats = [
  ["10B+", "Companies"],
  ["500+", "Years"],
  ["15+", "Global Offices"],
  ["99%", "Success Rate"]
] as const;

export const sequence = [
  {
    number: "01",
    title: "Consultation",
    body: "Initial feasibility study and regulatory alignment for your specific industry.",
    icon: "sequenceOne"
  },
  {
    number: "02",
    title: "Documentation",
    body: "Preparation of articles of association and all mandatory legal filings.",
    icon: "sequenceTwo"
  },
  {
    number: "03",
    title: "Processing",
    body: "Liaising with Saudi authorities for licensing and official certification.",
    icon: "sequenceThree"
  },
  {
    number: "04",
    title: "Completion",
    body: "Final hand-over of commercial registration and operational bank accounts.",
    icon: "sequenceFour"
  }
] as const;

export const footerColumns = [
  {
    title: "Links",
    links: ["Foreign Investment", "Mergers & Acquisitions", "Dispute Resolution", "Fintech Law"]
  },
  {
    title: "Legal",
    links: ["Foreign Investment", "Mergers & Acquisitions", "Dispute Resolution", "Fintech Law"]
  },
  {
    title: "Contacts",
    links: ["Privacy Policy", "Terms of Service", "Terms of Service"]
  }
] as const;

export const faqItems = [
  "How long is the initial assessment?",
  "Do you handle legal licensing?",
  "What sectors do you specialize in?"
] as const;
