// Ilustrações em SVG que simulam as fotos de um álbum de casamento no mockup do Hero.
// Cada cena preenche o quadro (slice), como uma foto recortada em 3:4.

function Defs({ id, from, to }) {
  return (
    <defs>
      <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor={from} />
        <stop offset="1" stopColor={to} />
      </linearGradient>
      <radialGradient id={`vig-${id}`} cx="0.5" cy="0.45" r="0.75">
        <stop offset="0.55" stopColor="#000" stopOpacity="0" />
        <stop offset="1" stopColor="#000" stopOpacity="0.45" />
      </radialGradient>
    </defs>
  )
}

const scenes = [
  // 0 — Casal ao pôr do sol
  (id) => (
    <>
      <Defs id={id} from="#F2A65A" to="#6B3B4A" />
      <rect width="60" height="80" fill={`url(#bg-${id})`} />
      <circle cx="30" cy="44" r="13" fill="#FFD9A0" opacity="0.85" />
      <path d="M0 60 Q15 54 30 58 T60 56 V80 H0 Z" fill="#3A2230" />
      {/* noivo */}
      <circle cx="25" cy="37" r="3.2" fill="#2A1822" />
      <path d="M20.5 62 L21.5 43 Q25 40.5 28.5 43 L29 62 Z" fill="#2A1822" />
      {/* noiva */}
      <circle cx="34" cy="38.5" r="3" fill="#2A1822" />
      <path d="M28 63 Q31 48 32 44 Q34 41.5 36 44 Q37.5 50 42 63 Z" fill="#2A1822" />
    </>
  ),
  // 1 — Alianças
  (id) => (
    <>
      <Defs id={id} from="#3B4A4A" to="#1E2828" />
      <rect width="60" height="80" fill={`url(#bg-${id})`} />
      <circle cx="12" cy="16" r="5" fill="#E9D3A0" opacity="0.12" />
      <circle cx="48" cy="22" r="7" fill="#E9D3A0" opacity="0.1" />
      <circle cx="44" cy="64" r="4" fill="#E9D3A0" opacity="0.12" />
      <ellipse cx="30" cy="58" rx="20" ry="4" fill="#000" opacity="0.3" />
      <circle cx="25" cy="44" r="10" fill="none" stroke="#D9B46A" strokeWidth="3.2" />
      <circle cx="36" cy="46" r="8.5" fill="none" stroke="#F0D9A8" strokeWidth="2.6" />
      <path d="M18 38 A10 10 0 0 1 24 34.2" fill="none" stroke="#FFF3D6" strokeWidth="1" strokeLinecap="round" opacity="0.8" />
      <path d="M33 47 l3 -5 l3 5 l-3 2.5 Z" fill="#F7F4EC" opacity="0.9" />
    </>
  ),
  // 2 — Buquê
  (id) => (
    <>
      <Defs id={id} from="#8FA394" to="#4E5F55" />
      <rect width="60" height="80" fill={`url(#bg-${id})`} />
      <path d="M26 50 L22 78 M30 50 L30 78 M34 50 L38 78" stroke="#3F5A3A" strokeWidth="2" />
      <path d="M24 60 Q30 66 36 60 L35 66 Q30 70 25 66 Z" fill="#F2EEE4" />
      <ellipse cx="18" cy="40" rx="5" ry="2.5" fill="#5E7D55" transform="rotate(-30 18 40)" />
      <ellipse cx="42" cy="40" rx="5" ry="2.5" fill="#5E7D55" transform="rotate(30 42 40)" />
      <circle cx="24" cy="38" r="6" fill="#F4E6E0" />
      <circle cx="36" cy="38" r="6" fill="#E8B9B0" />
      <circle cx="30" cy="31" r="6.5" fill="#FBF6F0" />
      <circle cx="30" cy="44" r="6" fill="#F4D3C8" />
      <circle cx="20" cy="47" r="3.5" fill="#FBF6F0" />
      <circle cx="40" cy="47" r="3.5" fill="#F4E6E0" />
      <circle cx="30" cy="31" r="2" fill="#E9D7C6" />
      <circle cx="36" cy="38" r="1.8" fill="#D59A90" />
    </>
  ),
  // 3 — Cerimônia (arco de flores)
  (id) => (
    <>
      <Defs id={id} from="#A9B8C6" to="#5B6B7C" />
      <rect width="60" height="80" fill={`url(#bg-${id})`} />
      <rect y="58" width="60" height="22" fill="#6F7F6A" />
      <path d="M30 58 L22 80 H38 Z" fill="#EDE6DA" opacity="0.85" />
      <path d="M14 58 V34 A16 16 0 0 1 46 34 V58" fill="none" stroke="#F2EEE4" strokeWidth="2.4" />
      {[[14, 40], [15, 30], [20, 22], [27, 18.5], [34, 18.5], [41, 22], [45, 30], [46, 40]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 2 ? 2.6 : 3.2} fill={i % 2 ? '#E8B9B0' : '#FBF6F0'} />
      ))}
      <circle cx="27" cy="43" r="2.4" fill="#2F3A45" />
      <path d="M24.5 58 L25 47 Q27 45.5 29 47 L29.5 58 Z" fill="#2F3A45" />
      <circle cx="33.5" cy="44" r="2.2" fill="#F7F4EC" />
      <path d="M30 58 Q32 50 32.5 48 Q33.5 46.5 34.5 48 Q35.5 51 38 58 Z" fill="#F7F4EC" />
    </>
  ),
  // 4 — Brinde
  (id) => (
    <>
      <Defs id={id} from="#5A4636" to="#2B211A" />
      <rect width="60" height="80" fill={`url(#bg-${id})`} />
      {[[10, 14, 3], [22, 10, 2], [48, 16, 4], [40, 8, 2], [52, 34, 2.5], [8, 32, 2]].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#FFD08A" opacity="0.35" />
      ))}
      <g transform="rotate(-12 24 46)">
        <path d="M19 28 H29 L27.5 44 Q24 47 20.5 44 Z" fill="#F3D9A0" opacity="0.9" />
        <path d="M19 28 H29 L28.6 32 H19.4 Z" fill="#FFF6E2" />
        <rect x="23.4" y="45" width="1.2" height="14" fill="#E9E2D3" />
        <rect x="19.5" y="58.5" width="9" height="1.6" rx="0.8" fill="#E9E2D3" />
      </g>
      <g transform="rotate(12 36 46)">
        <path d="M31 28 H41 L39.5 44 Q36 47 32.5 44 Z" fill="#F3D9A0" opacity="0.9" />
        <path d="M31 28 H41 L40.6 32 H31.4 Z" fill="#FFF6E2" />
        <rect x="35.4" y="45" width="1.2" height="14" fill="#E9E2D3" />
        <rect x="31.5" y="58.5" width="9" height="1.6" rx="0.8" fill="#E9E2D3" />
      </g>
      <path d="M30 22 l1 -3 M27 21 l-1.5 -2.5 M33 21 l1.5 -2.5" stroke="#FFF1CC" strokeWidth="0.9" strokeLinecap="round" />
    </>
  ),
  // 5 — Bolo
  (id) => (
    <>
      <Defs id={id} from="#C9B9A6" to="#7E6E5E" />
      <rect width="60" height="80" fill={`url(#bg-${id})`} />
      <rect y="62" width="60" height="18" fill="#5E5046" />
      <ellipse cx="30" cy="62" rx="20" ry="3" fill="#EDE6DA" />
      <rect x="15" y="48" width="30" height="14" rx="1.5" fill="#FBF7F0" />
      <rect x="19" y="37" width="22" height="11" rx="1.5" fill="#F6F0E6" />
      <rect x="23" y="28" width="14" height="9" rx="1.5" fill="#FBF7F0" />
      <path d="M15 52 H45 M19 41 H41 M23 31 H37" stroke="#E8B9B0" strokeWidth="1.2" />
      <circle cx="30" cy="25" r="2.6" fill="#E8B9B0" />
      <circle cx="27" cy="26.5" r="1.8" fill="#FBF6F0" />
      <circle cx="33" cy="26.5" r="1.8" fill="#F4D3C8" />
    </>
  ),
]

export default function PhotoScene({ index }) {
  const id = `ps${index}`
  const render = scenes[index % scenes.length]
  return (
    <svg
      className="photo__scene"
      viewBox="0 0 60 80"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      {render(id)}
      <rect width="60" height="80" fill={`url(#vig-${id})`} />
    </svg>
  )
}
