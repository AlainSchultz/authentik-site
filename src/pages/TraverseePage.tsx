import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Instagram, Linkedin, Newspaper } from 'lucide-react';

const RDV_DATA = [
  {
    number: "01",
    verb: "VOIR",
    verbColor: "text-cyan-400",
    tag: "Rendez-vous 1 · 75 min",
    title: "Les forces qui te gouvernent",
    body: "Tu n'es pas prisonnier de ta situation. Tu es prisonnier de l'équilibre — ou du déséquilibre — entre trois grandes forces qui t'habitent. On les nomme. On te tend le miroir. Pas pour t'étiqueter — pour que tu voies enfin ce que tu portais sans le voir.",
    question: "« Est-ce qu'il y a quelque chose que tu as construit — et dans lequel tu ne te reconnais plus vraiment ? »",
    interval: "· · · 2 semaines d'intervalle · · ·",
  },
  {
    number: "02",
    verb: "SENTIR",
    verbColor: "text-orange-400",
    tag: "Rendez-vous 2 · 75 min",
    title: "Le chaînon manquant",
    body: "Voir ne suffit pas. On essaie souvent de changer avec les mêmes outils qui ont créé le déséquilibre. Le chaînon manquant n'est pas une action — c'est un état. On descend plus bas que l'analyse. On retrouve ce qui était là avant que la réussite ne le recouvre.",
    question: "« Quel est le moment de ta semaine où tu es le plus proche de toi-même — et qu'est-ce que tu fais de ce moment-là ? »",
    interval: "· · · 2 semaines d'intervalle · · ·",
  },
  {
    number: "03",
    verb: "OSER",
    verbColor: "text-purple-400",
    tag: "Rendez-vous 3 · 75 min",
    title: "Un geste depuis le bon endroit",
    body: "Oser — tu sais faire. Tu as créé une entreprise, pris des risques, traversé des crises. Le problème n'est pas le courage. Le problème est l'endroit depuis lequel tu oses. Oser depuis la peur épuise. Oser depuis la justesse nourrit. On travaille ça — en direct.",
    question: "« Qu'est-ce que tu ferais — si tu étais sûr que c'était depuis le bon endroit ? »",
    interval: null,
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
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prenom && email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-200 selection:bg-orange-500/30">

      {/* ── Navigation ── */}
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
          <a
            href="#formulaire"
            className="px-5 py-2.5 bg-gradient-to-r from-orange-600 to-orange-400 text-[10px] uppercase tracking-widest text-white font-bold hover:scale-105 transition-transform"
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
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-5 mb-14"
          >
            <span className="text-[11px] uppercase tracking-[0.22em] text-amber-500 font-bold">Gratuit</span>
            <span className="text-slate-700">·</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500">3 rendez-vous</span>
            <span className="text-slate-700">·</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500">En ligne</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[11px] uppercase tracking-[0.22em] text-amber-500 mb-6"
          >
            La Traversée
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-light leading-[1.15] tracking-tight text-white mb-10"
          >
            Il manque quelque chose.<br />
            Tu le sais.<br />
            <span className="gradient-text">Et personne autour de toi<br />n'a encore les mots pour ça.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex items-center gap-8 mb-10"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-cyan-400 font-mono">Voir</span>
            <div className="w-px h-6 bg-slate-800" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-orange-400 font-mono">Sentir</span>
            <div className="w-px h-6 bg-slate-800" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-purple-400 font-mono">Oser</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="text-slate-400 text-lg leading-[1.8] max-w-xl mb-14 font-light"
          >
            La Traversée est un cycle de trois rendez-vous gratuits pour les dirigeants
            qui sentent qu'il manque quelque chose d'essentiel —
            quelque chose que les formations, les coachings et les lectures n'ont pas touché.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
          >
            <a
              href="#formulaire"
              className="inline-block px-12 py-5 bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-[12px] uppercase tracking-[0.18em] shadow-[0_0_40px_rgba(234,88,12,0.25)] hover:scale-105 transition-transform"
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
            <p className="text-[11px] uppercase tracking-[0.22em] text-amber-500 mb-4">Pour qui</p>
            <div className="w-12 h-px bg-amber-600/50 mb-7" />
            <h2 className="text-3xl md:text-5xl font-light text-white leading-[1.2] tracking-tight">
              Quatre portraits.<br />Tu en reconnaîtras un.
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
                <p className="text-white text-lg font-normal mb-3 leading-snug">{p.bold}</p>
                <p className="text-slate-500 text-sm leading-[1.75] font-light">{p.suite}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOC 3 — LES 3 RENDEZ-VOUS
      ══════════════════════════════════════ */}
      <section id="rendez-vous" className="py-28 bg-[#111111]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[11px] uppercase tracking-[0.22em] text-amber-500 mb-4">Les trois rendez-vous</p>
            <div className="w-12 h-px bg-amber-600/50 mx-auto mb-7" />
            <h2 className="text-3xl md:text-5xl font-light text-white leading-[1.2] tracking-tight">
              Un cycle de 75 minutes<br />qui va plus loin que l'analyse
            </h2>
          </div>

          <div>
            {RDV_DATA.map((rdv, idx) => (
              <div key={rdv.number}>
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="py-16 border-b border-slate-800/50 grid grid-cols-[72px_1fr] gap-10 items-start"
                >
                  <div>
                    <div className="text-4xl font-light text-slate-800 font-serif leading-none mb-1">{rdv.number}</div>
                    <div className={`text-[10px] uppercase tracking-[0.2em] font-mono ${rdv.verbColor}`}>RDV</div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] font-mono text-slate-600 mb-3">{rdv.tag}</p>
                    <h3 className="text-2xl font-light text-white mb-5 leading-snug">
                      <span className={rdv.verbColor}>{rdv.verb}</span> — {rdv.title}
                    </h3>
                    <p className="text-slate-400 text-[0.97rem] leading-[1.85] mb-7 font-light">{rdv.body}</p>
                    <blockquote className="border-l-2 border-amber-600/40 pl-6 py-2 text-slate-300 italic text-[0.95rem] leading-[1.7]">
                      {rdv.question}
                    </blockquote>
                  </div>
                </motion.div>

                {rdv.interval && (
                  <div className="text-center py-8 text-[10px] uppercase tracking-[0.3em] text-slate-700 font-mono">
                    {rdv.interval}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOC 4 — ALAIN & ÉRIC
      ══════════════════════════════════════ */}
      <section id="avec-qui" className="py-28 bg-[#111111]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-[11px] uppercase tracking-[0.22em] text-amber-500 mb-4">Avec qui</p>
            <div className="w-12 h-px bg-amber-600/50 mb-7" />
            <h2 className="text-3xl md:text-5xl font-light text-white leading-[1.2] tracking-tight">
              Deux voix. Une tension créatrice.<br />
              <span className="text-slate-500 text-3xl md:text-4xl">Pas une méthode — une présence.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-slate-800/20">
            <div className="bg-[#111111] p-14">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-black font-bold text-lg mb-7">A</div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-amber-500 mb-4 font-mono">Fondateur · Leaders Vivants & AUTHENTIK</p>
              <h3 className="text-2xl font-light text-white mb-5">Alain</h3>
              <p className="text-slate-400 text-sm leading-[1.85] font-light">
                Il a refusé sa mutation, traversé l'Asie, et compris qu'il était enfermé dans sa réussite. Son parcours — du succès qui étouffe à la vie qui rayonne — est le fil conducteur d'AUTHENTIK.
              </p>
            </div>
            <div className="bg-[#1a1a1a] p-14">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-400 flex items-center justify-center text-black font-bold text-lg mb-7">É</div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-400 mb-4 font-mono">Co-fondateur AUTHENTIK · Podcast "C'est Alain qui m'a dit"</p>
              <h3 className="text-2xl font-light text-white mb-5">Éric</h3>
              <p className="text-slate-400 text-sm leading-[1.85] font-light">
                Il a tout perdu pour ne pas avoir écouté le signal. Quinze ans de reconstruction — jusqu'au jour où il a compris que ce signal ignoré était son état de justesse qui tentait de parler.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BLOC 5 — INFOS PRATIQUES
      ══════════════════════════════════════ */}
      <section id="infos" className="py-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.22em] text-amber-500">Informations pratiques</p>
            <div className="w-12 h-px bg-amber-600/50 mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-slate-800/20">
            {STATS.map((s) => (
              <div key={s.num} className="bg-[#111111] py-11 px-7 text-center">
                <div className={`${s.small ? 'text-2xl' : 'text-5xl'} font-light text-amber-500 leading-none mb-3 font-serif`}>
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
          <p className="text-[11px] uppercase tracking-[0.22em] text-amber-500 mb-4">Je rejoins la Traversée</p>
          <div className="w-12 h-px bg-amber-600/50 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-light text-white leading-[1.2] tracking-tight mb-4">
            Inscris-toi gratuitement.
          </h2>
          <p className="text-slate-400 text-base leading-[1.8] mb-12 font-light">
            Tu recevras les dates et le lien de connexion par email<br />
            avant le premier rendez-vous.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.22em] text-slate-500 mb-3 font-mono">
                  Prénom
                </label>
                <input
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  placeholder="Ton prénom"
                  required
                  className="w-full bg-transparent border-b border-slate-700 pb-4 text-white placeholder-slate-700 focus:outline-none focus:border-amber-600/60 transition-colors font-light text-base"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.22em] text-slate-500 mb-3 font-mono">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ton@email.com"
                  required
                  className="w-full bg-transparent border-b border-slate-700 pb-4 text-white placeholder-slate-700 focus:outline-none focus:border-amber-600/60 transition-colors font-light text-base"
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold text-[12px] uppercase tracking-[0.18em] shadow-[0_0_40px_rgba(234,88,12,0.2)] hover:scale-[1.02] transition-transform"
                >
                  Je rejoins la Traversée ↗
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-10 bg-[#1a1a1a] border border-amber-600/20 text-center"
            >
              <div className="text-amber-500 text-3xl mb-5">✦</div>
              <h3 className="text-xl font-light text-white mb-3 uppercase tracking-tight">Inscription reçue.</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Tu recevras les dates et le lien de connexion<br />par email avant le premier rendez-vous.
              </p>
            </motion.div>
          )}

          <p className="text-[11px] text-slate-700 mt-8 font-mono leading-relaxed">
            Aucun spam. Juste les informations essentielles.<br />
            Tu peux te désinscrire à tout moment.
          </p>
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
          <blockquote className="text-2xl md:text-[1.55rem] font-light leading-[1.65] italic text-slate-300 mb-10">
            "Un dauphin en captivité survit.<br />
            Un dauphin dans l'océan rayonne.<br />
            <span className="gradient-text not-italic font-normal">La Traversée — c'est retrouver ton océan.</span>"
          </blockquote>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-600 font-mono mb-14">— Alain & Éric</p>
          <div className="w-12 h-px bg-amber-600/30 mx-auto mb-14" />
          <a
            href="#formulaire"
            className="inline-block px-12 py-5 border border-amber-600/40 text-amber-500 font-bold text-[12px] uppercase tracking-[0.18em] hover:bg-amber-600/8 transition-colors"
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
                  <li><a href="#rendez-vous" className="text-slate-400 hover:text-white transition-colors">Les 3 Rendez-vous</a></li>
                  <li><a href="#pour-qui" className="text-slate-400 hover:text-white transition-colors">Pour qui</a></li>
                  <li><a href="#formulaire" className="text-slate-400 hover:text-white transition-colors">S'inscrire</a></li>
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
