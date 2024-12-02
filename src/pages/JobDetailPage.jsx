import { useState } from "react";

export default function JobDetailPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className='min-h-screen bg-[#0D0B21] text-white p-4 md:p-8'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Main Content */}
        <div className='lg:col-span-2'>
          {/* Banner Image */}
          <div className='rounded-2xl overflow-hidden mb-6'>
            <img
              src='/assets/job/1.webp'
              alt='Office environment'
              className='w-full h-[300px] object-cover'
            />
          </div>

          {/* Job Header */}
          <div className='flex items-center gap-4 mb-8'>
            <div className='bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl'>
              <div className='w-8 h-8 bg-white/20 rounded-lg'></div>
            </div>
            <div>
              <h1 className='text-2xl font-bold'>Financial Manager</h1>
              <div className='flex items-center gap-4 text-gray-400 text-sm mt-1'>
                <span className='flex items-center gap-1'>
                  <span className='w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center'>
                    📍
                  </span>
                  Las Vegas
                </span>
                <span className='flex items-center gap-1'>
                  <span className='w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center'>
                    🏠
                  </span>
                  Remote
                </span>
              </div>
            </div>
          </div>

          {/* Job Insights */}
          <div className='bg-[#15132B] rounded-2xl p-6'>
            <h2 className='text-xl font-semibold mb-6'>Job role insights</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500'>
                    📅
                  </div>
                  <div>
                    <p className='text-sm text-gray-400'>Date posted</p>
                    <p className='font-medium'>July 5, 2023</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500'>
                    💰
                  </div>
                  <div>
                    <p className='text-sm text-gray-400'>Offered salary</p>
                    <p className='font-medium'>$80k-$85k</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500'>
                    ⭐
                  </div>
                  <div>
                    <p className='text-sm text-gray-400'>Experience</p>
                    <p className='font-medium'>2 Years</p>
                  </div>
                </div>
              </div>

              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500'>
                    📅
                  </div>
                  <div>
                    <p className='text-sm text-gray-400'>Closing date</p>
                    <p className='font-medium'>July 19, 2023</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500'>
                    📊
                  </div>
                  <div>
                    <p className='text-sm text-gray-400'>Career level</p>
                    <p className='font-medium'>Middle</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500'>
                    👥
                  </div>
                  <div>
                    <p className='text-sm text-gray-400'>Quantity</p>
                    <p className='font-medium'>6</p>
                  </div>
                </div>
              </div>

              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500'>
                    📍
                  </div>
                  <div>
                    <p className='text-sm text-gray-400'>Hiring location</p>
                    <p className='font-medium'>Las Vegas</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500'>
                    👤
                  </div>
                  <div>
                    <p className='text-sm text-gray-400'>Gender</p>
                    <p className='font-medium'>Both</p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500'>
                    🎓
                  </div>
                  <div>
                    <p className='text-sm text-gray-400'>Qualification</p>
                    <p className='font-medium'>Bachelor Degree</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Job Description */}

          <div className='bg-[#15132B] rounded-2xl p-6 mt-6'>
            <div className='space-y-8'>
              {/* Overview Section */}
              <section>
                <h2 className='text-xl font-semibold text-white mb-4'>
                  Descriptions
                </h2>
                <div className='space-y-6'>
                  <div>
                    <h3 className='text-lg font-medium text-white mb-2'>
                      Overview
                    </h3>
                    <p className='text-gray-400 leading-relaxed'>
                      Gradient is a financial technology company that provides a
                      revolutionary platform for businesses to access capital by
                      transforming their recurring revenue streams into upfront
                      capital. Founded in 2016, Gradient aims to reinvent the
                      business financing model by offering an innovative
                      solution that allows companies to unlock the value of
                      their predicted revenue.
                    </p>
                  </div>
                </div>
              </section>

              {/* Requirements Section */}
              <section>
                <h3 className='text-lg font-medium text-white mb-4'>
                  Requirements
                </h3>
                <div className='space-y-4'>
                  <div className='space-y-3'>
                    <div>
                      <h4 className='text-white font-medium mb-1'>
                        Financial Management
                      </h4>
                      <p className='text-gray-400'>
                        Strong knowledge of financial management principles,
                        including budgeting, forecasting, financial analysis,
                        and financial modeling.
                      </p>
                    </div>

                    <div>
                      <h4 className='text-white font-medium mb-1'>
                        Accounting Knowledge
                      </h4>
                      <p className='text-gray-400'>
                        Solid understanding of accounting principles and ability
                        to ensure accurate financial records, compliance with
                        regulations, and effective internal controls.
                      </p>
                    </div>

                    <div>
                      <h4 className='text-white font-medium mb-1'>
                        Planning and Analytics
                      </h4>
                      <p className='text-gray-400'>
                        Experience in financial planning, budgeting, and
                        forecasting processes to support strategic
                        decision-making and financial goal achievement.
                      </p>
                    </div>

                    <div>
                      <h4 className='text-white font-medium mb-1'>
                        Financial Reporting Proficiency
                      </h4>
                      <p className='text-gray-400'>
                        Proficiency in financial reporting, including the
                        preparation and analysis of financial statements,
                        variance analysis, and management reporting.
                      </p>
                    </div>

                    <div>
                      <h4 className='text-white font-medium mb-1'>
                        Risk Management
                      </h4>
                      <p className='text-gray-400'>
                        Understanding of risk management principles and the
                        ability to identify, assess, and mitigate financial
                        risks.
                      </p>
                    </div>

                    <div>
                      <h4 className='text-white font-medium mb-1'>
                        Leadership and Team Management
                      </h4>
                      <p className='text-gray-400'>
                        Strong leadership skills to manage and develop a team of
                        finance professionals, delegate tasks, and provide
                        guidance and mentorship.
                      </p>
                    </div>

                    <div>
                      <h4 className='text-white font-medium mb-1'>
                        Strategic Thinking
                      </h4>
                      <p className='text-gray-400'>
                        Ability to think strategically, analyze financial data,
                        and provide insights and recommendations to support
                        business objectives and financial performance.
                      </p>
                    </div>

                    <div>
                      <h4 className='text-white font-medium mb-1'>
                        Financial Systems and Tools
                      </h4>
                      <p className='text-gray-400'>
                        Proficiency in using financial software and tools, such
                        as enterprise resource planning (ERP) systems, financial
                        modeling software, and data visualization tools.
                      </p>
                    </div>

                    <div>
                      <h4 className='text-white font-medium mb-1'>
                        Communication and Presentation
                      </h4>
                      <p className='text-gray-400'>
                        Excellent communication and presentation skills to
                        effectively communicate financial information, analysis,
                        and recommendations to stakeholders at various levels of
                        the organization.
                      </p>
                    </div>

                    <div>
                      <h4 className='text-white font-medium mb-1'>
                        Compliance and Regulatory Knowledge
                      </h4>
                      <p className='text-gray-400'>
                        Familiarity with financial regulations and compliance
                        requirements, such as GAAP, IFRS, and local tax
                        regulations.
                      </p>
                    </div>

                    <div>
                      <h4 className='text-white font-medium mb-1'>
                        Analytical Skills
                      </h4>
                      <p className='text-gray-400'>
                        Strong analytical and problem-solving skills to
                        interpret complex financial data, identify trends, and
                        make data-driven decisions.
                      </p>
                    </div>

                    <div>
                      <h4 className='text-white font-medium mb-1'>
                        Industry Knowledge
                      </h4>
                      <p className='text-gray-400'>
                        Understanding of the financial services ecosystem,
                        industry dynamics, and key drivers of financial
                        performance.
                      </p>
                    </div>

                    <div>
                      <h4 className='text-white font-medium mb-1'>
                        Adaptability
                      </h4>
                      <p className='text-gray-400'>
                        Ability to adapt to changing business needs, prioritize
                        tasks, and work effectively in a fast-paced and dynamic
                        environment.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/*  */}
        </div>

        {/* Sidebar */}
        <div className='lg:col-span-1'>
          <div className='bg-[#15132B] rounded-2xl p-6 mb-6'>
            <h3 className='text-lg mb-4'>Interested in this job?</h3>
            <button className='w-full bg-white text-black rounded-xl py-3 font-semibold hover:bg-gray-100 transition-colors'>
              Apply Now
            </button>
          </div>

          <div className='bg-[#15132B] rounded-2xl p-6'>
            <div className='flex items-center gap-4 mb-6'>
              <div className='bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl'>
                <div className='w-6 h-6 bg-white/20 rounded-lg'></div>
              </div>
              <div>
                <h3 className='font-semibold'>Gradient</h3>
                <p className='text-sm text-gray-400'>Las Vegas</p>
              </div>
            </div>

            <div className='flex gap-4 mb-6'>
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "overview"
                    ? "bg-purple-500/10 text-purple-500"
                    : "text-gray-400 hover:bg-purple-500/5"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("jobs")}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === "jobs"
                    ? "bg-purple-500/10 text-purple-500"
                    : "text-gray-400 hover:bg-purple-500/5"
                }`}
              >
                Jobs
              </button>
            </div>

            <div className='space-y-4'>
              {[
                { title: "Web Developer", category: "Development" },
                { title: "Software Developer", category: "Development" },
                { title: "Graphic Designer", category: "Marketing" },
                { title: "Brand Manager", category: "Marketing" },
                { title: "Social Media Manager", category: "Marketing" },
                { title: "Marketing Coordinator", category: "Marketing" },
                { title: "Investment Banking Analyst", category: "Finance" },
                { title: "Financial Analyst", category: "Finance" },
                { title: "Financial Manager", category: "Finance" },
              ].map((job, index) => (
                <div key={index} className='flex flex-col gap-1'>
                  <h4 className='font-medium'>{job.title}</h4>
                  <p
                    className='text-sm'
                    style={{
                      color:
                        job.category === "Development"
                          ? "#7B5CFA"
                          : job.category === "Marketing"
                          ? "#FF6B6B"
                          : "#4CAF50",
                    }}
                  >
                    {job.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
