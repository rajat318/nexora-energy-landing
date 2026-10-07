import { brand, footerLinks, socials } from '../../data/siteData'

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <p className="text-lg font-semibold tracking-[0.3em]">{brand}</p>
          <p className="mt-3 text-sm text-white/50">Intelligent Energy Technology. A fictional product concept created for an internship project.</p>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/60">
          {footerLinks.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-white">{l}</a></li>
          ))}
        </ul>
        <ul className="flex gap-3">
          {socials.map(({ icon: Icon, label }) => (
            <li key={label}><a href="#home" aria-label={label} className="glass grid h-10 w-10 place-items-center rounded-full text-white/70 hover:text-accent"><Icon size={16} /></a></li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs text-white/40">
        &copy; {new Date().getFullYear()} NEXORA concept. 3D model provided via Algoryx Community; NEXORA branding and copy are fictional.
      </p>
    </footer>
  )
}
