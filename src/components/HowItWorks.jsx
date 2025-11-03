import { Link, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Link,
    title: 'Connect your Instagram',
    desc: 'Securely link your account in minutes and choose your inbox rules.'
  },
  {
    icon: Settings,
    title: 'Set your automations',
    desc: 'Pick templates or build flows with keyword triggers and conditions.'
  },
  {
    icon: Rocket,
    title: 'Engage automatically',
    desc: 'Your DMs run on autopilot — reply, route, and convert 24/7.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From zero to auto in 3 steps</h2>
          <p className="mt-3 text-white/70">No code. No hassle. Just set and grow.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="absolute -top-5 left-6 h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-600 p-2 text-white shadow-lg shadow-fuchsia-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
