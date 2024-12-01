const JobCard = () => {
  return (
    <div className='border border-[#332C4C] p-5 rounded-xl mb-20'>
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
          <p className='text-white font-bold'>London</p>
          <p className='text-white font-bold'>Remote</p>
          <p className='text-white font-bold'>$50k</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
