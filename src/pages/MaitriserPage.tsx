import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Flame,
  Droplets,
  Menu,
  X,
  ChevronRight,
  Users,
  Zap,
  Scroll,
  Calendar,
  Compass,
  ShieldAlert,
  MessageSquare
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-card/80 backdrop-blur-md border-b border-white/10 h-[60px] flex items-center">
      <div className="max-w-7xl mx-auto px-10 w-full">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 text-brand-text-dim hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-display font-extrabold text-xl tracking-tighter text-gradient-primary">AUTHENTIK.</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-[0.85rem] font-bold text-brand-text-dim hover:text-white transition-colors uppercase tracking-wider">Le Miroir</a>
            <a href="#dualite" className="text-[0.85rem] font-bold text-brand-text-dim hover:text-white transition-colors uppercase tracking-wider">L'Assemblée</a>
            <a href="#pricing" className="text-[0.85rem] font-bold text-brand-text-dim hover:text-white transition-colors uppercase tracking-wider">L'Alchimie</a>
            <Link to="/traversee" className="text-[0.85rem] font-bold text-brand-text-dim hover:text-white transition-colors uppercase tracking-wider">La Traversée</Link>
            <a href="#pricing" className="btn-sleek btn-sleek-primary !px-4 !py-2 !text-[0.75rem] uppercase">
              Réserver la mutation
            </a>
          </div>

          <button className="md:hidden text-brand-text-dim" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-[60px] left-0 right-0 bg-brand-card border-b border-white/10 px-10 py-6 space-y-4"
        >
          <a href="#features" className="block text-sm font-bold text-brand-text-dim uppercase tracking-wider" onClick={() => setIsOpen(false)}>Le Miroir</a>
          <a href="#dualite" className="block text-sm font-bold text-brand-text-dim uppercase tracking-wider" onClick={() => setIsOpen(false)}>L'Assemblée</a>
          <a href="#pricing" className="block text-sm font-bold text-brand-text-dim uppercase tracking-wider" onClick={() => setIsOpen(false)}>L'Alchimie</a>
          <Link to="/traversee" className="block text-sm font-bold text-brand-text-dim uppercase tracking-wider" onClick={() => setIsOpen(false)}>La Traversée</Link>
          <a href="#pricing" className="block w-full text-center btn-sleek btn-sleek-primary uppercase" onClick={() => setIsOpen(false)}>
            Réserver la mutation
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-[60px] min-h-[500px] flex items-center overflow-hidden bg-hero-architecture">
    <div className="max-w-7xl mx-auto px-10 w-full">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-[2.8rem] lg:text-[4rem] font-extrabold leading-[1.1] mb-6">
            Maîtrisez l'Architecture <br /> de vos Forces
          </h1>
          <p className="text-lg text-brand-text-dim mb-8 mx-auto max-w-[550px]">
            Passez de la simple contemplation statique à la direction chirurgicale de vos talents avec le Bilan AUTHENTIK.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="btn-sleek btn-sleek-primary flex items-center justify-center gap-2">
              Activer ma puissance intérieure
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Introduction = () => (
  <section className="py-24 bg-brand-card/20">
    <div className="max-w-7xl mx-auto px-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold mb-8 leading-tight">
            À qui s'adresse <br /> <span className="text-gradient-primary">le Bilan Complet ?</span>
          </h2>
          <div className="space-y-6 text-brand-text-dim text-lg leading-relaxed">
            <p>
              De manière générale, le Bilan Complet s'adresse aux personnes qui ont déjà reçu leur <span className="text-white font-bold">"Miroir"</span> (qui n'était qu'une première étape) et qui sont désormais prêtes à voir <span className="text-white font-bold">"toute l'image"</span> de leur système intérieur, au-delà d'un simple reflet.
            </p>
            <p>
              Plus profondément, il est conçu pour les individus qui vivent un paradoxe : ils expérimentent souvent une réussite extérieure, mais ressentent un <span className="text-white font-bold">décalage intérieur</span> ou la sensation de s'être perdus en route.
            </p>
            <p className="border-l-2 border-brand-orange pl-6 italic">
              "Il s'adresse à ceux qui ont décidé d'arrêter de faire semblant et qui veulent comprendre comment leurs propres forces dominantes finissent par les enfermer."
            </p>
          </div>
        </div>
        <div className="sleek-card p-10 bg-brand-orange/5 border-brand-orange/20">
          <h3 className="text-xl font-bold mb-6 text-brand-orange uppercase tracking-widest">L'Appel à la Mutation</h3>
          <p className="text-brand-text-dim mb-6">
            C'est une démarche pour ceux qui veulent comprendre comment l'obsession de l'excellence ou la quête de perfection créent une <span className="text-white font-bold">"stagnation dorée"</span>.
          </p>
          <ul className="space-y-4">
            {[
              { title: "Démasquer les sortilèges :", desc: "Identifier les croyances limitantes qui dictent vos comportements automatiques." },
              { title: "La permission d'agir :", desc: "Recevoir l'élan nécessaire pour passer à l'action concrète, même de façon imparfaite." },
              { title: "Au-delà du reflet :", desc: "Passer de la simple contemplation à la direction chirurgicale de vos talents." },
            ].map((item) => (
              <li key={item.title} className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 shrink-0" />
                <p className="text-sm text-slate-300"><span className="text-white font-bold">{item.title}</span> {item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const StatsBar = () => (
  <div className="max-w-7xl mx-auto px-10 -mt-12 relative z-10">
    <div className="sleek-card p-8 bg-brand-card/90 backdrop-blur-xl flex justify-around items-center gap-8 flex-wrap border-white/10 shadow-2xl">
      {[
        { value: "4000", label: "Mots d'analyse" },
        { value: "90 Jours", label: "De mutation" },
        { value: "100%", label: "Alignement" },
        { value: "48h", label: "Livraison Signature" },
      ].map((s) => (
        <div key={s.label} className="text-center">
          <span className="block text-3xl font-extrabold text-white mb-1">{s.value}</span>
          <span className="text-[0.7rem] uppercase text-brand-orange font-black tracking-[0.2em]">{s.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const TransformationPath = () => {
  const steps = [
    {
      id: "01", title: "L'Assemblée des Six Âmes", icon: <Users className="w-6 h-6" />,
      desc: "L'alignement de vos forces n'est pas une question de volonté, mais une question d'harmonie écologique. Chaque archétype que vous portez—qu'il soit l'écho de la vision de Jack Dorsey, de l'imaginaire de Miyazaki, ou de l'efficacité clinique de Tim Duncan—porte une intention. Le conflit émerge lorsque ces énergies, faute de direction, entrent en collision ou se neutralisent.",
      image: "/images/assemblee_ames.png",
    },
    {
      id: "02", title: "La Chorégraphie des Forces", icon: <Zap className="w-6 h-6" />,
      desc: "La 'Chorégraphie intérieure' est cette danse subtile : une force, portée à son excès, devient la geôle d'une autre. Le pôle de cette force la transforme en friction. Sans cette compréhension, vous risquez la dérive.",
      image: "/images/choregraphie_forces.png",
    },
    {
      id: "03", title: "Briser les Sortilèges", icon: <ShieldAlert className="w-6 h-6" />,
      desc: "Nous appelons 'Sortilèges' ces croyances automatiques qui agissent comme des scripts de sabotage. Ils ne cèdent pas devant de simples affirmations positives. La psyché exige des vérités ancrées capables de réécrire votre narration interne en profondeur.",
      image: "/images/briser_sortileges.png",
    },
    {
      id: "04", title: "Activer les Contre-Incantations", icon: <Scroll className="w-6 h-6" />,
      desc: "Le Sortilège (La Croyance Automatique) vs La Contre-Incantation (La Vérité Ancrée). Des vérités ancrées capables de réécrire votre narration interne en profondeur pour remplacer les blocages par des piliers de certitude.",
      image: "/images/contre_incantations.png",
    },
    {
      id: "05", title: "Pistes d'Incarnation", icon: <Compass className="w-6 h-6" />,
      desc: "La métamorphose n'est réelle que lorsqu'elle est incarnée. La réflexion doit céder la place au geste. Pour un Virtuose, le geste salvateur consiste à 'abaisser volontairement la complexité'. C'est le courage de livrer une œuvre à 80% de sa perfection idéale pour briser le verrou de l'immobilisme.",
      image: "/images/pistes_incarnation.png",
      extras: [
        { label: "Le Courage de Trahir la Perfection :", desc: "Rendre l'œuvre accessible par l'imperfection choisie." },
        { label: "Le Sabotage du Script :", desc: "Briser délibérément vos propres automatismes de réussite." },
        { label: "L'Ouverture du Mur :", desc: "Transformer la solitude du virtuose en espace de transmission." },
      ]
    },
    {
      id: "06", title: "Feuille de Route Stratégique", icon: <Calendar className="w-6 h-6" />,
      desc: "Cette transformation s'articule sur un cycle de 90 jours, rythme optimal pour observer la mutation de vos lignes de force : 30 Jours (Observation), 60 Jours (Expérimentation), 90 Jours (Intégration).",
      image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=1200",
      extras: [
        { label: "30 Jours (Observation) :", desc: "Mise en place de rituels de veille pour identifier l'activation des sortilèges." },
        { label: "60 Jours (Expérimentation) :", desc: "Gestes d'incarnation précis. On teste la résistance du système." },
        { label: "90 Jours (Intégration) :", desc: "Consolidation des nouveaux équilibres et ancrage de la synergie." },
      ]
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-6">Du Reflet à l'Image <span className="text-gradient-primary">Complète</span></h2>
          <p className="text-brand-text-dim text-lg max-w-2xl mx-auto">Les 6 Clés du Bilan Complet pour une mutation réelle et profonde.</p>
        </div>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-black text-brand-orange/20 font-display">{step.id}</span>
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                <p className="text-brand-text-dim text-lg leading-relaxed">{step.desc}</p>
                {step.extras && (
                  <div className="grid grid-cols-1 gap-3 mt-6">
                    {step.extras.map((e) => (
                      <div key={e.label} className="p-3 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300">
                        <strong className="text-brand-orange">{e.label}</strong> {e.desc}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-brand-orange/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* L'exemple Dominique */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto pt-20"
          >
            <div className="space-y-6">
              <div className="text-center">
                <span className="badge-sleek mb-4">L'Application Concrète</span>
                <h3 className="text-3xl font-bold mb-2">À quoi ressemble vraiment un Bilan Complet ?</h3>
                <p className="text-brand-orange font-medium text-sm mb-6">
                  Voici un extrait réel du Bilan de Dominique <br />
                  <span className="opacity-60">(mix : Virtuose 20% • Exécutant 20% • Architecte 17%)</span>
                </p>
              </div>

              <div className="sleek-card p-8 bg-white/5 border-white/10 space-y-6 text-[0.95rem] leading-relaxed max-h-[600px] overflow-y-auto custom-scrollbar">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white">Le Virtuose Silencieux : Le Geste Inachevé</h4>
                  <p className="text-brand-text-dim">
                    Tu es le Virtuose. Ton entreprise, tes interventions, la transmission que tu valorises tant, sont des œuvres d'art complexes, raffinées, souvent avant-gardistes. Tu possèdes l'obsession de l'excellence qui te pousse à résoudre des problèmes que d'autres jugent insurmontables. Ta force réside dans une créativité pure, sans ego.
                  </p>
                  <p className="text-brand-text-dim">
                    Mais ce goût pour la profondeur et ce refus du superficiel t'isolent. Tu t'acharnes souvent sur des raffinements invisibles, des ajustements que seul un œil aussi exercé que le tien peut percevoir. <strong className="text-white">Ta quête obsessionnelle de perfection n'est, au fond, qu'une forme sophistiquée de la peur.</strong>
                  </p>
                  <div className="pl-4 border-l-2 border-brand-orange/30 italic text-slate-400 text-sm">
                    "L'histoire de Tim Duncan, le héros discret de la NBA, résonne ici. Son héroïsme était silencieux. Comme lui, tu crois que la qualité parle d'elle-même. Mais ce silence crée un fossé."
                  </div>
                  <p className="text-brand-text-dim">
                    <strong className="text-white">Ta dérive :</strong> La solitude amère. Elle alimente ta stagnation dorée en te faisant polir indéfiniment l'existant.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <h4 className="text-lg font-bold text-brand-orange flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5" /> Le Sortilège identifié
                  </h4>
                  <p className="text-brand-text-dim">
                    <strong>Le Sortilège de la communion parfaite :</strong> "Si mes relations ne sont pas en parfaite harmonie, alors je passe à côté de l'expérience humaine." Tu te prives de l'attachement en attendant l'absolu.
                  </p>
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded text-green-400 font-medium text-sm">
                    💫 Contre-incantation : J'accepte le frottement et la dissonance comme preuve de la vie.
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <h4 className="text-lg font-bold text-brand-blue flex items-center gap-2">
                    <Zap className="w-5 h-5" /> La piste d'incarnation
                  </h4>
                  <h5 className="font-bold text-white">Le Courage de Trahir la Perfection</h5>
                  <p className="text-brand-text-dim">
                    Ton Virtuose exige que tout soit parfait avant d'être partagé. Il est temps d'abaisser volontairement la complexité apparente de ton œuvre pour la rendre accessible. <strong>Cette piste desserre le verrou de l'idéal de perfection.</strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="pricing" className="py-24 bg-brand-card/20">
    <div className="max-w-7xl mx-auto px-10">
      <div className="text-center mb-16">
        <span className="badge-sleek mb-4">Étape 4</span>
        <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-4">Deux chemins s'ouvrent</h2>
        <p className="text-brand-text-dim text-lg">Choisissez l'intensité de votre mutation.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
        {/* Bilan Complet */}
        <div className="sleek-card p-10 bg-white/5 border-white/10 flex flex-col relative group overflow-hidden">
          <div className="font-bold text-brand-text-dim text-sm mb-1 uppercase tracking-widest">Option A</div>
          <h3 className="text-2xl font-bold mb-2">Le Bilan Archétypal Complet</h3>
          <p className="text-brand-orange text-sm font-bold mb-4">Pour ceux qui préfèrent avancer seuls</p>
          <div className="text-4xl font-extrabold mb-6 text-gradient-primary">79 €</div>
          <p className="text-brand-text-dim text-sm mb-8 leading-relaxed">
            Un document de <strong className="text-white">3 500 à 4 000 mots personnalisés</strong>, écrit spécifiquement pour toi après analyse approfondie de ton mix archétypal.
          </p>
          <div className="space-y-4 mb-10 flex-grow">
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Ce que tu reçois :</div>
            <ul className="text-[0.9rem] text-brand-text-dim space-y-3">
              {[
                "Analyse détaillée avec références culturelles",
                "La chorégraphie de tes forces",
                "Tes sortilèges démasqués",
                "Les contre-incantations",
                "5 pistes d'incarnation concrètes",
                "Feuille de route 30 / 60 / 90 jours",
                "Livré sous 72h en PDF",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-orange shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="https://www.authentik-experience.com/authentikbilancomplet-bdc"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-lg border border-brand-orange/30 text-white font-bold hover:bg-brand-orange/10 transition-colors text-center"
          >
            → Je commande mon Bilan Complet
          </a>
        </div>

        {/* Pack Signature */}
        <div className="sleek-card p-10 border-brand-orange bg-brand-orange/5 relative overflow-hidden flex flex-col group">
          <span className="badge-sleek absolute top-6 right-6">SIGNATURE</span>
          <div className="font-bold text-brand-orange text-sm mb-1 uppercase tracking-widest">Option B</div>
          <h3 className="text-2xl font-bold mb-2">Le Pack Signature AUTHENTIK</h3>
          <p className="text-brand-orange text-sm font-bold mb-4">Pour ceux qui veulent être accompagnés</p>
          <div className="text-4xl font-extrabold mb-6 text-brand-orange">249 €</div>
          <p className="text-brand-text-dim text-sm mb-8 leading-relaxed">
            Une rencontre d'<strong className="text-white">environ une heure</strong> avec Éric et Alain suivie de ton Bilan Complet enrichi de recommandations personnalisées.
          </p>
          <div className="space-y-4 mb-10 flex-grow">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-orange/60 mb-2">Ce que tu reçois :</div>
            <ul className="text-[0.9rem] text-brand-text-dim space-y-3">
              {[
                "60 min minimum en visio avec Éric et Alain",
                "Une lecture vivante de tes archétypes",
                "Éclairage sur l'envers du Miroir",
                "Bilan Complet enrichi de nos observations",
                "Recommandations personnalisées",
                "Contre-incantations ajustées en direct",
                "Enregistrement de la session",
                "Livré sous 48h après la session",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-orange shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <a
            href="https://www.authentik-experience.com/authentikpacksignature"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full btn-sleek btn-sleek-primary !py-4 text-center"
          >
            → Je réserve mon Pack Signature
          </a>
        </div>
      </div>

      {/* Comment choisir */}
      <div className="max-w-5xl mx-auto border-t border-white/5 pt-20">
        <h3 className="text-3xl font-bold text-center mb-12">Comment choisir entre les deux ?</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white/80">Choisis le Bilan Complet si :</h4>
            <ul className="space-y-4 text-brand-text-dim">
              {[
                "Tu préfères avancer seul avec un document à relire, décanter",
                "Tu veux d'abord comprendre ton système avant d'en parler",
                "Tu aimes avoir le temps de digérer l'information à ton rythme",
                "79 € te semble juste pour ce niveau d'analyse",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <ArrowRight className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-brand-orange">Choisis le Pack Signature si :</h4>
            <ul className="space-y-4 text-brand-text-dim">
              {[
                "Tu sens qu'il te faut une présence pour déplier ce qui se joue",
                "Tu veux poser des questions, réagir en direct, être accompagné",
                "Tu préfères une lecture vivante où l'on explore ensemble",
                "Tu veux que tes contre-incantations soient ajustées en direct",
                "249 € te semble cohérent pour environ une heure avec nous",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start">
                  <ArrowRight className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 text-center italic text-brand-text-dim">
          "Il n'y a pas de bon ou mauvais choix. Juste celui qui correspond à où tu en es aujourd'hui."
        </p>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Laurent", age: 46, role: "Architecte 28% / Conquérant 22%",
      quote: "Le Bilan m'a montré quelque chose que je n'avais jamais vu : les tensions entre mes forces. Les 'sortilèges'... voir mes croyances limitantes nommées avec cette précision, c'était troublant. Les contre-incantations sont devenues mes mantras. Je les relis chaque semaine."
    },
    {
      name: "Sophie", age: 41, role: "Exécutant 24% / Virtuose 21% / Héritier 18%",
      quote: "Le Pack Signature a été un déclic. La feuille de route 30/60/90 jours n'est pas un plan d'action générique. Ce sont des rituels d'observation. Ça change tout."
    },
    {
      name: "Marc", age: 48, role: "Conquérant 28% / Architecte 22% / Exécutant 18%",
      quote: "'Le Courage de Trahir la Perfection', 'Le Sabotage du Script'... ce ne sont pas des métaphores. Ce sont des gestes à poser. Je l'ai imprimé, annoté. C'est devenu ma boussole."
    }
  ];

  return (
    <section id="testimonials" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-extrabold mb-4">Ce qu'en disent ceux qui l'ont reçu</h2>
          <p className="text-brand-text-dim text-lg">Des retours d'expérience sur la mutation Authentik.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="sleek-card p-8 bg-white/5 border-white/10 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}, {t.age} ans</div>
                  <div className="text-[0.7rem] text-brand-orange font-bold uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
              <p className="text-brand-text-dim italic leading-relaxed flex-grow">"{t.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Dualite = () => (
  <section id="dualite" className="py-32 relative overflow-hidden bg-fire-water border-y border-white/5">
    <div className="max-w-7xl mx-auto px-10 relative z-10">
      <div className="text-center mb-20">
        <span className="badge-sleek mb-4">Les Guides</span>
        <h2 className="font-display text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          La Dualité Fondatrice : <br /> <span className="text-gradient-primary">Éric (Le Feu) et Alain (L'Eau)</span>
        </h2>
        <p className="text-brand-text-dim text-lg max-w-3xl mx-auto leading-relaxed">
          Le processus AUTHENTIK n'est pas un parcours linéaire, c'est une alchimie. Elle repose sur la tension féconde entre deux énergies radicales. De cette dualité naît <strong className="text-white">Le Souffle</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="sleek-card p-10 bg-brand-orange/5 border-brand-orange/20 relative group overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <Flame className="w-40 h-40 text-brand-orange" />
          </div>
          <div className="flex items-center gap-6 mb-8 relative z-10">
            <div className="w-20 h-20 rounded-full bg-brand-orange/20 border-2 border-brand-orange flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(249,115,22,0.4)] shrink-0">
              🔥
            </div>
            <div>
              <h4 className="text-3xl font-extrabold text-brand-orange">Éric</h4>
              <div className="text-[0.75rem] font-black uppercase tracking-[0.2em] opacity-60">Le Feu — L'Agitateur</div>
            </div>
          </div>
          <p className="text-brand-text-dim leading-relaxed text-lg relative z-10">
            Riche d'un parcours de bâtisseur ayant tout perdu pour mieux se reconstruire, il apporte la clarté par l'impulsion. Son rôle est de bousculer vos certitudes douces pour faire éclater la vérité de vos blocages.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="sleek-card p-10 bg-brand-blue/5 border-brand-blue/20 relative group overflow-hidden"
        >
          <div className="absolute -left-10 -bottom-10 opacity-10 group-hover:opacity-20 transition-opacity">
            <Droplets className="text-brand-blue w-40 h-40" />
          </div>
          <div className="flex items-center gap-6 mb-8 relative z-10">
            <div className="w-20 h-20 rounded-full bg-brand-blue/20 border-2 border-brand-blue flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(14,165,233,0.4)] shrink-0">
              💧
            </div>
            <div>
              <h4 className="text-3xl font-extrabold text-brand-blue">Alain</h4>
              <div className="text-[0.75rem] font-black uppercase tracking-[0.2em] opacity-60">L'Eau — Le Guide</div>
            </div>
          </div>
          <p className="text-brand-text-dim leading-relaxed text-lg relative z-10">
            Ayant quitté la sécurité de 25 ans de carrière pour la cohérence de l'âme, il incarne la profondeur fertile. Il tient l'espace, accueille le chaos et permet au système de se réassembler avec justesse.
          </p>
        </motion.div>
      </div>

      <div className="mt-20 text-center">
        <div className="inline-block sleek-card px-10 py-8 bg-white/5 border-white/10 italic text-xl text-slate-200 max-w-3xl relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 bg-brand-bg text-[10px] font-bold uppercase tracking-[0.3em] text-brand-orange">
            Le Souffle
          </div>
          "Le Feu génère le mouvement ; l'Eau offre l'ancrage. Entre les deux circule le Souffle, le lien qui permet à votre nouvelle identité de respirer."
        </div>
      </div>
    </div>
  </section>
);

export default function MaitriserPage() {
  return (
    <div className="min-h-screen font-display bg-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <StatsBar />
        <TransformationPath />
        <Pricing />
        <Testimonials />
        <Dualite />

        {/* Engagement */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="sleek-card p-12 bg-brand-orange/5 border-brand-orange/20 relative"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] text-white shadow-lg shadow-brand-orange/20 btn-sleek-primary">
                L'Engagement Authentik
              </div>
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed italic mb-8">
                "Nous ne vendons pas de certitudes, mais de la résonance. Si, dans les 7 jours, vous estimez que ce bilan ne reflète pas votre identité profonde, nous vous remboursons intégralement."
              </p>
              <div className="w-16 h-1 bg-brand-orange/30 mx-auto rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 text-center">
          <h2 className="font-display text-4xl font-extrabold mb-8">
            Le Bilan est un miroir qui <br /> <span className="text-gradient-primary">te regarde en retour.</span>
          </h2>
          <a href="#pricing" className="btn-sleek btn-sleek-primary flex items-center gap-3 mx-auto w-fit">
            Maîtriser l'Architecture de mes Forces
            <ChevronRight className="w-6 h-6" />
          </a>
        </section>
      </main>

      <footer className="h-[80px] border-t border-white/10 flex items-center">
        <div className="max-w-7xl mx-auto px-10 w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-brand-text-dim hover:text-white transition-colors text-sm">← Accueil</Link>
            <Link to="/traversee" className="text-brand-text-dim hover:text-white transition-colors text-sm">La Traversée</Link>
          </div>
          <div className="text-[0.8rem] text-brand-text-dim">
            © 2026 AUTHENTIK — Le miroir qui vous regarde en retour.
          </div>
        </div>
      </footer>
    </div>
  );
}
