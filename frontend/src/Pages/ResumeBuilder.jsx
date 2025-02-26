import React, { useState } from 'react'
import { Textarea } from "../../../src/components/ui/textarea.jsx"

const ResumeBuilder = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    portfolio: '',
    github: '',
    summary: '',
    // Education
    education: [{ school: '', degree: '', year: '', gpa: '' }],
    // Experience
    experience: [{ company: '', position: '', duration: '', description: '' }],
    // Skills
    skills: [''],
    // Projects
    projects: [{ name: '', description: '', technologies: '' }]
  });

  const handleInputChange = (e, index, section) => {
    const { name, value } = e.target;
    
    if (section === 'skills') {
      // Special handling for skills array since it's an array of strings
      setFormData(prevData => ({
        ...prevData,
        skills: prevData.skills.map((skill, i) => 
          i === index ? value : skill
        )
      }));
    } else if (section) {
      // Handle other array fields (education, experience, projects)
      setFormData(prevData => ({
        ...prevData,
        [section]: prevData[section].map((item, i) => 
          i === index ? { ...item, [name]: value } : item
        )
      }));
    } else {
      // Handle simple fields
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const addItem = (section) => {
    setFormData(prevData => ({
      ...prevData,
      [section]: [...prevData[section], 
        section === 'education' ? { school: '', degree: '', year: '', gpa: '' } :
        section === 'experience' ? { company: '', position: '', duration: '', description: '' } :
        section === 'projects' ? { name: '', description: '', technologies: '' } :
        section === 'skills' ? '' : {}
      ]
    }));
  };

  const removeItem = (section, index) => {
    setFormData(prevData => ({
      ...prevData,
      [section]: prevData[section].filter((_, i) => i !== index)
    }));
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'personal':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={(e) => handleInputChange(e)}
                className="mt-1 w-full rounded-md border border-gray-300 p-3 text-base"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange(e)}
                className="mt-1 w-full rounded-md border border-gray-300 p-3 text-base"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange(e)}
                className="mt-1 w-full rounded-md border border-gray-300 p-3 text-base"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={(e) => handleInputChange(e)}
                placeholder="City, State"
                className="mt-1 w-full rounded-md border border-gray-300 p-3 text-base"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">LinkedIn URL</label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={(e) => handleInputChange(e)}
                className="mt-1 w-full rounded-md border border-gray-300 p-3 text-base"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Portfolio URL</label>
              <input
                type="url"
                name="portfolio"
                value={formData.portfolio}
                onChange={(e) => handleInputChange(e)}
                className="mt-1 w-full rounded-md border border-gray-300 p-3 text-base"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">GitHub URL</label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={(e) => handleInputChange(e)}
                className="mt-1 w-full rounded-md border border-gray-300 p-3 text-base"
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Professional Summary</label>
              <Textarea
                name="summary"
                value={formData.summary}
                onChange={(e) => handleInputChange(e)}
                className="mt-1 w-full"
                rows={4}
              />
            </div>
          </div>
        );
      
      case 'education':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Education Details</h3>
            {formData.education.map((edu, index) => (
              <div key={index} className="space-y-4 p-6 border rounded-lg bg-gray-50">
                <input
                  type="text"
                  placeholder="School/University"
                  value={edu.school}
                  name="school"
                  onChange={(e) => handleInputChange(e, index, 'education')}
                  className="mt-1 w-full rounded-md border border-gray-300 p-3 text-base"
                />
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree}
                  name="degree"
                  onChange={(e) => handleInputChange(e, index, 'education')}
                  className="mt-1 w-full rounded-md border border-gray-300 p-3 text-base"
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={edu.year}
                  name="year"
                  onChange={(e) => handleInputChange(e, index, 'education')}
                  className="mt-1 w-full rounded-md border border-gray-300 p-3 text-base"
                />
                <input
                  type="text"
                  placeholder="GPA"
                  value={edu.gpa}
                  name="gpa"
                  onChange={(e) => handleInputChange(e, index, 'education')}
                  className="mt-1 w-full rounded-md border border-gray-300 p-3 text-base"
                />
                <button
                  onClick={() => removeItem('education', index)}
                  style={{ backgroundColor: '#fee2e2' }}
                  className="px-3 py-1 rounded-md hover:bg-red-200 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => addItem('education')}
              style={{ backgroundColor: '#dbeafe' }}
              className="w-full p-3 rounded-md hover:bg-blue-200 transition-colors text-base"
            >
              Add Education
            </button>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-8">
            <h3 className="text-xl font-semibold">Work Experience</h3>
            {formData.experience.map((exp, index) => (
              <div key={index} className="space-y-6 p-8 border rounded-lg bg-gray-50">
                <input
                  type="text"
                  placeholder="Company"
                  value={exp.company}
                  name="company"
                  onChange={(e) => handleInputChange(e, index, 'experience')}
                  className="mt-1 w-full rounded-md border border-gray-300 p-4 text-lg"
                />
                <input
                  type="text"
                  placeholder="Position"
                  value={exp.position}
                  name="position"
                  onChange={(e) => handleInputChange(e, index, 'experience')}
                  className="mt-1 w-full rounded-md border border-gray-300 p-4 text-lg"
                />
                <input
                  type="text"
                  placeholder="Duration"
                  value={exp.duration}
                  name="duration"
                  onChange={(e) => handleInputChange(e, index, 'experience')}
                  className="mt-1 w-full rounded-md border border-gray-300 p-4 text-lg"
                />
                <Textarea
                  placeholder="Description"
                  value={exp.description}
                  name="description"
                  onChange={(e) => handleInputChange(e, index, 'experience')}
                  className="mt-1 w-full"
                  rows={3}
                />
                <button
                  onClick={() => removeItem('experience', index)}
                  style={{ backgroundColor: '#fee2e2' }}
                  className="px-3 py-1 rounded-md hover:bg-red-200 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => addItem('experience')}
              style={{ backgroundColor: '#dbeafe' }}
              className="w-full p-4 rounded-md hover:bg-blue-200 transition-colors text-lg"
            >
              Add Experience
            </button>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-8">
            <h3 className="text-xl font-semibold">Skills</h3>
            {formData.skills.map((skill, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add a skill"
                  value={skill}
                  onChange={(e) => handleInputChange(e, index, 'skills')}
                  className="mt-1 w-full rounded-md border border-gray-300 p-4 text-lg"
                />
                <button
                  onClick={() => removeItem('skills', index)}
                  style={{ backgroundColor: '#fee2e2' }}
                  className="px-3 py-1 rounded-md hover:bg-red-200 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => addItem('skills')}
              style={{ backgroundColor: '#dbeafe' }}
              className="w-full p-4 rounded-md hover:bg-blue-200 transition-colors text-lg"
            >
              Add Skill
            </button>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-8">
            <h3 className="text-xl font-semibold">Projects</h3>
            {formData.projects.map((project, index) => (
              <div key={index} className="space-y-6 p-8 border rounded-lg bg-gray-50">
                <input
                  type="text"
                  placeholder="Project Name"
                  value={project.name}
                  name="name"
                  onChange={(e) => handleInputChange(e, index, 'projects')}
                  className="mt-1 w-full rounded-md border border-gray-300 p-4 text-lg"
                />
                <input
                  type="text"
                  placeholder="Technologies Used"
                  value={project.technologies}
                  name="technologies"
                  onChange={(e) => handleInputChange(e, index, 'projects')}
                  className="mt-1 w-full rounded-md border border-gray-300 p-4 text-lg"
                />
                <Textarea
                  placeholder="Project Description"
                  value={project.description}
                  name="description"
                  onChange={(e) => handleInputChange(e, index, 'projects')}
                  className="mt-1 w-full"
                  rows={3}
                />
                <button
                  onClick={() => removeItem('projects', index)}
                  style={{ backgroundColor: '#fee2e2' }}
                  className="px-3 py-1 rounded-md hover:bg-red-200 transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => addItem('projects')}
              style={{ backgroundColor: '#dbeafe' }}
              className="w-full p-4 rounded-md hover:bg-blue-200 transition-colors text-lg"
            >
              Add Project
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen">
      
<button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span className="sr-only">Open sidebar</span>
   <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" className="fixed top-[67px] left-7 z-20 w-48 h-[calc(100%-96px)] transition-transform -translate-x-full sm:translate-x-0 rounded-lg" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-700 rounded-lg">
      <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-3 px-2">Resume Sections</h3>
      <ul className="space-y-2 font-medium">
         <li>
            <a 
              href="#" 
              onClick={() => setActiveSection('personal')}
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 group ${activeSection === 'personal' ? 'bg-gray-200 dark:bg-gray-600' : ''}`}
            >
               <img src="src\assets\user.svg" alt="Personal Info" className="w-5 h-5" />
               <span className="ms-3">Personal Information</span>
            </a>
         </li>
         <li>
            <a 
              href="#" 
              onClick={() => setActiveSection('education')}
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 group ${activeSection === 'education' ? 'bg-gray-200 dark:bg-gray-600' : ''}`}
            >
               <img src="src/assets/book.svg" alt="Education" className="w-5 h-5" />
               <span className="ms-3">Education</span>
            </a>
         </li>
         <li>
            <a 
              href="#" 
              onClick={() => setActiveSection('experience')}
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 group ${activeSection === 'experience' ? 'bg-gray-200 dark:bg-gray-600' : ''}`}
            >
               <img src="src/assets/briefcase.svg" alt="Experience" className="w-5 h-5" />
               <span className="ms-3">Experience</span>
            </a>
         </li>
         <li>
            <a 
              href="#" 
              onClick={() => setActiveSection('skills')}
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 group ${activeSection === 'skills' ? 'bg-gray-200 dark:bg-gray-600' : ''}`}
            >
               <img src="src/assets/comp.svg" alt="Skills" className="w-5 h-5" />
               <span className="ms-3">Skills</span>
            </a>
         </li>
         <li>
            <a 
              href="#" 
              onClick={() => setActiveSection('projects')}
              className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 group ${activeSection === 'projects' ? 'bg-gray-200 dark:bg-gray-600' : ''}`}
            >
               <img src="src/assets/earth.svg" alt="Projects" className="w-5 h-5" />
               <span className="ms-3">Projects</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

<div className="sm:ml-64 mt-[64px] p-4">
  <div className="flex gap-8 justify-between">
    {/* Form Section */}
    <div className="w-[500px] flex-shrink-0 bg-white p-6 rounded-lg shadow mr-16">
      <h2 className="text-xl font-bold mb-6">
        {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Information
      </h2>
      {renderSection()}
    </div>

    {/* Preview Section */}
    <div className="w-3/4 bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Resume Preview</h2>
      <div className="w-full bg-white shadow-lg ml-auto" style={{ aspectRatio: '0.707', minHeight: '800px' }}>
        <div className="border border-gray-200 h-full p-6">
          <div className="space-y-4">
            {/* Header/Contact Info */}
            <div className="text-center border-b border-gray-300 pb-2">
              <h1 className="text-2xl font-bold text-gray-800 mb-1">{formData.fullName || 'Your Name'}</h1>
              <div className="text-gray-600 flex flex-wrap justify-center gap-1 text-sm">
                {formData.email && <p>{formData.email}</p>}
                {formData.email && formData.phone && <span>•</span>}
                {formData.phone && <p>{formData.phone}</p>}
                {(formData.email || formData.phone) && formData.location && <span>•</span>}
                {formData.location && <p>{formData.location}</p>}
                {((formData.email || formData.phone || formData.location) && formData.linkedin) && <span>•</span>}
                {formData.linkedin && (
                  <a href={formData.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    LinkedIn
                  </a>
                )}
                {((formData.email || formData.phone || formData.location || formData.linkedin) && formData.portfolio) && <span>•</span>}
                {formData.portfolio && (
                  <a href={formData.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Portfolio
                  </a>
                )}
                {((formData.email || formData.phone || formData.location || formData.linkedin || formData.portfolio) && formData.github) && <span>•</span>}
                {formData.github && (
                  <a href={formData.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Professional Summary */}
            {formData.summary && (
              <div className="mb-4">
                <h2 className="text-lg font-bold border-b border-gray-300 mb-2">Professional Summary</h2>
                <p className="text-base">{formData.summary}</p>
              </div>
            )}

            {/* Education Section */}
            {formData.education.length > 0 && (
              <div className="mb-4">
                <h2 className="text-lg font-bold border-b border-gray-300 mb-2">Education</h2>
                {formData.education.map((edu, index) => (
                  <div key={index} className="mb-2">
                    <div className="flex justify-between">
                      <p className="text-base font-semibold">{edu.school}</p>
                      <p className="text-base">{edu.year}</p>
                    </div>
                    <p className="text-base">{edu.degree}</p>
                    {edu.gpa && <p className="text-base">GPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            )}

            {/* Experience Section */}
            {formData.experience.length > 0 && (
              <div className="mb-4">
                <h2 className="text-lg font-bold border-b border-gray-300 mb-2">Experience</h2>
                {formData.experience.map((exp, index) => (
                  <div key={index} className="mb-3">
                    <div className="flex justify-between">
                      <p className="text-base font-semibold">{exp.company}</p>
                      <p className="text-base">{exp.duration}</p>
                    </div>
                    <p className="text-base italic">{exp.position}</p>
                    <p className="text-base">{exp.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Skills Section */}
            {formData.skills.length > 0 && formData.skills[0] !== '' && (
              <div className="mb-4">
                <h2 className="text-lg font-bold border-b border-gray-300 mb-2">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill, index) => (
                    <span key={index} className="text-base bg-gray-100 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Projects Section */}
            {formData.projects.length > 0 && (
              <div className="mb-4">
                <h2 className="text-lg font-bold border-b border-gray-300 mb-2">Projects</h2>
                {formData.projects.map((project, index) => (
                  <div key={index} className="mb-3">
                    <p className="text-base font-semibold">{project.name}</p>
                    <p className="text-base italic">{project.technologies}</p>
                    <p className="text-base">{project.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default ResumeBuilder