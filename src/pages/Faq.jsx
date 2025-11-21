import React, { useState, useMemo } from "react";
import styles from "../styles/Faq.module.css";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What services does ZenVoyager offer?",
    answer:
      "ZenVoyager provides end-to-end services including web development (React.js & full-stack), mobile app development, custom software, UI/UX & branding, graphic design, video production & editing, and training & bootcamps.",
  },
  {
    question: "Do you build websites specifically for Indian businesses?",
    answer:
      "Yes — we work with Indian startups, SMEs, and enterprises as well as international clients. We optimize websites for local SEO (e.g., 'web development India') and ensure performance across Indian network conditions.",
  },
  {
    question: "What technologies do you use for development?",
    answer:
      "We primarily use React.js for front-end development and can integrate with Node.js, Express, or other backends. For mobile apps we build native or cross-platform solutions depending on the project goals.",
  },
  {
    question: "How long does a typical website or app take to build?",
    answer:
      "Timeline depends on scope: a simple brochure website typically takes 2–4 weeks, a medium e-commerce or admin panel 6–12 weeks, and complex apps 3+ months. We'll provide a detailed timeline in the project proposal.",
  },
  {
    question: "How do you price projects?",
    answer:
      "We offer two pricing models: (1) Project-based quotes for one-off projects, and (2) Yearly contracts for ongoing work with a fixed monthly fee plus variable amounts depending on scope. Exact pricing is shared after understanding requirements.",
  },
  {
    question: "Do you provide maintenance and post-launch support?",
    answer:
      "Yes — we provide post-launch support, bug fixes, and optional maintenance contracts (monthly or yearly) that include updates, security patches, and feature enhancements.",
  },
  {
    question: "Can you help with SEO and content for my site?",
    answer:
      "Absolutely. We optimise on-page SEO (titles, meta descriptions, headings), technical SEO checks (sitemaps, robots.txt, speed), and can produce content and blog posts targeting market-specific keywords.",
  },
  {
    question: "Do you take academic and student projects?",
    answer:
      "Yes — we assist students with academic and personal projects (C++, Java, Python, AI/ML, Android, OpenCV) while ensuring ethical collaboration and proper attribution.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Revision policies vary by project: most packages include 2–3 rounds of design revisions. We'll document revision limits in the proposal to avoid scope creep.",
  },
  {
    question: "Can you create branding, logos, and social media creatives?",
    answer:
      "Yes — our Graphic Design service covers logo design, brand identity, social media creatives (Instagram, LinkedIn, Facebook), posters, printables, and 3D/illustration work.",
  },
  {
    question:
      "Do you produce videos for YouTube and short-form social content?",
    answer:
      "Yes — we offer YouTube video production, editing, thumbnails, and short-form video creation (Reels/TikTok) optimized for engagement and platform best practices.",
  },
  {
    question: "How can I get a quote or start a project?",
    answer:
      "Use the Contact page or email us with a brief project summary. We'll schedule a quick discovery call, then share a tailored proposal with timeline and cost estimates.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  // Build FAQ schema for structured data (JSON-LD) only once (useMemo)
  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    }),
    []
  );

  return (
    <section className={styles.faq_section} aria-labelledby="faq-heading">
      <div className={styles.heading_ctr}>
        <span className={styles.head_txt}>
          Any <span className={`playfair italic`}>questions</span>?<br />
          We got you answered.
        </span>
        <p className={styles.para_txt}>
          Answers to common questions about our services, timelines, pricing,
          and support.
        </p>
      </div>

      <div className={styles.questions_list_ctr}>
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              onClick={() => toggle(i)}
              className={`${styles.qna_ctr} ${isOpen ? styles.open : ""}`}
            >
              <button
                className={styles.question}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-button-${i}`}
                type="button"
              >
                <h3 className={styles.question_text}>{faq.question}</h3>
                <ChevronDown
                  className={`${styles.chev} ${isOpen ? styles.chevOpen : ""}`}
                  aria-hidden="true"
                  size={20}
                />
              </button>

              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-button-${i}`}
                className={styles.answer}
                // inline style helps animation: change maxHeight based on content
                style={{
                  maxHeight: isOpen ? "500px" : "0px",
                }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* JSON-LD Structured Data for FAQ (safe injection) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
