export default function Navbar() {
  return (
    <nav className='flex items-center justify-between px-8 py-4'>
      <div className='flex items-center gap-12'>
        <div className='flex items-center gap-2'>
          <div className='w-6 h-6 border-2 border-white' />
          <span className='text-white text-xl font-semibold'>Job Board</span>
        </div>
        <div className='hidden md:flex items-center gap-8'>
          <a href='#' className='text-white/90 hover:text-white'>
            Demos
          </a>
          <a href='#' className='text-white/90 hover:text-white'>
            About
          </a>
          <a href='#' className='text-white/90 hover:text-white'>
            Jobs
          </a>
          <a href='#' className='text-white/90 hover:text-white'>
            Category
          </a>
          <a href='#' className='text-white/90 hover:text-white'>
            Candidates
          </a>
          <a href='#' className='text-white/90 hover:text-white'>
            News
          </a>
          <a href='#' className='text-white/90 hover:text-white'>
            All Pages
          </a>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <button className='relative'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
          <span className='absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center'>
            0
          </span>
        </button>
        <button className='px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors'>
          Job Post
        </button>
        <button className='px-6 py-2 rounded-full bg-white text-black hover:bg-gray-100 transition-colors'>
          CV Post
        </button>
      </div>
    </nav>
  );
}
