// Marca: anel (o time do cliente) com um núcleo deslocado (o profissional que entra).
export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="19.5" cy="16" r="4.5" fill="#8EB4E3" />
      </svg>
      <span className="text-[17px] font-bold tracking-tight">Catalyst Core</span>
    </span>
  )
}
