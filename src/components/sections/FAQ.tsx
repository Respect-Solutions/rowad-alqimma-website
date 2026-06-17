"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  type Variants,
} from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQContent = {
  title: {
    en: string;
    ar: string;
  };

  description?: {
    en: string;
    ar: string;
  };

  faqs: {
    en: FAQItem[];
    ar: FAQItem[];
  };
};

type FAQSectionProps = {
  variant?:
    | "default"
    | "companyFormation"
    | "administrativeConsulting"
    | "corporateLegal"
    | "marketEntry";
};

const faqContent: Record<
  NonNullable<FAQSectionProps["variant"]>,
  FAQContent
> = {
  default: {
    title: {
      en: "Frequently Asked Questions",
      ar: "الأسئلة الشائعة",
    },

    description: {
      en: "Everything you need to know about our services.",
      ar: "إجابات عن أكثر الأسئلة شيوعًا حول خدماتنا وكيف يمكننا مساعدتك.",
    },

    faqs: {
      en: [
        {
          question: "How can I trust you as a company?",
          answer:
            "Your trust is the foundation of our work. We have successfully established hundreds of companies while maintaining complete transparency throughout every stage.",
        },

        {
          question: "Are there any hidden fees?",
          answer:
            "Absolutely not. Every fee is clearly presented before any procedure begins.",
        },

        {
          question: "How long does the company formation process take?",
          answer:
            "Most companies are established within 35–40 business days depending on the required approvals.",
        },

        {
          question: "Do you serve all nationalities?",
          answer: "Yes. We support investors from all over the world.",
        },
      ],

      ar: [
        {
          question: "كيف يمكنني الوثوق بشركتكم؟",
          answer:
            "ثقتك هي الأساس الذي نبني عليه علاقتنا مع عملائنا. لدينا سجل موثق يضم أكثر من 150 شركة تم تأسيسها بنجاح خلال العام الماضي، ونلتزم بالشفافية الكاملة في جميع مراحل العمل.",
        },

        {
          question: "هل توجد أي رسوم غير معلنة؟",
          answer:
            "بالتأكيد لا. نحن ملتزمون بالشفافية الكاملة، حيث يتم تحديد جميع التكاليف مسبقًا وتوضيحها بوضوح قبل البدء في أي إجراء.",
        },

        {
          question: "كم تستغرق عملية تأسيس الشركة؟",
          answer:
            "تستغرق عملية التأسيس في المتوسط من 35 إلى 40 يوم عمل، وتشمل جميع الإجراءات منذ البداية وحتى استلام السجل التجاري.",
        },

        {
          question: "هل تقدمون خدماتكم لجميع الجنسيات؟",
          answer:
            "نعم، نقدم خدماتنا للمستثمرين من مختلف الجنسيات حول العالم، ولدينا خبرة واسعة في التعامل مع المتطلبات الخاصة بكل جنسية.",
        },
      ],
    },
  },

  companyFormation: {
    title: {
      en: "Frequently Asked Questions",
      ar: "الأسئلة الشائعة",
    },

    description: {
      en: "Find answers to the most common questions about establishing your company in Saudi Arabia.",
      ar: "تعرف على أهم الأسئلة المتعلقة بتأسيس الشركات داخل المملكة.",
    },

    faqs: {
      en: [
        {
          question: "Do I need a Saudi partner to establish my company? ",
          answer:
            "No. Under Saudi Arabia's new Investment Law 2025, foreign investors can own 100% of their company in most sectors with no requirement for a local partner. Only a few strategic sectors may require local participation — and our team will clarify your specific situation.",
        },

        {
          question: "How long does the company formation process take? ",
          answer:
            "The process takes an average of 35 to 40 business days — covering all stages from document collection to delivering your commercial registration. Some sectors may require additional time for special approvals.",
        },

        {
          question: "What is the minimum capital requirement? ",
          answer:
            "It varies by company type and sector. For a Limited Liability Company (LLC) in most sectors, the minimum is SAR 500,000. Some commercial sectors may require higher capital. Our team determines the exact amount based on your specific activity.",
        },

        {
          question: "Are there any hidden fees? ",
          answer:
            "Absolutely not. Before we begin, you receive a detailed list of all expected costs — government fees, our service fees, and any other costs. Our complete transparency is what builds lasting trust with our clients.",
        },
        {
          question: "Can I form a company while I'm outside Saudi Arabia? ",
          answer:
            "Yes. We work with many investors entirely remotely. We complete all procedures on your behalf without requiring your permanent physical presence inside the Kingdom. Some steps may require formal signatures that can be executed through embassies or international notarization.",
        },
        {
          question: "Are there any hidden fees? ",
          answer:
            "Absolutely not. Before we begin, you receive a detailed list of all expected costs — government fees, our service fees, and any other costs. Our complete transparency is what builds lasting trust with our clients.",
        },
        {
          question: "What sectors are restricted for foreign investment? ",
          answer:
            "The Negative List includes some strategic sectors such as crude oil exploration, military and security services, and some religious services. Most commercial, technology, and service sectors are fully open. Our team verifies your specific sector situation.",
        },
        {
          question:
            "What's the difference between MISA registration and the Commercial Registration (CR)? ",
          answer:
            "MISA registration (Ministry of Investment) is the license that grants you legal rights as a foreign investor to operate inside the Kingdom — it's the first step. The Commercial Registration (CR) is the document that registers your company with the Ministry of Commerce — it's the final step. Both are essential and we complete them together.",
        },
      ],

      ar: [
        {
          question: "هل أحتاج إلى شريك سعودي لتأسيس شركتي؟",
          answer:
            "لا. بموجب نظام الاستثمار السعودي الجديد لعام 2025، يمكن للمستثمر الأجنبي تملّك شركته بنسبة 100% في معظم القطاعات دون الحاجة إلى شريك محلي. وقد تتطلب بعض القطاعات الاستراتيجية فقط شريكًا محليًا، وسيقوم فريقنا بتوضيح ما ينطبق على نشاطك.",
        },
        {
          question: "كم تستغرق عملية تأسيس الشركة؟",
          answer:
            "تستغرق عملية التأسيس في المتوسط من 35 إلى 40 يوم عمل، وتشمل جميع المراحل بدءًا من استلام المستندات وحتى إصدار السجل التجاري. وقد تستغرق بعض الأنشطة وقتًا إضافيًا للحصول على الموافقات الخاصة.",
        },
        {
          question: "ما الحد الأدنى لرأس المال المطلوب؟",
          answer:
            "يختلف الحد الأدنى لرأس المال بحسب نوع الشركة وطبيعة النشاط. بالنسبة للشركة ذات المسؤولية المحدودة (LLC) في معظم القطاعات، يبلغ الحد الأدنى 500,000 ريال سعودي، بينما قد تتطلب بعض الأنشطة التجارية رأس مال أعلى. ويحدد فريقنا المبلغ المناسب وفقًا لنشاطك.",
        },
        {
          question: "هل توجد رسوم مخفية؟",
          answer:
            "لا على الإطلاق. قبل بدء أي إجراء، نزودك بقائمة تفصيلية تشمل جميع التكاليف المتوقعة، بما في ذلك الرسوم الحكومية، ورسوم خدماتنا، وأي تكاليف أخرى. فالشفافية الكاملة هي أساس الثقة التي نبنيها مع عملائنا.",
        },
        {
          question: "هل يمكنني تأسيس شركتي وأنا خارج المملكة العربية السعودية؟",
          answer:
            "نعم. نتعامل مع العديد من المستثمرين عن بُعد، ونتولى جميع إجراءات التأسيس نيابةً عنهم دون الحاجة إلى وجودهم الدائم داخل المملكة. وقد تتطلب بعض الخطوات توقيعات رسمية يمكن إتمامها عبر السفارات أو من خلال التوثيق الدولي.",
        },
        {
          question: "ما القطاعات المقيّدة أمام الاستثمار الأجنبي؟",
          answer:
            "تشمل القائمة السلبية (Negative List) بعض القطاعات الاستراتيجية، مثل استكشاف النفط الخام، والخدمات العسكرية والأمنية، وبعض الخدمات الدينية. أما معظم القطاعات التجارية والتقنية والخدمية فهي متاحة بالكامل للاستثمار الأجنبي، وسيتحقق فريقنا من وضع نشاطك قبل البدء.",
        },
        {
          question:
            "ما الفرق بين ترخيص وزارة الاستثمار (MISA) والسجل التجاري (CR)؟",
          answer:
            "ترخيص وزارة الاستثمار (MISA) هو الترخيص الذي يمنح المستثمر الأجنبي الحق النظامي لممارسة النشاط داخل المملكة، ويُعد الخطوة الأولى في رحلة التأسيس. أما السجل التجاري (CR) فهو الوثيقة الرسمية التي تُسجل الشركة لدى وزارة التجارة، ويُعد الخطوة النهائية. وكلا الإجرائين أساسيان، ويتولى فريقنا إنجازهما بالكامل.",
        },
      ],
    },
  },

  administrativeConsulting: {
    title: {
      en: "Frequently Asked Questions",
      ar: "الأسئلة الشائعة",
    },

    description: {
      en: "Everything you need to know about our administrative consulting services.",
      ar: "كل ما تحتاج معرفته عن خدمات الاستشارات الإدارية.",
    },

    faqs: {
      en: [
        {
          question:
            "When do I need administrative consulting — before or after formation?",
          answer:
            "Both matter. Before formation, we help you build the right foundation. After formation, we ensure your operations run efficiently. Our best results come when we're your partner from the very beginning.",
        },

        {
          question: "Do you serve companies at different stages of growth?",
          answer:
            "Yes. We serve startups that have just launched, growing companies that want restructuring, and established firms that need compliance and operational support.",
        },

        {
          question:
            "How do you ensure my company meets Saudization requirements?",
          answer:
            "We continuously monitor updates to Saudization regulations and Ministry of Human Resources requirements, guiding you to take the right steps at the right time — so you avoid any violations or fines.",
        },

        {
          question: "Can I reach you continuously or only when needed?",
          answer:
            "We offer continuous support via WhatsApp — you reach out whenever you need us, and we proactively check in with you regularly to ensure your operations are running smoothly.",
        },
      ],

      ar: [
        {
          question: "متى أحتاج إلى الاستشارات الإدارية، قبل التأسيس أم بعده؟",
          answer:
            "كلا المرحلتين لا تقلان أهمية عن بعضهما. قبل التأسيس نساعدك على بناء الأساس الإداري الصحيح، وبعد التأسيس نعمل على تطوير عملياتك وضمان كفاءتها. وتحقق شركاتنا أفضل النتائج عندما نكون شريكًا لها منذ البداية.",
        },
        {
          question: "هل تقدمون خدماتكم للشركات في مختلف مراحل نموها؟",
          answer:
            "نعم، نقدم خدماتنا للشركات الناشئة، والشركات التي تمر بمرحلة نمو وتحتاج إلى إعادة هيكلة، بالإضافة إلى الشركات القائمة التي تبحث عن دعم في الامتثال ورفع كفاءة التشغيل.",
        },
        {
          question: "كيف تساعدون شركتي على الالتزام بمتطلبات السعودة؟",
          answer:
            "نواكب باستمرار جميع التحديثات المتعلقة بأنظمة السعودة ومتطلبات وزارة الموارد البشرية والتنمية الاجتماعية، ونرشدك إلى الإجراءات المناسبة في الوقت المناسب، بما يضمن التزام شركتك وتجنب أي مخالفات أو غرامات.",
        },
        {
          question: "هل يمكنني التواصل معكم بشكل مستمر أم فقط عند الحاجة؟",
          answer:
            "نوفر دعماً مستمراً عبر واتساب، بحيث يمكنك التواصل معنا في أي وقت تحتاج فيه إلى المساعدة، كما نتابع معك بشكل دوري للتأكد من سير أعمالك بكفاءة ومعالجة أي تحديات قبل أن تؤثر على نشاطك.",
        },
      ],
    },
  },
  corporateLegal: {
    title: {
      en: "Frequently Asked Questions",
      ar: "الأسئلة الشائعة",
    },

    description: {
      en: "Common questions about our corporate legal advisory services.",
      ar: "تعرف على أهم الأسئلة حول خدمات الاستشارات القانونية للشركات.",
    },

    faqs: {
      en: [
        {
          question:
            "When do I need administrative consulting — before or after formation?",
          answer:
            "Both matter. Before formation, we help you build the right foundation. After formation, we ensure your operations run efficiently. Our best results come when we're your partner from the very beginning.",
        },

        {
          question: "Do you serve companies at different stages of growth?",
          answer:
            "Yes. We serve startups that have just launched, growing companies that want restructuring, and established firms that need compliance and operational support.",
        },

        {
          question:
            "How do you ensure my company meets Saudization requirements?",
          answer:
            "We continuously monitor updates to Saudization regulations and Ministry of Human Resources requirements, guiding you to take the right steps at the right time — so you avoid any violations or fines.",
        },

        {
          question: "Can I reach you continuously or only when needed?",
          answer:
            "We offer continuous support via WhatsApp — you reach out whenever you need us, and we proactively check in with you regularly to ensure your operations are running smoothly.",
        },
      ],

      ar: [
        {
          question: "متى أحتاج إلى الاستشارات الإدارية، قبل التأسيس أم بعده؟",
          answer:
            "كلا المرحلتين لا تقلان أهمية عن بعضهما. قبل التأسيس نساعدك على بناء الأساس الإداري الصحيح، وبعد التأسيس نعمل على تطوير عملياتك وضمان كفاءتها. وتحقق شركاتنا أفضل النتائج عندما نكون شريكًا لها منذ البداية.",
        },
        {
          question: "هل تقدمون خدماتكم للشركات في مختلف مراحل نموها؟",
          answer:
            "نعم، نقدم خدماتنا للشركات الناشئة، والشركات التي تمر بمرحلة نمو وتحتاج إلى إعادة هيكلة، بالإضافة إلى الشركات القائمة التي تبحث عن دعم في الامتثال ورفع كفاءة التشغيل.",
        },
        {
          question: "كيف تساعدون شركتي على الالتزام بمتطلبات السعودة؟",
          answer:
            "نواكب باستمرار جميع التحديثات المتعلقة بأنظمة السعودة ومتطلبات وزارة الموارد البشرية والتنمية الاجتماعية، ونرشدك إلى الإجراءات المناسبة في الوقت المناسب، بما يضمن التزام شركتك وتجنب أي مخالفات أو غرامات.",
        },
        {
          question: "هل يمكنني التواصل معكم بشكل مستمر أم فقط عند الحاجة؟",
          answer:
            "نوفر دعماً مستمراً عبر واتساب، بحيث يمكنك التواصل معنا في أي وقت تحتاج فيه إلى المساعدة، كما نتابع معك بشكل دوري للتأكد من سير أعمالك بكفاءة ومعالجة أي تحديات قبل أن تؤثر على نشاطك.",
        },
      ],
    },
  },

  marketEntry: {
    title: {
      en: "Frequently Asked Questions",
      ar: "الأسئلة الشائعة",
    },

    description: {
      en: "Everything you need to know before entering the Saudi market.",
      ar: "كل ما تحتاج معرفته قبل دخول السوق السعودي.",
    },

    faqs: {
      en: [
        {
          question: "Where do I start — marketing or market analysis?",
          answer:
            "Always start with market analysis. It's the foundation on which all marketing decisions are built — from channel selection to message crafting to budget allocation. Spending on advertising before understanding the market is the fastest way to waste your budget.",
        },

        {
          question: "Can I buy just one marketing service?",
          answer:
            "Yes, absolutely. Every marketing service we offer is available independently. Only need SEO? We work on SEO. Only need Snapchat management? We handle that. You choose what suits your situation and budget.",
        },

        {
          question: "How much do marketing services in Saudi Arabia cost?",
          answer:
            "Cost varies by service, scope, and duration. We provide customized quotes after fully understanding your needs — no default numbers before complete understanding. Contact us for a personalized offer.",
        },

        {
          question: "How do you measure the success of marketing campaigns?",
          answer:
            "We agree on KPIs with you before starting — whether website visits, leads, sales, brand awareness, or others. Then we provide clear monthly reports showing real numbers against agreed targets.",
        },
        {
          question: "Do you work in both Arabic and English?",
          answer:
            "Yes. All our marketing services are executed in both Arabic and English — because the foreign investor in the Saudi market needs to reach two audiences: the local Arabic-speaking audience and the international one.",
        },
        {
          question: " How long before marketing results appear?",
          answer:
            "It depends on the service type. Paid ads show results within days. SEO needs 3 to 6 months for sustainable results. Social media management builds cumulative impact over 2 to 3 months. We clarify realistic timelines for each service before we begin.",
        },
      ],

      ar: [
        {
          question: "لماذا أحتاج إلى استشارات إدارية بعد تأسيس الشركة؟",
          answer:
            "لأن تأسيس الشركة هو البداية فقط، بينما تساعدك الاستشارات الإدارية على بناء نظام عمل فعال.",
        },

        {
          question: "هل تساعدون في تصميم الهيكل التنظيمي؟",
          answer: "نعم، نقوم بتصميم هيكل تنظيمي يتناسب مع نشاط شركتك.",
        },

        {
          question: "هل تقدمون دعماً إدارياً مستمراً؟",
          answer: "بالتأكيد، نوفر استشارات ودعماً مستمراً بعد التأسيس.",
        },

        {
          question: "هل الخدمة مناسبة للشركات الناشئة؟",
          answer: "نعم، نقدم حلولاً تناسب الشركات الناشئة والكبيرة.",
        },
      ],
    },
  },
};

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function FAQSection({
  variant = "default",
}: FAQSectionProps) {
  const { isArabic } = useLocale();

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const content = faqContent[variant];

  const faqItems = isArabic ? content.faqs.ar : content.faqs.en;

  const isDefault = variant === "default";

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-[#14263D] px-4 py-16 sm:px-6 md:py-24">
      <div className="relative z-10 mx-auto max-w-[1152px]">
        {/* Heading */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className={`
              font-bold
              leading-[1.1]
              text-white

              ${
                isDefault
                  ? "text-[32px] sm:text-[42px] lg:text-[56px]"
                  : "text-[34px] sm:text-[46px] lg:text-[56px]"
              }
            `}
          >
            {isArabic ? content.title.ar : content.title.en}
          </motion.h2>

          {content.description && (
            <motion.p
              variants={itemVariants}
              className="
                mx-auto
                mt-5
                max-w-[760px]
                text-[16px]
                leading-[1.8]
                text-white/55
                lg:text-[18px]
              "
            >
              {isArabic ? content.description.ar : content.description.en}
            </motion.p>
          )}
        </motion.div>
        {/* FAQ */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={containerVariants}
          className={`
            flex
            flex-col

            ${isDefault ? "mt-12 gap-5" : "mt-14 gap-4"}
          `}
        >
          {faqItems.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={itemVariants}
              className="overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  transition-all
                  duration-300

                  ${
                    isDefault
                      ? `
                        min-h-[72px]
                        rounded-[22px]
                        border
                        border-white/15
                        bg-[#24344D]
                        px-6
                        hover:bg-[#2B3C57]
                      `
                      : `
                        min-h-[74px]
                        rounded-[14px]
                        border
                        border-[#B9C7E4]
                        bg-[#243550]
                        px-6
                        hover:bg-[#2D4160]
                      `
                  }

                  ${isArabic ? "flex-row-reverse text-right" : "text-left"}
                `}
              >
                <span
                  className="
                    flex-1
                    text-[16px]
                    font-medium
                    leading-[1.7]
                    text-white
                    lg:text-[18px]
                  "
                >
                  {faq.question}
                </span>

                {isDefault && (
                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      ml-5
                      flex
                      h-[34px]
                      w-[34px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-lg
                      text-white/80
                    "
                  >
                    +
                  </motion.div>
                )}
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="overflow-hidden"
                  >
                    <div
                      className={`
                        border

                        ${
                          isDefault
                            ? `
                              mt-3
                              rounded-[22px]
                              border-white/10
                              bg-[#4A566B]
                              px-8
                              py-7
                            `
                            : `
                              mt-2
                              rounded-[14px]
                              border-[#B9C7E4]
                              bg-[#243550]
                              px-6
                              py-6
                            `
                        }
                      `}
                    >
                      <p
                        className={`
                          text-[16px]
                          leading-[1.9]
                          text-white/85

                          ${isArabic ? "text-right" : "text-left"}
                        `}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Glow */}

      


      
    </section>
  );
}