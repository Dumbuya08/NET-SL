"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import MainLayout from '@/components/main-layout'
import { Card, CardContent } from '@/components/ui/card'

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <MainLayout>
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900" />
          <div className="absolute inset-0 animate-wave">
            <svg className="h-full w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#ffffff"
                fillOpacity="0.3"
                d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
          <div className="absolute inset-0 animate-wave-slow">
            <svg className="h-full w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#ffffff"
                fillOpacity="0.3"
                d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          <Card className="w-full max-w-4xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="p-6">
              {/* Image placeholder */}
              <div className="w-full h-64 mb-8 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=256&width=768"
                  alt="NET SL Team"
                  width={768}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Company description */}
              <h1 className="text-3xl font-bold mb-6 text-center">About Njala Environmental Technicians (NET SL)</h1>
              
              <div className="space-y-4">
                <p>
                  Njala Environmental Technicians (NET SL) is a pioneering environmental services company based in Sierra Leone. 
                  Founded in 2010, we have rapidly grown to become a leading force in environmental conservation, sustainable 
                  development, and eco-friendly technological solutions in West Africa.
                </p>

                <p>
                  Our mission is to promote environmental sustainability through innovative technologies and practices, 
                  while contributing to the economic development of Sierra Leone and the broader region.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Our Expertise</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Environmental Impact Assessments</li>
                  <li>Sustainable Agriculture Practices</li>
                  <li>Waste Management and Recycling Solutions</li>
                  <li>Renewable Energy Implementation</li>
                  <li>Water Resource Management</li>
                  <li>Biodiversity Conservation</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Our Commitment</h2>
                <p>
                  At NET SL, we are committed to fostering a sustainable future for Sierra Leone and beyond. We work 
                  closely with local communities, government agencies, and international organizations to develop and 
                  implement environmentally sound practices that balance ecological preservation with economic progress.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-3">Join Us in Our Mission</h2>
                <p>
                  Whether you're a potential client, partner, or an individual passionate about environmental 
                  conservation, we invite you to join us in our mission. Together, we can create a greener, more 
                  sustainable future for generations to come.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  )
}