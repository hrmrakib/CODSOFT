// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const JobListingsPage = () => {
//   // This would typically come from an API
//   const allJobs = [
//     {
//       id: 1,
//       title: "Software Engineer",
//       company: "Tech Co",
//       location: "San Francisco, CA",
//     },
//     {
//       id: 2,
//       title: "Product Manager",
//       company: "Startup Inc",
//       location: "New York, NY",
//     },
//     {
//       id: 3,
//       title: "Data Scientist",
//       company: "Big Data Corp",
//       location: "Boston, MA",
//     },
//     {
//       id: 4,
//       title: "UX Designer",
//       company: "Design Studio",
//       location: "Los Angeles, CA",
//     },
//     {
//       id: 5,
//       title: "Marketing Specialist",
//       company: "Growth Hackers",
//       location: "Chicago, IL",
//     },
//   ];

//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredJobs = allJobs.filter(
//     (job) =>
//       job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       job.location.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h1 className='text-3xl font-bold mb-6'>Job Listings</h1>
//       <div className='mb-6'>
//         <input
//           type='text'
//           placeholder='Search jobs...'
//           className='w-full p-2 border rounded'
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <div className='space-y-4'>
//         {filteredJobs.map((job) => (
//           <div
//             key={job.id}
//             className='border rounded p-4 hover:shadow-lg transition-shadow'
//           >
//             <h2 className='text-xl font-semibold'>{job.title}</h2>
//             <p>{job.company}</p>
//             <p>{job.location}</p>
//             <Link
//               to={`/job/${job.id}`}
//               className='mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
//             >
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobListingsPage;
import React, { useState } from "react";
import { Link } from "react-router-dom";

function JobListingsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs] = useState([
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Co",
      location: "San Francisco, CA",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "Brand Inc",
      location: "New York, NY",
      type: "Full-time",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Data Corp",
      location: "Chicago, IL",
      type: "Contract",
    },
    {
      id: 4,
      title: "UX Designer",
      company: "Design Studio",
      location: "Los Angeles, CA",
      type: "Part-time",
    },
    {
      id: 5,
      title: "Product Manager",
      company: "Innovate Ltd",
      location: "Seattle, WA",
      type: "Full-time",
    },
  ]);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className='text-3xl font-bold text-slate-800 mb-6'>Job Listings</h1>
      <div className='mb-6'>
        <input
          type='text'
          placeholder='Search jobs...'
          className='w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className='space-y-6'>
        {filteredJobs.map((job) => (
          <div key={job.id} className='bg-white p-6 rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold text-slate-800 mb-2'>
              {job.title}
            </h2>
            <p className='text-slate-600 mb-2'>{job.company}</p>
            <p className='text-slate-500 mb-2'>{job.location}</p>
            <p className='text-slate-500 mb-4'>{job.type}</p>
            <Link
              to={`/jobs/${job.id}`}
              className='text-blue-600 hover:underline'
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListingsPage;
