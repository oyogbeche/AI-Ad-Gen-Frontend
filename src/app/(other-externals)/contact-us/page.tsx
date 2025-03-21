"use client";

import React from "react";
import Image from "next/image";
import bgLine from "@/components/images/bg-line.png";
import contactAmico from "@/components/images/Contact us-amico.png";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

// Note: We're not using FormField components due to the dependency on react-hook-form

const ContactPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="container mx-auto py-8 md:py-16 relative">
      {/* Background Line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <Image
          src={bgLine}
          alt="Background line"
          className="object-cover w-full h-auto md:h-full"
          priority
        />
      </div>

      <Card className="mx-4 md:mx-auto max-w-7xl rounded-2xl shadow-md overflow-hidden">
        <CardContent className="p-6 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="mb-6 md:mb-8">
                <h1 className="text-2xl md:text-4xl font-bold mb-2">
                  Contact Us
                </h1>
                <p className="text-gray-600 text-sm md:text-base">
                  We are here for you! How can we help?
                </p>
              </div>

              <div className="max-w-md mx-auto md:mx-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Enter your message"
                      className="min-h-32 w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#B800B8] hover:bg-purple-600 mt-6 py-7 rounded-[6px] text-white font-semibold"
                  >
                    Send Now
                  </Button>
                </form>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={contactAmico}
                alt="Contact us illustration"
                className="max-w-full h-auto"
              />

              {/* Uncomment if you want to include the contact info section 
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <p className="text-gray-600">545 Mavis Island, IL 99191</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <p className="text-gray-600">+2034 4040 3030</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <p className="text-gray-600">genzadshng12@gmail.com</p>
                </div>
              </div>
              */}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ContactPage;
