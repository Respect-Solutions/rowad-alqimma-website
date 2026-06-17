"use client";

import { motion, type Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const services = [
  {
    number: "1",
    title: {
      en: "Saudi Market Analysis",
      ar: "تحليل السوق السعودي",
    },
    description: {
      en: "Start with understanding before spending. We provide a comprehensive market study defining market size, competitors, target audience, and valuable opportunities in your sector.",
      ar: "نبدأ بفهم السوق قبل الإنفاق، من خلال دراسة شاملة لحجم السوق والمنافسين والجمهور المستهدف.",
    },
  },

  {
    number: "2",
    title: {
      en: "Marketing Strategy",
      ar: "الاستراتيجية التسويقية",
    },
    description: {
      en: "Before any campaign, we build a complete marketing plan covering channels, messaging, timelines and budget.",
      ar: "نضع استراتيجية تسويقية متكاملة تشمل القنوات والرسائل والميزانية وخطة التنفيذ.",
    },
  },

  {
    number: "3",
    title: {
      en: "Social Media Management",
      ar: "إدارة وسائل التواصل",
    },
    description: {
      en: "Instagram, Snapchat, TikTok, X, LinkedIn and more — creating content, engaging your audience and building your brand.",
      ar: "إدارة حسابات التواصل الاجتماعي وصناعة المحتوى وبناء حضور قوي لعلامتك التجارية.",
    },
  },

  {
    number: "4",
    title: {
      en: "Search Engine Optimization (SEO)",
      ar: "تحسين محركات البحث",
    },
    description: {
      en: "Rank higher on Google through technical optimization, keyword strategy and content tailored to Saudi search behavior.",
      ar: "رفع ترتيب موقعك في نتائج البحث من خلال تحسينات تقنية ومحتوى احترافي.",
    },
  },

  {
    number: "5",
    title: {
      en: "Paid Advertising Management (PPC)",
      ar: "إدارة الإعلانات المدفوعة",
    },
    description: {
      en: "Google Ads, Meta, Snapchat and TikTok campaigns managed to maximize ROI and reduce acquisition costs.",
      ar: "إدارة الحملات الإعلانية لتحقيق أفضل عائد وتقليل تكلفة اكتساب العملاء.",
    },
  },

  {
    number: "6",
    title: {
      en: "Content Marketing",
      ar: "التسويق بالمحتوى",
    },
    description: {
      en: "Content that builds trust, attracts your audience and converts visitors into customers.",
      ar: "محتوى احترافي يبني الثقة ويجذب العملاء ويحولهم إلى عملاء فعليين.",
    },
  },

  {
    number: "7",
    title: {
      en: "Visual Identity & Branding",
      ar: "الهوية البصرية والعلامة التجارية",
    },
    description: {
      en: "Create a memorable visual identity that reflects your business and appeals to Saudi customers.",
      ar: "تصميم هوية بصرية متكاملة تعكس نشاطك وتناسب السوق السعودي.",
    },
  },

  {
    number: "8",
    title: {
      en: "Influencer Marketing",
      ar: "التسويق عبر المؤثرين",
    },
    description: {
      en: "Reach your audience through trusted Saudi influencers that align with your brand.",
      ar: "الوصول إلى جمهورك عبر المؤثرين المناسبين داخل السوق السعودي.",
    },
  },

  {
    number: "9",
    title: {
      en: "Email & WhatsApp Marketing",
      ar: "التسويق عبر البريد وواتساب",
    },
    description: {
      en: "Automated campaigns that nurture leads and keep your customers engaged.",
      ar: "حملات بريد إلكتروني وواتساب تبني علاقة مستمرة مع عملائك.",
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
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export function MarketingServices() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] py-24">
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
          {/* Heading */}

          <motion.div variants={itemVariants} className="mx-auto text-center">
            <h2 className="text-[34px] font-bold leading-[1.15] text-white sm:text-[48px] lg:text-[58px]">
              {isArabic ? "خدماتنا التسويقية" : "Our Marketing Services"}
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[16px] leading-[1.8] text-white/55 sm:text-[18px]">
              {isArabic
                ? "لا نفرض باقة ثابتة، بل تختار الخدمات التي تناسب احتياجك وميزانيتك."
                : "We don't impose a one-size-fits-all package. Choose exactly what you need — one service or all of them. Your budget and goal determine your path."}
            </p>
          </motion.div>
          {/* Services */}

          <motion.div
            variants={containerVariants}
            className="
              mt-20
              grid
              gap-y-16
              gap-x-10

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
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group
                  relative
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                {/* Circle */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-[92px]
                    w-[92px]
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-white/10
                    bg-[#243550]
                    transition-all
                    duration-300
                    group-hover:border-[#B9C7E4]
                    group-hover:shadow-[0_0_40px_rgba(185,199,228,.2)]
                  "
                >
                  <span className="text-[32px] font-bold text-white">
                    {service.number}
                  </span>
                </div>

                {/* Title */}

                <h3
                  className="
                    mt-8
                    max-w-[280px]
                    text-[22px]
                    font-bold
                    leading-[1.3]
                    text-white
                  "
                >
                  {isArabic ? service.title.ar : service.title.en}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-5
                    max-w-[290px]
                    text-[15px]
                    leading-[1.8]
                    text-white/55
                  "
                >
                  {isArabic ? service.description.ar : service.description.en}
                </p>

                {/* Availability */}

                <p
                  className="
                    mt-5
                    text-[14px]
                    font-semibold
                    text-white
                  "
                >
                  ✦{" "}
                  {isArabic
                    ? "متاحة كخدمة مستقلة"
                    : "Available as a standalone service"}
                </p>

                {/* Glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    top-0
                    h-[120px]
                    w-[120px]
                    rounded-full
                    bg-[#8FA8FF]/0
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-[#8FA8FF]/20
                  "
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Background Glow */}

      

      
    </section>
  );
}