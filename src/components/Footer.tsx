import logoText from '../assets/logo-text.png'

interface LinkGroup {
  title: string
  links: string[]
}

const LINK_GROUPS: LinkGroup[] = [
  { title: 'Product', links: ['Technologies', 'Your Stack', 'Pricing', 'Changelog'] },
  { title: 'Company', links: ['About', 'Careers', 'Blog', 'Contact'] },
  { title: 'Legal', links: ['Privacy Policy', 'Terms of Service'] },
]

const SOCIALS = ['GitHub', 'Twitter', 'LinkedIn'] as const

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="mt-16 border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center">
              <img src={logoText} alt="Dev Stack" className="h-8 w-auto object-contain" />
            </a>
            <p className="mt-3 max-w-xs text-sm text-gray-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm font-medium text-gray-500 transition hover:text-ink"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-ink">{group.title}</h4>
              <ul className="mt-3 flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 transition hover:text-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>© {year} Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-ink">
              Privacy
            </a>
            <a href="#" className="hover:text-ink">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
