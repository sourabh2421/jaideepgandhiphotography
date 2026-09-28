import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="bg-charcoal-950 text-ivory-100 py-16 px-6 border-t border-charcoal-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
        {/* Brand Lockup */}
        <div className="space-y-2">
          <Link href="/" className="inline-block">
            <span className="font-serif text-2xl font-bold tracking-[0.15em] text-white">
              JAIDEEP GANDHI
            </span>
            <span className="block text-xs uppercase tracking-[0.3em] text-gold-400 font-medium">
              Photography &bull; Fine Art
            </span>
          </Link>
          <p className="text-xs text-ivory-400/80 max-w-sm leading-relaxed font-light">
            Capturing Love. Preserving Forever. Fine-art destination and wedding photography across the globe.
          </p>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.2em] text-ivory-400 font-medium">
          <Link href="#about" className="hover:text-gold-400 transition-colors">
            Experience
          </Link>
          <Link href="#why-us" className="hover:text-gold-400 transition-colors">
            Why Us
          </Link>
          <Link href="#services" className="hover:text-gold-400 transition-colors">
            Services
          </Link>
          <Link href="#pricing" className="hover:text-gold-400 transition-colors">
            Pricing
          </Link>
          <Link href="#testimonials" className="hover:text-gold-400 transition-colors">
            Stories
          </Link>
          <Link href="#faq" className="hover:text-gold-400 transition-colors">
            FAQ
          </Link>
          <Link href="#contact" className="text-gold-400 hover:text-white transition-colors font-semibold">
            Inquire
          </Link>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-charcoal-800 bg-charcoal-900/60 flex items-center justify-center text-ivory-300 hover:text-gold-400 hover:border-gold-500/50 transition-all"
              aria-label="Instagram"
            >
              <svg
                className="w-4 h-4 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-charcoal-800 bg-charcoal-900/60 flex items-center justify-center text-ivory-300 hover:text-gold-400 hover:border-gold-500/50 transition-all"
              aria-label="Facebook"
            >
              <svg
                className="w-4 h-4 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-charcoal-800 bg-charcoal-900/60 flex items-center justify-center text-ivory-300 hover:text-gold-400 hover:border-gold-500/50 transition-all"
              aria-label="YouTube"
            >
              <svg
                className="w-4 h-4 fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <polygon points="10 15 15 12 10 9 10 15" />
              </svg>
            </a>
          </div>

          <div className="text-xs text-ivory-500 font-light">
            &copy; {new Date().getFullYear()} Jaideep Gandhi Photography. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
