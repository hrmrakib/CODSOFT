import Container from "../container/Container";
import JobCard from "./JobCard";

const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Apenio",
    logo: "/assets/company/c1.svg",
    location: "San Francisco",
    salary: "1200",
  },
  {
    id: 2,
    title: "Operation Manager",
    company: "Fanto",
    logo: "/assets/company/c2.svg",
    location: "San Francisco",
    salary: "1500",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "CreativeCo",
    logo: "/assets/company/c3.svg",
    location: "New York",
    salary: "2000",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "DataMind",
    logo: "/assets/company/c4.svg",
    location: "Austin",
    salary: "1800",
  },
  {
    id: 5,
    title: "Account Officer",
    company: "Masllo",
    logo: "/assets/company/c2.svg",
    location: "New Jersey",
    salary: "2200",
  },
  {
    id: 6,
    title: "Full Stack Developer",
    company: "Tinalo",
    logo: "/assets/company/c1.svg",
    location: "Denmark",
    salary: "2500",
  },
];

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
            {jobs.map((job) => (
              <JobCard job={job} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Vacancy;
