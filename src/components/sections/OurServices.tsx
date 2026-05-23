"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";

const services = [
  {
    title: "Market Entry",
    titleAr: "دخول السوق",
    description:
      "We help you enter new markets with a clear, data-driven strategy that minimizes risk and maximizes growth.",
    descriptionAr:
      "مساعدة الشركات العالمية على دخول السوق السعودي بشكل استراتيجي.",
    icon: "/assets/market-entry.svg",
  },
  {
    title: "Business Setup",
    titleAr: "تأسيس الشركات",
    description:
      "From idea to launch, we handle the entire setup process so you can start your business with confidence.",
    descriptionAr:
      "تأسيس الشركات وبناء الهيكل القانوني للشركات المحلية والعالمية.",
    icon: "/assets/business-setup.svg",
  },
  {
    title: "Legal Consulting",
    titleAr: "الاستشارات القانونية",
    description:
      "Expert legal guidance to ensure your business operates smoothly and stays fully compliant.",
    descriptionAr: "استشارات قانونية احترافية للعقود والامتثال والتنظيمات.",
    icon: "/assets/legal-consulting.svg",
  },
  {
    title: "Business Consulting",
    titleAr: "استشارات الأعمال",
    description:
      "We provide strategic insights and solutions to help your business grow, scale, and succeed.",
    descriptionAr: "تخطيط استراتيجي واستشارات تشغيلية لتطوير أعمالك.",
    icon: "/assets/business-consulting.svg",
  },
  {
    title: "Marketing Services",
    titleAr: "الخدمات التسويقية",
    description:
      "Result-driven marketing solutions designed to boost your visibility and generate real leads.",
    descriptionAr: "استراتيجيات تسويقية وحلول براندنج لتوسيع حضورك بالسوق.",
    icon: "/assets/marketing-services.svg",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function OurServices() {
  const { isArabic, locale } = useLocale();
  const searchParams = useSearchParams();
  const serviceFromUrl = searchParams.get("service");

  const [featuredService, setFeaturedService] = useState(services[0]);
  const [sideServices, setSideServices] = useState(services.slice(1));

  useEffect(() => {
    if (!serviceFromUrl) return;

    const serviceMap: Record<string, string> = {
      "market-entry": "Market Entry",
      "business-setup": "Business Setup",
      "legal-consulting": "Legal Consulting",
      "business-consulting": "Business Consulting",
      "marketing-services": "Marketing Services",
    };

    const matchedTitle = serviceMap[serviceFromUrl];
    if (!matchedTitle) return;

    const matchedService = services.find(
      (service) => service.title === matchedTitle,
    );
    if (!matchedService) return;

    const remainingServices = services.filter(
      (service) => service.title !== matchedService.title,
    );

    setFeaturedService(matchedService);
    setSideServices(remainingServices);
  }, [serviceFromUrl]);

  const handleServiceSwap = (clickedService: (typeof services)[0]) => {
    const clickedIndex = sideServices.findIndex(
      (service) => service.title === clickedService.title,
    );

    if (clickedIndex === -1) return;

    const updatedServices = [...sideServices];
    updatedServices[clickedIndex] = featuredService;

    setFeaturedService(clickedService);
    setSideServices(updatedServices);
  };

  return (
    <section
      id="our-services"
      className="relative overflow-hidden bg-[#14263D] py-14 sm:py-20 lg:py-28"
    >
      <div className="mx-4 rounded-[24px] border border-white/10  bg-[#27354CB2] px-4 py-8 sm:mx-6 sm:rounded-[28px] sm:px-8 sm:py-10 md:rounded-[32px] lg:mx-auto lg:px-10 lg:py-12">
        <motion.div
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-[32px] font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-[56px]">
              {isArabic ? "خدماتنا" : "Our Services"}
            </h2>

            <p className="mx-auto mt-4 max-w-[90%] text-sm leading-[1.7] text-white/55 sm:mt-5 sm:max-w-[640px] sm:text-base">
              {isArabic
                ? "نقدم خدمات قانونية وتجارية متخصصة لدعم الشركات الطموحة داخل المملكة العربية السعودية."
                : "We provide hyper-specialized legal services for ambitious businesses entering Saudi Arabia."}
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={containerVariants}
            className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:mt-14 lg:grid-cols-[1.5fr_1fr] lg:gap-6 max-w-[1152px] mx-auto"
          >
            {/* Featured Card */}
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-[20px] border border-[#B4C5FF] bg-[#10233D] px-5 py-8 sm:rounded-[24px] sm:px-8 sm:py-10 md:rounded-[28px] md:px-10 md:py-12"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={featuredService.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center justify-center text-center sm:min-h-[280px] lg:min-h-[320px]"
                >
                  {/* Icon */}
                  <div className="flex h-[90px] w-[90px] items-center justify-center sm:h-[110px] sm:w-[110px] md:h-[120px] md:w-[120px]">
                    <Image
                      src={featuredService.icon}
                      alt={featuredService.title}
                      width={100}
                      height={100}
                      className="h-auto"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-[26px] font-bold leading-[1.1] text-white sm:mt-8 sm:text-3xl md:text-4xl lg:text-[52px]">
                    {isArabic ? featuredService.titleAr : featuredService.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-[480px] text-sm leading-[1.7] text-white/60 sm:mt-5 sm:text-base">
                    {isArabic
                      ? featuredService.descriptionAr
                      : featuredService.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Side Services */}
            <motion.div
              variants={containerVariants}
              className="flex flex-col justify-center gap-3 sm:gap-4"
            >
              {sideServices.map((service) => (
                <motion.button
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -2, backgroundColor: "#31425D" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleServiceSwap(service)}
                  className="flex h-[70px] items-center gap-3 rounded-[14px] border border-white/10 bg-[#27354CB2] px-4 text-left transition-all duration-300 sm:h-[76px] sm:gap-4 sm:rounded-[18px] sm:px-5 md:h-[82px]"
                >
                  {/* Small Icon */}
                  <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center sm:h-[42px] sm:w-[42px]">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={28}
                      height={28}
                    />
                  </div>

                  {/* Title */}
                  <span className="text-[17px] font-semibold text-white sm:text-xl lg:text-[26px]">
                    {isArabic ? service.titleAr : service.title}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom Buttons */}
          <motion.div
            variants={containerVariants}
            className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4"
          >
            {/* Primary */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href={`/${locale}/contact-us`}
                className="flex h-[54px] w-full items-center justify-center rounded-[14px] bg-[#0F223D] px-8 text-sm font-bold text-white sm:h-[58px] sm:min-w-[280px] md:min-w-[320px]"
              >
                {isArabic ? "ابدأ شركتك" : "Start Your Company"}
              </Link>
            </motion.div>

            {/* Secondary */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href={`/${locale}/projects`}
                className="flex h-[54px] w-full items-center justify-center rounded-[14px] border border-white/10 bg-transparent px-8 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white sm:h-[58px] sm:min-w-[280px] md:min-w-[320px]"
              >
                {isArabic ? "عرض المشاريع" : "View Projects"}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
