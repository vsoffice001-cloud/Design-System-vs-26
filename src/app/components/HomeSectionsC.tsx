import { Calendar, Star, Quote, Bell, Mail, MapPin } from "lucide-react";
import { IndustryBadge } from "./molecules";
import { upcomingReports } from "./data";
import { useState } from "react";
import { iconColors } from "./iconColors";
import { Button } from "./Button";
import { SectionHeading } from "./SectionHeading";
import { InlineLink } from "./InlineLink";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./Card";
import { IconBadge } from "./IconBadge";

import logoAdidas from "figma:asset/eb66352c183d8f9a1ef5f4756319cb131b68e656.png";
import logoBMW from "figma:asset/59953b104ee437e2b40c594a63747b9b4e40c3f3.png";
import logoFlipkart from "figma:asset/eb77ec380e95e3f0b824c822166c1e25a2c92631.png";
import logoSamsung from "figma:asset/bad19127b45e3248aa2b0db9af3a98bcc3617113.png";
import logoLogitech from "figma:asset/09a289ea3dba1f60f9efee3df897d5b9a3142bcd.png";
import logoBosch from "figma:asset/9fb3a750f36f8d99a7b3b2a07724c3583569ea3b.png";
import logoPwC from "figma:asset/a1d675ecb2c1e531b827d67b03e1fe077d45b2ad.png";
import logoCocaCola from "figma:asset/b99af8e0d4639728a48526d0b526184b808946a4.png";
import logoCisco from "figma:asset/76ee27ef253484ce984d0997b96bc92c01d2de56.png";
import logoDeloitte from "figma:asset/9c2d346a0db9e0956dedff77647197faa857bdc4.png";

/* ─── 15. Testimonials ─── */
export function Testimonials() {
  const testimonials = [
    { name: "Rajesh Kumar", role: "VP Strategy", company: "Reliance Industries", text: "Ken Research's healthcare reports have been instrumental in our strategic planning. The depth of analysis and accuracy of projections are unmatched in the industry.", rating: 5 },
    { name: "Sarah Al-Mazrouei", role: "Head of Research", company: "ADNOC", text: "We rely on Ken Research for our energy sector intelligence. Their GCC coverage is the most comprehensive available in the market today.", rating: 5 },
    { name: "David Chen", role: "Partner", company: "McKinsey & Company", text: "The data quality and timeliness of Ken Research reports consistently exceed our expectations. A trusted resource for our consulting engagements.", rating: 5 },
  ];

  const trustLogos: { name: string; src: string; height: string }[] = [
    { name: "Adidas", src: logoAdidas, height: "28px" },
    { name: "BMW", src: logoBMW, height: "36px" },
    { name: "Flipkart", src: logoFlipkart, height: "24px" },
    { name: "Samsung", src: logoSamsung, height: "22px" },
    { name: "Logitech", src: logoLogitech, height: "20px" },
    { name: "Bosch", src: logoBosch, height: "26px" },
    { name: "PwC", src: logoPwC, height: "28px" },
    { name: "Coca-Cola", src: logoCocaCola, height: "24px" },
    { name: "Cisco", src: logoCisco, height: "30px" },
    { name: "Deloitte", src: logoDeloitte, height: "22px" },
  ];

  // Duplicate logos for seamless loop
  const marqueeLogos = [...trustLogos, ...trustLogos];

  return (
    <div>
      {/* Section heading — centered, editorial serif */}
      <div className="mb-8 md:mb-10 text-center">
        <div className="flex items-center justify-center">
          <div className="max-w-lg">
            <h2
              className="leading-[1.15] tracking-tight"
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 'var(--font-weight-light)' as any,
                fontSize: "clamp(1.25rem, 3.5vw, var(--text-2xl))",
              }}
            >
              Trusted by Industry Leaders
            </h2>
            <p
              className="text-black/50 mt-3 leading-[1.7] mx-auto"
              style={{ fontSize: "var(--text-sm)" }}
            >
              Join 50,000+ professionals who rely on our research for strategic decision-making
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial cards — white on warm bg */}
      <div className="grid md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <Card
            key={i}
            hover
            className="relative flex flex-col"
            style={{ padding: '16px' }}
          >
            <Quote
              className="h-6 w-6 absolute top-4 right-4"
              style={{ color: "var(--black-200)" }}
            />
            <div className="flex gap-0.5 mb-2.5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star
                  key={j}
                  className="h-3.5 w-3.5"
                  style={{ color: "var(--amber-500)", fill: "var(--amber-500)" }}
                />
              ))}
            </div>
            <p
              className="text-black/60 mb-5 leading-relaxed flex-1"
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "var(--text-nav)",
              }}
            >
              &ldquo;{t.text}&rdquo;
            </p>
            <div
              className="flex items-center gap-3 pt-3 mt-auto"
              style={{ borderTop: "1px solid var(--black-200)" }}
            >
              <div
                className="w-9 h-9 rounded-full text-black/50 flex items-center justify-center flex-shrink-0"
                style={{
                  fontSize: "var(--text-xs)",
                  background: "var(--warm-300)",
                  border: "1px solid var(--warm-500)",
                }}
              >
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="min-w-0">
                <p
                  className="text-black/80 truncate"
                  style={{ fontSize: "var(--text-nav)" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-black/40 truncate"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Trust logos bar */}
      <div
        className="mt-10 pt-8 flex flex-col items-center gap-5"
        style={{ borderTop: "1px solid var(--black-200)" }}
      >
        <span
          className="uppercase tracking-widest text-black/25"
          style={{ fontSize: "var(--badge-xs-font)", letterSpacing: "2.5px" }}
        >
          Trusted by leading organizations worldwide
        </span>
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div
            className="flex items-center gap-x-12 w-max animate-[marquee_25s_linear_infinite]"
            style={{ willChange: 'transform' }}
          >
            {marqueeLogos.map((logo, i) => (
            <span
              key={`${logo.name}-${i}`}
              className="inline-flex items-center select-none whitespace-nowrap grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                style={{ height: logo.height, width: 'auto', mixBlendMode: 'multiply' }}
                draggable={false}
              />
            </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 16. Upcoming Reports ─── */
export function UpcomingReportsSection() {
  return (
    <div>
      <SectionHeading
        title="Upcoming Reports"
        subtitle="Pre-register for early access and priority notifications"
        action={{ text: "View All Upcoming" }}
      />

      <Card className="overflow-hidden">
        {upcomingReports.map((r, i) => (
          <div
            key={i}
            className="group transition-colors hover:bg-black/[0.015]"
            style={{ borderBottom: i < upcomingReports.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}
          >
            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5">
              <IconBadge
                icon={Calendar}
                tint="var(--warm-300)"
                iconColor={iconColors.utility}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-black/80 group-hover:text-black transition-colors leading-snug" style={{ fontSize: 'var(--text-nav)' }}>
                      {r.title}
                    </h4>
                  </div>
                  <div className="hidden sm:block flex-shrink-0">
                    <Button variant="secondary" size="sm" icon={<Bell />} iconPosition="left">
                      Notify Me
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 mt-2 flex-wrap" style={{ fontSize: 'var(--text-xs)' }}>
                  <IndustryBadge>{r.industry}</IndustryBadge>
                  <span className="text-black/40 flex items-center gap-1">
                    <MapPin className="h-3 w-3" color={iconColors.utility} />{r.region}
                  </span>
                  <span className="hidden sm:inline text-black/15">|</span>
                  <span className="text-black/50" style={{ fontSize: 'var(--text-xs)' }}>{r.expected.replace(/\s\d{1,2},/, '')}</span>
                </div>
                {/* Mobile: Notify Me button below meta */}
                <div className="flex sm:hidden mt-2.5">
                  <Button variant="secondary" size="xs" icon={<Bell />} iconPosition="left">
                    Notify Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

/* ─── 17. Newsletter Signup ─── */
export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return (
    <div>
      <div className="bg-black p-8 md:p-12 relative overflow-hidden" style={{ borderRadius: 'var(--rc-radius-card)' }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px]" style={{ background: 'rgba(128, 108, 224, 0.04)' }} />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="w-12 h-12 bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mx-auto mb-5" style={{ borderRadius: 'var(--rc-radius-card)' }}>
            <Mail className="h-5 w-5" color={iconColors.content} />
          </div>
          <h2 className="text-white mb-2 leading-[1.15] tracking-tight" style={{ fontFamily: 'var(--font-serif)', fontWeight: 'var(--font-weight-light)' as any, fontSize: 'clamp(1.25rem, 3.5vw, var(--text-2xl))' }}>Stay Ahead of the Market</h2>
          <p className="text-white/50 max-w-md mx-auto mb-8 leading-[1.7]" style={{ fontSize: 'var(--text-sm)' }}>Get weekly market intelligence briefings, new report alerts, and exclusive analyst insights delivered to your inbox.</p>
          {subscribed ? (
            <div className="py-3 px-6 inline-flex items-center gap-2 text-white" style={{ fontSize: 'var(--text-nav)', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: 'var(--radius-element)' }}>
              <Star className="h-4 w-4" /> Successfully subscribed. Check your inbox.
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your business email"
                aria-label="Business email address for newsletter subscription"
                className="flex-1 px-4 py-3 bg-white/[0.06] border border-white/[0.08] text-white placeholder:text-white/30 focus:outline-none focus:border-white/20 transition-all"
                style={{ fontSize: 'var(--text-nav)', borderRadius: 'var(--radius-element)' }}
              />
              <Button
                variant="brand"
                size="md"
                background="dark"
                onClick={() => { if (email.includes("@")) setSubscribed(true); }}
              >
                Subscribe
              </Button>
            </div>
          )}
          <p className="text-white/20 mt-4" style={{ fontSize: 'var(--text-xs)' }}>No spam. <InlineLink onDark>Unsubscribe</InlineLink> anytime. Join 50,000+ subscribers.</p>
        </div>
      </div>
    </div>
  );
}
