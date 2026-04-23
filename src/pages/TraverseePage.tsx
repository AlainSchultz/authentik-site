import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Instagram, Linkedin, Newspaper } from 'lucide-react';

const RDV_DATA = [
  {
    number: "01",
    verb: "VOIR",
    verbColor: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/40",
    topBarColor: "bg-cyan-500",
    tag: "Rendez-vous 1 · 75 min",
    title: "Les forces qui te gouvernent",
    body: "Tu n'es pas prisonnier de ta situation. Tu es prisonnier de l'équilibre — ou du déséquilibre — entre trois grandes forces qui t'habitent. On les nomme. On te tend le miroir. Pas pour t'étiqueter — pour que tu voies enfin ce que tu portais sans le voir.",
    question: "« Est-ce qu'il y a quelque chose que tu as construit — et dans lequel tu ne te reconnais plus vraiment ? »",
  },
  {
    number: "02",
    verb: "SENTIR",
    verbColor: "text-orange-400",
    hoverBorder: "hover:border-orange-500/40",
    topBarColor: "bg-orange-500",
    tag: "Rendez-vous 2 · 75 min",
    title: "Le chaînon manquant",
    body: "Voir ne suffit pas. On essaie souvent de changer avec les mêmes outils qui ont créé le déséquilibre. Le chaînon manquant n'est pas une action — c'est un état. On descend plus bas que l'analyse. On retrouve ce qui était là avant que la réussite ne le recouvre.",
    question: "« Quel est le moment de ta semaine où tu es le plus proche de toi-même — et qu'est-ce que tu fais de ce moment-là ? »",
  },
  {
    number: "03",
    verb: "OSER",
    verbColor: "text-purple-400",
    hoverBorder: "hover:border-purple-500/40",
    topBarColor: "bg-purple-500",
    tag: "Rendez-vous 3 · 75 min",
    title: "Un geste depuis le bon endroit",
    body: "Oser — tu sais faire. Tu as créé une entreprise, pris des risques, traversé des crises. Le problème n'est pas le courage. Le problème est l'endroit depuis lequel tu oses. Oser depuis la peur épuise. Oser depuis la justesse nourrit. On travaille ça — en direct.",
    question: "« Qu'est-ce que tu ferais — si tu étais sûr que c'était depuis le bon endroit ? »",
  },
];

const PORTRAITS = [
  {
    bold: "Tu réussis.",
    suite: "Et tu as arrêté de te demander si c'est suffisant — parce que la réponse te fait peur.",
  },
  {
    bold: "Tu as tout essayé.",
    suite: "Les formations, les coachings, les lectures. Et tu sens qu'il manque quelque chose que personne ne nomme.",
  },
  {
    bold: "Tu avances.",
    suite: "Mais de moins en moins depuis l'intérieur. Et de plus en plus depuis la pression ou l'habitude.",
  },
  {
    bold: "Tu portes seul.",
    suite: "Ce que tu ne dis pas à tes équipes, à tes associés, parfois même à toi-même.",
  },
];

const STATS = [
  { num: "3", label: "rendez-\nvous", small: false },
  { num: "75", label: "min\npar séance", small: false },
  { num: "2", label: "sem.\nentre chaque", small: false },
  { num: "Gratuit", label: "sans\nengagement", small: true },
  { num: "En ligne", label: "format\nlive", small: true },
];

export default function TraverseePage() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'form-script-tag-23744475';
    script.src = 'https://www.authentik-experience.com/public/remote/page/40280525ba44536e7a14acf87d0b98d06079f4a4.js';
    script.async = true;
    formContainerRef.current?.appendChild(script);
    return () => { document.getElementById('form-script-tag-23744475')?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 selection:bg-orange-500/30">

      {/* ── Navigation ── */}
      <nav className="fixed w-full z-50 py-5 glass border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] uppercase tracking-widest font-mono">Retour</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-tr from-orange-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white text-sm group-hover:scale-110 transition-transform">A</div>
            <span className="text-xl font-bold tracking-tighter text-white font-sans">AUTHENTIK</span>
          </Link>
          <a
            href="#formulaire"
            className="px-5 py-2.5 bg-gradient-to-r from-orange-600 to-orange-400 text-[10px] uppercase tracking-widest text-white font-bold font-mono hover:scale-105 transition-transform"
          >
            Je rejoins la Traversée
          </a>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          BLOC 1 — HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/6 rounded-full blur-[110px]" />
        </div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">

          {/* Badge — compact, lisible, mis en valeur */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1 p-1 bg-slate-900/70 border border-slate-700/50 rounded-full mb-14"
          >
            <span className="px-4 py-1.5 bg-amber-500/15 border border-amber-500/30 rounded-full text-[11px] uppercase tracking-[0.15em] text-amber-400 font-mono font-semibold">
              Gratuit
            </span>
            <span className="px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-slate-500 font-mono">
              3 rendez-vous
            </span>
            <span className="text-slate-700 pr-1">·</span>
            <span className="px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-slate-500 font-mono pr-3">
              En ligne
            </span>
          </motion.div>

          {/* H1 — 2 lignes, percutant */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-light font-serif leading-[1.12] tracking-tight text-white mb-10"
          >
            Il manque quelque chose — tu le sais.<br />
            <span className="gradient-text italic">Et personne n'a les mots pour ça.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-slate-400 text-lg leading-[1.8] max-w-xl mb-14 font-light font-sans"
          >
            La Traversée est un cycle de trois rendez-vous gratuits pour les dirigeants
            qui sentent qu'il manque quelque chose d'essentiel —
            quelque chose que les formations, les coachings et les lectures n'ont pas touché.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <a
              href="#formulaire"
              className="inline-block px-12 py-5 bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold font-mono text-[12px] uppercase tracking-[0.18em] shadow-[0_0_40px_rgba(234,88,12,0.25)] hover:scale-105 transition-transform"
            >
              Je rejoins la Traversée ↗
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOC 2 — POUR QUI (identification)
      ══════════════════════════════════════ */}
      <section id="pour-qui" className="py-28 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-[11px] uppercase tracking-[0.22em] text-amber-500 mb-4 font-mono">Pour qui</p>
            <div className="w-12 h-px bg-amber-600/50 mb-7" />
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif uppercase tracking-tight text-white leading-[1.15]">
              Quatre portraits.<br />
              <span className="gradient-text font-normal italic">Tu en reconnaîtras un.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800/20">
            {PORTRAITS.map((p) => (
              <motion.div
                key={p.bold}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#111111] p-11 relative hover:bg-[#141414] transition-colors"
              >
                <div className="absolute top-0 left-0 w-8 h-0.5 bg-amber-600" />
                <p className="text-white text-lg font-semibold font-sans mb-3 leading-snug">{p.bold}</p>
                <p className="text-slate-500 text-sm leading-[1.75] font-light font-sans">{p.suite}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOC 3 — LES 3 RENDEZ-VOUS
      ══════════════════════════════════════ */}
      <section id="rendez-vous" className="py-28 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.22em] text-amber-500 mb-4 font-mono">Les trois rendez-vous</p>
            <div className="w-12 h-px bg-amber-600/50 mx-auto mb-7" />
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif uppercase tracking-tight text-white leading-[1.15]">
              Un cycle de 75 minutes<br />
              <span className="gradient-text font-normal italic">qui va plus loin que l'analyse</span>
            </h2>
          </div>

          {/* Timeline — visible desktop seulement */}
          <div className="hidden md:flex items-center mb-10 px-2">
            {[
              { num: "01", label: "VOIR", color: "text-cyan-400 border-cyan-500/40" },
              { num: "02", label: "SENTIR", color: "text-orange-400 border-orange-500/40" },
              { num: "03", label: "OSER", color: "text-purple-400 border-purple-500/40" },
            ].map((step, i) => (
              <>
                <div key={step.num} className="flex items-center gap-3 shrink-0">
                  <span className={`w-8 h-8 rounded-full border flex items-center justify-center text-[9px] font-mono font-semibold ${step.color}`}>
                    {step.num}
                  </span>
                  <span className={`text-[10px] font-mono uppercase tracking-[0.25em] ${step.color.split(' ')[0]}`}>
                    {step.label}
                  </span>
                </div>
                {i < 2 && (
                  <div key={`sep-${i}`} className="flex-1 flex items-center gap-2 mx-4">
                    <div className="flex-1 h-px bg-slate-800" />
                    <span className="text-[8px] font-mono text-slate-700 uppercase tracking-widest whitespace-nowrap">2 semaines</span>
                    <div className="flex-1 h-px bg-slate-800" />
                  </div>
                )}
              </>
            ))}
          </div>

          {/* 3 cartes côte à côte */}
          <div className="grid md:grid-cols-3 gap-px bg-slate-800/30">
            {RDV_DATA.map((rdv, idx) => (
              <motion.div
                key={rdv.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group relative bg-[#111111] border border-transparent ${rdv.hoverBorder} transition-all duration-300 hover:-translate-y-1 cursor-default`}
              >
                {/* Barre colorée en haut — apparaît au hover */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${rdv.topBarColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="p-8 md:p-10 flex flex-col h-full">
                  {/* Numéro */}
                  <div className="text-5xl font-light font-serif text-slate-800 leading-none mb-6 group-hover:text-slate-700 transition-colors">
                    {rdv.number}
                  </div>

                  {/* Verb */}
                  <p className={`text-[10px] uppercase tracking-[0.3em] font-mono ${rdv.verbColor} mb-3`}>
                    {rdv.verb}
                  </p>

                  {/* Titre */}
                  <h3 className="text-xl font-serif font-light text-slate-300 group-hover:text-white mb-5 leading-snug transition-colors">
                    {rdv.title}
                  </h3>

                  {/* Corps */}
                  <p className="text-slate-600 text-sm leading-[1.85] font-light font-sans mb-6 group-hover:text-slate-400 transition-colors flex-1">
                    {rdv.body}
                  </p>

                  {/* Question */}
                  <blockquote className="border-l-2 border-slate-800 group-hover:border-amber-600/50 pl-4 text-slate-700 group-hover:text-slate-300 italic text-sm leading-[1.7] transition-colors font-sans">
                    {rdv.question}
                  </blockquote>

                  {/* Durée */}
                  <div className="mt-6 pt-5 border-t border-slate-800/50">
                    <span className={`text-[9px] uppercase tracking-[0.2em] font-mono ${rdv.verbColor} opacity-40 group-hover:opacity-100 transition-opacity`}>
                      {rdv.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOC 4 — ALAIN & ÉRIC
      ══════════════════════════════════════ */}
      <section id="avec-qui" className="py-28 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-[11px] uppercase tracking-[0.22em] text-amber-500 mb-4 font-mono">Avec qui</p>
            <div className="w-12 h-px bg-amber-600/50 mb-7" />
            <h2 className="text-3xl md:text-5xl font-extrabold font-serif uppercase tracking-tight text-white leading-[1.15]">
              Deux voix. Une tension créatrice.<br />
              <span className="text-slate-500 text-2xl md:text-3xl font-light font-sans normal-case tracking-normal">Pas une méthode — une présence.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-slate-800/20">
            <div className="bg-[#111111] p-14">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-black font-bold text-lg mb-7">A</div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-amber-500 mb-4 font-mono">Fondateur · Leaders Vivants & AUTHENTIK</p>
              <h3 className="text-2xl font-serif font-light text-white mb-5">Alain</h3>
              <p className="text-slate-400 text-sm leading-[1.85] font-light font-sans">
                Il a refusé sa mutation, traversé l'Asie, et compris qu'il était enfermé dans sa réussite. Son parcours — du succès qui étouffe à la vie qui rayonne — est le fil conducteur d'AUTHENTIK.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-14">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-400 flex items-center justify-center text-black font-bold text-lg mb-7">É</div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-400 mb-4 font-mono">Co-fondateur AUTHENTIK · Podcast "C'est Alain qui m'a dit"</p>
              <h3 className="text-2xl font-serif font-light text-white mb-5">Éric</h3>
              <p className="text-slate-400 text-sm leading-[1.85] font-light font-sans">
                Il a tout perdu pour ne pas avoir écouté le signal. Quinze ans de reconstruction — jusqu'au jour où il a compris que ce signal ignoré était son état de justesse qui tentait de parler.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOC 5 — INFOS PRATIQUES
      ══════════════════════════════════════ */}
      <section id="infos" className="py-20 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.22em] text-amber-500 font-mono">Informations pratiques</p>
            <div className="w-12 h-px bg-amber-600/50 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-slate-800/20">
            {STATS.map((s) => (
              <div key={s.num} className="bg-[#111111] py-11 px-7 text-center">
                <div className={`${s.small ? 'text-2xl' : 'text-5xl'} font-light font-serif text-amber-500 leading-none mb-3`}>
                  {s.num}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-mono whitespace-pre-line leading-[1.5]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOC 6 — FORMULAIRE
      ══════════════════════════════════════ */}
      <section id="formulaire" className="py-28 bg-[#141414]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.22em] text-amber-500 mb-4 font-mono">Je rejoins la Traversée</p>
          <div className="w-12 h-px bg-amber-600/50 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-extrabold font-serif uppercase tracking-tight text-white leading-[1.15] mb-4">
            Inscris-toi <span className="gradient-text font-normal italic">gratuitement.</span>
          </h2>
          <p className="text-slate-400 text-base leading-[1.8] mb-12 font-light font-sans">
            Tu recevras les dates et le lien de connexion par email<br />
            avant le premier rendez-vous.
          </p>

          <div ref={formContainerRef} className="w-full" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOC 7 — CITATION DE CLÔTURE
      ══════════════════════════════════════ */}
      <section className="py-36 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-500/4 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="w-12 h-px bg-amber-600/30 mx-auto mb-14" />
          <blockquote className="text-2xl md:text-[1.55rem] font-serif font-light leading-[1.65] italic text-slate-300 mb-10">
            "Un dauphin en captivité survit.<br />
            Un dauphin dans l'océan rayonne.<br />
            <span className="gradient-text not-italic font-normal">La Traversée — c'est retrouver ton océan.</span>"
          </blockquote>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-600 font-mono mb-14">— Alain & Éric</p>
          <div className="w-12 h-px bg-amber-600/30 mx-auto mb-14" />
          <a
            href="#formulaire"
            className="inline-block px-12 py-5 border border-amber-600/40 text-amber-500 font-bold font-mono text-[12px] uppercase tracking-[0.18em] hover:bg-amber-600/8 transition-colors"
          >
            Je rejoins la Traversée ↗
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-16 bg-[#0a0a0a] border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-gradient-to-tr from-orange-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white">A</div>
                <span className="text-lg font-bold font-sans tracking-tighter text-white">AUTHENTIK</span>
              </Link>
              <p className="text-slate-500 text-sm max-w-xs font-light font-sans leading-relaxed">
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
                <ul className="space-y-3 text-xs font-light font-sans uppercase tracking-wide">
                  <li><a href="#rendez-vous" className="text-slate-400 hover:text-white transition-colors">Les 3 Rendez-vous</a></li>
                  <li><a href="#pour-qui" className="text-slate-400 hover:text-white transition-colors">Pour qui</a></li>
                  <li><a href="#formulaire" className="text-slate-400 hover:text-white transition-colors">S'inscrire</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold uppercase tracking-widest text-[10px] mb-5 text-slate-500 font-mono">Le Site</h5>
                <ul className="space-y-3 text-xs font-light font-sans uppercase tracking-wide">
                  <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Accueil</Link></li>
                  <li><Link to="/#reflets" className="text-slate-400 hover:text-white transition-colors">Les Reflets</Link></li>
                  <li><Link to="/#equipe" className="text-slate-400 hover:text-white transition-colors">Le Duo</Link></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold uppercase tracking-widest text-[10px] mb-5 text-slate-500 font-mono">Contact</h5>
                <ul className="space-y-3 text-xs font-light font-sans">
                  <li className="text-slate-500 uppercase tracking-widest text-[10px]">Genève · Paris · Montréal</li>
                  <li><a href="mailto:contact@experience-authentik.com" className="text-slate-300 hover:text-cyan-400 transition-colors text-xs">contact@experience-authentik.com</a></li>
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
