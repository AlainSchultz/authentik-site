import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  Flame,
  Droplets,
  Wind,
  ArrowRight,
  PauseCircle,
  Zap,
  ShieldAlert,
  Menu,
  X,
  Instagram,
  Linkedin,
  Newspaper,
  ChevronRight
} from 'lucide-react';

const NAVIGATION = [
  { name: 'Le Concept', href: '#concept' },
  { name: 'Les Reflets', href: '#reflets' },
  { name: "L'Équipe", href: '#equipe' },
  { name: 'FAQ', href: '#faq' },
];

const REFLETS = [
  {
    pole: "Pôle de l'Ancrage",
    title: "Le Musée de Soi",
    desc: "Vous gérez vos proches comme des dossiers. Vos épaules et vos mâchoires sont serrées par un devoir qui ne vous appartient plus. Vous polissez les vitrines de votre empire pour ne pas voir que le feu s'est éteint.",
    symptoms: ["Nostalgie stratégique (victoires passées)", "Agitation anesthésiante en réunion", "Peur d'égratigner la statue parfaite"],
    icon: <PauseCircle className="w-8 h-8 text-indigo-400" />,
    color: "from-indigo-500/20 to-indigo-500/0"
  },
  {
    pole: "Pôle de l'Expansion",
    title: "L'Escalade Infinie",
    desc: "Le sommet n'existe pas. Vous courez pour mériter une vie que vous pourriez choisir aujourd'hui. Votre foyer est propre et efficace, mais l'émotion est restée sur la ligne de départ. S'arrêter, c'est mourir.",
    symptoms: ["Addiction à la validation externe", "Hyper-planification pour fuir le silence", "Exigence toxique envers l'entourage"],
    icon: <Zap className="w-8 h-8 text-orange-400" />,
    color: "from-orange-500/20 to-orange-500/0"
  },
  {
    pole: "Pôle de l'Essence",
    title: "La Tour d'Ivoire",
    desc: "L'excellence invisible. Vous avez bâti un chef-d'œuvre mais vous êtes seul dans la galerie. Vous fuyez dès que l'engagement ressemble à une prison. Vous êtes libre de tout, mais vous n'appartenez plus à rien.",
    symptoms: ["Nomadisme de projets sans racines", "Perfectionnisme comme forme de peur", "Instabilité émotionnelle pour les proches"],
    icon: <ShieldAlert className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500/20 to-purple-500/0"
  }
];

const ARCHETYPES = [
  { name: "Architecte", icon: "🏛️" },
  { name: "Virtuose", icon: "🎻" },
  { name: "Héritier", icon: "👑" },
  { name: "Exécutant", icon: "⚙️" },
  { name: "Pèlerin", icon: "🚶" },
  { name: "Conquérant", icon: "🏹" }
];

const STEPS = [
  {
    number: "01",
    title: "Diagnostic Intérieur",
    desc: "À travers le Quiz des 6 Archétypes, identifiez votre schéma d'apnée et vos forces souterraines."
  },
  {
    number: "02",
    title: "Confrontation Bienveillante",
    desc: "Des conversations Authentik qui réveillent la conscience, brisent les illusions et reconnectent à l'essentiel."
  },
  {
    number: "03",
    title: "Réinvention Éclairée",
    desc: "Un accompagnement sur mesure pour réaligner vision, décisions et mode de vie avec votre vérité."
  }
];

const STATS = [
  { label: "Leaders Transformés", value: 60, suffix: "" },
  { label: "Archétypes Identifiés", value: 6, suffix: "" },
  { label: "Ans d'Expériences", value: 70, suffix: "" },
  { label: "Taux de Clarté", value: 100, suffix: "%" }
];

const FAQ_ITEMS = [
  {
    q: "J'ai déjà tout essayé (coaching, retraites...), pourquoi ce serait différent ?",
    a: "Parce qu'AUTHENTIK n'est pas une accumulation d'outils, mais une expérience de rupture. On ne rajoute rien, on enlève le bruit. Ce n'est pas 'comprendre' pourquoi ça bloque, c'est voir où vous vous auto-illusionnez."
  },
  {
    q: "Je ne veux pas tout foutre en l'air (famille, business...).",
    a: "La transformation n'est pas une destruction. Il ne s'agit pas de brûler votre empire, mais d'y remettre du feu. Vous n'avez pas besoin de tout quitter pour vous retrouver, mais de changer le lieu depuis lequel vous agissez."
  },
  {
    q: "Je n'ai pas le temps, je suis sous l'eau.",
    a: "Si vous n'avez pas le temps de vous arrêter, c'est que vous dérivez déjà. La pause est un acte de puissance. C'est un recalibrage essentiel pour celui qui veut continuer à diriger avec justesse."
  },
  {
    q: "Je ne suis pas très 'émotions' ou 'spirituel'.",
    a: "C'est parfait. Nous non plus. AUTHENTIK est une expérience de lucidité et de clarté stratégique. On ne vous demande pas de vous épancher, mais d'avoir le courage de regarder la vérité en face."
  },
  {
    q: "C'est quoi ce duo Éric & Alain ?",
    a: "C'est l'alchimie du Chaos et du Silence. Éric (le Feu) déstabilise pour libérer l'énergie, Alain (l'Eau) aide à intégrer et ancrer dans la cohérence. La friction entre les deux fait naître la clarté. Grâce au souffle généré par ces 2 éléments."
  }
];

const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const end = value;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, value]);

  return (
    <span ref={setRef} className="tabular-nums italic font-serif">
      {count}{suffix}
    </span>
  );
};

const AccordionItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-widest">{q}</span>
        <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-300 leading-relaxed max-w-3xl font-light">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <Helmet>
      <title>AUTHENTIK — Coaching de Vie pour Dirigeants</title>
      <meta name="description" content="AUTHENTIK accompagne les leaders qui ont tout réussi mais qui ont perdu leur élan vital. 3 séances gratuites ou bilan archétypal personnalisé. Genève · Paris · Montréal." />
      <link rel="canonical" href="https://experience-authentik.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AUTHENTIK" />
      <meta property="og:title" content="AUTHENTIK — Coaching de Vie pour Dirigeants" />
      <meta property="og:description" content="Pour les leaders qui ont tout réussi mais qui ont perdu leur feu. 3 séances gratuites ou bilan archétypal sur mesure." />
      <meta property="og:url" content="https://experience-authentik.com/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AUTHENTIK — Coaching de Vie pour Dirigeants" />
      <meta name="twitter:description" content="Pour les leaders qui ont tout réussi mais qui ont perdu leur feu." />
    </Helmet>
    <div className="min-h-screen selection:bg-orange-500/30 bg-[#020617] text-slate-200">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass border-slate-800/50' : 'py-8 border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-tr from-orange-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform">A</div>
            <span className="text-xl font-bold tracking-tighter text-white">AUTHENTIK</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Link
              to="/traversee"
              className="text-[10px] uppercase tracking-widest text-orange-400 hover:text-orange-300 transition-colors font-bold"
            >
              La Traversée
            </Link>
            <Link
              to="/bilan"
              className="text-[10px] uppercase tracking-widest text-purple-400 hover:text-purple-300 transition-colors font-bold"
            >
              Le Bilan
            </Link>
            <a
              href="mailto:contact@experience-authentik.com"
              className="px-6 py-2 rounded-full border border-cyan-400/30 text-[10px] uppercase tracking-widest text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Dialogue
            </a>
          </div>

          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800"
            >
              <div className="px-6 py-8 flex flex-col gap-6">
                {NAVIGATION.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Link
                  to="/traversee"
                  className="text-lg font-medium text-orange-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  La Traversée
                </Link>
                <Link
                  to="/bilan"
                  className="text-lg font-medium text-purple-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Le Bilan Archétypal
                </Link>
                <a
                  href="mailto:contact@experience-authentik.com"
                  className="w-full py-4 rounded-xl bg-orange-500 text-white font-medium text-center"
                >
                  Ouvrir le Dialogue
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <div className="inline-block px-3 py-1 bg-slate-800 rounded-full text-[10px] font-semibold text-cyan-400 border border-slate-700 w-fit mb-8 uppercase tracking-[0.2em]">
              Réaction Nucléaire Intérieure
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] md:leading-[1.05] tracking-tight text-white uppercase">
              Le sommet est vide. <br />
              <span className="gradient-text tracking-tighter">Réapprenez à vibrer.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl font-light">
              Pour les leaders qui ont tout réussi, mais qui sentent leur feu s&apos;éteindre. Passez de la réussite à une vie réussie par la friction entre le chaos et le silence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/traversee"
                className="px-8 py-5 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-lg shadow-[0_0_30px_rgba(234,88,12,0.3)] hover:scale-105 transition-transform flex items-center justify-center gap-2 group"
              >
                Découvrir la Traversée
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://www.entreprenezvous.com/quizz"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 rounded-2xl bg-slate-800 text-white font-bold border border-slate-700 hover:bg-slate-700 transition-colors uppercase tracking-widest text-[10px] text-center flex items-center justify-center"
              >
                Le Quiz des Archétypes
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:col-span-5 h-[400px] md:h-[600px] relative rounded-3xl overflow-hidden glass p-1 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-orange-500/10 animate-pulse" />
            <div className="w-full h-full rounded-[20px] overflow-hidden bg-slate-900/50 flex items-center justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                  <Wind className="w-96 h-96 text-white stroke-[0.5]" />
                </motion.div>
              </div>
              <div className="relative text-center p-8">
                <h3 className="text-2xl md:text-3xl mb-4 leading-relaxed font-black uppercase text-white tracking-widest">Chaos <span className="text-orange-500">&</span> Silence</h3>
                <div className="flex justify-center gap-4 mt-8">
                  <Droplets className="w-8 h-8 text-cyan-400 animate-bounce" />
                  <Flame className="w-8 h-8 text-orange-400 animate-bounce [animation-delay:200ms]" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mirror (Reflets) Section */}
      <section id="reflets" className="py-32 relative bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-white uppercase italic font-serif">Reconnais-tu ton <span className="gradient-text not-italic">reflet&nbsp;?</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              L&apos;apnée de croissance n&apos;est pas un manque de succès, mais un désalignement de l&apos;élan vital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REFLETS.map((reflet, idx) => (
              <motion.div
                key={reflet.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative p-8 rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden group hover:scale-[1.02] transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${reflet.color} transition-opacity duration-500 opacity-0 group-hover:opacity-100`} />
                <div className="relative z-10">
                  <div className="mb-6">{reflet.icon}</div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2 block">{reflet.pole}</span>
                  <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tighter">{reflet.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed font-light text-xs">{reflet.desc}</p>
                  <div className="space-y-4 pt-6 border-t border-slate-800">
                    <span className="text-[10px] uppercase tracking-widest text-slate-500">Symptômes :</span>
                    {reflet.symptoms.map(s => (
                      <div key={s} className="flex gap-3 text-[10px] text-slate-300">
                        <span className="text-orange-500">•</span>
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Archétypes Grid */}
      <section id="archetypes" className="py-24 overflow-hidden bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 uppercase text-white tracking-tight">Le Quiz des <span className="gradient-text font-serif italic">6 Archétypes.</span></h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto font-light">
            Chaque leader possède ses forces motrices originales. Mais quand ces forces sont déviées, elles deviennent votre propre cage. Identifiez vos profils pour savoir exactement où vous vous cachez.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-6 gap-4 mb-16">
          {ARCHETYPES.map((arch) => (
            <motion.div
              key={arch.name}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center hover:border-cyan-500/30 transition-all cursor-default"
            >
              <span className="text-3xl mb-4 block" role="img" aria-label={arch.name}>{arch.icon}</span>
              <span className="text-[10px] uppercase tracking-widest font-mono text-slate-400">{arch.name}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center text-center">
          <a
            href="https://www.entreprenezvous.com/quizz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-6 rounded-2xl border border-cyan-400/30 text-cyan-400 font-bold uppercase tracking-widest text-xs hover:bg-cyan-400/10 transition-all flex flex-col sm:flex-row items-center gap-3 group"
          >
            <span>Découvrir le reflet de mes forces (Miroir offert)</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* How It Works */}
      <section id="concept" className="py-32 bg-slate-900/30 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block">Processus</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tighter mb-6">
              Une réaction <span className="gradient-text italic font-normal">nucléaire</span>, pas chimique.
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed font-light">
              <span className="text-cyan-400 font-bold uppercase tracking-widest text-[10px] block mb-2">Mutation de l&apos;intérieur</span>
              Une réaction chimique ne modifie que les liaisons de surface. La réaction nucléaire transforme le noyau lui-même. C&apos;est le passage d&apos;une transformation superficielle à une mutation profonde de votre identité de leader.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16 relative">
            <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0" />
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 group text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-900 flex items-center justify-center text-2xl font-bold font-mono text-cyan-400 mb-8 border border-slate-800 group-hover:border-cyan-500 mx-auto transition-all">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter text-white">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed font-light text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Duo / Team */}
      <section id="equipe" className="py-32 bg-[#020617] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl invisible md:visible" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl invisible md:visible" />
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
                  <div className="h-80 rounded-3xl bg-gradient-to-b from-cyan-900/20 to-transparent border border-cyan-500/30 flex flex-col justify-end p-6 overflow-hidden group text-center">
                    <div className="absolute inset-0 bg-cyan-500/10 scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="relative flex flex-col items-center">
                      <div className="w-12 h-12 bg-cyan-600 rounded-full mb-4 flex items-center justify-center text-2xl">💧</div>
                      <h4 className="text-xl font-bold uppercase tracking-tighter text-white">Alain : L&apos;Eau</h4>
                      <span className="text-[10px] text-cyan-400 tracking-[0.3em] font-mono mt-2">LE SILENCE</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 italic px-2 leading-relaxed text-center">"Le silence est le socle de la justesse."</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-4 translate-y-12">
                  <div className="h-80 rounded-3xl bg-gradient-to-b from-orange-900/20 to-transparent border border-orange-500/30 flex flex-col justify-end p-6 overflow-hidden group text-center">
                    <div className="absolute inset-0 bg-orange-500/10 scale-110 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                    <div className="relative flex flex-col items-center">
                      <div className="w-12 h-12 bg-orange-600 rounded-full mb-4 flex items-center justify-center text-2xl">🔥</div>
                      <h4 className="text-xl font-bold uppercase tracking-tighter text-white">Éric : Le Feu</h4>
                      <span className="text-[10px] text-orange-400 tracking-[0.3em] font-mono mt-2">LE MOUVEMENT</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 italic px-2 leading-relaxed text-center">"Faire éclater les murs et ancrer l&apos;invisible."</p>
                </motion.div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight text-white uppercase tracking-tighter">L&apos;alchimie de <span className="gradient-text italic font-normal">deux polarités.</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light italic border-l-2 border-orange-500/30 pl-6">
                "Entre le Chaos et le Silence, il y a le Souffle. C&apos;est là qu&apos;émerge votre clarté."
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Droplets className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-2 uppercase tracking-tighter text-white">Alain — L&apos;Intégration</h5>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">Accueille, comprend et réintègre les prises de conscience dans une cohérence durable. Un ex-exécutant devenu socle d&apos;alignement.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <Flame className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h5 className="font-bold mb-2 uppercase tracking-tighter text-white">Éric — La Confrontation</h5>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">Fait sauter les murs de la zone de confort pour libérer l&apos;énergie de création brute. Un ancien conquérant qui a tout reconstruit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-20 bg-slate-900/20 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center items-center">
          {STATS.map((stat, idx) => (
            <div key={stat.label} className="relative flex flex-col items-center">
              <div className="text-4xl md:text-6xl font-black mb-2 text-white">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-mono">{stat.label}</div>
              {idx < STATS.length - 1 && <div className="hidden md:block absolute -right-6 h-10 w-[1px] bg-slate-800" />}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-[#020617]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white uppercase">Levons les <span className="gradient-text font-sans">derniers voiles.</span></h2>
            <p className="text-slate-500 text-lg font-light">Réponses directes à vos résistances légitimes.</p>
          </div>
          <div className="space-y-2">
            {FAQ_ITEMS.map((item, idx) => (
              <AccordionItem key={idx} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-3xl bg-slate-900/40 border border-slate-800 relative"
            >
              <div className="text-4xl font-serif text-cyan-400 mb-8 opacity-40 italic">"</div>
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 italic text-slate-300">
                Je pensais avoir tout réussi, mais je n&apos;étais que le gardien de mon propre musée. Authentik m&apos;a permis de redevenir l&apos;artiste de mon entreprise.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 border border-slate-800 flex items-center justify-center font-bold text-white">J</div>
                <div>
                  <h6 className="font-bold text-sm tracking-tight text-white">Jean-Marc T.</h6>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Fondateur Groupe Retail</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 rounded-3xl bg-slate-900/40 border border-slate-800 md:mt-24"
            >
              <div className="text-4xl font-serif text-orange-400 mb-8 opacity-40 italic">"</div>
              <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 italic text-slate-300">
                J&apos;avais peur de tout détruire. J&apos;ai découvert que le vrai risque était de continuer à courir après une montagne qui n&apos;était pas la mienne.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-700 border border-slate-800 flex items-center justify-center font-bold text-white">S</div>
                <div>
                  <h6 className="font-bold text-sm tracking-tight text-white">Sophie L.</h6>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">CEO Scale-up Tech</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-40 relative flex items-center justify-center overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full">
          <h2 className="text-4xl md:text-7xl font-black mb-12 leading-tight uppercase text-white tracking-widest">
            Le vivant ne se vend pas, <br />
            <span className="gradient-text font-normal italic">il se reconnaît.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 font-light max-w-2xl mx-auto">
            Si ce que vous avez lu ici a fait vibrer votre signal de justesse, alors un dialogue est possible.
          </p>
          <Link
            to="/traversee"
            className="px-12 py-6 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-orange-500/20 active:scale-95 inline-flex items-center gap-3 uppercase tracking-tighter"
          >
            Découvrir la Traversée
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#020617] border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-tr from-orange-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white text-xl">A</div>
                <span className="text-xl font-bold tracking-tighter text-white">AUTHENTIK</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                Le pont entre la vie réussie et la vie de réussite. Un duo rare pour une transformation nucléaire au service des leaders conscients.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 transition-colors"><Linkedin size={16} /></a>
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 transition-colors"><Instagram size={16} /></a>
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 transition-colors"><Newspaper size={16} /></a>
              </div>
            </div>

            <div className="md:pl-12">
              <h5 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-slate-500 font-mono">Navigation</h5>
              <ul className="space-y-4 text-xs font-light tracking-wide uppercase">
                <li><a href="#concept" className="text-slate-400 hover:text-white transition-colors">L&apos;Expérience</a></li>
                <li><a href="#reflets" className="text-slate-400 hover:text-white transition-colors">Les Reflets</a></li>
                <li><a href="#equipe" className="text-slate-400 hover:text-white transition-colors">Le Duo</a></li>
                <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div className="md:pl-12">
              <h5 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-slate-500 font-mono">TRAVERSÉES</h5>
              <ul className="space-y-4 text-xs font-light tracking-wide uppercase">
                <li><Link to="/traversee" className="text-orange-400 hover:text-orange-300 transition-colors font-bold">La Traversée AUTHENTIK</Link></li>
                <li><Link to="/bilan" className="text-purple-400 hover:text-purple-300 transition-colors font-bold">Le Bilan Archétypal</Link></li>
                <li><a href="https://www.entreprenezvous.com/quizz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Quiz Archétypes</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">L&apos;Immersion Juin 2026</a></li>
              </ul>
            </div>

            <div className="md:pl-12">
              <h5 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-slate-500 font-mono">Dialogue</h5>
              <ul className="space-y-4 text-xs font-light">
                <li className="text-slate-400 uppercase tracking-widest">Genève | Paris | Montréal</li>
                <li className="pt-2"><a href="mailto:contact@experience-authentik.com" className="text-slate-300 hover:text-cyan-400 transition-colors border-b border-cyan-500/30 font-bold">contact@experience-authentik.com</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-600 font-mono">
            <span>© 2026 AUTHENTIK. LA FRICTION QUI RÉVEILLE TA VÉRITÉ.</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-400 transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
