import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  Heart,
  Zap,
  ChevronDown,
  Flame,
  Droplets,
  Instagram,
  Linkedin,
  Newspaper,
  Mail,
  MapPin,
  Users,
  Calendar,
  Star
} from 'lucide-react';

const RDV = [
  {
    number: "01",
    verb: "VOIR",
    subtitle: "Les pôles de gravité et la dissonance",
    icon: <Eye className="w-10 h-10" />,
    color: "cyan",
    borderColor: "border-cyan-500/30",
    bgColor: "from-cyan-900/20",
    textColor: "text-cyan-400",
    image: "⭐",
    duration: "75 min",
    description: "Alain entre par l'image cosmique. Une étoile n'est pas une chose stable — c'est un équilibre permanent entre trois forces qui se contredisent. Un dirigeant, c'est exactement ça.",
    poles: [
      {
        name: "La Gravité — Pôle de l'Ancrage",
        equilibre: "Solidité, profondeur, continuité. Les gens qui t'entourent savent qu'ils peuvent compter sur ce que tu construis.",
        seul: "Elle fige. La protection devient immobilisme. Tu continues à polir ce qui est déjà bâti au lieu de vivre dans ce que tu as construit."
      },
      {
        name: "La Fusion — Pôle de l'Expansion",
        equilibre: "Élan, impact, visibilité. Les choses avancent. Les objectifs tombent. L'énergie est contagieuse.",
        seul: "Elle épuise et disperse. La validation externe devient une drogue dont la dose ne suffit plus jamais."
      },
      {
        name: "La Trajectoire — Pôle de l'Essence",
        equilibre: "Direction, cohérence, inspiration. Les gens te suivent parce qu'ils sentent que tu sais où tu vas et pourquoi.",
        seul: "Elle isole. La profondeur devient une tour d'ivoire. L'œuvre est réelle mais personne ne la voit."
      }
    ],
    closing: "Alain conclut avec l'invitation au quiz. Sobre. Sans pitch. Une porte ouverte. \"Dans deux semaines, on ne présentera plus. On travaillera.\""
  },
  {
    number: "02",
    verb: "SENTIR",
    subtitle: "Le chaînon manquant — retrouver l'état de justesse",
    icon: <Heart className="w-10 h-10" />,
    color: "orange",
    borderColor: "border-orange-500/30",
    bgColor: "from-orange-900/20",
    textColor: "text-orange-400",
    image: "🌊",
    duration: "75 min",
    description: "Vous avez vu votre dissonance. Et pourtant — combien d'entre vous ont continué exactement comme avant ? Ce n'est pas un problème de volonté. C'est un problème de niveau.",
    poles: [
      {
        name: "Pourquoi voir ne suffit pas",
        equilibre: "Vous essayez de changer vos forces avec les mêmes outils qui ont créé le déséquilibre. Ça ne fonctionne pas.",
        seul: "Le chaînon manquant n'est pas une action. C'est un état."
      },
      {
        name: "Les histoires vraies — Alain & Éric",
        equilibre: "Le refus de mutation en Asie. Le road trip qui est devenu une découverte. Le moment précis où il a senti qu'il était enfermé dans sa réussite.",
        seul: "L'effondrement — l'entreprise, l'argent, la femme, la reconnaissance, le statut. Quinze ans de reconstruction. Pas de raccourci."
      },
      {
        name: "La micro-expérience somatique",
        equilibre: "Mets une main sur ta poitrine. Pense à une décision récente qui te pèse. Sens ce qui se passe dans ton corps.",
        seul: "\"La différence que tu viens de sentir — c'est ça, l'état de justesse. Tu ne l'as pas appris. Tu l'as retrouvé.\""
      }
    ],
    closing: "Éric conclut simplement : \"Dans deux semaines — on ose.\""
  },
  {
    number: "03",
    verb: "OSER",
    subtitle: "Un geste depuis le bon endroit",
    icon: <Zap className="w-10 h-10" />,
    color: "purple",
    borderColor: "border-purple-500/30",
    bgColor: "from-purple-900/20",
    textColor: "text-purple-400",
    image: "🌊",
    duration: "75 min",
    description: "Oser — vous savez faire. Vous avez créé une entreprise, pris des risques, traversé des crises. Le problème n'est pas le courage. Le problème est l'endroit depuis lequel vous osez.",
    poles: [
      {
        name: "Oser plus vs oser autrement",
        equilibre: "Oser depuis la peur — ça ressemble à du courage. Ça épuise comme de la peur.",
        seul: "Oser depuis la justesse — ça ressemble parfois à de la folie. Ça nourrit comme de la liberté."
      },
      {
        name: "Ce qu'Alain et Éric osent — l'invitation",
        equilibre: "\"Venez en disant : surprenez-moi. On n'a pas de programme à vous vendre. On a une invitation à vous faire.\"",
        seul: "En juin. En France. Cinq jours. Un petit groupe. Des gens qui ont fait ce chemin avec nous."
      },
      {
        name: "L'ajustement en direct",
        equilibre: "\"Est-ce qu'il y a quelqu'un ici qui veut expérimenter ça maintenant ? Pas comprendre. Pas observer. Vivre.\"",
        seul: "Ce qui se passe ici est imprévisible. C'est exactement pour ça que c'est réel."
      }
    ],
    closing: "Éric conclut. Deux mots. Silence. \"Surprenez-moi.\""
  }
];

const IMMERSION_DAYS = [
  {
    day: "JOUR 1",
    verb: "VOIR",
    title: "La Dissolution",
    desc: "Quitter le personnage social, arrêter le bruit, voir ce qui reste quand on enlève tout ce qu'on s'est construit."
  },
  {
    day: "JOUR 2",
    verb: "SENTIR",
    title: "La Confrontation",
    desc: "Faire face à sa propre dissonance. Apprendre à identifier son signal interne de justesse — et à lui faire confiance."
  },
  {
    day: "JOUR 3",
    verb: "OSER",
    title: "L'Ancrage",
    desc: "Définir et sceller le Geste de Rupture concret à ramener dans le quotidien professionnel. Un seul. Le bon."
  }
];

const AccordionPole = ({ pole }: { pole: { name: string; equilibre: string; seul: string } }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-800/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-4 flex justify-between items-center text-left group"
      >
        <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors uppercase tracking-wider">{pole.name}</span>
        <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 shrink-0 ml-4 ${open ? 'rotate-180 text-cyan-400' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-5 space-y-3">
              <div className="flex gap-3">
                <span className="text-cyan-400 text-[10px] uppercase tracking-widest font-mono shrink-0 pt-0.5">En équilibre</span>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{pole.equilibre}</p>
              </div>
              <div className="flex gap-3">
                <span className="text-orange-400 text-[10px] uppercase tracking-widest font-mono shrink-0 pt-0.5">Seul</span>
                <p className="text-slate-400 text-sm leading-relaxed font-light italic">{pole.seul}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function TraverseePage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-orange-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 py-5 glass border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] uppercase tracking-widest">Retour</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-tr from-orange-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform">A</div>
            <span className="text-xl font-bold tracking-tighter text-white">AUTHENTIK</span>
          </Link>
          <Link
            to="/bilan"
            className="hidden md:block text-[10px] uppercase tracking-widest text-purple-400 hover:text-purple-300 transition-colors font-bold"
          >
            Le Bilan
          </Link>
          <a
            href="mailto:contact@experience-authentik.com"
            className="px-5 py-2 rounded-full border border-orange-500/30 text-[10px] uppercase tracking-widest text-orange-400 hover:bg-orange-500/10 transition-all"
          >
            Manifester mon intérêt
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-4 px-4 py-2 bg-slate-900/60 rounded-full border border-slate-700 mb-10">
              <span className="text-[9px] uppercase tracking-[0.3em] text-cyan-400 font-mono">La Semaine AUTHENTIK</span>
              <span className="w-1 h-1 bg-slate-600 rounded-full" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-mono">12 · 13 · 14 Mai 2026</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-9xl font-black mb-6 tracking-tighter text-white uppercase leading-none"
          >
            La<br />
            <span className="gradient-text">Traversée</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-6 mb-10"
          >
            <span className="text-[11px] uppercase tracking-[0.4em] text-cyan-400 font-mono">VOIR</span>
            <span className="text-slate-600">·</span>
            <span className="text-[11px] uppercase tracking-[0.4em] text-orange-400 font-mono">SENTIR</span>
            <span className="text-slate-600">·</span>
            <span className="text-[11px] uppercase tracking-[0.4em] text-purple-400 font-mono">OSER</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mb-12"
          >
            Un cycle de trois rendez-vous espacés de deux semaines. Ce n'est pas un programme structuré — c'est un chemin progressif, du visible vers le ressenti, du ressenti vers l'acte.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#rdv"
              className="px-10 py-5 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-base shadow-[0_0_40px_rgba(234,88,12,0.25)] hover:scale-105 transition-transform flex items-center gap-3 justify-center"
            >
              Découvrir les 3 rendez-vous
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#immersion"
              className="px-10 py-5 rounded-2xl bg-slate-900 border border-slate-700 text-white font-medium hover:bg-slate-800 transition-colors text-[11px] uppercase tracking-widest text-center"
            >
              L'Immersion Juin 2026
            </a>
          </motion.div>
        </div>
      </section>

      {/* Architecture badge */}
      <section className="py-20 bg-slate-950 border-y border-slate-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Calendar className="w-6 h-6 text-cyan-400 mx-auto mb-4" />, label: "3 Rendez-vous", sub: "Espacés de 2 semaines" },
              { icon: <Users className="w-6 h-6 text-orange-400 mx-auto mb-4" />, label: "Le Duo complet", sub: "Alain & Éric dès le 1er RDV" },
              { icon: <Star className="w-6 h-6 text-purple-400 mx-auto mb-4" />, label: "75 minutes", sub: "Par rendez-vous" },
            ].map((item) => (
              <div key={item.label} className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
                {item.icon}
                <div className="text-xl font-black text-white uppercase tracking-tight mb-1">{item.label}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Rendez-vous */}
      <section id="rdv" className="py-32 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-mono mb-4 block">Architecture de la Traversée</span>
            <h2 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
              Trois rendez-vous.<br />
              <span className="gradient-text font-normal italic">Un chemin progressif.</span>
            </h2>
          </div>

          <div className="space-y-12">
            {RDV.map((rdv, idx) => (
              <motion.div
                key={rdv.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className={`rounded-3xl bg-slate-900/50 border ${rdv.borderColor} overflow-hidden`}
              >
                <div className="grid md:grid-cols-5">
                  {/* Left panel */}
                  <div className={`md:col-span-2 p-10 bg-gradient-to-b ${rdv.bgColor} to-transparent flex flex-col justify-between`}>
                    <div>
                      <div className={`inline-flex items-center gap-3 mb-6 ${rdv.textColor}`}>
                        {rdv.icon}
                        <div>
                          <div className="text-[9px] uppercase tracking-[0.4em] font-mono opacity-60">Rendez-vous {rdv.number}</div>
                          <div className="text-3xl font-black uppercase tracking-widest">{rdv.verb}</div>
                        </div>
                      </div>
                      <p className="text-slate-500 text-[10px] uppercase tracking-widest font-mono mb-6">{rdv.subtitle}</p>
                      <p className="text-slate-300 leading-relaxed font-light">{rdv.description}</p>
                    </div>
                    <div className={`mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border ${rdv.borderColor} w-fit`}>
                      <span className={`text-[9px] uppercase tracking-[0.3em] font-mono ${rdv.textColor}`}>{rdv.duration}</span>
                    </div>
                  </div>

                  {/* Right panel */}
                  <div className="md:col-span-3 p-10 border-l border-slate-800/50">
                    <div className="text-[9px] uppercase tracking-[0.3em] font-mono text-slate-600 mb-6">Ce qui se passe</div>
                    <div className="space-y-1">
                      {rdv.poles.map((pole) => (
                        <AccordionPole key={pole.name} pole={pole} />
                      ))}
                    </div>
                    <div className="mt-8 p-5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <p className="text-slate-500 text-sm italic font-light leading-relaxed">{rdv.closing}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocole d'incubation */}
      <section className="py-24 bg-slate-950 border-y border-slate-800/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-mono mb-6 block">Le Protocole d'Incubation</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-tighter mb-8">
            Anti-marketing<br /><span className="gradient-text italic font-normal">toxique.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-light max-w-2xl mx-auto mb-12">
            À la fin du 3ème rendez-vous, aucun lien de vente n'est fourni. Nous fermons les accès 48h. Parce que nous ne voulons pas de votre impulsion. Nous voulons votre clarté.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                step: "01",
                title: "Le Silence — Jeudi 14 Mai",
                desc: "Fin du RDV 3. Aucun lien, aucune urgence. Un simple formulaire pour manifester votre intérêt si ça résonne.",
                color: "text-cyan-400"
              },
              {
                step: "02",
                title: "L'Ouverture — Samedi 16 Mai",
                desc: "Un email pour ceux qui ont manifesté leur intérêt. Pas de paiement — un lien pour un appel de 15 minutes avec Alain ou Éric.",
                color: "text-orange-400"
              }
            ].map((item) => (
              <div key={item.step} className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
                <div className={`text-xs font-mono ${item.color} uppercase tracking-widest mb-3`}>Étape {item.step}</div>
                <h3 className="text-lg font-bold text-white uppercase tracking-tighter mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* L'Immersion */}
      <section id="immersion" className="py-32 bg-[#020617] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-mono mb-6 block">Après la Traversée</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                L'Immersion<br />
                <span className="gradient-text font-normal italic">Juin 2026</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light mb-8 italic border-l-2 border-orange-500/30 pl-6">
                "Un dauphin en captivité survit. Un dauphin dans l'océan rayonne. Vous venez de passer six semaines à retrouver votre océan. L'immersion — c'est y plonger pour de vrai."
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  { icon: <MapPin className="w-4 h-4" />, label: "Lieu", value: "France" },
                  { icon: <Calendar className="w-4 h-4" />, label: "Dates", value: "16-18 Juin 2026" },
                  { icon: <Users className="w-4 h-4" />, label: "Groupe", value: "5 participants max" },
                  { icon: <Star className="w-4 h-4" />, label: "Engagement", value: "3 000 €" },
                ].map((item) => (
                  <div key={item.label} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center gap-2 text-slate-500 mb-2">{item.icon}<span className="text-[9px] uppercase tracking-widest font-mono">{item.label}</span></div>
                    <div className="text-white font-bold text-sm">{item.value}</div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">Tout inclus · Hors transport · Validation après appel de 15 min</p>
            </div>

            <div className="space-y-6">
              {IMMERSION_DAYS.map((day, idx) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">{idx + 1}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-slate-600">{day.day}</span>
                        <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-orange-400">· {day.verb} ·</span>
                      </div>
                      <h3 className="text-xl font-bold text-white uppercase tracking-tighter mb-2">{day.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">{day.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Manifester son intérêt */}
      <section className="py-32 bg-slate-950 border-y border-slate-800/50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-mono mb-6 block">Sélection mutuelle</span>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
            Surprenez<br />
            <span className="gradient-text font-normal italic">-moi.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-light mb-12 max-w-xl mx-auto">
            On ne vous demande pas de décider ce soir. On vous demande juste d'écouter ce que vous sentez — pas ce que vous pensez. Et si ça résonne — laissez votre email.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  required
                  className="w-full pl-11 pr-4 py-4 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-orange-500/50 transition-colors text-sm"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(234,88,12,0.2)] whitespace-nowrap"
              >
                Je manifeste mon intérêt
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-2xl bg-slate-900/60 border border-orange-500/20 max-w-md mx-auto"
            >
              <div className="text-3xl mb-4">✦</div>
              <h3 className="text-xl font-bold text-white uppercase tracking-tighter mb-2">Signal reçu.</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Nous vous contacterons le samedi 16 mai à 10h00 pour un échange de 15 minutes avec Alain ou Éric. Pas de vente — un dialogue.
              </p>
            </motion.div>
          )}

          <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest mt-6">
            Ou écrivez directement à <a href="mailto:contact@experience-authentik.com" className="text-slate-400 hover:text-white transition-colors">contact@experience-authentik.com</a>
          </p>
        </div>
      </section>

      {/* Quote finale */}
      <section className="py-40 bg-[#020617] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/4 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="text-3xl md:text-5xl font-light leading-relaxed italic text-slate-300 mb-12">
            "Ce que tu viens de sentir — ce n&apos;est pas un diagnostic.<br />
            C&apos;est une première <span className="gradient-text not-italic font-bold">lumière</span>."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-sm">💧</div>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Alain & Éric</span>
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-sm">🔥</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#020617] border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-gradient-to-tr from-orange-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white">A</div>
                <span className="text-lg font-bold tracking-tighter text-white">AUTHENTIK</span>
              </Link>
              <p className="text-slate-500 text-sm max-w-xs font-light leading-relaxed">
                De la réussite à la vie réussie. L'alchimie du Chaos et du Silence.
              </p>
              <div className="flex gap-3 mt-5">
                <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 transition-colors"><Linkedin size={14} /></a>
                <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 transition-colors"><Instagram size={14} /></a>
                <a href="#" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-cyan-400 transition-colors"><Newspaper size={14} /></a>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              <div>
                <h5 className="font-bold uppercase tracking-widest text-[10px] mb-5 text-slate-500 font-mono">La Traversée</h5>
                <ul className="space-y-3 text-xs font-light uppercase tracking-wide">
                  <li><a href="#rdv" className="text-slate-400 hover:text-white transition-colors">Les 3 Rendez-vous</a></li>
                  <li><a href="#immersion" className="text-slate-400 hover:text-white transition-colors">L'Immersion Juin</a></li>
                  <li><a href="https://www.entreprenezvous.com/quizz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Quiz Archétypes</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold uppercase tracking-widest text-[10px] mb-5 text-slate-500 font-mono">Le Site</h5>
                <ul className="space-y-3 text-xs font-light uppercase tracking-wide">
                  <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Accueil</Link></li>
                  <li><Link to="/#reflets" className="text-slate-400 hover:text-white transition-colors">Les Reflets</Link></li>
                  <li><Link to="/#equipe" className="text-slate-400 hover:text-white transition-colors">Le Duo</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold uppercase tracking-widest text-[10px] mb-5 text-slate-500 font-mono">Contact</h5>
                <ul className="space-y-3 text-xs font-light">
                  <li className="text-slate-500 uppercase tracking-widest">Genève · Paris · Montréal</li>
                  <li><a href="mailto:contact@experience-authentik.com" className="text-slate-300 hover:text-cyan-400 transition-colors">contact@experience-authentik.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-600 font-mono">
            <span>© 2026 AUTHENTIK. VOIR · SENTIR · OSER.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400 transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
