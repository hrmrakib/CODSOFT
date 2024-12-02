const JobCard = () => {
  return (
    <div className='border border-[#332C4C] p-5 rounded-xl mb-5'>
      <div>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-5'>
            <div className='bg-[#17191F] border-2 border-[#8550EC] p-5 rounded-lg'>
              <img src='/logo/c1.svg' alt='' />
            </div>
            <div className='space-y-3'>
              <h2 className='text-2xl text-white font-bold'>
                Operations Manager
              </h2>
              <p className='text-lg text-white'>Pipe</p>
            </div>
          </div>
          <button className=' bg-white text-black font-bold px-5 py-2 rounded-3xl'>
            Apply
          </button>
        </div>

        <p className='text-[#848484] leading-6 mt-6'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          repudiandae dicta veniam? Ducimus aperiam iusto asperiores consectetur
          nihil quo, atque explicabo magni.
        </p>

        <div className='border-t border-t-[#333559] pt-4 mt-5 flex items-center gap-10'>
          <p className='text-white font-bold flex items-center gap-2'>
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
              class='lucide lucide-globe'
            >
              <circle cx='12' cy='12' r='10' />
              <path d='M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20' />
              <path d='M2 12h20' />
            </svg>
            <span>London</span>
          </p>
          <p className='text-white font-bold flex items-start gap-2'>
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
              class='lucide lucide-house-plus'
            >
              <path d='M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354' />
              <path d='M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8' />
              <path d='M15 6h6' />
              <path d='M18 3v6' />
            </svg>
            <span>Remote</span>
          </p>
          <p className='text-white font-bold flex items-center gap-2'>
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
              class='lucide lucide-banknote'
            >
              <rect width='20' height='12' x='2' y='6' rx='2' />
              <circle cx='12' cy='12' r='2' />
              <path d='M6 12h.01M18 12h.01' />
            </svg>
            <span>$50k</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
