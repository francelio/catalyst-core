import { CLIENTS } from '../data/site'

function LogoRow({ ariaHidden = false }) {
  return (
    <ul className="flex shrink-0 items-center gap-14 pr-14 sm:gap-20 sm:pr-20" aria-hidden={ariaHidden || undefined}>
      {CLIENTS.map((c) => (
        <li key={c.name} className="shrink-0">
          <img
            src={c.src}
            alt={ariaHidden ? '' : c.name}
            loading="lazy"
            draggable="false"
            className="h-7 w-auto select-none opacity-45 brightness-0 invert transition-[filter,opacity] duration-500 ease-out hover:opacity-100 hover:brightness-100 hover:invert-0 sm:h-8"
          />
        </li>
      ))}
    </ul>
  )
}

export default function ClientsMarquee() {
  return (
    <section id="clientes" className="border-y border-line">
      <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-center md:gap-10">
        <p className="shrink-0 text-[15px] text-muted md:w-44">Alguns dos nossos clientes</p>
        <div
          className="group relative flex min-w-0 flex-1 overflow-hidden"
          style={{ maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)' }}
        >
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            <LogoRow />
            <LogoRow ariaHidden />
          </div>
        </div>
      </div>
    </section>
  )
}
