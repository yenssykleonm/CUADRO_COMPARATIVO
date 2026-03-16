import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Baby, 
  GraduationCap, 
  Atom, 
  Telescope, 
  Eclipse as EclipseIcon, 
  Trophy, 
  Clock, 
  Rocket, 
  MessageCircle,
  Sparkles,
  Brain
} from 'lucide-react';

interface ComparisonCard {
  id: string;
  title: string;
  einstein: string;
  eddington: string;
  icon: React.ReactNode;
  category: string;
}

const comparisonData: ComparisonCard[] = [
  {
    id: 'origins',
    title: 'Orígenes y Formación',
    einstein: 'Alemán de nacimiento (1879), se formó en la ETH de Zúrich. Su mente inquieta lo llevó a cuestionar la física clásica desde joven.',
    eddington: 'Británico (1882), educado en el prestigioso Trinity College de Cambridge. Fue un prodigio matemático con una formación académica impecable.',
    icon: <Baby className="w-10 h-10" />,
    category: 'Raíces'
  },
  {
    id: 'personality',
    title: 'Personalidad Científica',
    einstein: 'Einstein se caracterizaba por su pensamiento independiente y su capacidad para desafiar las ideas dominantes de la física clásica.',
    eddington: 'Eddington era reconocido por su capacidad pedagógica y su habilidad para explicar conceptos complejos de la astrofísica al público académico.',
    icon: <GraduationCap className="w-10 h-10" />,
    category: 'Carácter'
  },
  {
    id: 'approach',
    title: 'Enfoque Científico',
    einstein: 'Físico teórico puro. Utilizaba experimentos mentales y ecuaciones complejas para redefinir la naturaleza del espacio y el tiempo.',
    eddington: 'Astrofísico y observador. Su genialidad residía en conectar las teorías abstractas con la observación real de las estrellas y la radiación.',
    icon: <Brain className="w-10 h-10" />,
    category: 'Método'
  },
  {
    id: 'discoveries',
    title: 'Aportes Maestros',
    einstein: 'Famoso por la Relatividad General (gravedad como curvatura) y el efecto fotoeléctrico. Buscó siempre una teoría unificada del todo.',
    eddington: 'Pionero en entender el interior de las estrellas (límite de Eddington) y el principal puente de la relatividad hacia el mundo anglosajón.',
    icon: <Atom className="w-10 h-10" />,
    category: 'Ciencia'
  },
  {
    id: 'eclipse',
    title: 'La Prueba de 1919',
    einstein: 'Planteó que la gravedad del Sol curvaría la luz. El éxito del experimento lo catapultó a la fama mundial de la noche a la mañana.',
    eddington: 'Lideró la expedición a la Isla de Príncipe para fotografiar el eclipse, arriesgando su reputación para validar la teoría de un "enemigo" en guerra.',
    icon: <EclipseIcon className="w-10 h-10" />,
    category: 'Hito'
  },
  {
    id: 'recognition',
    title: 'Premios y Prestigio',
    einstein: 'Nobel de Física en 1921. Aunque es el rostro de la relatividad, el premio fue por sus estudios sobre la luz.',
    eddington: 'Nunca recibió el Nobel, pero su legado en la astrofísica moderna y su integridad científica le otorgaron un respeto eterno.',
    icon: <Trophy className="w-10 h-10" />,
    category: 'Mérito'
  },
  {
    id: 'history',
    title: 'Contexto y Ética',
    einstein: 'Vivió entre las tensiones de dos guerras mundiales, manteniendo siempre una postura crítica ante el nacionalismo alemán.',
    eddington: 'Como cuáquero y pacifista, vio en la ciencia un lenguaje universal capaz de unir a naciones enfrentadas por el conflicto bélico.',
    icon: <Clock className="w-10 h-10" />,
    category: 'Valores'
  },
  {
    id: 'impact',
    title: 'Huella y Legado',
    einstein: 'Se convirtió en el arquetipo del genio. Su nombre es hoy sinónimo de inteligencia y curiosidad sin límites.',
    eddington: 'Fue el gran comunicador de la ciencia. Sin su labor de difusión, la relatividad habría tardado décadas en ser aceptada globalmente.',
    icon: <Sparkles className="w-10 h-10" />,
    category: 'Efecto'
  }
];

// OPINIÓN PERSONAL
const OPINION_SERGIO = "Lo que más me llamó la atención de Albert Einstein fue su capacidad de cuestionar las bases de la física tradicional mediante el pensamiento abstracto. Su teoría de la relatividad demuestra que la ciencia no solo avanza mediante experimentos, sino también a través de la imaginación y la formulación matemática rigurosa. Por otra parte, Arthur Eddington me impresionó por su valentía intelectual al comprobar experimentalmente la teoría de Einstein en 1919, incluso en un contexto político marcado por la Primera Guerra Mundial. Esto demuestra que la ciencia puede convertirse en un puente entre naciones y culturas.";
const OPINION_YENSSY = "Desde mi perspectiva, la historia entre Einstein y Eddington refleja cómo la ciencia necesita tanto la teoría como la verificación experimental. Einstein desarrolló ideas revolucionarias sobre el espacio y el tiempo, mientras que Eddington tuvo el papel crucial de confirmarlas mediante observaciones astronómicas. Este trabajo conjunto evidencia que el conocimiento científico es un proceso colaborativo que se construye con diferentes enfoques y habilidades.";

export default function App() {
  const [extraOpinion, setExtraOpinion] = React.useState('');
  const [selectedId, setSelectedId] = React.useState<string | null>(null);
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stars = React.useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`
    }));
  }, []);

  return (
    <div className="min-h-screen font-sans relative">
      <div className="space-bg" />
      <div className="grid-overlay" />
      
      {/*  */}
      <motion.div 
        className="curvature-point"
        animate={{ 
          left: mousePos.x - 200, 
          top: mousePos.y - 200 
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      />
      
      {/*  */}
      {stars.map(star => (
        <div 
          key={star.id}
          className="star"
          style={{ 
            top: star.top, 
            left: star.left, 
            width: star.size, 
            height: star.size,
            '--duration': star.duration 
          } as any}
        />
      ))}

      <header className="pt-16 pb-8 text-center px-4">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="inline-block"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Einstein Vs Eddington
          </h1>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl text-blue-300 font-light">Albert Einstein</span>
              <span className="text-xl text-white/40">&</span>
              <span className="text-2xl text-green-300 font-light">Arthur Eddington</span>
            </div>
            <div className="mt-4 text-white/60 text-sm font-light uppercase tracking-widest">
              Presentado por: Sergio López & Yenssy León
            </div>
            <div className="text-white/40 text-xs font-light uppercase tracking-widest">
              Universidad de La Salle
            </div>
          </div>
        </motion.div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Intro Section with "Caricatures" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="cartoon-card einstein-accent p-8 text-center bg-blue-900/20 border-white/20"
          >
            <div className="w-24 h-24 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-6 border border-blue-400/30">
              <Brain size={48} className="text-blue-400" />
            </div>
            <h2 className="font-display text-3xl font-semibold text-blue-300 mb-4">Albert Einstein</h2>
            <p className="text-lg font-light text-blue-100/80 leading-relaxed text-left">
              Más que un científico, Einstein fue un visionario que transformó nuestra comprensión del cosmos. Desde su nacimiento en Alemania hasta su legado en Princeton, dedicó su vida a descifrar los misterios del tiempo y la energía. Su mayor hazaña, la Relatividad General, no solo cambió las leyes de la física, sino que nos enseñó a ver la gravedad como una danza geométrica del espacio-tiempo. Aunque el Nobel llegó por su estudio de la luz, su verdadera revolución fue mental.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="cartoon-card eddington-accent p-8 text-center bg-green-900/20 border-white/20"
          >
            <div className="w-24 h-24 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6 border border-green-400/30">
              <Sparkles size={48} className="text-green-400" />
            </div>
            <h2 className="font-display text-3xl font-semibold text-green-300 mb-4">Arthur Eddington</h2>
            <p className="text-lg font-light text-green-100/80 leading-relaxed text-left">
              Eddington fue el puente necesario entre la teoría abstracta y la realidad estelar. Este astrónomo británico no solo exploró el corazón de las estrellas, sino que tuvo la valentía de defender la ciencia por encima de la política. Al liderar la expedición de 1919, transformó una hipótesis audaz en una verdad comprobada, demostrando que incluso la luz se rinde ante la gravedad. Su pacifismo y su claridad para explicar lo complejo lo convirtieron en un pilar de la astrofísica.
            </p>
          </motion.div>
        </div>

        {/* Interactive Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {comparisonData.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              className="cartoon-card p-8 cursor-pointer hover:bg-white/10 flex flex-col items-center text-center border-white/10"
            >
              <div className="mb-6 p-5 bg-white/5 rounded-2xl border border-white/10">
                {item.icon}
              </div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
                {item.category}
              </span>
              <h3 className="font-display text-2xl font-medium mb-2">{item.title}</h3>
              <p className="text-xs opacity-40 font-light">Descubre su historia</p>
            </motion.div>
          ))}
        </div>

        {/* Modal for Comparison */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />
              <motion.div 
                layoutId={selectedId}
                className="cartoon-card w-full max-w-2xl bg-slate-900 p-10 relative z-10 border-blue-500/50"
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                >
                  <span className="text-2xl font-light">✕</span>
                </button>
                
                <div className="flex justify-center mb-8">
                  <div className="p-6 bg-blue-500/10 rounded-3xl border border-blue-400/20 text-blue-400">
                    {comparisonData.find(d => d.id === selectedId)?.icon}
                  </div>
                </div>

                <h3 className="font-display text-4xl text-center font-bold text-white mb-10">
                  {comparisonData.find(d => d.id === selectedId)?.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <h4 className="font-display text-xl font-semibold text-blue-400">Einstein</h4>
                    <p className="text-lg font-light leading-relaxed text-blue-50/80">
                      {comparisonData.find(d => d.id === selectedId)?.einstein}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-display text-xl font-semibold text-green-400">Eddington</h4>
                    <p className="text-lg font-light leading-relaxed text-green-50/80">
                      {comparisonData.find(d => d.id === selectedId)?.eddington}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* SEMEJANZAS Y DIFERENCIAS */}
        <section className="mb-24">
          <div className="cartoon-card p-12 bg-white/5 border-white/10">
            <h2 className="font-display text-4xl font-bold text-center mb-12">Semejanzas y Diferencias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-blue-500/5 p-8 rounded-3xl border border-blue-400/20">
                <h3 className="font-display text-2xl font-bold text-blue-300 mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-300 rounded-full" />
                  Semejanzas
                </h3>
                <ul className="space-y-4 text-lg font-light text-blue-50/70">
                  <li className="flex gap-3"><span>•</span> Ambos buscaban la verdad fundamental del universo más allá de las fronteras nacionales.</li>
                  <li className="flex gap-3"><span>•</span> Compartían un profundo respeto por el método científico y la integridad intelectual.</li>
                  <li className="flex gap-3"><span>•</span> Los dos arriesgaron sus carreras por una idea en la que creían fervientemente.</li>
                </ul>
              </div>
              <div className="bg-green-500/5 p-8 rounded-3xl border border-green-400/20">
                <h3 className="font-display text-2xl font-bold text-green-300 mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-300 rounded-full" />
                  Diferencias
                </h3>
                <ul className="space-y-4 text-lg font-light text-green-50/70">
                  <li className="flex gap-3"><span>•</span> <strong>Einstein:</strong> Trabajaba desde la teoría pura y la intuición matemática (el "pensador").</li>
                  <li className="flex gap-3"><span>•</span> <strong>Eddington:</strong> Se basaba en la observación empírica y la evidencia física (el "comprobador").</li>
                  <li className="flex gap-3"><span>•</span> <strong>Contexto:</strong> Uno era un físico teórico en Berlín; el otro, un astrónomo observacional en Cambridge.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* OPINIONES */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="cartoon-card p-12 bg-gradient-to-br from-slate-900 to-indigo-950 border-white/10">
            <div className="flex items-center gap-4 mb-10">
              <MessageCircle size={32} className="text-blue-400" />
              <h2 className="font-display text-4xl font-bold text-white">Reflexión Final</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <div className="text-xs font-bold text-blue-400 mb-4 uppercase tracking-widest">¿Qué opina Sergio?</div>
                <p className="text-lg font-light italic leading-relaxed text-white/90">"{OPINION_SERGIO}"</p>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <div className="text-xs font-bold text-green-400 mb-4 uppercase tracking-widest">¿Qué opina Yenssy?</div>
                <p className="text-lg font-light italic leading-relaxed text-white/90">"{OPINION_YENSSY}"</p>
              </div>
            </div>

            <p className="text-lg mb-6 font-light text-white/60">
              ¿Qué piensas tú sobre este encuentro?
            </p>

            <textarea 
              value={extraOpinion}
              onChange={(e) => setExtraOpinion(e.target.value)}
              placeholder="Escribe tus pensamientos aquí..."
              className="w-full h-32 p-6 bg-black/40 border border-white/10 rounded-2xl text-white font-sans text-lg focus:border-blue-500/50 outline-none transition-all resize-none mb-8"
            />

            {extraOpinion && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-500/10 p-6 rounded-2xl border border-blue-400/20"
              >
                <div className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-widest">Tu nota:</div>
                <p className="text-lg font-light italic text-white/80">"{extraOpinion}"</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Bibliography Section (APA) */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="p-8 border-t border-white/10">
            <h2 className="font-display text-2xl font-bold text-white/80 mb-6">Fuentes Bibliográficas</h2>
            <div className="space-y-4 text-sm font-light text-white/40 italic">
              <p className="pl-8 -indent-8">
                Douglas, A. V. (s. f.). Arthur Eddington. Encyclopaedia Britannica. https://www.britannica.com/biography/Arthur-Eddington
              </p>
              <p className="pl-8 -indent-8">
                Einstein, A. (1922/2026). Albert Einstein - Biographical. NobelPrize.org. https://www.nobelprize.org/prizes/physics/1921/einstein/biographical/
              </p>
              <p className="pl-8 -indent-8">
                Institute for Advanced Study. (s. f.). Albert Einstein: In brief. https://www.ias.edu/albert-einstein-brief
              </p>
              <p className="pl-8 -indent-8">
                Kaku, M. (2026, 10 de marzo). Albert Einstein. Encyclopaedia Britannica. https://www.britannica.com/biography/Albert-Einstein
              </p>
              <p className="pl-8 -indent-8">
                Royal Museums Greenwich. (s. f.). 1919 solar eclipse. https://www.rmg.co.uk/stories/space-astronomy/1919-solar-eclipse
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center opacity-40 font-sans">
        <p className="text-sm font-light tracking-widest uppercase">Página experimental realizada para la asignatura: HABILIDADES BÁSICAS.</p>
      </footer>
    </div>
  );
}
