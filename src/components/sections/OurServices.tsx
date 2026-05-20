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
descriptionAr:
"استشارات قانونية احترافية للعقود والامتثال والتنظيمات.",
icon: "/assets/legal-consulting.svg",
},

{
title: "Business Consulting",
titleAr: "استشارات الأعمال",
description:
"We provide strategic insights and solutions to help your business grow, scale, and succeed.",
descriptionAr:
"تخطيط استراتيجي واستشارات تشغيلية لتطوير أعمالك.",
icon: "/assets/business-consulting.svg",
},

{
title: "Marketing Services",
titleAr: "الخدمات التسويقية",
description:
"Result-driven marketing solutions designed to boost your visibility and generate real leads.",
descriptionAr:
"استراتيجيات تسويقية وحلول براندنج لتوسيع حضورك بالسوق.",
icon: "/assets/marketing-services.svg",
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

const [sideServices, setSideServices] = useState(
services.slice(1),
);

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

const handleServiceSwap = (
clickedService: (typeof services)[0],
) => {
const clickedIndex = sideServices.findIndex(
(service) =>
service.title === clickedService.title,
);


if (clickedIndex === -1) return;

const updatedServices = [...sideServices];

updatedServices[clickedIndex] = featuredService;

setFeaturedService(clickedService);

setSideServices(updatedServices);


};

return ( <section
   id="our-services"
   className="relative overflow-hidden bg-[#14263D] py-20 sm:py-24 lg:py-28"
 > <div className="mx-4 rounded-[32px] border border-white/10 bg-[#27354CB2] px-5 py-10 sm:mx-6 sm:px-8 sm:py-12 lg:mx-auto lg:max-w-[1152px] lg:px-10">


    <motion.div
      // initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.div
        variants={itemVariants}
        className="text-center"
      >
        <h2 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[56px]">
          {isArabic
            ? "خدماتنا"
            : "Our Services"}
        </h2>

        <p className="mx-auto mt-5 max-w-[640px] text-sm leading-[1.7] text-white/55 sm:text-base">
          {isArabic
            ? "نقدم خدمات قانونية وتجارية متخصصة لدعم الشركات الطموحة داخل المملكة العربية السعودية."
            : "We provide hyper-specialized legal services for ambitious businesses entering Saudi Arabia."}
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        className="mt-14 grid gap-6 lg:grid-cols-[1.5fr_1fr]"
      >
        {/* Featured Card */}
        <motion.div
          variants={itemVariants}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-[#B4C5FF]
            bg-[#10233D]
            px-6
            py-10
            sm:px-10
            sm:py-12
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={featuredService.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                flex
                min-h-[320px]
                flex-col
                items-center
                justify-center
                text-center
              "
            >
              {/* Icon */}
              <div className="flex h-[120px] w-[120px] items-center justify-center">
                <Image
                  src={featuredService.icon}
                  alt={featuredService.title}
                  width={100}
                  height={100}
                  className="h-auto"
                />
              </div>

              {/* Title */}
              <h3 className="mt-8 text-3xl font-bold leading-[1.1] text-white sm:text-4xl lg:text-[52px]">
                {isArabic
                  ? featuredService.titleAr
                  : featuredService.title}
              </h3>

              {/* Description */}
              <p className="mt-5 max-w-[520px] text-sm leading-[1.7] text-white/60 sm:text-base">
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
          className="flex flex-col gap-4"
        >
          {sideServices.map((service) => (
            <motion.button
              key={service.title}
              variants={itemVariants}
              whileHover={{
                y: -2,
                backgroundColor: "#31425D",
              }}
              whileTap={{
                scale: 0.98,
              }}
              onClick={() =>
                handleServiceSwap(service)
              }
              className="
                flex
                h-[82px]
                items-center
                gap-4
                rounded-[18px]
                border
                border-white/10
                bg-[#27354CB2]
                px-5
                text-left
                transition-all
                duration-300
              "
            >
              {/* Small Icon */}
              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={28}
                  height={28}
                />
              </div>

              {/* Title */}
              <span className="text-xl font-semibold text-white lg:text-[26px]">
                {isArabic
                  ? service.titleAr
                  : service.title}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Buttons */}
      <motion.div
        variants={containerVariants}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
      >
        {/* Primary */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href={`/${locale}/contact-us`}
            className="
              flex
              h-[58px]
              w-full
              min-w-[320px]
              items-center
              justify-center
              rounded-[14px]
              bg-[#0F223D]
              px-8
              text-sm
              font-bold
              text-white
            "
          >
            {isArabic
              ? "ابدأ شركتك"
              : "Start Your Company"}
          </Link>
        </motion.div>

        {/* Secondary */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href={`/${locale}/projects`}
            className="
              flex
              h-[58px]
              w-full
              min-w-[320px]
              items-center
              justify-center
              rounded-[14px]
              border
              border-white/10
              bg-transparent
              px-8
              text-sm
              font-semibold
              text-white/80
              transition-all
              duration-300
              hover:border-white/20
              hover:bg-white/5
              hover:text-white
            "
          >
            {isArabic
              ? "عرض المشاريع"
              : "View Projects"}
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</section>


);
}
