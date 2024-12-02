export default function WhyJobBoard() {
  const features = [
    {
      icon: "👤",
      title: "Future of Job Hunting",
      description:
        "Say goodbye to the traditional job search process and step into the future of employment opportunities.",
      link: "#",
    },
    {
      icon: "🔄",
      title: "Simplify research",
      description:
        "Save time and effort by accessing a wide range of opportunities in various industries and career stages.",
      link: "#",
    },
    {
      icon: "✨",
      title: "Be unique",
      description:
        "Craft a detailed profile that effectively showcases your unique skills, past experiences, and notable accomplishmen.",
      link: "#",
    },
  ];

  return (
    <div className='min-h-screen bg-[#0D0B21] text-white px-4 py-16 md:py-24'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <p className='text-purple-500 font-medium mb-4'>WHY JOBBOARD</p>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            New way to get a job
          </h1>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Upon gaining entry to the JobBoard platform, your initial task
            involves inputting your initial team positions or roles.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-[#15132B] rounded-2xl p-8 hover:bg-[#1A1831] transition-colors'
            >
              {/* Icon */}
              <div className='w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-6'>
                <span className='text-2xl'>{feature.icon}</span>
              </div>

              {/* Content */}
              <h3 className='text-xl font-semibold mb-4'>{feature.title}</h3>
              <p className='text-gray-400 mb-6'>{feature.description}</p>

              {/* Learn More Link */}
              <a
                href={feature.link}
                className='text-purple-500 hover:text-purple-400 transition-colors inline-flex items-center group'
              >
                Learn More
                <svg
                  className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
