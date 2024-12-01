export default function InfoCards() {
  return (
    <div className='min-h-screen bg-black p-8 flex items-center justify-center'>
      <div className='w-full max-w-7xl grid md:grid-cols-2 gap-6'>
        {/* Careers Card */}
        <div className='bg-[#1E1B2C] rounded-3xl p-12 flex flex-col'>
          <span className='text-[#8B7FD3] text-sm font-medium mb-6'>
            CARRERS
          </span>
          <h2 className='text-white text-4xl font-semibold mb-12'>
            Join to help
            <br />
            businesses grow
          </h2>
          <button className='w-fit group'>
            <div className='bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 hover:shadow-[0_0_20px_rgba(139,127,211,0.3)] transition-shadow'>
              Explore Careers
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 transform group-hover:translate-x-1 transition-transform'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Blog Card */}
        <div className='bg-[#1E1B2C] rounded-3xl p-12 flex flex-col'>
          <span className='text-[#8B7FD3] text-sm font-medium mb-6'>BLOG</span>
          <h2 className='text-white text-4xl font-semibold mb-12'>
            Tips, and trends for
            <br />
            your future job
          </h2>
          <button className='w-fit group'>
            <div className='bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 hover:shadow-[0_0_20px_rgba(139,127,211,0.3)] transition-shadow'>
              Explore Blog
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4 transform group-hover:translate-x-1 transition-transform'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
