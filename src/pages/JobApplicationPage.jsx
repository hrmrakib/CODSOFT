// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// const JobApplicationPage = () => {
//   const { id } = useParams();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     coverLetter: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // This would typically send the application data to an API
//     console.log("Application submitted:", { jobId: id, ...formData });
//     alert("Application submitted successfully!");
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <h1 className='text-3xl font-bold mb-6'>Apply for Job</h1>
//       <form onSubmit={handleSubmit} className='space-y-4'>
//         <div>
//           <label htmlFor='name' className='block mb-1'>
//             Full Name
//           </label>
//           <input
//             type='text'
//             id='name'
//             name='name'
//             value={formData.name}
//             onChange={handleChange}
//             className='w-full p-2 border rounded'
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor='email' className='block mb-1'>
//             Email
//           </label>
//           <input
//             type='email'
//             id='email'
//             name='email'
//             value={formData.email}
//             onChange={handleChange}
//             className='w-full p-2 border rounded'
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor='phone' className='block mb-1'>
//             Phone
//           </label>
//           <input
//             type='tel'
//             id='phone'
//             name='phone'
//             value={formData.phone}
//             onChange={handleChange}
//             className='w-full p-2 border rounded'
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor='resume' className='block mb-1'>
//             Resume
//           </label>
//           <input
//             type='file'
//             id='resume'
//             name='resume'
//             className='w-full p-2 border rounded'
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor='coverLetter' className='block mb-1'>
//             Cover Letter
//           </label>
//           <textarea
//             id='coverLetter'
//             name='coverLetter'
//             value={formData.coverLetter}
//             onChange={handleChange}
//             className='w-full p-2 border rounded'
//             rows={5}
//             required
//           ></textarea>
//         </div>
//         <button
//           type='submit'
//           className='bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600'
//         >
//           Submit Application
//         </button>
//       </form>
//     </div>
//   );
// };

// export default JobApplicationPage;
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function JobApplicationPage() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the application data to your backend
    console.log("Application submitted:", formData);
    // You could also show a success message and redirect the user
    alert("Application submitted successfully!");
  };

  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold text-slate-800 mb-6'>Apply for Job</h1>
      <form
        onSubmit={handleSubmit}
        className='space-y-6 bg-white p-6 rounded-lg shadow-md'
      >
        <div>
          <label htmlFor='name' className='block text-slate-700 mb-2'>
            Full Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            className='w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
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
            value={formData.email}
            onChange={handleInputChange}
            className='w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
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
            value={formData.phone}
            onChange={handleInputChange}
            className='w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
        <div>
          <label htmlFor='coverLetter' className='block text-slate-700 mb-2'>
            Cover Letter
          </label>
          <textarea
            id='coverLetter'
            name='coverLetter'
            value={formData.coverLetter}
            onChange={handleInputChange}
            className='w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            rows='6'
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor='resume' className='block text-slate-700 mb-2'>
            Resume
          </label>
          <input
            type='file'
            id='resume'
            name='resume'
            onChange={handleFileChange}
            className='w-full px-4 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300'
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default JobApplicationPage;
