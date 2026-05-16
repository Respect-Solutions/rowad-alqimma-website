"use client";

import { useLocale } from "@/hooks/useLocale";

export function ContactSection() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] px-6 py-24">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        
        {/* Left Side */}
        <div
          className={`rounded-[32px] bg-[#27354CB2] p-10 backdrop-blur-[4px] ${
            isArabic ? "text-right" : ""
          }`}
        >
          
          {/* Heading */}
          <div>
            <h2 className="text-[42px] font-bold leading-none text-white">
              {isArabic
                ? "استفسار استراتيجي"
                : "Strategic Inquiry"}
            </h2>

            <p className="mt-4 text-lg text-white/45">
              {isArabic
                ? "نموذج تواصل سري لفريقنا الاستشاري التنفيذي."
                : "Confidential brief for our executive consulting team."}
            </p>
          </div>

          {/* Form */}
          <form className="mt-12">
            
            {/* Full Name */}
            <div>
              <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                {isArabic
                  ? "الاسم الكامل"
                  : "Full Name"}
              </label>

              <input
                type="text"
                placeholder={
                  isArabic
                    ? "خالد بن أحمد"
                    : "Khalid Bin Ahmed"
                }
                className={`h-[68px] w-full rounded-[16px] border border-[#B9C7E4]/40 bg-[#43516A] px-6 text-white placeholder:text-white/30 outline-none transition focus:border-[#B9C7E4] ${
                  isArabic ? "text-right" : ""
                }`}
              />
            </div>

            {/* Row */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              
              {/* Company */}
              <div>
                <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                  {isArabic
                    ? "الشركة"
                    : "Company"}
                </label>

                <input
                  type="text"
                  placeholder={
                    isArabic
                      ? "الشركة العالمية"
                      : "Global Corp"
                  }
                  className={`h-[68px] w-full rounded-[16px] border border-[#B9C7E4]/40 bg-[#43516A] px-6 text-white placeholder:text-white/30 outline-none transition focus:border-[#B9C7E4] ${
                    isArabic ? "text-right" : ""
                  }`}
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                  {isArabic
                    ? "البريد الإلكتروني"
                    : "Email Address"}
                </label>

                <input
                  type="email"
                  placeholder="k.ahmed@corp.com"
                  className={`h-[68px] w-full rounded-[16px] border border-[#B9C7E4]/40 bg-[#43516A] px-6 text-white placeholder:text-white/30 outline-none transition focus:border-[#B9C7E4] ${
                    isArabic ? "text-right" : ""
                  }`}
                />
              </div>
            </div>

            {/* Textarea */}
            <div className="mt-6">
              <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                {isArabic
                  ? "رؤيتك الاستراتيجية"
                  : "Your Strategic Vision"}
              </label>

              <textarea
                placeholder={
                  isArabic
                    ? "صف أهدافك لدخول السوق أو خطط النمو الخاصة بك..."
                    : "Describe your market entry or growth objectives..."
                }
                className={`h-[180px] w-full resize-none rounded-[16px] border border-[#B9C7E4]/40 bg-[#43516A] px-6 py-5 text-white placeholder:text-white/30 outline-none transition focus:border-[#B9C7E4] ${
                  isArabic ? "text-right" : ""
                }`}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-8 flex h-[68px] w-full items-center justify-center rounded-[16px] bg-[#C9D6FF] text-sm font-bold uppercase tracking-[0.08em] text-[#14263D] transition duration-300 hover:bg-[#dbe4ff]"
            >
              {isArabic
                ? "إرسال الطلب"
                : "Transmit Inquiry"}
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className={isArabic ? "text-right" : ""}>
          
          {/* Headquarters */}
          <div>
            <h3 className="text-[42px] font-bold text-white">
              {isArabic
                ? "المقر الرئيسي - الرياض"
                : "Riyadh Headquarters"}
            </h3>

            <div className="mt-10 flex flex-col gap-5">
              
              {/* Address */}
              <div
                className={`flex items-start gap-5 ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
              >
                <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.03] text-white">
                  📍
                </div>

                <p className="max-w-[320px] text-lg leading-[1.6] text-white/80">
                  {isArabic
                    ? "مركز الفيصلية، طريق الملك فهد، العليا، الرياض 12212، المملكة العربية السعودية"
                    : "Al Faisaliyah Center, King Fahd Rd, Olaya, Riyadh 12212, Saudi Arabia"}
                </p>
              </div>

              {/* Phone */}
              <div
                className={`flex items-center gap-5 ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
              >
                <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.03] text-white">
                  ☎
                </div>

                <p className="text-lg text-white/80">
                  +966 11 000 0000
                </p>
              </div>

              {/* Email */}
              <div
                className={`flex items-center gap-5 ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
              >
                <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.03] text-white">
                  ✉
                </div>

                <p className="text-lg text-white/80">
                  executive@al-sultan.sa
                </p>
              </div>
            </div>
          </div>

          {/* Global Reach */}
          <div className="mt-20">
            <h3 className="text-[42px] font-bold text-white">
              {isArabic
                ? "الانتشار العالمي"
                : "Global Reach"}
            </h3>

            <div className="mt-8 flex flex-col gap-6">
              
              {/* Dubai */}
              <div className="rounded-[28px] border border-white/10 bg-[#27354CB2] px-8 py-8 backdrop-blur-[4px]">
                <h4 className="text-[28px] font-bold text-white">
                  {isArabic
                    ? "مكتب دبي"
                    : "Dubai Satellite"}
                </h4>

                <p className="mt-4 text-lg text-white/45">
                  {isArabic
                    ? "مركز دبي المالي العالمي، المستوى 15، الإمارات"
                    : "DIFC Gate Avenue, Level 15, UAE"}
                </p>
              </div>

              {/* London */}
              <div className="rounded-[28px] border border-white/10 bg-[#27354CB2] px-8 py-8 backdrop-blur-[4px]">
                <h4 className="text-[28px] font-bold text-white">
                  {isArabic
                    ? "مكتب لندن"
                    : "London Office"}
                </h4>

                <p className="mt-4 text-lg text-white/45">
                  {isArabic
                    ? "مايفير الاستراتيجي، شارع كورزون، لندن"
                    : "Mayfair Strategic Hub, Curzon St, W1J 7GB"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
