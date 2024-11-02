import React, { useState } from 'react';
import { Search, Upload, Download, Menu, X, Settings, FileText, User, BookOpen } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDownloadAlert, setShowDownloadAlert] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    setShowDownloadAlert(true);
    setTimeout(() => setShowDownloadAlert(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold">NET SL</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="flex items-center space-x-1 hover:text-blue-200">
                <BookOpen size={20} />
                <span>Services</span>
              </a>
              <a href="#about" className="flex items-center space-x-1 hover:text-blue-200">
                <User size={20} />
                <span>About Us</span>
              </a>
              <a href="#settings" className="flex items-center space-x-1 hover:text-blue-200">
                <Settings size={20} />
                <span>Settings</span>
              </a>
              <a href="#forms" className="flex items-center space-x-1 hover:text-blue-200">
                <FileText size={20} />
                <span>Forms</span>
              </a>
              <a href="#projects" className="flex items-center space-x-1 hover:text-blue-200">
                <FileText size={20} />
                <span>Projects</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-3 space-y-2">
            <a href="#services" className="block px-3 py-2 hover:bg-blue-700 rounded">Services</a>
            <a href="#about" className="block px-3 py-2 hover:bg-blue-700 rounded">About Us</a>
            <a href="#settings" className="block px-3 py-2 hover:bg-blue-700 rounded">Settings</a>
            <a href="#forms" className="block px-3 py-2 hover:bg-blue-700 rounded">Forms</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Njala Environmental Technicians</h1>
          <p className="text-xl mb-8">Providing expert environmental consultation and safety solutions</p>
          <button className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50">
            Get Started
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* About Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">About NET SL</h2>
          <p className="text-gray-600 mb-4">
            NET SL is a leading environmental consultation firm dedicated to protecting businesses 
            and communities through expert safety guidance and environmental protection services. 
            Our team of experienced professionals works tirelessly to ensure compliance with 
            safety standards while promoting sustainable practices.
          </p>
        </section>

        {/* Resources Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Available Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Resource Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold mb-2">Safety Guidelines 2024</h3>
              <p className="text-gray-600 mb-4">Comprehensive safety protocols for industrial operations</p>
              <button 
                onClick={handleDownload}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
              >
                <Download size={20} />
                <span>Download</span>
              </button>
            </div>
          </div>
        </section>

        {/* File Upload Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Share Resources</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600">Drag and drop files here or click to upload</p>
            </div>
          </div>
        </section>
      </main>

      {/* Download Alert */}
      {showDownloadAlert && (
        <div className="fixed bottom-4 right-4">
          <Alert className="bg-green-100 border-green-500">
            <AlertDescription>
              Download started. A small fee will be charged to support our services.
            </AlertDescription>
          </Alert>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <p>Email: dumbuyamohamed36@gmail.com</p>
              <p>Phone: +232 78615142/ +44 7777 711365</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-blue-300">Services</a></li>
                <li><a href="#about" className="hover:text-blue-300">About Us</a></li>
                <li><a href="#forms" className="hover:text-blue-300">Forms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Download Our App</h3>
              <p>Available on iOS and Android</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;