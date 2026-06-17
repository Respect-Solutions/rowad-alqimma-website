"use client";

import { motion, type Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const services = [
  {
    number: "01",
    title: {
      en: "Organizational Structure Design",
      ar: "تصميم الهيكل التنظيمي",
    },
    description: {
      en: "Your company needs a clear structure from day one. We design an organizational framework tailored to your company's size, business nature, and Saudi market requirements — a structure that actually functions, not just looks good on paper.",
      ar: "نقوم بتصميم هيكل تنظيمي احترافي يناسب حجم شركتك وطبيعة نشاطها ومتطلبات السوق السعودي.",
    },
  },

  {
    number: "02",
    title: {
      en: "Internal Policies & Procedures",
      ar: "السياسات والإجراءات الداخلية",
    },
    description: {
      en: "From HR policies to daily operational procedures — we write a clear internal manual that ensures your company runs efficiently and prevents chaos before it starts.",
      ar: "نضع جميع السياسات والإجراءات التشغيلية والإدارية التي تضمن سير العمل بكفاءة.",
    },
  },

  {
    number: "03",
    title: {
      en: "Saudi Regulatory Compliance",
      ar: "الامتثال للأنظمة السعودية",
    },
    description: {
      en: "Saudi regulations are constantly evolving — including Saudization requirements, labor laws, and Ministry of Human Resources mandates. We ensure your company always stays on the right track, well clear of violations and penalties.",
      ar: "نساعد شركتك على الالتزام بجميع الأنظمة السعودية ومتطلبات الجهات الحكومية.",
    },
  },

  {
    number: "04",
    title: {
      en: "Human Resources Management",
      ar: "إدارة الموارد البشرية",
    },
    description: {
      en: "Hiring, contracts, salary structures, termination procedures — we help you build an HR system that's fully compliant with Saudi labor law from your very first day of operations.",
      ar: "إعداد أنظمة الموارد البشرية والعقود واللوائح الداخلية بما يتوافق مع الأنظمة.",
    },
  },

  {
    number: "05",
    title: {
      en: "Ongoing Administrative Support",
      ar: "الدعم الإداري المستمر",
    },
    description: {
      en: "We're not consultants who deliver a report and disappear. We stay by your side continuously — answering your questions, resolving your administrative challenges, and keeping you updated on market and regulatory changes.",
      ar: "استشارات ودعم إداري مستمر لضمان استقرار أعمالك بعد التأسيس.",
    },
  },

  {
    number: "06",
    title: {
      en: "Strategic Growth Planning",
      ar: "التخطيط للنمو",
    },
    description: {
      en: "After stability comes growth. We help you build a clear expansion plan inside the Saudi market — grounded in real data and deep market understanding.",
      ar: "نساعدك في بناء أنظمة إدارية تدعم نمو شركتك وتوسعها داخل المملكة.",
    },
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function AdministrativeServices() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#27354CB2] py-24">
      <div className="mx-auto max-w-[1152px] px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
        >
          {" "}
          {/* Heading */}
          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-[900px] text-center"
          >
            <h2 className="text-[34px] font-bold leading-[1.15] text-white sm:text-[48px] lg:text-[58px]">
              {isArabic ? (
                <>
                  ماذا <span className="text-[#B9C7E4]">نقدم</span>
                </>
              ) : (
                <>
                  What We Offer{" "}
                  <span className="text-[30px] font-normal text-[#B9C7E4]">
                    In Detail
                  </span>
                </>
              )}
            </h2>
          </motion.div>
          {/* Cards */}
          <motion.div
            variants={containerVariants}
            className="
              mt-16
              grid
              gap-8

              md:grid-cols-2

              xl:grid-cols-3
            "
          >
            {services.map((service) => (
              <motion.div
                key={service.number}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[34px]
                  border
                  border-[#FFFFFF1A]
                  


                  bg-[background: #27354CB2;
]
                  p-8
                  min-h-[390px]
                "
              >
                {/* Glow */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                    bg-[radial-gradient(circle_at_top,#4F78FF20,transparent_70%)]
                  "
                />

                <div className="relative z-10 flex h-full flex-col">
                  {/* Title */}

                  <h3
                    className="
                      text-[22px]
                      font-bold
                      leading-[1.25]
                      text-[#D6E3FF]
                    "
                  >
                    {isArabic ? service.title.ar : service.title.en}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-6
                      flex-1
                      text-[16px]
                      leading-[1.9]
                      text-white/60
                    "
                  >
                    {isArabic ? service.description.ar : service.description.en}
                  </p>

                  {/* Number */}

                  <div
                    className={`
                      mt-8
                      flex
                      items-end

                      ${isArabic ? "justify-start" : "justify-end"}
                    `}
                  >
                    <span
                      className="
                        text-[72px]
                        font-bold
                        leading-none
                        text-[#BEC1C4]
                        transition-all
                        duration-300
                      "
                    >
                      {service.number}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Glow */}

      
    </section>
  );
}