// import React, { useState } from "react";

// const CandidateDashboard = () => {
//   const [applications, setApplications] = useState([
//     {
//       id: 1,
//       jobTitle: "Software Engineer",
//       company: "Tech Co",
//       status: "Pending",
//     },
//     {
//       id: 2,
//       jobTitle: "Product Manager",
//       company: "Startup Inc",
//       status: "Interviewed",
//     },
//   ]);

//   const [profile, setProfile] = useState({
//     name: "John Doe",
//     email: "john@example.com",
//     resume: "john_doe_resume.pdf",
//   });

//   const handleProfileUpdate = (e) => {
//     e.preventDefault();
//     // This would typically send the updated profile to an API
//     alert("Profile updated successfully!");
//   };

//   return (
//     <div>
//       <h1 className='text-3xl font-bold mb-6'>Candidate Dashboard</h1>
//       <div className='mb-8'>
//         <h2 className='text-2xl font-semibold mb-4'>Your Profile</h2>
//         <form onSubmit={handleProfileUpdate} className='space-y-4'>
//           <div>
//             <label htmlFor='name' className='block mb-1'>
//               Name
//             </label>
//             <input
//               type='text'
//               id='name'
//               value={profile.name}
//               onChange={(e) => setProfile({ ...profile, name: e.target.value })}
//               className='w-full p-2 border rounded'
//             />
//           </div>
//           <div>
//             <label htmlFor='email' className='block mb-1'>
//               Email
//             </label>
//             <input
//               type='email'
//               id='email'
//               value={profile.email}
//               onChange={(e) =>
//                 setProfile({ ...profile, email: e.target.value })
//               }
//               className='w-full p-2 border rounded'
//             />
//           </div>
//           <div>
//             <label htmlFor='resume' className='block mb-1'>
//               Resume
//             </label>
//             <input
//               type='file'
//               id='resume'
//               className='w-full p-2 border rounded'
//             />
//           </div>
//           <button
//             type='submit'
//             className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
//           >
//             Update Profile
//           </button>
//         </form>
//       </div>
//       <div>
//         <h2 className='text-2xl font-semibold mb-4'>Your Applications</h2>
//         <div className='space-y-4'>
//           {applications.map((app) => (
//             <div key={app.id} className='border rounded p-4'>
//               <h3 className='text-xl font-semibold'>{app.jobTitle}</h3>
//               <p>{app.company}</p>
//               <p>Status: {app.status}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CandidateDashboard;
import React, { useState } from "react";

function CandidateDashboard() {
  const [applications, setApplications] = useState([
    {
      id: 1,
      jobTitle: "Software Engineer",
      company: "Tech Co",
      status: "Under Review",
    },
    {
      id: 2,
      jobTitle: "Data Analyst",
      company: "Data Corp",
      status: "Interviewed",
    },
    {
      id: 3,
      jobTitle: "UX Designer",
      company: "Design Studio",
      status: "Rejected",
    },
  ]);

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    resume: "john_doe_resume.pdf",
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='space-y-8'>
      <h1 className='text-3xl font-bold text-slate-800 mb-6'>
        Candidate Dashboard
      </h1>

      <section className='bg-white p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-slate-800 mb-4'>
          Your Profile
        </h2>
        <form className='space-y-4'>
          <div>
            <label htmlFor='name' className='block text-slate-700 mb-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={profile.name}
              onChange={handleProfileChange}
              className='w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-slate-700 mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={profile.email}
              onChange={handleProfileChange}
              className='w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label htmlFor='phone' className='block text-slate-700 mb-2'>
              Phone
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              value={profile.phone}
              onChange={handleProfileChange}
              className='w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <div>
            <label htmlFor='resume' className='block text-slate-700 mb-2'>
              Resume
            </label>
            <input
              type='file'
              id='resume'
              name='resume'
              className='w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300'
          >
            Update Profile
          </button>
        </form>
      </section>

      <section className='bg-white p-6 rounded-lg shadow-md'>
        <h2 className='text-2xl font-semibold text-slate-800 mb-4'>
          Your Applications
        </h2>
        <div className='space-y-4'>
          {applications.map((app) => (
            <div
              key={app.id}
              className='flex justify-between items-center border-b border-slate-200 pb-4'
            >
              <div>
                <h3 className='text-lg font-semibold text-slate-800'>
                  {app.jobTitle}
                </h3>
                <p className='text-slate-600'>{app.company}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  app.status === "Under Review"
                    ? "bg-yellow-100 text-yellow-800"
                    : app.status === "Interviewed"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {app.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CandidateDashboard;
