import Container from "../container/Container";

export default function HeroSection() {
  return (
    <div className='relative px-8 py-20'>
      <Container>
        <div className='absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/10 to-transparent' />

        <div className='flex justify-between'>
          <div className='max-w-2xl'>
            <button className='flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 text-white mb-8 hover:bg-white/10 transition-colors'>
              <span>The best job seekers</span>
              <span className='text-purple-500'>Explore →</span>
            </button>

            <h1 className='text-6xl font-bold text-white mb-4'>
              Find your <span className='text-gray-500'>dream</span>
              <br />
              <span className='text-gray-500'>job with</span> JobBoard
            </h1>

            <p className='text-gray-400 text-xl mb-8'>
              Growing a business means having the right people in your team.
            </p>

            <div className='flex gap-4'>
              <div className='flex-1 relative'>
                <input
                  type='text'
                  placeholder='Job title'
                  className='w-full px-12 py-4 rounded-full bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
              <button className='px-8 py-4 rounded-full bg-white text-black hover:bg-gray-100 transition-colors flex items-center gap-2'>
                Find Jobs
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  className='text-purple-600'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='lucide lucide-move-right'
                >
                  <path d='M18 8L22 12L18 16' />
                  <path d='M2 12H22' />
                </svg>
              </button>
            </div>
          </div>

          <div className='relative'>
            <img
              src='/placeholder.svg?height=600&width=500'
              alt='Professional'
              className='rounded-2xl'
            />

            <div className='absolute top-1/4 -left-24 bg-black/80 backdrop-blur-sm p-4 rounded-2xl'>
              <div className='text-white text-4xl font-bold'>10,000+</div>
              <div className='text-gray-400'>Job vacancies</div>
            </div>

            <div className='absolute bottom-1/4 -right-12 bg-black/80 backdrop-blur-sm p-4 rounded-2xl'>
              <div className='text-white text-4xl font-bold'>5,000+</div>
              <div className='text-gray-400'>Experts</div>
            </div>

            <div className='absolute top-1/3 -right-8 bg-black/50 p-2 rounded-xl'>
              <div className='w-8 h-8 bg-green-500 rounded-lg' />
            </div>

            <div className='absolute bottom-1/3 -left-8 bg-black/50 p-2 rounded-xl'>
              <div className='w-8 h-8 bg-blue-500 rounded-lg' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
