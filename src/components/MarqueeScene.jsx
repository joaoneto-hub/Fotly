// Ilustrações em SVG (paisagem 200x130) para os cards do carrossel de tipos de trabalho.

const scenes = {
  // Casal no campo ao pôr do sol
  Casamento: {
    bg: ['#F2A65A', '#7A4152'],
    art: (
      <>
        <circle cx="62" cy="40" r="12" fill="#FFD9A0" opacity="0.85" />
        <path d="M0 48 Q30 42 55 46 T100 44 V65 H0 Z" fill="#4A2A38" />
        <circle cx="45" cy="30" r="2.6" fill="#2A1822" />
        <path d="M41.5 50 L42.3 35 Q45 33 47.7 35 L48.3 50 Z" fill="#2A1822" />
        <circle cx="52" cy="31" r="2.4" fill="#2A1822" />
        <path d="M47.5 51 Q50 39 50.6 36 Q52 34 53.6 36 Q55 41 58.5 51 Z" fill="#2A1822" />
      </>
    ),
  },
  // Corredores na rua
  'Corrida de rua': {
    bg: ['#7FA3C4', '#2F3A45'],
    art: (
      <>
        <rect x="6" y="14" width="10" height="30" fill="#3E4C5A" />
        <rect x="18" y="8" width="12" height="36" fill="#465666" />
        <rect x="74" y="12" width="14" height="32" fill="#3E4C5A" />
        <rect x="88" y="20" width="10" height="24" fill="#465666" />
        <path d="M0 44 H100 V65 H0 Z" fill="#3A3F45" />
        <path d="M0 54 H100" stroke="#E9E2D3" strokeWidth="0.8" strokeDasharray="6 5" />
        {[[38, 1], [54, 0.9], [68, 0.8]].map(([x, s], i) => (
          <g key={i} transform={`translate(${x} 22) scale(${s})`} fill="#1E252C">
            <circle cx="0" cy="0" r="3" />
            <path d="M-2 4 L3 4 L4 14 L-1 14 Z" />
            <path d="M-1 13 L-6 22 M3 13 L7 21 L10 20" stroke="#1E252C" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <path d="M-1 6 L-6 11 M3 6 L8 9" stroke="#1E252C" strokeWidth="2" strokeLinecap="round" fill="none" />
            <rect x="-1" y="7" width="4" height="3" fill="#F7F4EC" />
          </g>
        ))}
      </>
    ),
  },
  // Silhueta de perfil contra a janela
  'Ensaio gestante': {
    bg: ['#E8CDB2', '#8E6E58'],
    art: (
      <>
        <rect x="58" y="6" width="30" height="46" rx="1" fill="#FBF1E2" opacity="0.8" />
        <path d="M73 6 V52 M58 29 H88" stroke="#C9A98C" strokeWidth="1.2" />
        <rect y="52" width="100" height="13" fill="#6E5A4B" />
        <path
          d="M40 14 Q46 13 46.5 19 Q47 23 44.5 24.5 L45 28 Q50 30 52 36 Q56 42 50 47 L48 56 H36 L37 40 Q35 32 38 27 L37.5 24 Q34.5 21 36 17 Q37 14 40 14 Z"
          fill="#3B2C22"
        />
      </>
    ),
  },
  // Capelos jogados para o alto
  Formatura: {
    bg: ['#9FB4CC', '#3D3A33'],
    art: (
      <>
        {[[22, 18, -18], [48, 12, 10], [72, 20, -6], [36, 32, 22], [62, 34, -24]].map(([x, y, r], i) => (
          <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
            <path d="M-8 0 L0 -4 L8 0 L0 4 Z" fill="#1F1E1B" />
            <rect x="-4" y="2" width="8" height="3" fill="#2B2925" />
            <path d="M0 0 L6 3 V8" stroke="#E2B84A" strokeWidth="0.8" fill="none" />
          </g>
        ))}
        <path d="M0 65 V52 Q8 44 16 52 Q24 42 32 51 Q40 44 48 52 Q56 42 64 51 Q72 45 80 52 Q88 43 100 50 V65 Z" fill="#26241F" />
      </>
    ),
  },
  // Palco com feixes de luz e plateia
  Show: {
    bg: ['#2A1F3D', '#120F18'],
    art: (
      <>
        <path d="M20 0 L4 50 H30 Z" fill="#B46CFF" opacity="0.28" />
        <path d="M50 0 L36 50 H64 Z" fill="#FF6A3D" opacity="0.3" />
        <path d="M80 0 L70 50 H96 Z" fill="#5EC8FF" opacity="0.28" />
        <rect y="40" width="100" height="4" fill="#3A2F4A" />
        <circle cx="50" cy="30" r="2.4" fill="#0C0A10" />
        <path d="M47.5 33 H52.5 L53 41 H47 Z" fill="#0C0A10" />
        <path d="M0 65 V54 Q5 48 10 54 Q15 47 20 53 Q25 48 30 54 Q35 46 40 53 Q45 48 50 54 Q55 47 60 53 Q65 48 70 54 Q75 46 80 53 Q85 48 90 54 Q95 48 100 52 V65 Z" fill="#08070B" />
        <path d="M24 49 L22 40 M76 48 L79 39" stroke="#08070B" strokeWidth="2" strokeLinecap="round" />
      </>
    ),
  },
  // Bebê enrolado dormindo
  Newborn: {
    bg: ['#EFE4D6', '#B9A894'],
    art: (
      <>
        <ellipse cx="50" cy="46" rx="40" ry="14" fill="#D9C9B4" />
        <path d="M30 40 Q32 28 52 28 Q72 28 72 40 Q72 50 52 50 Q32 50 30 40 Z" fill="#F7F1E8" />
        <path d="M44 30 Q56 36 70 34 M40 46 Q52 40 66 46" stroke="#E4D8C6" strokeWidth="1.2" fill="none" />
        <circle cx="30" cy="37" r="8" fill="#F1C9AE" />
        <path d="M23 33 Q30 26 37 32 Q33 30 30 30 Q26 30 23 33 Z" fill="#E4D8C6" />
        <path d="M26.5 38 q1.5 1 3 0 M31.5 38 q1.5 1 3 0" stroke="#8E6E58" strokeWidth="0.6" fill="none" strokeLinecap="round" />
      </>
    ),
  },
  // Skyline com janelas acesas
  Corporativo: {
    bg: ['#6F86A3', '#2C3646'],
    art: (
      <>
        <rect x="8" y="22" width="18" height="43" fill="#263040" />
        <rect x="30" y="8" width="20" height="57" fill="#1F2835" />
        <rect x="54" y="16" width="16" height="49" fill="#263040" />
        <rect x="74" y="26" width="20" height="39" fill="#1F2835" />
        {Array.from({ length: 24 }, (_, i) => {
          const col = i % 3
          const row = Math.floor(i / 3)
          return (
            <rect
              key={i}
              x={33 + col * 6}
              y={12 + row * 6}
              width="3"
              height="3"
              fill="#F3D9A0"
              opacity={(i * 7) % 5 < 3 ? 0.85 : 0.2}
            />
          )
        })}
        {Array.from({ length: 12 }, (_, i) => (
          <rect key={`b${i}`} x={77 + (i % 3) * 6} y={30 + Math.floor(i / 3) * 7} width="3" height="3" fill="#F3D9A0" opacity={i % 4 ? 0.75 : 0.2} />
        ))}
      </>
    ),
  },
  // Bolo com velas e balões
  Aniversário: {
    bg: ['#F4C7B8', '#9C6E6A'],
    art: (
      <>
        <circle cx="18" cy="16" r="7" fill="#FF6A3D" opacity="0.9" />
        <circle cx="82" cy="14" r="7" fill="#5EC8FF" opacity="0.85" />
        <circle cx="74" cy="24" r="5.5" fill="#F3D9A0" />
        <path d="M18 23 Q16 32 20 42 M82 21 Q84 30 80 40 M74 29.5 Q72 36 76 42" stroke="#F7F4EC" strokeWidth="0.5" fill="none" />
        <rect y="54" width="100" height="11" fill="#6E4B48" />
        <rect x="34" y="38" width="32" height="16" rx="2" fill="#FBF7F0" />
        <path d="M34 43 Q38 47 42 43 Q46 47 50 43 Q54 47 58 43 Q62 47 66 43" stroke="#E8B9B0" strokeWidth="1.6" fill="none" />
        {[42, 50, 58].map((x) => (
          <g key={x}>
            <rect x={x - 0.8} y="30" width="1.6" height="8" fill="#5EC8FF" />
            <path d={`M${x} 25 Q${x + 2} 28 ${x} 30 Q${x - 2} 28 ${x} 25 Z`} fill="#FFC35A" />
          </g>
        ))}
      </>
    ),
  },
  // Campo com gol e bola
  Futebol: {
    bg: ['#9CC7E8', '#5B8CB0'],
    art: (
      <>
        <rect y="30" width="100" height="35" fill="#3F7A48" />
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={i * 20} y="30" width="10" height="35" fill="#468553" />
        ))}
        <path d="M0 50 H100" stroke="#EAF2E6" strokeWidth="0.8" opacity="0.7" />
        <path d="M60 30 V14 H92 V30" stroke="#F7F4EC" strokeWidth="1.6" fill="none" />
        <path d="M62 16 H90 M62 20 H90 M62 24 H90 M66 14 V30 M72 14 V30 M78 14 V30 M84 14 V30" stroke="#F7F4EC" strokeWidth="0.3" opacity="0.6" />
        <ellipse cx="32" cy="55" rx="7" ry="1.6" fill="#000" opacity="0.2" />
        <circle cx="32" cy="48" r="6" fill="#F7F4EC" />
        <path d="M32 45 l2.4 1.8 -0.9 2.8 h-3 l-0.9 -2.8 Z" fill="#1E1E1E" />
        <path d="M32 45 V42.2 M34.4 46.8 L37.4 45.8 M33.5 49.6 L35.2 52.4 M30.5 49.6 L28.8 52.4 M29.6 46.8 L26.6 45.8" stroke="#1E1E1E" strokeWidth="0.6" />
      </>
    ),
  },
  // Vitral com luz e vela
  Batizado: {
    bg: ['#D8CCBC', '#6B6157'],
    art: (
      <>
        <path d="M50 8 L30 65 H70 Z" fill="#FFF4DA" opacity="0.25" />
        <path d="M42 34 V16 A8 8 0 0 1 58 16 V34 Z" fill="#9FB4CC" />
        <path d="M50 8 V34 M42 22 H58" stroke="#4F463E" strokeWidth="1" />
        <path d="M42 16 A8 8 0 0 1 50 8 V22 H42 Z" fill="#E8B9B0" opacity="0.7" />
        <path d="M58 16 A8 8 0 0 0 50 8 V22 H58 Z" fill="#F3D9A0" opacity="0.7" />
        <rect y="54" width="100" height="11" fill="#4F463E" />
        <rect x="47.5" y="40" width="5" height="14" rx="1" fill="#FBF7F0" />
        <path d="M50 33 Q52.5 36.5 50 39.5 Q47.5 36.5 50 33 Z" fill="#FFC35A" />
        <circle cx="50" cy="36.5" r="5" fill="#FFD08A" opacity="0.25" />
      </>
    ),
  },
}

export default function MarqueeScene({ label, id }) {
  const scene = scenes[label]
  if (!scene) return null
  const [from, to] = scene.bg
  return (
    <svg className="marquee__scene" viewBox="0 0 100 65" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`mq-bg-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
        <linearGradient id={`mq-shade-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <rect width="100" height="65" fill={`url(#mq-bg-${id})`} />
      {scene.art}
      <rect width="100" height="65" fill={`url(#mq-shade-${id})`} />
    </svg>
  )
}
