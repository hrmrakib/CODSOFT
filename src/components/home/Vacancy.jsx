import Container from "../container/Container";
import JobCard from "./JobCard";

const Vacancy = () => {
  return (
    <div>
      <Container>
        <section className='flex flex-col items-center justify-center'>
          <h3 className='text-[#8550EC] font-semibold'>JOB VACANCY</h3>

          <div>
            <h2 className='text-4xl font-bold text-white text-center mt-5'>
              Discover the best job
            </h2>
            <p className='max-w-[500px] text-center text-white text-lg leading-7 mt-4'>
              Start career with the best company in the world, we ensures you to
              get the best job possible.
            </p>
          </div>
        </section>

        <section className='mt-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {/* card */}
            <JobCard />
            <JobCard />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Vacancy;
