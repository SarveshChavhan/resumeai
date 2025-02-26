import React from 'react'


const Page = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-8 py-20 pl-45 pr-45">
        {/* Hero Section */}
        <div className="text-center w-full max-w-4xl mx-auto mb-24">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Land Your Dream Job
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create professional resumes in minutes with our AI-powered platform. 
            Stand out from the crowd and get noticed by top employers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:scale-105">
              Create Your Resume
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 hover:bg-blue-50">
              Explore Templates
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mb-24 mx-auto px-4">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-200 hover:scale-105 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="w-full max-w-6xl mb-24 mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="w-full max-w-6xl mb-24 mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl bg-white shadow-lg">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.quote}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="w-full max-w-6xl mb-24 mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`p-8 rounded-xl ${plan.featured ? 'bg-blue-600 text-white' : 'bg-white'} shadow-lg`}>
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className={`w-5 h-5 mr-2 ${plan.featured ? 'text-white' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 
                  ${plan.featured ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

// Feature data
const features = [
  {
    title: "AI-Powered Writing",
    description: "Let our AI help you write compelling content that highlights your achievements.",
    icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  {
    title: "Professional Templates",
    description: "Choose from dozens of ATS-friendly templates designed by HR experts.",
    icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
  },
  {
    title: "Easy Customization",
    description: "Customize every aspect of your resume with our intuitive editor.",
    icon: <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
  }
];

// New data for additional sections
const steps = [
  {
    title: "Choose Template",
    description: "Select from our collection of professional templates"
  },
  {
    title: "Add Content",
    description: "Input your details or let AI help you write"
  },
  {
    title: "Customize",
    description: "Personalize colors, fonts, and layout"
  },
  {
    title: "Download",
    description: "Get your resume in PDF or Word format"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Software Engineer at Google",
    quote: "ResumeAI helped me land my dream job! The AI suggestions were incredibly helpful.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Michael Chen",
    position: "Product Manager at Meta",
    quote: "The templates are beautiful and ATS-friendly. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Emily Davis",
    position: "Marketing Director at Apple",
    quote: "Easy to use and professional results. Worth every penny!",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const plans = [
  {
    name: "Basic",
    price: "Free",
    features: [
      "1 Resume Template",
      "Basic AI Writing",
      "PDF Downloads",
      "24/7 Support"
    ]
  },
  {
    name: "Pro",
    price: "$12/mo",
    featured: true,
    features: [
      "All Templates",
      "Advanced AI Writing",
      "Multiple Formats",
      "Priority Support",
      "Cover Letter Builder"
    ]
  },
  {
    name: "Enterprise",
    price: "$29/mo",
    features: [
      "Custom Templates",
      "Team Management",
      "API Access",
      "Dedicated Support",
      "Analytics"
    ]
  }
];

export default Page