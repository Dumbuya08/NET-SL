import React, { useState } from 'react';
import { Shield, Activity, ClipboardCheck, HardHat } from 'lucide-react';

// ... (previous imports and code remain the same until the main content section)

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        
        {/* Toolbox Talk Section */}
        <div className="mb-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="/api/placeholder/600/400" 
              alt="Toolbox talk session in Makeni" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Safety Training & Toolbox Talks</h3>
            <p className="text-gray-600 mb-4">
              Our expert safety consultants conduct comprehensive toolbox talks and training sessions, 
              emphasizing the critical importance of Personal Protective Equipment (PPE). We cover:
            </p>
            <ul className="space-y-2 text-gray-600 mb-4">
              <li className="flex items-center gap-2">
                <Shield className="text-blue-600" size={20} />
                Proper PPE selection and usage
              </li>
              <li className="flex items-center gap-2">
                <Shield className="text-blue-600" size={20} />
                Hazard identification and risk assessment
              </li>
              <li className="flex items-center gap-2">
                <Shield className="text-blue-600" size={20} />
                Emergency response procedures
              </li>
            </ul>
          </div>
        </div>

        {/* FMEA & Environmental Monitoring */}
        <div className="mb-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">Technical Consulting Services</h3>
            <p className="text-gray-600 mb-4">
              As Environmental Technicians, we provide specialized services including:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-2">
                <Activity className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong>Failure Mode and Effects Analysis (FMEA)</strong>
                  <p>Comprehensive risk assessment and prevention strategies for industrial processes</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ClipboardCheck className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <strong>Environmental Monitoring</strong>
                  <p>Regular assessment of environmental impacts and compliance with regulations</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="/api/placeholder/600/400" 
              alt="Environmental monitoring team at TRADCO" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Environmental Technicians Expertise */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Our Technical Expertise</h3>
          <p className="text-gray-600 mb-6">
            As Njala Environmental Technicians, we bring specialized knowledge and skills in:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <HardHat className="text-blue-600 mb-2" size={24} />
              <h4 className="font-semibold mb-2">Risk Assessment</h4>
              <p className="text-gray-600">Comprehensive workplace hazard identification and control measures</p>
            </div>
            <div className="p-4 border rounded-lg">
              <Activity className="text-blue-600 mb-2" size={24} />
              <h4 className="font-semibold mb-2">Environmental Impact</h4>
              <p className="text-gray-600">Monitoring and managing environmental effects of industrial operations</p>
            </div>
            <div className="p-4 border rounded-lg">
              <ClipboardCheck className="text-blue-600 mb-2" size={24} />
              <h4 className="font-semibold mb-2">Compliance Management</h4>
              <p className="text-gray-600">Ensuring adherence to environmental and safety regulations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ... (update the main component to include this section)
const HomePage = () => {
  // ... (previous state and functions remain the same)
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation and Hero sections remain the same */}
      
      <ServicesSection />
      
      {/* Rest of the components remain the same */}
    </div>
  );
};

export default HomePage;