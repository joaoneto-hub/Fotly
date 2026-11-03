# Fotly — Landing page

Landing page da Fotly em **Vite + React**, com animações feitas em **Framer Motion**.

## Rodando

Precisa do Node.js 20 ou mais novo.

```bash
npm install
npm run dev      # abre em http://localhost:5173
npm run build    # gera a versão de produção em dist/
npm run preview  # testa o build localmente
```

## Estrutura

```
src/
  App.jsx               monta as seções e a barra de progresso
  index.css             cores, tipografia e estilos de todas as seções
  components/
    shared.jsx          Reveal, CountUp, ícones e logo
    Navbar.jsx          menu fixo com fundo ao rolar e menu móvel
    Hero.jsx            título animado e demonstração de compra em loop
    ValueStrip.jsx      faixa de benefícios
    HowItWorks.jsx      3 passos, com linha que avança conforme a rolagem
    Modes.jsx           eventos, casamentos/ensaios, banco de imagens
    Marquee.jsx         faixa contínua de tipos de trabalho
    DriveSection.jsx    pasta do Drive com contadores
    Pricing.jsx         planos
    FAQ.jsx             perguntas com abre/fecha animado
    CTA.jsx             chamada final
    Footer.jsx
```

## O que ainda falta preencher

Procure por colchetes no código:

- `[PREÇO]` e `[TAXA]%` em `Pricing.jsx`
- `[Nº] álbuns ativos` em `Pricing.jsx`
- `[PRAZO DE REPASSE]` em `FAQ.jsx`
- `[Nome do Estúdio]` em `Hero.jsx`

## Personalizando

- **Cor de destaque:** troque `--accent` e `--accent-hover` no topo de `src/index.css`.
- **Animações:** quem usa "reduzir movimento" no sistema vê a página sem animações (`MotionConfig reducedMotion="user"`).
- **Fotos reais:** os blocos coloridos são marcadores. Troque o `background` dos itens em `Hero.jsx`, `Modes.jsx` e `Marquee.jsx` por imagens (`background-image` ou `<img>`).
