import Container from "../container/Container";

export default function GetStarted() {
  return (
    <div className='min-h-screen bg-black p-8 flex items-center justify-center'>
      <Container>
        <div className='w-full bg-[#1E1B2C] rounded-3xl py-24 px-8 flex flex-col items-center justify-center'>
          <h2 className='text-white text-4xl md:text-5xl font-semibold text-center mb-4'>
            Job-search smarter?
          </h2>
          <p className='text-[#8B7FD3] text-2xl md:text-3xl text-center mb-8'>
            We make it easy.
          </p>
          <button className='bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors'>
            Get Started For Free
          </button>
        </div>
      </Container>
    </div>
  );
}
