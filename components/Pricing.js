"use client";

const plans = [
  {
    name: "Starter",
    desc: "Get started with the essentials",
    price: "Free",
    priceSuffix: "forever",
    cta: "Get Started",
    ctaStyle: "bg-[#1e1e30] hover:bg-[#2a2a40] text-white border border-white/10",
    popular: false,
    cardStyle: "bg-[#0e0e1a] border border-white/5",
    features: [
      "Up to 10 uploads",
      "Basic analytics",
      "NFC product page",
      "Community access",
      "Standard payouts",
    ],
  },
  {
    name: "Pro",
    desc: "Everything you need to grow",
    price: "$19",
    priceSuffix: "/month",
    cta: "Start Free Trial",
    ctaStyle: "bg-blue-600 hover:bg-blue-500 text-white",
    popular: true,
    cardStyle: "bg-[#111a2e] border border-blue-500/30",
    features: [
      "Unlimited uploads",
      "Advanced analytics",
      "Custom NFC products",
      "Priority support",
      "Instant payouts",
      "Event creation",
      "Merch storefront",
      "Fan subscriptions",
    ],
  },
  {
    name: "Enterprise",
    desc: "For labels and large creators",
    price: "Custom",
    priceSuffix: null,
    cta: "Talk to Sales",
    ctaStyle: "bg-[#1e1e30] hover:bg-[#2a2a40] text-white border border-white/10",
    popular: false,
    cardStyle: "bg-[#0e0e1a] border border-white/5",
    features: [
      "Everything in Pro",
      "Dedicated manager",
      "White-label NFC",
      "API access",
      "Custom integrations",
      "Bulk NFC orders",
      "Advanced reporting",
    ],
  },
];

function Check() {
  return (
    <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <div className="bg-[#08080f] py-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="border border-white/15 text-white/50 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
            PRICING
          </span>
          <h2 className="text-4xl font-extrabold text-white leading-tight mb-1">
            Simple, transparent
          </h2>
          <h2 className="text-4xl font-extrabold text-blue-400 leading-tight mb-5">
            pricing for creators.
          </h2>
          <p className="text-white/35 text-sm max-w-md leading-relaxed">
            No hidden fees. No long-term contracts. Artists keep 70% of every transaction — the highest split in the industry.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4 items-start">
          {plans.map((plan) => (
            <div key={plan.name} className="relative">
              {/* Most Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className={`rounded-2xl p-6 ${plan.cardStyle} ${plan.popular ? "pt-8" : ""}`}>
                {/* Plan name */}
                <p className="text-white text-sm font-semibold mb-0.5">{plan.name}</p>
                <p className="text-white/35 text-xs mb-5">{plan.desc}</p>

                {/* Price */}
                <div className="mb-6">
                  {plan.name === "Enterprise" ? (
                    <span className="text-white text-4xl font-extrabold">{plan.price}</span>
                  ) : plan.name === "Starter" ? (
                    <span className="text-white text-4xl font-extrabold">
                      {plan.price}
                      <span className="text-white/35 text-sm font-normal ml-1">{plan.priceSuffix}</span>
                    </span>
                  ) : (
                    <span className="text-white text-4xl font-extrabold">
                      {plan.price}
                      <span className="text-white/50 text-sm font-normal ml-0.5">{plan.priceSuffix}</span>
                    </span>
                  )}
                </div>

                {/* CTA */}
                <button className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-colors mb-6 ${plan.ctaStyle}`}>
                  {plan.cta}
                </button>

                {/* Features */}
                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check />
                      <span className="text-white/55 text-xs">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-white/35 text-xs mt-8">
          All plans include the industry-leading{" "}
          <span className="text-white font-semibold">70/30 artist-first revenue split</span>
          {" "}— you keep more of what you earn.
        </p>

      </div>
    </div>
  );
}



