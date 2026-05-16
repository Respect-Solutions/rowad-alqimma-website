"use client";

import { useLocale } from "@/hooks/useLocale";

export function MarketArchitectureBanner() {
  const { isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] px-6 py-10">
      <div className="mx-auto max-w-[1152px] rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,#23395B_0%,#1D304A_100%)] px-8 py-10 text-center">
        
        <h2 className="text-[32px] font-bold leading-[1.2] text-white">
          {isArabic ? (
            <>
              دخول السوق السعودي يعتمد على بنية تنظيمية
              <br />
              متعددة المستويات، ويتطلب أكثر من مجرد وكيل محلي.
            </>
          ) : (
            <>
              Saudi market entry is a multi layered regulatory architecture.
              <br />
              Navigating it requires more than a local agent.
            </>
          )}
        </h2>

        <p className="mx-auto mt-5 max-w-[1050px] text-base leading-[1.8] text-white/55">
          {isArabic
            ? "العديد من الشركات العالمية تتعثر بسبب تعدد الجهات الاستشارية. نحن نقدم نهجًا موحدًا من خلال نظام Command Center لإدارة التأسيس المؤسسي بالكامل."
            : "Global firms often falter due to fragmented advisory. We provide a single, unified Command Center approach to institutional setup."}
        </p>
      </div>
    </section>
  );
}
