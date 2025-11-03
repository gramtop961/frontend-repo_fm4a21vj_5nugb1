import { Check, Star } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    highlight: 'Perfect to try',
    features: [
      '500 automated messages',
      '2 keyword triggers',
      'Basic analytics',
      'Email support'
    ],
    cta: 'Start Free'
  },
  {
    name: 'Pro',
    price: '$39',
    period: '/mo',
    highlight: 'Most popular',
    features: [
      'Unlimited messages',
      'Advanced keyword logic',
      'Full analytics + exports',
      'Priority support'
    ],
    cta: 'Start 14‑day Trial',
    featured: true
  }
];

const testimonials = [
  {
    name: 'Ava Martinez',
    role: 'Creator @ava.fit',
    quote:
      'I added 27% more sales in two weeks. The keyword flows respond faster than I ever could.',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Noah Patel',
    role: 'Ecom founder',
    quote: 'Support DMs dropped by 60% and our response time is instant. Fans love it.',
    avatar:
      'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop'
  },
  {
    name: 'Mia Chen',
    role: 'Agency owner',
    quote: 'Set it up in under 10 minutes. The analytics help us optimize campaigns weekly.',
    avatar:
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=200&auto=format&fit=crop'
  }
];

export default function PricingAndSocialProof() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple pricing that scales with you</h2>
          <p className="mt-3 text-white/70">Start free, upgrade when you grow. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 transition ${
                tier.featured
                  ? 'border-fuchsia-400/30 bg-gradient-to-br from-white/10 to-white/5 shadow-xl'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-600 px-3 py-1 text-xs font-medium text-white shadow-lg">
                  Most Popular
                </span>
              )}
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
                  <p className="mt-1 text-sm text-white/70">{tier.highlight}</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-white/70">{tier.period}</span>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                    <Check className="mt-0.5 h-4 w-4 text-cyan-300" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a
                  href="#signup"
                  className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-medium shadow-lg transition ${
                    tier.featured
                      ? 'bg-gradient-to-r from-fuchsia-500 to-indigo-600 text-white hover:from-fuchsia-400 hover:to-indigo-500'
                      : 'bg-white text-gray-900 hover:shadow-xl'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div id="testimonials" className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-semibold text-white">Loved by creators and brands</h3>
            <p className="mt-2 text-white/70">Here’s what our customers say</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <figcaption className="text-sm font-medium text-white">{t.name}</figcaption>
                    <div className="text-xs text-white/60">{t.role}</div>
                  </div>
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-white/80">
                  <Star className="mb-2 inline h-4 w-4 fill-yellow-400 text-yellow-400" /> {t.quote}
                </blockquote>
              </figure>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 opacity-80">
            <img src="https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxicmFuZHxlbnwwfDB8fHwxNzYyMTQ3ODMyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="brand" className="h-6" />
            <img src="https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxicmFuZHxlbnwwfDB8fHwxNzYyMTQ3ODMyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="brand" className="h-6" />
            <img src="https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxicmFuZHxlbnwwfDB8fHwxNzYyMTQ3ODMyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="brand" className="h-6" />
            <img src="https://images.unsplash.com/photo-1508599589920-14cfa1c1fe4d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxicmFuZHxlbnwwfDB8fHwxNzYyMTQ3ODMyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="brand" className="h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
