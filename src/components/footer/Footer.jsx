import Container from "../container/Container";

export default function Footer() {
  const footerLinks = {
    company: {
      title: "COMPANY",
      links: [
        { name: "About", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Jobs", href: "#" },
      ],
    },
    resources: {
      title: "RESOURCES",
      links: [
        { name: "News", href: "#" },
        { name: "FAQs", href: "#" },
        { name: "Candidates", href: "#" },
      ],
    },
    contacts: {
      title: "CONTACTS",
      links: [
        { name: "CV Post", href: "#" },
        { name: "Job Post", href: "#" },
        { name: "Contact Us", href: "#" },
      ],
    },
  };

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: "M16.5 8.25v-3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h-3v-7h-2v-3h2v-2a4 4 0 0 1 4-4h2z",
    },
    {
      name: "YouTube",
      href: "#",
      icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z",
    },
    {
      name: "Dribbble",
      href: "#",
      icon: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm7.145 5.502c1.496 1.847 2.4 4.18 2.4 6.716 0 .34-.023.67-.047 1.003-3.575-.687-6.795-.687-10.37 0-.023-.333-.047-.663-.047-1.003 0-2.536.904-4.87 2.4-6.716 1.91 1.87 3.79 3.716 5.664 5.562zm-7.145 14.498c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z",
    },
    {
      name: "Instagram",
      href: "#",
      icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
  ];

  return (
    <footer className='bg-[#0D0B21] text-white pt-16 pb-8'>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-12 lg:gap-20'>
          {/* Subscribe Section */}
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold'>Subscribe</h2>
            <p className='text-gray-400'>
              Stay current with all thinks JobBoard
            </p>
            <form className='flex gap-2'>
              <input
                type='email'
                placeholder='Email'
                className='flex-1 px-4 py-2 rounded-lg bg-[#15132B] border border-gray-700 focus:outline-none focus:border-purple-500'
                required
              />
              <button
                type='submit'
                className='px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2'
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Footer Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className='text-sm font-semibold mb-4'>{section.title}</h3>
              <ul className='space-y-3'>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className='text-gray-400 hover:text-white transition-colors'
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className='mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4'>
          {/* Logo */}
          <div className='flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='lucide lucide-accessibility text-purple-600'
            >
              <circle cx='16' cy='4' r='1' />
              <path d='m18 19 1-7-6 1' />
              <path d='m5 8 3-3 5.5 3-2.36 3.5' />
              <path d='M4.24 14.5a5 5 0 0 0 6.88 6' />
              <path d='M13.76 17.5a5 5 0 0 0-6.88-6' />
            </svg>
            <span className='text-white text-xl font-semibold'>Gradient</span>
          </div>

          {/* Social Links */}
          <div className='flex gap-4'>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className='w-10 h-10 bg-[#15132B] rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors'
                aria-label={social.name}
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className='py-8'>
          <div className='flex justify-between items-center'>
            <p>&copy; 2023 JobBoard. All rights reserved.</p>
            <nav>
              <ul className='flex space-x-4'>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Privacy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-300'>
                    Terms
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}
