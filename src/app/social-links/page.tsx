"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSnapchat,
  FaWhatsapp,
} from "react-icons/fa";

import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaGlobe,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { IconImage } from "@/components/ui/IconImage";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
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
      ease: "easeOut",
    },
  },
};

const socials = [
  {
    title: "WhatsApp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/966553768622",
    primary: true,
  },

  {
    title: "Instagram",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/rowadalqimmaa?igsh=YjFkZjJvdTUwbm5s",
  },

  {
    title: "Facebook",
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/share/18aWrmRnDH/",
  },

  {
    title: "LinkedIn",
    icon: <FaLinkedinIn />,
    href: "https://linkedin.com/company/rowad-al-qimma",
  },

  {
    title: "X (Twitter)",
    icon: <FaXTwitter />,
    href: "https://x.com/Rowadalqimmaa",
  },

  {
    title: "TikTok",
    icon: <FaTiktok />,
    href: "https://www.tiktok.com/@rowadalqimma",
  },

  {
    title: "Snapchat",
    icon: <FaSnapchat />,
    href: "https://www.snapchat.com/add/rowadrlqimmaa?share_id=IpvW_LbkMGQ&locale=en-US",
  },

  {
    title: "Email",
    icon: <FaEnvelope />,
    href: "mailto:rowadelqima@gmail.com",
  },
];

export default function SocialLinksPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#14263D]">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#4F78FF]/10 blur-[140px]" />

        <div className="absolute bottom-[-550px] left-1/2 h-[1200px] w-[1500px] -translate-x-1/2 rounded-full border-t-[120px] border-[#B4C5FF]/30 blur-[80px]" />
      </div>

      {/* Header */}

      <div className="relative z-20 mx-auto flex max-w-[1152px] items-center justify-between px-6 py-8">
        <Link
          href="/"
          className="flex items-center gap-3 transition duration-300 hover:opacity-90"
        >
          <IconImage name="logoAbout" width={42} height={42} />

          <h2 className="text-2xl font-bold text-white">Rowad Al Qimma</h2>
        </Link>

        <Link
          href="/"
          className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white transition hover:bg-white/10"
        >
          Visit Website
        </Link>
      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto flex max-w-[720px] flex-col px-6 pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mt-10 text-center">
            <h1 className="text-5xl font-bold text-white">Connect With Us</h1>

            <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-white/60">
              Follow Rowad Al Qimma through our official channels or contact us
              directly.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="mt-14 flex flex-col gap-5"
          >
            {socials.map((social) => (
              <motion.a
                key={social.title}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group
                  flex
                  items-center
                  justify-between
                  rounded-[24px]
                  border
                  px-6
                  py-5
                  backdrop-blur-xl
                  transition-all
                  duration-300

                  ${
                    social.primary
                      ? "border-[#B9C7E4]/40 bg-[#B9C7E4]/10"
                      : "border-white/10 bg-white/[0.04]"
                  }

                  hover:border-[#B9C7E4]/50
                  hover:bg-white/[0.08]
                `}
              >
                <div className="flex items-center gap-5">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      text-[22px]
                      text-white
                    "
                  >
                    {social.icon}
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      {social.title}
                    </h2>

                    <p className="mt-1 text-sm text-white/45">
                      Official {social.title}
                    </p>
                  </div>
                </div>

                <FaArrowUpRightFromSquare
                  className="
                    text-lg
                    text-white/40
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    group-hover:text-white
                  "
                />
              </motion.a>
            ))}

            {/* Website Button */}

            <motion.div variants={itemVariants} className="mt-8">
              <Link
                href="/"
                className="
                  flex
                  h-[64px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[20px]
                  bg-white
                  text-lg
                  font-bold
                  text-[#14263D]
                  transition
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-xl
                "
              >
                <FaGlobe />
                Visit Our Website
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Glow */}

      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [-8, 8, -8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[20%]
          h-40
          w-40
          rounded-full
          bg-[#8FA8FF]/10
          blur-[120px]
        "
      />

      <motion.div
        animate={{
          y: [20, -20, 20],
          x: [8, -8, 8],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          left-[8%]
          h-44
          w-44
          rounded-full
          bg-[#4D79FF]/10
          blur-[140px]
        "
      />
    </main>
  );
}