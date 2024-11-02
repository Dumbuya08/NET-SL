"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import MainLayout from '@/components/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function SettingsPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <Tabs defaultValue="theme">
          <TabsList>
            <TabsTrigger value="theme">Theme</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="theme">
            <Card>
              <CardHeader>
                <CardTitle>Theme Settings</CardTitle>
                <CardDescription>Manage your theme preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="dark-mode"
                    checked={theme === 'dark'}
                    onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                  />
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                </div>
                <p>Choose between light and dark theme for your browsing experience.</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="privacy">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Manage your privacy preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Data Collection</h3>
                <p>
                  NET SL collects only essential information required for providing our services. This includes:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Contact information (name, email) for communication purposes</li>
                  <li>Document metadata for file management</li>
                  <li>Usage data to improve our services</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4">Data Protection</h3>
                <p>
                  We implement robust security measures to protect your data:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>End-to-end encryption for all uploaded documents</li>
                  <li>Regular security audits and updates</li>
                  <li>Strict access controls for our staff</li>
                </ul>

                <h3 className="text-lg font-semibold mt-4">Your Rights</h3>
                <p>
                  As a user, you have the right to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Access and download your personal data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of non-essential data collection</li>
                </ul>

                <div className="flex items-center space-x-2 mt-4">
                  <Switch id="data-collection" />
                  <Label htmlFor="data-collection">Allow non-essential data collection</Label>
                </div>

                <Button className="mt-4">Download Full Privacy Policy</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Find answers to common questions about NET SL</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What services does NET SL offer?</AccordionTrigger>
                    <AccordionContent>
                      NET SL offers a wide range of environmental services including environmental impact assessments, 
                      sustainable agriculture practices, waste management solutions, renewable energy implementation, 
                      water resource management, and biodiversity conservation.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How can I upload documents to NET SL?</AccordionTrigger>
                    <AccordionContent>
                      You can upload documents through our secure platform on the main dashboard. Simply click on the 
                      "Upload" button, select your file, and it will be securely stored and shared as per your permissions.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is my data secure with NET SL?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we take data security very seriously. All documents are encrypted end-to-end, and we 
                      implement strict access controls. We regularly conduct security audits to ensure the highest 
                      level of protection for your data.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How can I collaborate with other companies on NET SL?</AccordionTrigger>
                    <AccordionContent>
                      NET SL provides a collaborative platform where you can share documents and projects with other 
                      companies. You can set permissions for each document or project, allowing specific users or 
                      companies to view, edit, or comment on your work.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>What should I do if I encounter a technical issue?</AccordionTrigger>
                    <AccordionContent>
                      If you encounter any technical issues, please contact our support team at support@netsl.com. 
                      Our team is available 24/7 to assist you with any problems you may face while using our platform.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}