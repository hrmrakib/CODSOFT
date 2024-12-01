import { useState } from "react";

export default function HowItWorks() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [photo, setPhoto] = useState(null);

  const steps = [
    {
      number: "01",
      title: "Job search",
      description:
        "Begin your job search by exploring a wide range of job openings.",
    },
    {
      number: "02",
      title: "Salary estimate",
      description: "Provide your profile details to receive a salary estimate.",
    },
    {
      number: "03",
      title: "Read reviews",
      description: "Gain valuable insights about potential employers.",
    },
    {
      number: "04",
      title: "Apply and connect",
      description: "Connect with employers, attend interviews.",
    },
  ];

  const handlePhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setPhoto(e.target.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className='min-h-screen bg-[#1a1825] text-white p-8 mb-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-12 lg:mb-20 flex items-center justify-between'>
          <div>
            <h2 className='text-purple-500 mb-4'>HOW IT WORKS</h2>
            <h1 className='text-4xl font-bold mb-4'>Getting started is easy</h1>
            <p className='text-gray-400 max-w-xl'>
              Upon gaining entry to the JobBoard platform, your initial task
              involves inputting your initial team positions or roles.
            </p>
          </div>
          <button className='bg-white text-black px-6 py-2 rounded-full mt-4 hover:bg-gray-100 transition-colors'>
            Learn More
          </button>
        </div>

        <div className='grid md:grid-cols-4 gap-8 mb-16 lg:mb-24'>
          {steps.map((step) => (
            <div key={step.number} className='relative'>
              <div className='text-purple-500 mb-2'>{step.number}</div>
              <h3 className='text-xl font-semibold mb-2'>{step.title}</h3>
              <p className='text-gray-400'>{step.description}</p>
              {step.number !== "04" && (
                <div className='hidden md:block absolute top-3 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-purple-500 to-transparent' />
              )}
            </div>
          ))}
        </div>

        <div className='bg-[#1e1c2a] rounded-2xl p-8 grid md:grid-cols-2 gap-8'>
          <div className='space-y-6'>
            <div className='flex items-center gap-4'>
              <div className='relative'>
                <div className='w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden'>
                  {photo ? (
                    <img
                      src={photo}
                      alt='Profile'
                      className='w-full h-full object-cover'
                    />
                  ) : (
                    <svg
                      className='w-8 h-8 text-gray-400'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                      />
                    </svg>
                  )}
                </div>
                <label className='absolute -right-2 -bottom-2 bg-white text-black p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors'>
                  <input
                    type='file'
                    className='hidden'
                    onChange={handlePhotoUpload}
                    accept='image/*'
                  />
                  <svg
                    className='w-4 h-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12'
                    />
                  </svg>
                </label>
              </div>
              <div>
                <div className='font-semibold'>Oliver Forslin</div>
                <button className='text-sm text-purple-500'>
                  Upload photo
                </button>
              </div>
            </div>
            <input
              type='text'
              placeholder='Full name'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className='w-full bg-[#2a2837] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full bg-[#2a2837] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
            <input
              type='text'
              placeholder='Position'
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className='w-full bg-[#2a2837] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </div>
          <div>
            <div className='text-purple-500 mb-4'>01</div>
            <h2 className='text-3xl font-bold mb-4'>Discover Job Openings</h2>
            <p className='text-gray-400'>
              Start by searching for job openings using our comprehensive search
              engine. Simply enter relevant keywords, location, and other
              criteria to find the positions that match your interests and
              qualifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
