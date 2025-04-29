import Image from 'next/image'
import { FaChartLine, FaUsers, FaCog, FaLightbulb, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Operations Excellence in Finland
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Driving business efficiency and growth through strategic operations management
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View Portfolio
            </button>
            <a 
              href="https://www.linkedin.com/in/aida-kokko/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              <FaLinkedin className="text-xl" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaChartLine className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Process Optimization</h3>
              <p className="text-gray-600">Streamlining operations for maximum efficiency</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaUsers className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Leadership</h3>
              <p className="text-gray-600">Building and managing high-performance teams</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaCog className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Systems Management</h3>
              <p className="text-gray-600">Implementing and optimizing operational systems</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <FaLightbulb className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Strategic Planning</h3>
              <p className="text-gray-600">Developing long-term operational strategies</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Our Operations Practice</h2>
            <p className="text-lg text-gray-600 mb-8">
              With extensive experience in Finnish business operations, we specialize in
              optimizing processes, managing teams, and implementing efficient systems
              that drive business growth and success.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* LinkedIn Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Connect With Me</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's connect on LinkedIn to discuss operations opportunities in Finland
              and explore how we can work together to drive business success.
            </p>
            <a 
              href="https://www.linkedin.com/in/aida-kokko/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <FaLinkedin className="text-xl" />
              View My LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can work together to optimize your operations in Finland
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <FaEnvelope className="text-4xl text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:aida.kokko@outlook.com" className="text-blue-600 hover:text-blue-800">
                  aida.kokko@outlook.com
                </a>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <FaPhone className="text-4xl text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <a href="tel:+3584578777371" className="text-blue-600 hover:text-blue-800">
                  +358 45 787 77371
                </a>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <FaMapMarkerAlt className="text-4xl text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600">Tampere, Finland</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 