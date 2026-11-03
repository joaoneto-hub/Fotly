import { motion } from 'framer-motion'
import { Icon, SectionHead, staggerChild, staggerParent } from './shared.jsx'

const plans = [
  {
    name: 'Inicial',
    price: 'Grátis',
    fee: 10,
    forWho: 'Para quem está testando.',
    features: ['Até 3 álbuns ativos', 'Página pública com seu link', 'Pix e cartão'],
    cta: 'Começar grátis',
  },
  {
    name: 'Profissional',
    price: 'R$ 49',
    per: '/mês',
    fee: 4,
    forWho: 'Para o fotógrafo que vende todo mês.',
    features: ['Álbuns ilimitados', 'Galerias privadas com senha', "Marca d'água personalizada", 'Vídeos'],
    cta: 'Assinar o Profissional',
    featured: true,
  },
  {
    name: 'Estúdio',
    price: 'R$ 119',
    per: '/mês',
    fee: 1,
    forWho: 'Para quem vende muito ou tem equipe.',
    features: ['Tudo do Profissional', 'Vários fotógrafos na equipe', 'Domínio próprio', 'Suporte prioritário'],
    cta: 'Falar com a gente',
  },
]

export default function Pricing() {
  return (
    <section id="planos" className="container section">
      <SectionHead eyebrow="Planos" title="Comece grátis. Cresça quando vender." />
      <motion.div
        className="plans"
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {plans.map((p) => (
          <motion.div
            key={p.name}
            className={`plan ${p.featured ? 'plan--featured' : ''}`}
            variants={staggerChild}
            whileHover={{ y: -8 }}
          >
            <div className="plan__head">
              <h3 className="h3">{p.name}</h3>
              {p.featured && <span className="tag">Mais escolhido</span>}
            </div>
            <p className="plan__price">
              {p.price}
              {p.per && <span>{p.per}</span>}
            </p>
            <p className="plan__fee">
              + <strong>{p.fee}%</strong> por venda
            </p>
            <p className="plan__for">{p.forWho}</p>
            <ul className="plan__features">
              {p.features.map((f) => (
                <li key={f}>
                  <Icon name="check" size={16} stroke={2.4} className="accent" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#comecar" className={`btn btn--block ${p.featured ? 'btn--accent' : 'btn--ghost'}`}>
              {p.cta}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
