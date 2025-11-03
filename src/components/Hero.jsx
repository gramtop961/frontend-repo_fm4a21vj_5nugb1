import { Play, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-indigo-500/20 to-cyan-500/20" aria-hidden="true" />
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-fuchsia-500 to-indigo-500 blur-3xl opacity-30" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 blur-3xl opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-24 md:pt-12 lg:pt-16 lg:pb-28">
        <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-2 text-white">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 shadow-lg shadow-fuchsia-500/20">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">AutoDM</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how-it-works" className="hover:text-white transition">How it works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#testimonials" className="hover:text-white transition">Social proof</a>
          </div>
          <div className="hidden md:block">
            <a href="#pricing" className="rounded-xl bg-white text-gray-900 px-4 py-2 text-sm font-medium shadow-sm hover:shadow-lg transition-all">Start Free</a>
          </div>
        </nav>

        <div className="mx-auto mt-14 max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Automate Your Instagram DMs.
            <span className="block bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">Grow While You Sleep.</span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Convert followers to customers with smart, personalized DM automation. Welcome new followers, answer FAQs, and trigger campaigns — all on autopilot.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-600 px-6 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20 transition hover:from-fuchsia-400 hover:to-indigo-500"
            >
              Start Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white font-medium backdrop-blur-md transition hover:bg-white/10"
            >
              <Play className="mr-2 h-4 w-4" /> Watch Demo
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 opacity-90 sm:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-white/80">No code setup</div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-white/80">24/7 automations</div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-white/80">Safe & compliant</div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-white/80">Cancel anytime</div>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-md">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-fuchsia-500/10 via-transparent to-cyan-500/10" />
            <img
              src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1600&auto=format&fit=crop"
              alt="Inbox automation preview"
              className="h-full w-full object-cover opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
