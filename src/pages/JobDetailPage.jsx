// import React from "react";
// import { useParams, Link } from "react-router-dom";

// const JobDetailPage = () => {
//   const { id } = useParams();

//   // This would typically come from an API based on the id
//   const job = {
//     id: parseInt(id),
//     title: "Software Engineer",
//     company: "Tech Co",
//     location: "San Francisco, CA",
//     description:
//       "We are looking for a talented software engineer to join our team...",
//     requirements: [
//       "Bachelor's degree in Computer Science or related field",
//       "3+ years of experience in software development",
//       "Proficiency in JavaScript and React",
//       "Experience with Node.js and MongoDB",
//     ],
//   };

//   return (
//     <div>
//       <h1 className='text-3xl font-bold mb-4'>{job.title}</h1>
//       <h2 className='text-xl mb-2'>{job.company}</h2>
//       <p className='mb-4'>{job.location}</p>
//       <div className='mb-6'>
//         <h3 className='text-xl font-semibold mb-2'>Job Description</h3>
//         <p>{job.description}</p>
//       </div>
//       <div className='mb-6'>
//         <h3 className='text-xl font-semibold mb-2'>Requirements</h3>
//         <ul className='list-disc pl-5'>
//           {job.requirements.map((req, index) => (
//             <li key={index}>{req}</li>
//           ))}
//         </ul>
//       </div>
//       <Link
//         to={`/apply/${job.id}`}
//         className='inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600'
//       >
//         Apply Now
//       </Link>
//     </div>
//   );
// };

// export default JobDetailPage;
import React from "react";
import { useParams, Link } from "react-router-dom";

function JobDetailPage() {
  const { id } = useParams();
  // In a real application, you would fetch the job details based on the id
  const job = {
    id,
    title: "Software Engineer",
    company: "Tech Co",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "We are seeking a talented Software Engineer to join our team...",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in software development",
      "Proficiency in JavaScript and React",
      "Experience with RESTful APIs and database design",
    ],
    benefits: [
      "Competitive salary",
      "Health, dental, and vision insurance",
      "401(k) matching",
      "Flexible work hours",
      "Professional development opportunities",
    ],
  };

  return (
    <div className='bg-white p-8 rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold text-slate-800 mb-4'>{job.title}</h1>
      <div className='mb-6'>
        <p className='text-xl text-slate-600'>{job.company}</p>
        <p className='text-slate-500'>{job.location}</p>
        <p className='text-slate-500'>{job.type}</p>
      </div>
      <div className='mb-6'>
        <h2 className='text-2xl font-semibold text-slate-800 mb-2'>
          Job Description
        </h2>
        <p className='text-slate-600'>{job.description}</p>
      </div>
      <div className='mb-6'>
        <h2 className='text-2xl font-semibold text-slate-800 mb-2'>
          Requirements
        </h2>
        <ul className='list-disc list-inside text-slate-600'>
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
      <div className='mb-8'>
        <h2 className='text-2xl font-semibold text-slate-800 mb-2'>Benefits</h2>
        <ul className='list-disc list-inside text-slate-600'>
          {job.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <Link
        to={`/apply/${job.id}`}
        className='bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300'
      >
        Apply Now
      </Link>
    </div>
  );
}

export default JobDetailPage;
