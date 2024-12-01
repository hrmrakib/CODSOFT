// import React, { useState } from "react";

// const EmployerDashboard = () => {
//   const [jobs, setJobs] = useState([
//     { id: 1, title: "Software Engineer", applicants: 5 },
//     { id: 2, title: "Product Manager", applicants: 3 },
//   ]);

//   const [newJob, setNewJob] = useState({ title: "", description: "" });

//   const handleNewJobSubmit = (e) => {
//     e.preventDefault();
//     // This would typically send the new job to an API
//     setJobs([
//       ...jobs,
//       { id: jobs.length + 1, title: newJob.title, applicants: 0 },
//     ]);
//     setNewJob({ title: "", description: "" });
//   };

//   return (
//     <div>
//       <h1 className='text-3xl font-bold mb-6'>Employer Dashboard</h1>
//       <div className='mb-8'>
//         <h2 className='text-2xl font-semibold mb-4'>Post a New Job</h2>
//         <form onSubmit={handleNewJobSubmit} className='space-y-4'>
//           <div>
//             <label htmlFor='title' className='block mb-1'>
//               Job Title
//             </label>
//             <input
//               type='text'
//               id='title'
//               value={newJob.title}
//               onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
//               className='w-full p-2 border rounded'
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor='description' className='block mb-1'>
//               Job Description
//             </label>
//             <textarea
//               id='description'
//               value={newJob.description}
//               onChange={(e) =>
//                 setNewJob({ ...newJob, description: e.target.value })
//               }
//               className='w-full p-2 border rounded'
//               required
//             ></textarea>
//           </div>
//           <button
//             type='submit'
//             className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
//           >
//             Post Job
//           </button>
//         </form>
//       </div>
//       <div>
//         <h2 className='text-2xl font-semibold mb-4'>Your Job Listings</h2>
//         <div className='space-y-4'>
//           {jobs.map((job) => (
//             <div key={job.id} className='border rounded p-4'>
//               <h3 className='text-xl font-semibold'>{job.title}</h3>
//               <p>Applicants: {job.applicants}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployerDashboard;
import React, { useState } from "react";

function EmployerDashboard() {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Software Engineer", applicants: 12 },
    { id: 2, title: "Marketing Manager", applicants: 8 },
    { id: 3, title: "Data Analyst", applicants: 5 },
  ]);

  const [newJob, setNewJob] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobs((prev) => [
      ...prev,
      { id: Date.now(), title: newJob.title, applicants: 0 },
    ]);
    setNewJob({ title: "", description: "" });
  };

  return (
    <div className='space-y-8'>
      <h1 className='text-3xl font-bold text-slate-800 mb-6'>
        Employer Dashboard
      </h1>

      <section className='bg-white p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-slate-800 mb-4'>
          Post a New Job
        </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='title' className='block text-slate-700 mb-2'>
              Job Title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              value={newJob.title}
              onChange={handleInputChange}
              className='w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          <div>
            <label htmlFor='description' className='block text-slate-700 mb-2'>
              Job Description
            </label>
            <textarea
              id='description'
              name='description'
              value={newJob.description}
              onChange={handleInputChange}
              className='w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              rows='4'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300'
          >
            Post Job
          </button>
        </form>
      </section>

      <section className='bg-white p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-slate-800 mb-4'>
          Your Job Listings
        </h2>
        <div className='space-y-4'>
          {jobs.map((job) => (
            <div
              key={job.id}
              className='flex justify-between items-center border-b border-slate-200 pb-4'
            >
              <div>
                <h3 className='text-lg font-semibold text-slate-800'>
                  {job.title}
                </h3>
                <p className='text-slate-600'>{job.applicants} applicants</p>
              </div>
              <button className='text-blue-600 hover:underline'>
                View Applications
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default EmployerDashboard;
