import { MessageCircle, KeyRound, Reply, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Auto-welcome messages',
    desc: 'Greet new followers instantly and guide them to your offers or content.'
  },
  {
    icon: KeyRound,
    title: 'Smart keyword triggers',
    desc: 'Launch sequences when users DM specific keywords like “pricing” or “help”.'
  },
  {
    icon: Reply,
    title: 'Personalized replies',
    desc: 'Use variables and conditions to tailor responses that feel human.'
  },
  {
    icon: BarChart3,
    title: 'Analytics dashboard',
    desc: 'Track open rates, replies, conversions, and top-performing campaigns.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Powerful features. Simple setup.</h2>
          <p className="mt-3 text-white/70">Everything you need to turn conversations into conversions — without the busywork.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-fuchsia-500/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-600 text-white shadow-lg shadow-fuchsia-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
