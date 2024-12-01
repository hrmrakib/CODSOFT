import React, { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "candidate",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would typically send the registration data to an API
    console.log("Registration submitted:", formData);
    alert("Registration successful!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='max-w-md mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Register</h1>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='name' className='block mb-1'>
            Full Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full p-2 border rounded'
            required
          />
        </div>
        <div>
          <label htmlFor='email' className='block mb-1'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='w-full p-2 border rounded'
            required
          />
        </div>
        <div>
          <label htmlFor='password' className='block mb-1'>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className='w-full p-2 border rounded'
            required
          />
        </div>
        <div>
          <label htmlFor='confirmPassword' className='block mb-1'>
            Confirm Password
          </label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            className='w-full p-2 border rounded'
            required
          />
        </div>
        <div>
          <label htmlFor='userType' className='block mb-1'>
            I am a:
          </label>
          <select
            id='userType'
            name='userType'
            value={formData.userType}
            onChange={handleChange}
            className='w-full p-2 border rounded'
          >
            <option value='candidate'>Job Seeker</option>
            <option value='employer'>Employer</option>
          </select>
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
